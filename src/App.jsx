import { useMemo, useState, useEffect, useCallback } from 'react';
import { Layout, Card, Select, DatePicker, Button, Table, Row, Col, Flex, Space, Typography, Spin } from 'antd';
import {
  DatabaseOutlined,
  FileDoneOutlined,
  FieldTimeOutlined,
  CloseCircleOutlined,
  RiseOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';
import { COLORS, STATUS_COLORS, fmtPct, fmtNum, shortName, SPACING } from './utils.js';
import DrillCard from './DrillCard.jsx';
import EChart from './EChart.jsx';

const POLL_MS = 15_000;

function useDashData() {
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

const { Header, Content, Footer } = Layout;
const { RangePicker } = DatePicker;

const KPI_CONFIG = [
  { label: 'Total de Cargas', icon: <DatabaseOutlined />, get: (k) => fmtNum(k.total), color: COLORS.primary },
  { label: 'Aderência no Show', icon: <FileDoneOutlined />, get: (k) => fmtPct(k.total ? 1 - k.noShow / k.total : 0), color: COLORS.accent },
  { label: 'Aderência Origem', icon: <FieldTimeOutlined />, get: (k) => fmtPct(k.finalizadas ? k.aderOrigem / k.finalizadas : 0), color: COLORS.secondary },
  { label: 'Cancelamentos', icon: <CloseCircleOutlined />, get: (k) => fmtPct(k.total ? k.cancel / k.total : 0), color: COLORS.destructive },
  { label: 'Produtividade Média', icon: <RiseOutlined />, get: (k) => fmtPct(k.prod), color: COLORS.success },
];

export default function App() {
  const { dash: DASH_DATA, updatedAt, loading } = useDashData();
  const [cliente, setCliente] = useState(['all']);
  const [status, setStatus] = useState(['all']);
  const [range, setRange] = useState(null);

  const isAllCliente = cliente.includes('all');
  const isAllStatus = status.includes('all');
  const matchesCliente = (cl) => isAllCliente || cliente.includes(cl);
  const matchesStatus = (st) => isAllStatus || status.includes(st);

  const clientes = useMemo(
    () => (DASH_DATA?.clientes || []).filter((c) => c !== 'SEM CLIENTE'),
    [DASH_DATA]
  );
  const statuses = useMemo(
    () => (DASH_DATA?.statusOrdem || []).filter((s) => (DASH_DATA?.totalPorStatus[s] || 0) > 0),
    [DASH_DATA]
  );

  const dataIni = range && range[0] ? range[0].format('YYYY-MM-DD') : '';
  const dataFim = range && range[1] ? range[1].format('YYYY-MM-DD') : '';
  const hasDataFilter = !!(dataIni || dataFim);
  const hasFilter = !isAllCliente || !isAllStatus || hasDataFilter;

  const resetFilters = () => {
    setCliente(['all']);
    setStatus(['all']);
    setRange(null);
  };

  const onChangeClientes = (vals) => {
    if (!vals.length) return setCliente(['all']);
    if (vals.includes('all')) {
      if (cliente.includes('all')) {
        return setCliente(vals.filter((v) => v !== 'all'));
      }
      return setCliente(['all']);
    }
    setCliente(vals);
  };

  const onChangeStatuses = (vals) => {
    if (!vals.length) return setStatus(['all']);
    if (vals.includes('all')) {
      if (status.includes('all')) {
        return setStatus(vals.filter((v) => v !== 'all'));
      }
      return setStatus(['all']);
    }
    setStatus(vals);
  };

  const EMPTY_AGG = { cruzada: {}, totalStatus: {}, totalCliente: {}, kpis: { total: 0, noShow: 0, cancel: 0, finalizadas: 0, aderOrigem: 0, prod: 0 } };

  const agg = useMemo(() => {
    if (!DASH_DATA) return EMPTY_AGG;
    const dIni = dataIni ? new Date(dataIni + 'T00:00:00') : null;
    const dFim = dataFim ? new Date(dataFim + 'T23:59:59') : null;
    const inRange = (ds) => {
      if (!hasDataFilter) return true;
      const dt = new Date(ds + 'T00:00:00');
      if (dIni && dt < dIni) return false;
      if (dFim && dt > dFim) return false;
      return true;
    };
    const match = (cl, st) => {
      if (!matchesCliente(cl)) return false;
      if (!matchesStatus(st)) return false;
      return true;
    };

    const cruzada = {};
    const totalStatus = {};
    const totalCliente = {};
    const prod = { sum: 0, n: 0 };
    let total = 0;
    let noShow = 0;
    let cancel = 0;
    let finalizadas = 0;
    let aderOrigem = 0;

    if (!hasDataFilter) {
      DASH_DATA.clientes.forEach((cl) => {
        let ctotal = 0;
        statuses.forEach((st) => {
          const v = DASH_DATA.cruzada[st]?.[cl] || 0;
          if (!match(cl, st)) return;
          cruzada[st] = cruzada[st] || {};
          cruzada[st][cl] = v;
          totalStatus[st] = (totalStatus[st] || 0) + v;
          ctotal += v;
        });
        if (ctotal > 0) totalCliente[cl] = ctotal;
      });

      noShow = totalStatus['NO SHOW'] || 0;
      cancel = totalStatus['CANCELADO PELO CLIENTE'] || 0;
      finalizadas = totalStatus['ENTREGAS FINALIZADAS'] || 0;
      total = Object.values(totalCliente).reduce((s, v) => s + v, 0) || DASH_DATA.kpis.total;

      if (isAllStatus || status.includes('ENTREGAS FINALIZADAS')) {
        if (isAllCliente && isAllStatus) {
          aderOrigem = DASH_DATA.kpis.aderenciaOrigemCount;
        } else {
          let fin = 0;
          DASH_DATA.clientes.forEach((cl) => {
            if (!matchesCliente(cl)) return;
            const f = DASH_DATA.resumo.produtividadePorCliente[cl]?.total || 0;
            const atr = DASH_DATA.resumo.atrasoPorCliente[cl] || 0;
            fin += Math.max(f - atr, 0);
          });
          aderOrigem = fin;
        }
      }

      prod.sum = DASH_DATA.kpis.produtividadeMedia * DASH_DATA.kpis.prodCargasN;
      prod.n = DASH_DATA.kpis.prodCargasN;
    } else {
      Object.entries(DASH_DATA.diario).forEach(([datestr, dv]) => {
        if (!inRange(datestr)) return;
        Object.entries(dv.cruzada).forEach(([st, clMap]) => {
          Object.entries(clMap).forEach(([cl, n]) => {
            if (!match(cl, st)) return;
            cruzada[st] = cruzada[st] || {};
            cruzada[st][cl] = (cruzada[st][cl] || 0) + n;
            totalStatus[st] = (totalStatus[st] || 0) + n;
            totalCliente[cl] = (totalCliente[cl] || 0) + n;
          });
        });
        prod.sum += dv.prod_sum || 0;
        prod.n += dv.prod_n || 0;
      });

      noShow = totalStatus['NO SHOW'] || 0;
      cancel = totalStatus['CANCELADO PELO CLIENTE'] || 0;
      finalizadas = totalStatus['ENTREGAS FINALIZADAS'] || 0;
      total = Object.values(totalCliente).reduce((s, v) => s + v, 0) || Object.values(totalStatus).reduce((s, v) => s + v, 0);

      if (isAllCliente && (isAllStatus || status.includes('ENTREGAS FINALIZADAS'))) {
        let sumAder = 0;
        Object.entries(DASH_DATA.diario).forEach(([ds, dv]) => {
          if (inRange(ds)) sumAder += dv.aderOrigem || 0;
        });
        aderOrigem = sumAder;
      }
    }

    const kpis = {
      total,
      noShow,
      cancel,
      finalizadas,
      aderOrigem,
      prod: prod.n > 0 ? prod.sum / prod.n : 0,
    };

    return { cruzada, totalStatus, totalCliente, kpis };
  }, [cliente, status, dataIni, dataFim, hasDataFilter, clientes, statuses, DASH_DATA]);

  // ===== Drill-down (respeita filtros de data, cliente e status) =====
  const EMPTY_DRILL = { noShowQtd: {}, noShowOcc: {}, atrasoQtd: {}, atrasoOcc: {}, prodRows: {}, prodOcc: {} };

  const drillData = useMemo(() => {
    if (!DASH_DATA) return EMPTY_DRILL;
    const filterClient = (map) => {
      if (isAllCliente) return map || {};
      const out = {};
      Object.entries(map || {}).forEach(([cl, v]) => {
        if (cliente.includes(cl)) out[cl] = v;
      });
      return out;
    };

    const noShowStatus = isAllStatus || status.includes('NO SHOW');
    const finStatus = isAllStatus || status.includes('ENTREGAS FINALIZADAS');

    const out = {
      noShowQtd: {},
      noShowOcc: {},
      atrasoQtd: {},
      atrasoOcc: {},
      prodRows: {},
      prodOcc: {},
    };

    // merge de ocorrências {cl: {tipo:n}}
    const mergeOcc = (target, daysOcc) => {
      Object.entries(daysOcc).forEach(([cl, occ]) => {
        target[cl] = target[cl] || {};
        Object.entries(occ).forEach(([tipo, n]) => {
          target[cl][tipo] = (target[cl][tipo] || 0) + n;
        });
      });
    };

    if (!hasDataFilter) {
      // período integral: usa agregados pré-computados
      if (noShowStatus) {
        out.noShowQtd = filterClient(DASH_DATA.resumo.noShowPorCliente);
        out.noShowOcc = filterClient(DASH_DATA.drill.noShow);
      }
      if (finStatus) {
        out.atrasoQtd = filterClient(DASH_DATA.resumo.atrasoPorCliente);
        out.atrasoOcc = filterClient(DASH_DATA.drill.atraso);
        out.prodRows = filterClient(DASH_DATA.resumo.produtividadePorCliente);
        out.prodOcc = filterClient(DASH_DATA.drill.produtividade);
      }
    } else {
      // somar dias do range
      const dIni = dataIni ? new Date(dataIni + 'T00:00:00') : null;
      const dFim = dataFim ? new Date(dataFim + 'T23:59:59') : null;
      const inRange = (ds) => {
        const dt = new Date(ds + 'T00:00:00');
        if (dIni && dt < dIni) return false;
        if (dFim && dt > dFim) return false;
        return true;
      };
      Object.entries(DASH_DATA.diario).forEach(([ds, dv]) => {
        if (!inRange(ds)) return;
        if (noShowStatus) {
          Object.entries(dv.drill_noShow || {}).forEach(([cl, occ]) => {
            if (!matchesCliente(cl)) return;
            out.noShowQtd[cl] = (out.noShowQtd[cl] || 0) + Object.values(occ).reduce((a, b) => a + b, 0);
          });
          mergeOcc(out.noShowOcc, dv.drill_noShow || {});
        }
        if (finStatus) {
          Object.entries(dv.drill_atraso || {}).forEach(([cl, occ]) => {
            if (!matchesCliente(cl)) return;
            out.atrasoQtd[cl] = (out.atrasoQtd[cl] || 0) + Object.values(occ).reduce((a, b) => a + b, 0);
          });
          mergeOcc(out.atrasoOcc, dv.drill_atraso || {});
          Object.entries(dv.drill_prod || {}).forEach(([cl, p]) => {
            if (!matchesCliente(cl)) return;
            const acc = (out.prodRows[cl] = out.prodRows[cl] || { paradas: 0, prod_sum: 0, total: 0 });
            acc.paradas += p.paradas || 0;
            acc.prod_sum += p.prod_sum || 0;
            acc.total += p.total || 0;
          });
          // ocorrências de produtividade não têm granularidade diária — usa o global
          mergeOcc(out.prodOcc, isAllCliente ? DASH_DATA.drill.produtividade : {});
        }
      });
      // converte prodRows p/ formato {paradas, produtividade, total}
      const finalProd = {};
      Object.entries(out.prodRows).forEach(([cl, p]) => {
        finalProd[cl] = {
          paradas: p.paradas,
          produtividade: p.total ? p.prod_sum / p.total : 0,
          total: p.total,
        };
      });
      out.prodRows = finalProd;
    }

    return out;
  }, [cliente, status, hasDataFilter, dataIni, dataFim, DASH_DATA]);

  const noShowPorCliente = drillData.noShowQtd;
  const atrasoPorCliente = drillData.atrasoQtd;
  const produtividadePorCliente = drillData.prodRows;
  const drillNoShow = drillData.noShowOcc;
  const drillAtraso = drillData.atrasoOcc;
  const drillProd = drillData.prodOcc;

  if (loading || !DASH_DATA) {
    return (
      <Layout className="app-layout">
        <Header className="header">
          <div className="nav-brand">
            <img src="/distribuicao/logo-3zx.png" alt="Logo 3ZX" className="nav-logo" />
            <div className="nav-wordmark">
              <span className="nav-eyebrow">3ZX Logistica</span>
              <Typography.Title level={3} className="nav-title" style={{ color: '#fff' }}>Follow Distribuicao</Typography.Title>
            </div>
          </div>
        </Header>
        <Content className="app" style={{ display: 'grid', placeItems: 'center', minHeight: '60vh' }}>
          <Spin size="large" tip="Carregando dados..." />
        </Content>
      </Layout>
    );
  }

  return (
    <Layout className="app-layout">
      <Header className="header">
        <div className="nav-brand">
          <img src="/distribuicao/logo-3zx.png" alt="Logo 3ZX" className="nav-logo" />
          <div className="nav-wordmark">
            <span className="nav-eyebrow">3ZX Logística</span>
            <Typography.Title level={3} className="nav-title" style={{ color: '#fff' }}>Follow Distribuição</Typography.Title>
          </div>
        </div>
        <div className="filters">
          <Select
            size="middle"
            style={{ minWidth: 180 }}
            mode="multiple"
            maxTagCount={2}
            value={cliente}
            onChange={onChangeClientes}
            showSearch
            placeholder="Clientes: Todos"
            options={[{ value: 'all', label: 'Todos os clientes' }, ...clientes.map((c) => ({ value: c, label: c }))]}
          />
          <Select
            size="middle"
            style={{ minWidth: 170 }}
            mode="multiple"
            maxTagCount={2}
            value={status}
            onChange={onChangeStatuses}
            placeholder="Status: Todos"
            options={[{ value: 'all', label: 'Todos os status' }, ...statuses.map((s) => ({ value: s, label: s }))]}
          />
          <RangePicker
            value={range}
            onChange={(r) => setRange(r)}
            allowEmpty={[true, true]}
            placeholder={['De', 'Até']}
            size="middle"
          />
          {hasFilter && (
            <Button icon={<ReloadOutlined />} onClick={resetFilters} size="middle">
              Limpar
            </Button>
          )}
        </div>
      </Header>

      <Content className="app">
        <Row gutter={[SPACING.grid, SPACING.section]}>
          <KpiRow agg={agg} />
        </Row>

        <Row gutter={[SPACING.grid, SPACING.section]}>
          <Col xs={24} lg={12} className="reveal reveal-7">
            <StatusDonut agg={agg} statuses={statuses} />
          </Col>
          <Col xs={24} lg={12} className="reveal reveal-7">
            <ClientesBars agg={agg} />
          </Col>
          <Col xs={24} className="reveal reveal-8">
            <EvolucaoDiaria range={range} cliente={cliente} status={status} DASH_DATA={DASH_DATA} />
          </Col>
        </Row>

        <Row gutter={[SPACING.grid, SPACING.section]}>
          <Col span={24} className="reveal reveal-8">
            <CrossTable agg={agg} clientes={clientes} statuses={statuses} />
          </Col>
        </Row>

        <Row gutter={[SPACING.grid, SPACING.section]}>
          <Col xs={24} md={8} className="reveal reveal-8">
            <DrillCard
              title="No Show"
              icon={<span className="badge badge-warn">NS</span>}
              rows={noShowPorCliente}
              ocorrencias={drillNoShow}
              pctBase={agg.kpis.total || undefined}
            />
          </Col>
          <Col xs={24} md={8} className="reveal reveal-8">
            <DrillCard
              title="Atrasos na Origem"
              icon={<span className="badge badge-red">AT</span>}
              rows={atrasoPorCliente}
              ocorrencias={drillAtraso}
              pctBase={agg.kpis.total || undefined}
            />
          </Col>
          <Col xs={24} md={8} className="reveal reveal-8">
            <DrillCard
              title="Produtividade"
              icon={<span className="badge badge-blue">PR</span>}
              isProd
              prodRows={produtividadePorCliente}
              ocorrencias={drillProd}
            />
          </Col>
        </Row>
      </Content>

      <Footer className="footer">
        <Space split="⬢" size={12}>
          <span>Dados: {DASH_DATA.dataMin} ate {DASH_DATA.dataMax}</span>
          <span>Total de registros: {fmtNum(agg.kpis.total)}</span>
          {updatedAt && <span>Atualizado: {dayjs(updatedAt).format('HH:mm:ss')}</span>}
        </Space>
      </Footer>
    </Layout>
  );
}

// ===== KPI Row =====
function KpiRow({ agg }) {
  const k = agg.kpis;
  const subs = [
    `${fmtNum(k.finalizadas)} finalizadas`,
    `${k.noShow} no show`,
    `${fmtNum(k.aderOrigem)} no prazo`,
    `${k.cancel} canc. pelo cliente`,
    'média das finalizadas',
  ];
  return KPI_CONFIG.map((it, i) => (
    <Col xs={12} sm={12} md={i === 0 ? 24 : 12} lg={i === 0 ? 8 : 4} key={it.label} className={`reveal reveal-${i + 1}`}>
      <div
        className={`kpi-card${i === 0 ? ' kpi-hero' : ''}`}
        style={{ '--kpi-color': it.color }}
      >
        <Flex align="center" gap={SPACING.gapGrid}>
          <div className="kpi-icon" style={{ color: it.color }} aria-hidden="true">
            {it.icon}
          </div>
          <div>
            <span className="kpi-label" style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>{it.label}</span>
            <div className="kpi-value num" style={{ fontSize: i === 0 ? 30 : 23, fontWeight: 700, color: it.color, letterSpacing: '-0.5px', lineHeight: 1.05 }}>
              {it.get(k)}
            </div>
            <span className="kpi-sub">{subs[i]}</span>
          </div>
        </Flex>
      </div>
    </Col>
  ));
}

// ===== Gráficos ECharts =====
function StatusDonut({ agg, statuses }) {
  const option = useMemo(() => {
    const stList = statuses.filter((s) => (agg.totalStatus[s] || 0) > 0);
    const total = stList.reduce((s, st) => s + (agg.totalStatus[st] || 0), 0);
    return {
      animationDuration: 600,
      animationEasing: 'cubicOut',
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(15,23,42,0.92)',
        borderWidth: 0,
        textStyle: { color: '#fff', fontSize: 12 },
        formatter: (p) => `<b>${p.name}</b><br/>${fmtNum(p.value)} cargas · ${p.percent}%`,
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 8,
        top: 'center',
        itemWidth: 10,
        itemHeight: 10,
        icon: 'circle',
        textStyle: { fontSize: 11, color: '#475569' },
        pageIconColor: '#2563EB',
      },
      graphic: {
        type: 'text',
        left: 'center',
        top: '45%',
        style: {
          text: `${fmtNum(total)}`,
          fontSize: 22,
          fontWeight: 700,
          fill: '#1E40AF',
          fontFamily: "'Fira Code', monospace",
          textAlign: 'center',
        },
      },
      series: [
        {
          name: 'Cargas',
          type: 'pie',
          radius: ['46%', '70%'],
          center: ['32%', '50%'],
          avoidLabelOverlap: true,
          padAngle: 1.5,
          itemStyle: { borderRadius: 5, borderColor: '#fff', borderWidth: 2 },
          label: {
            show: true,
            formatter: (p) => (p.percent >= 4 ? `${p.percent}%` : ''),
            fontSize: 10.5,
            fontWeight: 600,
            color: '#475569',
            fontFamily: "'Fira Code', monospace",
          },
          labelLine: { length: 8, length2: 6, lineStyle: { color: '#CBD5E1' } },
          emphasis: {
            scaleSize: 6,
            label: { fontWeight: 700 },
            itemStyle: { shadowBlur: 12, shadowColor: 'rgba(2,6,23,0.25)' },
          },
          data: stList.map((s) => ({
            name: s,
            value: agg.totalStatus[s],
            itemStyle: { color: STATUS_COLORS[s] || '#94A3B8' },
          })),
        },
      ],
    };
  }, [agg.totalStatus, statuses]);

  return (
    <Card size="small" title="Cargas por Status" className="chart-card">
      <EChart option={option} className="echart" style={{ height: 300 }} />
    </Card>
  );
}

function ClientesBars({ agg }) {
  const option = useMemo(() => {
    const entries = Object.entries(agg.totalCliente)
      .filter(([, v]) => v > 0)
      .sort((a, b) => a[1] - b[1])
      .slice(0, 14);
    const names = entries.map(([c]) => shortName(c));
    const values = entries.map(([, v]) => v);
    return {
      animationDuration: 600,
      animationEasing: 'cubicOut',
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow', shadowStyle: { color: 'rgba(37,99,235,0.06)' } },
        backgroundColor: 'rgba(15,23,42,0.92)',
        borderWidth: 0,
        textStyle: { color: '#fff', fontSize: 12 },
        formatter: (params) => {
          const p = params[0];
          const full = entries[p.dataIndex]?.[0] || '';
          return `${full}<br/><b style="font-family:'Fira Code',monospace">${fmtNum(p.value)}</b> cargas`;
        },
      },
      grid: { left: 8, right: 30, top: 16, bottom: 8, containLabel: true },
      xAxis: {
        type: 'value',
        splitLine: { lineStyle: { color: '#EEF2F7' } },
        axisLabel: { fontSize: 10, color: '#94A3B8' },
      },
      yAxis: {
        type: 'category',
        data: names,
        axisLabel: { fontSize: 11, color: '#475569' },
        axisTick: { show: false },
        axisLine: { show: false },
      },
      series: [
        {
          name: 'Cargas',
          type: 'bar',
          data: values,
          barMaxWidth: 16,
          itemStyle: {
            borderRadius: [0, 5, 5, 0],
            color: {
              type: 'linear',
              x: 0, y: 0, x2: 1, y2: 0,
              colorStops: [
                { offset: 0, color: '#3B82F6' },
                { offset: 1, color: '#1E40AF' },
              ],
            },
          },
          label: {
            show: true,
            position: 'right',
            fontSize: 10,
            color: '#64748B',
            fontFamily: "'Fira Code', monospace",
            formatter: (p) => fmtNum(p.value),
          },
        },
      ],
    };
  }, [agg.totalCliente]);

  return (
    <Card size="small" title="Top 14 Clientes por Cargas" className="chart-card">
      <EChart option={option} className="echart" style={{ height: 300 }} />
    </Card>
  );
}

