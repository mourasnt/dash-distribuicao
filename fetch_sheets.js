#!/usr/bin/env node
// Génération de src/data.js à partir de la planilha Google Sheets (Torre de controle).
// Utilise la service account (credentials.json) — la clé ne sort jamais du serveur.
// Uso: node fetch_sheets.js   (ou: npm run fetch:data)
import { google } from 'googleapis';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SPREADSHEET_ID = '1N3VkIFdunMnRw13DmSvcUBJkzb5U7yc00050G5-t90I';
const SHEET = 'Torre de controle';
const HEADER_ROW = 2; // 1-based: o cabeçalho começa na linha 2 -> índice 1

const credentials = JSON.parse(readFileSync(join(__dirname, 'credentials.json'), 'utf8'));

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

const sheets = google.sheets({ version: 'v4', auth });

function findCol(headers, substr) {
  for (let i = 0; i < headers.length; i++) {
    const h = String(headers[i] ?? '').trim();
    if (h.toLowerCase().includes(substr.toLowerCase())) return i;
  }
  throw new Error(`Coluna não encontrada contendo: "${substr}"`);
}

// Converte percentual textual pt-BR ("100,00%", "96,15%") ou número em fração.
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

// Normaliza data dd/mm/aaaa (ou com -) para timestamp local
function parseData(v) {
  if (v === null || v === undefined) return null;
  const s = String(v).trim();
  if (!s) return null;
  // dd/mm/yyyy
  let m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (m) return new Date(+m[3], +m[2] - 1, +m[1]);
  // yyyy-mm-dd
  m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (m) return new Date(+m[1], +m[2] - 1, +m[3]);
  const d = new Date(s);
  return isNaN(d) ? null : d;
}

const fmtDate = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

