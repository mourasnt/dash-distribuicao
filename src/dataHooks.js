import { useMemo, useState, useEffect, useCallback } from 'react';

export const POLL_MS = 15_000;

export function useDashData() {
  const [dash, setDash] = useState(null);
  const [updatedAt, setUpdatedAt] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch('/distribuicao/api/data');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setDash(json.data);
      setUpdatedAt(json.updatedAt);
    } catch (err) {
      console.error('[poll] Erro ao buscar dados:', err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const id = setInterval(fetchData, POLL_MS);
    return () => clearInterval(id);
  }, [fetchData]);

  return { dash, updatedAt, loading };
}

export const EMPTY_AGG = {
  cruzada: {},
  totalStatus: {},
  totalDim: {},
  kpis: { total: 0, noShow: 0, cancel: 0, finalizadas: 0, aderOrigem: 0, prod: 0 },
};

export const EMPTY_DRILL = {
  noShowQtd: {},
  noShowOcc: {},
  atrasoQtd: {},
  atrasoOcc: {},
  prodRows: {},
  prodOcc: {},
};

export function getStatuses(DASH) {
  if (!DASH) return [];
  // União: ordem canônica + qualquer status novo que exista na planilha
  // (ex.: digitado manualmente e fora da lista fixa), preservando a ordem.
  const ordem = DASH.statusOrdem || [];
  const extras = Object.keys(DASH.totalPorStatus || {})
    .filter((s) => !ordem.includes(s))
    .sort((a, b) => a.localeCompare(b));
  return [...ordem, ...extras].filter((s) => (DASH.totalPorStatus[s] || 0) > 0);
}

// F = { cliente: [], motorista: [], status: [], dataIni: 'YYYY-MM-DD', dataFim: '' }
function makeMatchers(F) {
  const isAllCliente = F.cliente.includes('all');
  const isAllMotorista = F.motorista.includes('all');
  const isAllStatus = F.status.includes('all');
  const hasDataFilter = !!(F.dataIni || F.dataFim);
  const inRange = (ds) => {
    if (F.dataIni && ds < F.dataIni) return false;
    if (F.dataFim && ds > F.dataFim) return false;
    return true;
  };
  return {
    isAllCliente,
    isAllMotorista,
    isAllStatus,
    hasDataFilter,
    inRange,
    matchesCliente: (cl) => isAllCliente || F.cliente.includes(cl),
    matchesMotorista: (mo) => isAllMotorista || F.motorista.includes(mo),
    matchesStatus: (st) => isAllStatus || F.status.includes(st),
  };
}

// Chave de exibição da dimensão: cliente → nome do cliente; motorista → nome do motorista.
const keyOf = (dim) => (dim === 'motorista' ? (_cl, mo) => mo : (cl) => cl);

function walkTripla(tripla, cb) {
  Object.entries(tripla || {}).forEach(([st, clMap]) =>
    Object.entries(clMap).forEach(([cl, moMap]) =>
      Object.entries(moMap).forEach(([mo, n]) => cb(st, cl, mo, n))
    )
  );
}

// {cliente: {motorista: v}} → cb(cliente, motorista, v)
function walkPair(map, cb) {
  Object.entries(map || {}).forEach(([cl, moMap]) =>
    Object.entries(moMap).forEach(([mo, v]) => cb(cl, mo, v))
  );
}

// ===== Agregação principal (KPIs + cruzada) por dimensão =====
export function useAgg(DASH, F, dim) {
  const { cliente, motorista, status, dataIni, dataFim } = F;
  return useMemo(() => {
    if (!DASH) return EMPTY_AGG;
    const m = makeMatchers(F);
    const k = keyOf(dim);

    const cruzada = {};
    const totalStatus = {};
    const totalDim = {};
    const add = (st, cl, mo, n) => {
      if (!m.matchesStatus(st) || !m.matchesCliente(cl) || !m.matchesMotorista(mo)) return;
      const key = k(cl, mo);
      (cruzada[st] = cruzada[st] || {})[key] = (cruzada[st][key] || 0) + n;
      totalStatus[st] = (totalStatus[st] || 0) + n;
      totalDim[key] = (totalDim[key] || 0) + n;
    };

    if (!m.hasDataFilter) {
      walkTripla(DASH.tripla, add);
    } else {
      Object.entries(DASH.diario).forEach(([ds, dv]) => {
        if (!m.inRange(ds)) return;
        walkTripla(dv.tripla, add);
      });
    }

    let total = Object.values(totalDim).reduce((s, v) => s + v, 0);
    if (!m.hasDataFilter) total = total || DASH.kpis.total;

    const noShow = totalStatus['NO SHOW'] || 0;
    const cancel = totalStatus['CANCELADO PELO CLIENTE'] || 0;
    const finalizadas = totalStatus['ENTREGAS FINALIZADAS'] || 0;

    // Aderência origem: células NO PRAZO de (cliente, motorista).
    let aderOrigem = 0;
    if (m.matchesStatus('ENTREGAS FINALIZADAS')) {
      const accAder = (cl, mo, n) => {
        if (m.matchesCliente(cl) && m.matchesMotorista(mo)) aderOrigem += n;
      };
      if (!m.hasDataFilter) {
        walkPair(DASH.aderClMot, accAder);
      } else {
        Object.entries(DASH.diario).forEach(([ds, dv]) => {
          if (m.inRange(ds)) walkPair(dv.ader_cm, accAder);
        });
      }
    }

    // Produtividade: soma de prod_sum sobre cargas com produtividade válida (n).
    let prodSum = 0;
    let prodN = 0;
    const accProd = (cl, mo, p) => {
      if (!m.matchesCliente(cl) || !m.matchesMotorista(mo)) return;
      prodSum += p.prod_sum || 0;
      prodN += p.n || 0;
    };
    if (!m.hasDataFilter) {
      walkPair(DASH.drill.prodClMot, accProd);
    } else {
      Object.entries(DASH.diario).forEach(([ds, dv]) => {
        if (m.inRange(ds)) walkPair(dv.drill_prod_cm, accProd);
      });
    }

    const kpis = {
      total,
      noShow,
      cancel,
      finalizadas,
      aderOrigem,
      prod: prodN > 0 ? prodSum / prodN : 0,
    };

    return { cruzada, totalStatus, totalDim, kpis };
  }, [DASH, cliente, motorista, status, dataIni, dataFim, dim]);
}