function EvolucaoDiaria({ range, cliente, status, DASH_DATA }) {
  const option = useMemo(() => {
    const dIni = range && range[0] ? range[0].format('YYYY-MM-DD') : null;
    const dFim = range && range[1] ? range[1].format('YYYY-MM-DD') : null;
    const inRange = (ds) => {
      if (!dIni && !dFim) return true;
      if (dIni && ds < dIni) return false;
      if (dFim && ds > dFim) return false;
      return true;
    };
    const isAllCliente = cliente.includes('all');
    const isAllStatus = status.includes('all');
    const matchCl = isAllCliente;
    const matchSt = isAllStatus;

    const days = [];
    Object.entries(DASH_DATA.diario)
      .filter(([ds]) => inRange(ds))
      .sort((a, b) => a[0].localeCompare(b[0]))
      .forEach(([ds, dv]) => {
        let tot = 0;
        if (matchCl && matchSt) {
          tot = dv.tot_cliente ? Object.values(dv.tot_cliente).reduce((s, v) => s + v, 0) : 0;
        } else {
          Object.entries(dv.cruzada || {}).forEach(([st, clMap]) => {
            if (!matchSt && !status.includes(st)) return;
            Object.entries(clMap).forEach(([cl, n]) => {
              if (!matchCl && !cliente.includes(cl)) return;
              tot += n;
            });
          });
        }
        days.push({ ds, tot });
      });

    return {
      animationDuration: 700,
      animationEasing: 'cubicOut',
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(15,23,42,0.92)',
        borderWidth: 0,
        textStyle: { color: '#fff', fontSize: 12 },
        formatter: (params) => {
          const p = params[0];
          return `${p.axisValue}<br/><span style="color:#93C5FD"></span> <b style="font-family:'Fira Code',monospace">${fmtNum(p.value)}</b> cargas`;
        },
      },
      grid: { left: 8, right: 16, top: 24, bottom: 28, containLabel: true },
      xAxis: {
        type: 'category',
        data: days.map((d) => d.ds),
        boundaryGap: false,
        axisLine: { lineStyle: { color: '#E2E8F0' } },
        axisLabel: { fontSize: 10, color: '#94A3B8', hideOverlap: true },
        axisTick: { show: false },
      },
      yAxis: {
        type: 'value',
        splitLine: { lineStyle: { color: '#EEF2F7' } },
        axisLabel: { fontSize: 10, color: '#94A3B8', fontFamily: "'Fira Code', monospace" },
      },
      dataZoom: days.length > 31 ? [{ type: 'inside' }, { type: 'slider', height: 16, borderColor: 'transparent', backgroundColor: 'rgba(37,99,235,0.06)', fillerColor: 'rgba(37,99,235,0.15)', handleSize: '100%', textStyle: { color: '#94A3B8' } }] : [],
      series: [
        {
          name: 'Cargas',
          type: 'line',
          data: days.map((d) => d.tot),
          smooth: true,
          showSymbol: false,
          symbol: 'circle',
          symbolSize: 6,
          lineStyle: { width: 2.5, color: '#2563EB' },
          itemStyle: { color: '#2563EB', borderColor: '#fff', borderWidth: 1.5 },
          emphasis: { focus: 'series' },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(37,99,235,0.28)' },
                { offset: 1, color: 'rgba(37,99,235,0.02)' },
              ],
            },
          },
        },
      ],
    };
  }, [range, cliente, status, DASH_DATA]);

  return (
    <Card size="small" title="Evolução Diária de Cargas" className="chart-card">
      <EChart option={option} className="echart" style={{ height: 260 }} />
    </Card>
  );
}

