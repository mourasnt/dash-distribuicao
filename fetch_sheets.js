#!/usr/bin/env node
// Leitura da planilha Google Sheets (Torre de controle).
// Utilise la service account (credentials.json) — la clé ne sort jamais du serveur.
// Exporta fetchData() para uso pelo server.js e também funciona como CLI.
import { google } from 'googleapis';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SPREADSHEET_ID = '1N3VkIFdunMnRw13DmSvcUBJkzb5U7yc00050G5-t90I';
const SHEET = 'Torre de controle';
const HEADER_ROW = 2;

let _sheets = null;

function getSheets() {
  if (_sheets) return _sheets;
  const credentials = JSON.parse(readFileSync(join(__dirname, 'credentials.json'), 'utf8'));
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });
  _sheets = google.sheets({ version: 'v4', auth });
  return _sheets;
}

function findCol(headers, substr) {
  for (let i = 0; i < headers.length; i++) {
    const h = String(headers[i] ?? '').trim();
    if (h.toLowerCase().includes(substr.toLowerCase())) return i;
  }
  throw new Error(`Coluna não encontrada contendo: "${substr}"`);
}

function parseProd(v) {
  if (v === null || v === undefined) return NaN;
  if (typeof v === 'number') return v;
  let s = String(v).trim();
  if (!s) return NaN;
  const isPct = s.endsWith('%');
  s = s.replace(/%/g, '').replace(/\./g, '').replace(/,/g, '.');
  const n = parseFloat(s);
  if (isNaN(n)) return NaN;
  return isPct ? n / 100 : n;
}

function parseData(v) {
  if (v === null || v === undefined) return null;
  const s = String(v).trim();
  if (!s) return null;
  let m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (m) return new Date(+m[3], +m[2] - 1, +m[1]);
  m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (m) return new Date(+m[1], +m[2] - 1, +m[3]);
  const d = new Date(s);
  return isNaN(d) ? null : d;
}

const fmtDate = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