// ===== Drill-downs (No Show / Atrasos / Produtividade) por dimensão =====
export function useDrill(DASH, F, dim) {
  const { cliente, motorista, status, dataIni, dataFim } = F;
  return useMemo(() => {
    if (!DASH) return EMPTY_DRILL;
    const m = makeMatchers(F);
    const k = keyOf(dim);
    const noShowStatus = m.matchesStatus('NO SHOW');
    const finStatus = m.matchesStatus('ENTREGAS FINALIZADAS');

    const out = {
      noShowQtd: {},
      noShowOcc: {},
      atrasoQtd: {},
      atrasoOcc: {},
      prodRows: {},
      prodOcc: {},
    };

    // {cliente: {motorista: {ocorrencia: n}}} → qtd + ocorrências por chave
    const accOcc = (qtd, occ) => (cl, mo, tipos) => {
      if (!m.matchesCliente(cl) || !m.matchesMotorista(mo)) return;
      const key = k(cl, mo);
      occ[key] = occ[key] || {};
      Object.entries(tipos).forEach(([tipo, n]) => {
        occ[key][tipo] = (occ[key][tipo] || 0) + n;
        qtd[key] = (qtd[key] || 0) + n;
      });
    };

    if (!m.hasDataFilter) {
      if (noShowStatus) {
        walkPair(DASH.drill.noShowClMot, accOcc(out.noShowQtd, out.noShowOcc));
      }
      if (finStatus) {
        walkPair(DASH.drill.atrasoClMot, accOcc(out.atrasoQtd, out.atrasoOcc));
        walkPair(DASH.drill.prodOccClMot, accOcc({}, out.prodOcc));
        walkPair(DASH.drill.prodClMot, (cl, mo, p) => {
          if (!m.matchesCliente(cl) || !m.matchesMotorista(mo)) return;
          const key = k(cl, mo);
          const acc = (out.prodRows[key] = out.prodRows[key] || {
            paradas: 0, prod_sum: 0, total: 0, n: 0,
          });
          acc.paradas += p.paradas || 0;
          acc.prod_sum += p.prod_sum || 0;
          acc.total += p.total || 0;
          acc.n += p.n || 0;
        });
      }
    } else {
      Object.entries(DASH.diario).forEach(([ds, dv]) => {
        if (!m.inRange(ds)) return;
        if (noShowStatus) {
          walkPair(dv.drill_noShow_cm, accOcc(out.noShowQtd, out.noShowOcc));
        }
        if (finStatus) {
          walkPair(dv.drill_atraso_cm, accOcc(out.atrasoQtd, out.atrasoOcc));
          walkPair(dv.drill_prod_occ_cm, accOcc({}, out.prodOcc));
          walkPair(dv.drill_prod_cm, (cl, mo, p) => {
            if (!m.matchesCliente(cl) || !m.matchesMotorista(mo)) return;
            const key = k(cl, mo);
            const acc = (out.prodRows[key] = out.prodRows[key] || {
              paradas: 0, prod_sum: 0, total: 0, n: 0,
            });
            acc.paradas += p.paradas || 0;
            acc.prod_sum += p.prod_sum || 0;
            acc.total += p.total || 0;
            acc.n += p.n || 0;
          });
        }
      });
    }

    // Formato do DrillCard: produtividade = prod_sum / n (cargas com valor válido)
    const prodRows = {};
    Object.entries(out.prodRows).forEach(([key, p]) => {
      prodRows[key] = {
        paradas: p.paradas,
        produtividade: p.n > 0 ? p.prod_sum / p.n : 0,
        total: p.total,
      };
    });

    return { ...out, prodRows };
  }, [DASH, cliente, motorista, status, dataIni, dataFim, dim]);
}