// ===== Tabela Cruzada (antd Table) =====
function CrossTable({ agg, clientes, statuses }) {
  const clList = [...clientes].filter((c) => (agg.totalCliente[c] || 0) > 0);
  const stList = statuses.filter((s) => (agg.totalStatus[s] || 0) > 0);

  const columns = [
    {
      title: 'Status \\ Cliente',
      dataIndex: '__status',
      key: '__status',
      fixed: 'left',
      width: 210,
      render: (_, row) => (
        <Space size={7}>
          <span className="dot" style={{ background: STATUS_COLORS[row.__status] || '#94A3B8' }} />
          <span>{row.__status}</span>
        </Space>
      ),
    },
    ...clList.map((c, i) => ({
      title: c.length > 10 ? shortName(c) : c,
      dataIndex: c,
      key: c,
      align: 'right',
      onHeaderCell: () => ({ title: c }),
      width: 72,
    })),
    {
      title: 'Total',
      key: '__total',
      align: 'right',
      width: 80,
      fixed: 'right',
      className: 'total-col',
      render: (_, row) =>
        row.__status === 'Total' ? agg.kpis.total : agg.totalStatus[row.__status],
    },
  ];

  const data = stList.map((st) => {
    const row = { __status: st, key: st };
    clList.forEach((c) => (row[c] = agg.cruzada[st]?.[c] || 0));
    return row;
  });

  const totalRow = {
    __status: 'Total',
    key: '__total',
    ...Object.fromEntries(clList.map((c) => [c, agg.totalCliente[c] || 0])),
  };

  return (
    <Card size="small" title="Cargas por Cliente // Status" className="table-card">
      <Table
        size="small"
        columns={columns}
        dataSource={[...data, totalRow]}
        pagination={false}
        scroll={{ x: 'max-content' }}
        className="cross-table"
        rowClassName={(r) => (r.__status === 'Total' ? 'total-row' : '')}
      />
    </Card>
  );
}