export async function fetchData() {
  const sheets = getSheets();
  const range = `${SHEET}!A1:W`;
  const res = await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range });
  const all = res.data.values || [];
  if (all.length <= HEADER_ROW) throw new Error('Planilha sem dados após o cabeçalho.');

  const headers = all[HEADER_ROW - 1];
  const idx = {
    cliente: findCol(headers, 'CLIENTE'),
    horario: findCol(headers, 'Status do hor'),
    ocorrencia: findCol(headers, 'Ocorr'),
    ocorrenciaDev: findCol(headers, 'Ocorrência Devolução'),
    prod: findCol(headers, 'Produtividade'),
    paradas: findCol(headers, 'Paradas'),
    devolucion: findCol(headers, 'evolu'),
    data: findCol(headers, 'Data'),
    romaneio: findCol(headers, 'Romaneio'),
    placa: findCol(headers, 'laca'),
    nome: findCol(headers, 'Nome'),
    status: findCol(headers, 'STATUS'),
  };

  const records = [];
  for (let r = HEADER_ROW; r < all.length; r++) {
    const row = all[r];
    const get = (i) => (row && i < row.length ? row[i] : '');
    const cliente = String(get(idx.cliente) ?? '').trim() || 'SEM CLIENTE';
    if (cliente === 'SEM CLIENTE') continue;
    const status = String(get(idx.status) ?? '').trim() || 'SEM STATUS';
    const horario = String(get(idx.horario) ?? '').trim();
    const ocorrencia = String(get(idx.ocorrencia) ?? '').trim();
    const ocorrenciaDev = String(get(idx.ocorrenciaDev) ?? '').trim();
    const romaneio = String(get(idx.romaneio) ?? '').trim();
    const placa = String(get(idx.placa) ?? '').trim();
    const nome = String(get(idx.nome) ?? '').trim();
    // '#N/A' etc. = erro de fórmula na planilha → agrupa como SEM MOTORISTA
    const motorista = !nome || nome.startsWith('#') ? 'SEM MOTORISTA' : nome;
    const prod = parseProd(get(idx.prod));
    const paradas = parseFloat(String(get(idx.paradas) ?? '').replace(',', '.'));
    const devolucion = parseFloat(String(get(idx.devolucion) ?? '').replace(',', '.'));
    const data = parseData(get(idx.data));
    records.push({ cliente, status, horario, ocorrencia, ocorrenciaDev, romaneio, placa, nome, motorista, prod, paradas, devolucion, data });
  }

  const noShow = records.filter((r) => r.status === 'NO SHOW').length;
  const cancelados = records.filter((r) => r.status === 'CANCELADO PELO CLIENTE').length;
  const finalizadas = records.filter((r) => r.status === 'ENTREGAS FINALIZADAS').length;
  const aderenciaOrigemCount = records.filter(
    (r) => r.horario === 'NO PRAZO' && r.status === 'ENTREGAS FINALIZADAS'
  ).length;

  const prodCarga = (r) => {
    if (r.status !== 'ENTREGAS FINALIZADAS') return null;
    const p = r.paradas;
    if (isNaN(p) || !(p > 0)) return null;
    const d = isNaN(r.devolucion) ? 0 : r.devolucion;
    return Math.max((p - d) / p, 0);
  };
  const prodVals = records.map(prodCarga).filter((v) => v !== null);
  const produtividadeMedia = prodVals.length ? prodVals.reduce((a, b) => a + b, 0) / prodVals.length : 0;
  const prodCargasN = prodVals.length;

  const statusCanonicos = [
    'ENTREGAS FINALIZADAS', 'CANCELADO PELO CLIENTE', 'NO SHOW',
    'BACKUP', 'QUEBROU', 'EM TRANSITO', 'MOTORISTA AGENDADO',
    'A CAMINHO DO CD', 'SEM STATUS',
  ];
  const clientes = [...new Set(records.map((r) => r.cliente))].sort((a, b) => a.localeCompare(b));

  const cruzada = {};
  const totalPorStatus = {};
  const totalPorCliente = {};
  for (const r of records) {
    (cruzada[r.status] = cruzada[r.status] || {})[r.cliente] = (cruzada[r.status][r.cliente] || 0) + 1;
    totalPorStatus[r.status] = (totalPorStatus[r.status] || 0) + 1;
    totalPorCliente[r.cliente] = (totalPorCliente[r.cliente] || 0) + 1;
  }
  // Inclui na ordem qualquer status novo digitado na planilha (fora da lista fixa).
  const statusExtras = Object.keys(totalPorStatus).filter((s) => !statusCanonicos.includes(s)).sort((a, b) => a.localeCompare(b));
  const statusOrdem = [...statusCanonicos, ...statusExtras];

  const splitOcc = (v) => {
    const out = v ? String(v).split(',').map((s) => s.trim()).filter(Boolean) : [];
    return out.length ? out : ['S/O'];
  };

  // ---------- Dimensão motorista (coluna Nome) ----------
  // tripla: {status: {cliente: {motorista: n}}} — base esparsa p/ filtros combinados.
  const motoristas = [...new Set(records.map((r) => r.motorista))].sort((a, b) => a.localeCompare(b));
  const totalPorMotorista = {};
  const tripla = {};
  const aderClMot = {};
  const drillNoShowClMot = {};
  const drillAtrasoClMot = {};
  const drillProdClMot = {};
  const drillProdOccClMot = {};
  for (const r of records) {
    totalPorMotorista[r.motorista] = (totalPorMotorista[r.motorista] || 0) + 1;
    ((tripla[r.status] = tripla[r.status] || {})[r.cliente] = (tripla[r.status][r.cliente] || {}));
    tripla[r.status][r.cliente][r.motorista] = (tripla[r.status][r.cliente][r.motorista] || 0) + 1;
    if (r.status === 'ENTREGAS FINALIZADAS' && r.horario === 'NO PRAZO') {
      (aderClMot[r.cliente] = aderClMot[r.cliente] || {})[r.motorista] =
        ((aderClMot[r.cliente] || {})[r.motorista] || 0) + 1;
    }
    if (r.status === 'NO SHOW') {
      const o = r.ocorrencia || 'S/O';
      ((drillNoShowClMot[r.cliente] = drillNoShowClMot[r.cliente] || {})[r.motorista] =
        (drillNoShowClMot[r.cliente][r.motorista] || {}));
      drillNoShowClMot[r.cliente][r.motorista][o] = (drillNoShowClMot[r.cliente][r.motorista][o] || 0) + 1;
    }
    if (r.status === 'ENTREGAS FINALIZADAS' && r.horario === 'FORA DO PRAZO') {
      const o = r.ocorrencia || 'S/O';
      ((drillAtrasoClMot[r.cliente] = drillAtrasoClMot[r.cliente] || {})[r.motorista] =
        (drillAtrasoClMot[r.cliente][r.motorista] || {}));
      drillAtrasoClMot[r.cliente][r.motorista][o] = (drillAtrasoClMot[r.cliente][r.motorista][o] || 0) + 1;
    }
    if (r.status === 'ENTREGAS FINALIZADAS') {
      const p = (drillProdClMot[r.cliente] = drillProdClMot[r.cliente] || {})[r.motorista] =
        (drillProdClMot[r.cliente][r.motorista] || { paradas: 0, prod_sum: 0, total: 0, n: 0 });
      p.total++;
      if (!isNaN(r.paradas)) p.paradas += r.paradas;
      const pc = prodCarga(r);
      if (pc !== null) {
        p.prod_sum += pc;
        p.n++;
      }
      for (const t of splitOcc(r.ocorrenciaDev)) {
        ((drillProdOccClMot[r.cliente] = drillProdOccClMot[r.cliente] || {})[r.motorista] =
          (drillProdOccClMot[r.cliente][r.motorista] || {}));
        drillProdOccClMot[r.cliente][r.motorista][t] = (drillProdOccClMot[r.cliente][r.motorista][t] || 0) + 1;
      }
    }
  }

  const datas = records.map((r) => r.data).filter(Boolean);
  let dataMin = null;
  let dataMax = null;
  if (datas.length) {
    dataMin = fmtDate(new Date(Math.min(...datas.map((d) => d.getTime()))));
    dataMax = fmtDate(new Date(Math.max(...datas.map((d) => d.getTime()))));
  }

  const ocorrenciasPor = (mask, pick) => {
    const qtd = {};
    const occ = {};
    for (const cl of clientes) {
      const sub = records.filter((r) => r.cliente === cl && mask(r));
      if (sub.length === 0) continue;
      qtd[cl] = sub.length;
      const oc = {};
      for (const r of sub) {
        for (const key of pick(r)) {
          oc[key] = (oc[key] || 0) + 1;
        }
      }
      occ[cl] = oc;
    }
    return [qtd, occ];
  };

  const [noShowPorCliente, noShowOcorrencias] = ocorrenciasPor(
    (r) => r.status === 'NO SHOW',
    (r) => [r.ocorrencia || 'S/O']
  );
  const [atrasoPorCliente, atrasoOcorrencias] = ocorrenciasPor(
    (r) => r.status === 'ENTREGAS FINALIZADAS' && r.horario === 'FORA DO PRAZO',
    (r) => [r.ocorrencia || 'S/O']
  );

  const prodPorCliente = {};
  for (const cl of clientes) {
    const s = records.filter((r) => r.status === 'ENTREGAS FINALIZADAS' && r.cliente === cl);
    if (s.length === 0) continue;
    const paradas = s.reduce((a, r) => a + (isNaN(r.paradas) ? 0 : r.paradas), 0);
    const prods = s.map(prodCarga).filter((v) => v !== null);
    const prod = prods.length ? prods.reduce((a, b) => a + b, 0) / prods.length : 0;
    prodPorCliente[cl] = { paradas: Math.round(paradas), produtividade: Math.round(prod * 10000) / 10000, total: s.length };
  }

  const [, prodOcorrencias] = ocorrenciasPor(
  (r) => r.status === 'ENTREGAS FINALIZADAS',
  (r) => splitOcc(r.ocorrenciaDev)
);

  const diario = {};
  const byDate = new Map();
  for (const r of records) {
    if (!r.data) continue;
    const ds = fmtDate(r.data);
    if (!byDate.has(ds)) byDate.set(ds, []);
    byDate.get(ds).push(r);
  }

  const occMap = (sub) => {
    const out = {};
    for (const r of sub) {
      const o = r.ocorrencia || 'S/O';
      (out[r.cliente] = out[r.cliente] || {})[o] = (out[r.cliente][o] || 0) + 1;
    }
    return out;
  };

  for (const [datestr, g] of byDate) {
    const cruz = {};
    const totSt = {};
    const totCl = {};
    // tripla do dia: {status: {cliente: {motorista: n}}}
    const triplaDia = {};
    const aderCm = {};
    let ader = 0;
    let noshow = 0;
    let cancel = 0;
    let fin = 0;
    let prodSum = 0;
    let prodN = 0;
    for (const r of g) {
      (cruz[r.status] = cruz[r.status] || {})[r.cliente] = (cruz[r.status][r.cliente] || 0) + 1;
      totSt[r.status] = (totSt[r.status] || 0) + 1;
      totCl[r.cliente] = (totCl[r.cliente] || 0) + 1;
      ((triplaDia[r.status] = triplaDia[r.status] || {})[r.cliente] =
        (triplaDia[r.status][r.cliente] || {}));
      triplaDia[r.status][r.cliente][r.motorista] = (triplaDia[r.status][r.cliente][r.motorista] || 0) + 1;
      if (r.status === 'NO SHOW') noshow++;
      if (r.status === 'CANCELADO PELO CLIENTE') cancel++;
      if (r.status === 'ENTREGAS FINALIZADAS') {
        fin++;
        if (r.horario === 'NO PRAZO') {
          ader++;
          (aderCm[r.cliente] = aderCm[r.cliente] || {})[r.motorista] =
            ((aderCm[r.cliente] || {})[r.motorista] || 0) + 1;
        }
      }
      const pc = prodCarga(r);
      if (pc !== null) {
        prodSum += pc;
        prodN++;
      }
    }

    const occMapCm = (sub, pick) => {
      const out = {};
      for (const r of sub) {
        for (const t of pick(r)) {
          (((out[r.cliente] = out[r.cliente] || {})[r.motorista] =
            (out[r.cliente][r.motorista] || {})));
          out[r.cliente][r.motorista][t] = (out[r.cliente][r.motorista][t] || 0) + 1;
        }
      }
      return out;
    };

    const gNoshow = occMap(g.filter((r) => r.status === 'NO SHOW'));
    const gAtraso = occMap(g.filter((r) => r.status === 'ENTREGAS FINALIZADAS' && r.horario === 'FORA DO PRAZO'));
    const gNoshowCm = occMapCm(g.filter((r) => r.status === 'NO SHOW'), (r) => [r.ocorrencia || 'S/O']);
    const gAtrasoCm = occMapCm(
      g.filter((r) => r.status === 'ENTREGAS FINALIZADAS' && r.horario === 'FORA DO PRAZO'),
      (r) => [r.ocorrencia || 'S/O']
    );
    const gProd = {};
    const gProdCm = {};
    for (const r of g.filter((x) => x.status === 'ENTREGAS FINALIZADAS')) {
      const p = (gProd[r.cliente] = gProd[r.cliente] || { paradas: 0, prod_sum: 0, total: 0 });
      p.total++;
      if (!isNaN(r.paradas)) p.paradas += r.paradas;
      const pc = prodCarga(r);
      if (pc !== null) p.prod_sum += pc;
      const pm = (gProdCm[r.cliente] = gProdCm[r.cliente] || {})[r.motorista] =
        (gProdCm[r.cliente][r.motorista] || { paradas: 0, prod_sum: 0, total: 0, n: 0 });
      pm.total++;
      if (!isNaN(r.paradas)) pm.paradas += r.paradas;
      if (pc !== null) {
        pm.prod_sum += pc;
        pm.n++;
      }
    }

    const gProdOcc = {};
    for (const r of g.filter((x) => x.status === 'ENTREGAS FINALIZADAS')) {
      for (const t of splitOcc(r.ocorrenciaDev)) {
        (gProdOcc[r.cliente] = gProdOcc[r.cliente] || {})[t] = (gProdOcc[r.cliente][t] || 0) + 1;
      }
    }
    const gProdOccCm = occMapCm(
      g.filter((x) => x.status === 'ENTREGAS FINALIZADAS'),
      (r) => splitOcc(r.ocorrenciaDev)
    );

    diario[datestr] = {
      cruzada: cruz,
      tot_status: totSt,
      tot_cliente: totCl,
      tripla: triplaDia,
      ader_cm: aderCm,
      aderOrigem: ader,
      noShow: noshow,
      cancel,
      finalizadas: fin,
      total: g.length,
      prod_sum: Math.round(prodSum * 1e6) / 1e6,
      prod_n: prodN,
drill_noShow: gNoshow,
    drill_atraso: gAtraso,
    drill_prod: gProd,
    drill_prod_occ: gProdOcc,
    drill_noShow_cm: gNoshowCm,
    drill_atraso_cm: gAtrasoCm,
    drill_prod_cm: gProdCm,
    drill_prod_occ_cm: gProdOccCm,
    };
  }

  return {
    kpis: {
      total: records.length,
      noShow,
      cancelados,
      finalizadas,
      aderenciaOrigemCount,
      produtividadeMedia: Math.round(produtividadeMedia * 10000) / 10000,
      prodCargasN,
    },
    cruzada,
    totalPorStatus,
    totalPorCliente,
    statusOrdem,
    clientes,
    motoristas,
    totalPorMotorista,
    tripla,
    aderClMot,
    dataMin,
    dataMax,
    diario,
    drill: {
      noShow: noShowOcorrencias,
      atraso: atrasoOcorrencias,
      produtividade: prodOcorrencias,
      noShowClMot: drillNoShowClMot,
      atrasoClMot: drillAtrasoClMot,
      prodClMot: drillProdClMot,
      prodOccClMot: drillProdOccClMot,
    },
    resumo: {
      noShowPorCliente,
      atrasoPorCliente,
      produtividadePorCliente: prodPorCliente,
    },
  };
}

const isMain = process.argv[1] && (
  process.argv[1].endsWith('fetch_sheets.js') ||
  process.argv[1].endsWith('fetch:data')
);

if (isMain) {
  const { writeFileSync } = await import('node:fs');
  fetchData().then((result) => {
    const out = '// AUTO-GERADO - não editar manualmente\n' +
      `// Fonte: ${SHEET} (Google Sheets) · gerado em ${new Date().toISOString()}\n` +
      'export const DASH_DATA = ' + JSON.stringify(result, null, 2) + ';\n';
    writeFileSync(join(__dirname, 'src', 'data.js'), out, 'utf8');
    console.log(`OK - src/data.js gerado (${result.kpis.total} registros, ${result.clientes.length} clientes)`);
    console.log(`Produtividade média: ${(result.kpis.produtividadeMedia * 100).toFixed(2)}%`);
  }).catch((e) => {
    console.error('Erro ao buscar dados da planilha:', e.message);
    process.exit(1);
  });
}