async function main() {
  const range = `${SHEET}!A1:V`;
  const res = await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range });
  const all = res.data.values || [];
  if (all.length <= HEADER_ROW) throw new Error('Planilha sem dados após o cabeçalho.');

  const headers = all[HEADER_ROW - 1];
  const idx = {
    cliente: findCol(headers, 'CLIENTE'),
    horario: findCol(headers, 'Status do hor'),
    ocorrencia: findCol(headers, 'Ocorr'),
    prod: findCol(headers, 'Produtividade'),
    paradas: findCol(headers, 'Paradas'),
    data: findCol(headers, 'Data'),
    romaneio: findCol(headers, 'Romaneio'),
    placa: findCol(headers, 'laca'),
    nome: findCol(headers, 'Nome'),
    status: findCol(headers, 'STATUS'),
  };

  // Agrupa por data formata para evitar NaN
  const records = [];
  for (let r = HEADER_ROW; r < all.length; r++) {
    const row = all[r];
    const get = (i) => (row && i < row.length ? row[i] : '');
    const cliente = String(get(idx.cliente) ?? '').trim() || 'SEM CLIENTE';
    if (cliente === 'SEM CLIENTE') continue; // desconsidera cargas sem cliente
    const status = String(get(idx.status) ?? '').trim() || 'SEM STATUS';
    const horario = String(get(idx.horario) ?? '').trim();
    const ocorrencia = String(get(idx.ocorrencia) ?? '').trim();
    const romaneio = String(get(idx.romaneio) ?? '').trim();
    const placa = String(get(idx.placa) ?? '').trim();
    const nome = String(get(idx.nome) ?? '').trim();
    const prod = parseProd(get(idx.prod));
    const paradas = parseFloat(String(get(idx.paradas) ?? '').replace(',', '.'));
    const data = parseData(get(idx.data));
    records.push({ cliente, status, horario, ocorrencia, romaneio, placa, nome, prod, paradas, data });
  }

  const statusOrd = (s) => s;
  const noShow = records.filter((r) => r.status === 'NO SHOW').length;
  const cancelados = records.filter((r) => r.status === 'CANCELADO PELO CLIENTE').length;
  const finalizadas = records.filter((r) => r.status === 'ENTREGAS FINALIZADAS').length;
  const aderenciaOrigemCount = records.filter(
    (r) => r.horario === 'NO PRAZO' && r.status === 'ENTREGAS FINALIZADAS'
  ).length;
  const prodList = records.map((r) => r.prod).filter((p) => !isNaN(p));
  const produtividadeMedia = prodList.length ? prodList.reduce((a, b) => a + b, 0) / prodList.length : 0;

  const statusOrdem = [
    'ENTREGAS FINALIZADAS', 'CANCELADO PELO CLIENTE', 'NO SHOW',
    'BACKUP', 'QUEBROU', 'EM TRANSITO', 'MOTORISTA AGENDADO',
    'A CAMINHO DO CD', 'SEM STATUS',
  ];
  const clientes = [...new Set(records.map((r) => r.cliente))].sort((a, b) => a.localeCompare(b));

  // Tabela cruzada status x cliente
  const cruzada = {};
  const totalPorStatus = {};
  const totalPorCliente = {};
  for (const r of records) {
    (cruzada[r.status] = cruzada[r.status] || {})[r.cliente] = (cruzada[r.status][r.cliente] || 0) + 1;
    totalPorStatus[r.status] = (totalPorStatus[r.status] || 0) + 1;
    totalPorCliente[r.cliente] = (totalPorCliente[r.cliente] || 0) + 1;
  }

  // Datas min/max
  const datas = records.map((r) => r.data).filter(Boolean);
  let dataMin = null;
  let dataMax = null;
  if (datas.length) {
    dataMin = fmtDate(new Date(Math.min(...datas.map((d) => d.getTime()))));
    dataMax = fmtDate(new Date(Math.max(...datas.map((d) => d.getTime()))));
  }

  // ---------- DRILL-DOWNS ----------
  const ocorrenciasPor = (mask) => {
    const qtd = {};
    const occ = {};
    for (const cl of clientes) {
      const sub = records.filter((r) => r.cliente === cl && mask(r));
      if (sub.length === 0) continue;
      qtd[cl] = sub.length;
      const oc = {};
      for (const r of sub) {
        const key = r.ocorrencia || 'S/O';
        oc[key] = (oc[key] || 0) + 1;
      }
      occ[cl] = oc;
    }
    return [qtd, occ];
  };

  const [noShowPorCliente, noShowOcorrencias] = ocorrenciasPor((r) => r.status === 'NO SHOW');
  const [atrasoPorCliente, atrasoOcorrencias] = ocorrenciasPor(
    (r) => r.status === 'ENTREGAS FINALIZADAS' && r.horario === 'FORA DO PRAZO'
  );

  const prodPorCliente = {};
  for (const cl of clientes) {
    const s = records.filter((r) => r.status === 'ENTREGAS FINALIZADAS' && r.cliente === cl);
    if (s.length === 0) continue;
    const paradas = s.reduce((a, r) => a + (isNaN(r.paradas) ? 0 : r.paradas), 0);
    const prods = s.map((r) => r.prod).filter((p) => !isNaN(p));
    const prod = prods.length ? prods.reduce((a, b) => a + b, 0) / prods.length : 0;
    prodPorCliente[cl] = { paradas: Math.round(paradas), produtividade: Math.round(prod * 10000) / 10000, total: s.length };
  }

  const [, prodOcorrencias] = ocorrenciasPor((r) => r.status === 'ENTREGAS FINALIZADAS');

  // ---- AGREGADOS DIARIOS ----
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
      if (r.status === 'NO SHOW') noshow++;
      if (r.status === 'CANCELADO PELO CLIENTE') cancel++;
      if (r.status === 'ENTREGAS FINALIZADAS') {
        fin++;
        if (r.horario === 'NO PRAZO') ader++;
      }
      if (!isNaN(r.prod)) {
        prodSum += r.prod;
        prodN++;
      }
    }

    const gNoshow = occMap(g.filter((r) => r.status === 'NO SHOW'));
    const gAtraso = occMap(g.filter((r) => r.status === 'ENTREGAS FINALIZADAS' && r.horario === 'FORA DO PRAZO'));
    const gProd = {};
    for (const r of g.filter((x) => x.status === 'ENTREGAS FINALIZADAS')) {
      const p = (gProd[r.cliente] = gProd[r.cliente] || { paradas: 0, prod_sum: 0, total: 0 });
      p.total++;
      if (!isNaN(r.paradas)) p.paradas += r.paradas;
      if (!isNaN(r.prod)) p.prod_sum += r.prod;
    }

    diario[datestr] = {
      cruzada: cruz,
      tot_status: totSt,
      tot_cliente: totCl,
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
    };
  }

  const result = {
    kpis: {
      total: records.length,
      noShow,
      cancelados,
      finalizadas,
      aderenciaOrigemCount,
      produtividadeMedia: Math.round(produtividadeMedia * 10000) / 10000,
    },
    cruzada,
    totalPorStatus,
    totalPorCliente,
    statusOrdem,
    clientes,
    dataMin,
    dataMax,
    diario,
    drill: { noShow: noShowOcorrencias, atraso: atrasoOcorrencias, produtividade: prodOcorrencias },
    resumo: {
      noShowPorCliente,
      atrasoPorCliente,
      produtividadePorCliente: prodPorCliente,
    },
  };

  const out = '// AUTO-GERADO - não editar manualmente\n' +
    `// Fonte: ${SHEET} (Google Sheets) · gerado em ${new Date().toISOString()}\n` +
    'export const DASH_DATA = ' + JSON.stringify(result, null, 2) + ';\n';

  writeFileSync(join(__dirname, 'src', 'data.js'), out, 'utf8');
  console.log(`OK - src/data.js gerado (${records.length} registros, ${clientes.length} clientes)`);
  console.log(`Total: ${records.length} | NoShow: ${noShow} | Cancelados: ${cancelados} | Finalizadas: ${finalizadas}`);
  console.log(`Produtividade média: ${(produtividadeMedia * 100).toFixed(2)}%`);
}

main().catch((e) => {
  console.error('Erro ao buscar dados da planilha:', e.message);
  process.exit(1);
});
