import { useMemo, useState } from 'react';
import { Layout, Card, Select, DatePicker, Button, Table, Row, Col, Flex, Space, Typography, Spin, Drawer, Menu } from 'antd';
import {
  DatabaseOutlined,
  FileDoneOutlined,
  FieldTimeOutlined,
  CloseCircleOutlined,
  RiseOutlined,
  ReloadOutlined,
  MenuOutlined,
  TeamOutlined,
  CarOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import { COLORS, STATUS_COLORS, fmtPct, fmtNum, shortName, SPACING } from './utils.js';
import { useAgg, useDrill, getStatuses } from './dataHooks.js';
import DrillCard from './DrillCard.jsx';
import EChart from './EChart.jsx';

const { Header, Content, Footer } = Layout;
const { RangePicker } = DatePicker;

const DIM_LABEL = {
  cliente: { one: 'Cliente', many: 'Clientes' },
  motorista: { one: 'Motorista', many: 'Motoristas' },
};

const KPI_CONFIG = [
  { label: 'Total de Cargas', icon: <DatabaseOutlined />, get: (k) => fmtNum(k.total), color: COLORS.primary },
  { label: 'Aderência no Show', icon: <FileDoneOutlined />, get: (k) => fmtPct(k.total ? 1 - k.noShow / k.total : 0), color: COLORS.accent },
  { label: 'Aderência Origem', icon: <FieldTimeOutlined />, get: (k) => fmtPct(k.finalizadas ? k.aderOrigem / k.finalizadas : 0), color: COLORS.secondary },
  { label: 'Cancelamentos', icon: <CloseCircleOutlined />, get: (k) => fmtPct(k.total ? k.cancel / k.total : 0), color: COLORS.destructive },
  { label: 'Produtividade Média', icon: <RiseOutlined />, get: (k) => fmtPct(k.prod), color: COLORS.success },
];

function multiSelOnChange(vals, current, set) {
  if (!vals.length) return set(['all']);
  if (vals.includes('all')) {
    if (current.includes('all')) return set(vals.filter((v) => v !== 'all'));
    return set(['all']);
  }
  set(vals);
}

function HeaderBar({ DASH, clientes, motoristas, statuses, filters, set, hasFilter }) {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const dimLabel = DIM_LABEL[location.pathname.includes('motoristas') ? 'motorista' : 'cliente'];

  const navItems = [
    { key: '/clientes', icon: <TeamOutlined />, label: <Link to="/clientes">Clientes</Link> },
    { key: '/motoristas', icon: <CarOutlined />, label: <Link to="/motoristas">Motoristas</Link> },
  ];

  return (
    <Header className="header">
      <div className="nav-brand">
        <Button
          className="nav-burger"
          icon={<MenuOutlined />}
          onClick={() => setNavOpen(true)}
          aria-label="Abrir menu de navegação"
        />
        <img src="/distribuicao/logo-3zx.png" alt="Logo 3ZX" className="nav-logo" />
        <div className="nav-wordmark">
          <span className="nav-eyebrow">3ZX Logística · {dimLabel.many}</span>
          <Typography.Title level={3} className="nav-title" style={{ color: '#fff' }}>Follow Distribuição</Typography.Title>
        </div>
      </div>
      {DASH && (
        <div className="filters">
          <Select
            size="middle"
            style={{ minWidth: 175 }}
            mode="multiple"
            maxTagCount={1}
            value={filters.cliente}
            onChange={(v) => multiSelOnChange(v, filters.cliente, set.cliente)}
            showSearch
            placeholder="Clientes: Todos"
            options={[{ value: 'all', label: 'Todos os clientes' }, ...clientes.map((c) => ({ value: c, label: c }))]}
          />
          <Select
            size="middle"
            style={{ minWidth: 175 }}
            mode="multiple"
            maxTagCount={1}
            value={filters.motorista}
            onChange={(v) => multiSelOnChange(v, filters.motorista, set.motorista)}
            showSearch
            optionFilterProp="label"
            placeholder="Motoristas: Todos"
            options={[{ value: 'all', label: 'Todos os motoristas' }, ...motoristas.map((m) => ({ value: m, label: m }))]}
          />
          <Select
            size="middle"
            style={{ minWidth: 160 }}
            mode="multiple"
            maxTagCount={1}
            value={filters.status}
            onChange={(v) => multiSelOnChange(v, filters.status, set.status)}
            placeholder="Status: Todos"
            options={[{ value: 'all', label: 'Todos os status' }, ...statuses.map((s) => ({ value: s, label: s }))]}
          />
          <RangePicker
            value={filters.range}
            onChange={(r) => set.range(r)}
            allowEmpty={[true, true]}
            placeholder={['De', 'Até']}
            size="middle"
          />
          {hasFilter && (
            <Button icon={<ReloadOutlined />} onClick={set.reset} size="middle">
              Limpar
            </Button>
          )}
        </div>
      )}
      <Drawer
        title="Follow Distribuição"
        placement="left"
        open={navOpen}
        onClose={() => setNavOpen(false)}
        width={260}
        className="nav-drawer"
      >
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={navItems}
          onClick={() => setNavOpen(false)}
        />
      </Drawer>
    </Header>
  );
}

export default function DashboardView({ dim, DASH, updatedAt, loading, filters }) {
  const { cliente, motorista, status, range, set } = filters;

  const dataIni = range && range[0] ? range[0].format('YYYY-MM-DD') : '';
  const dataFim = range && range[1] ? range[1].format('YYYY-MM-DD') : '';
  const F = { cliente, motorista, status, dataIni, dataFim };

  const clientes = useMemo(
    () => (DASH?.clientes || []).filter((c) => c !== 'SEM CLIENTE'),
    [DASH]
  );
  const motoristas = useMemo(() => DASH?.motoristas || [], [DASH]);
  const statuses = useMemo(() => getStatuses(DASH), [DASH]);

  const agg = useAgg(DASH, F, dim);
  const drill = useDrill(DASH, F, dim);

  const hasFilter =
    !cliente.includes('all') || !motorista.includes('all') || !status.includes('all') || !!(dataIni || dataFim);

  const labels = DIM_LABEL[dim];
  const drillLimit = dim === 'motorista' ? 30 : undefined;

  if (loading || !DASH) {
    return (
      <Layout className="app-layout">
        <div className="header" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="nav-brand">
            <img src="/distribuicao/logo-3zx.png" alt="Logo 3ZX" className="nav-logo" />
            <div className="nav-wordmark">
              <span className="nav-eyebrow">3ZX Logistica</span>
              <Typography.Title level={3} className="nav-title" style={{ color: '#fff' }}>Follow Distribuicao</Typography.Title>
            </div>
          </div>
        </div>
        <Content className="app" style={{ display: 'grid', placeItems: 'center', minHeight: '60vh' }}>
          <Spin size="large" tip="Carregando dados..." />
        </Content>
      </Layout>
    );
  }

  return (
    <Layout className="app-layout">
      <HeaderBar
        DASH={DASH}
        clientes={clientes}
        motoristas={motoristas}
        statuses={statuses}
        filters={filters}
        set={set}
        hasFilter={hasFilter}
      />

      <Content className="app">
        <Row gutter={[SPACING.grid, SPACING.section]}>
          <KpiRow agg={agg} />
        </Row>

        <Row gutter={[SPACING.grid, SPACING.section]}>
          <Col xs={24} lg={12} className="reveal reveal-7">
            <StatusDonut agg={agg} statuses={statuses} />
          </Col>
          <Col xs={24} lg={12} className="reveal reveal-7">
            <DimBars agg={agg} dim={dim} />
          </Col>
          <Col xs={24} className="reveal reveal-8">
            <EvolucaoDiaria filters={F} DASH_DATA={DASH} />
          </Col>
        </Row>

        <Row gutter={[SPACING.grid, SPACING.section]}>
          <Col span={24} className="reveal reveal-8">
            <CrossTable agg={agg} dim={dim} dimList={dim === 'cliente' ? clientes : motoristas} statuses={statuses} selectedStatus={status} />
          </Col>
        </Row>

        <Row gutter={[SPACING.grid, SPACING.section]}>
          <Col xs={24} md={8} className="reveal reveal-8">
            <DrillCard
              title={`No Show por ${labels.one}`}
              icon={<span className="badge badge-warn">NS</span>}
              rows={drill.noShowQtd}
              ocorrencias={drill.noShowOcc}
              pctBase={agg.kpis.total || undefined}
              limit={drillLimit}
            />
          </Col>
          <Col xs={24} md={8} className="reveal reveal-8">
            <DrillCard
              title={`Atrasos na Origem por ${labels.one}`}
              icon={<span className="badge badge-red">AT</span>}
              rows={drill.atrasoQtd}
              ocorrencias={drill.atrasoOcc}
              pctBase={agg.kpis.total || undefined}
              limit={drillLimit}
            />
          </Col>
          <Col xs={24} md={8} className="reveal reveal-8">
            <DrillCard
              title={`Produtividade por ${labels.one}`}
              icon={<span className="badge badge-blue">PR</span>}
              isProd
              prodRows={drill.prodRows}
              ocorrencias={drill.prodOcc}
              limit={drillLimit}
            />
          </Col>
        </Row>
      </Content>

      <Footer className="footer">
        <Space split="⬢" size={12}>
          <span>Dados: {DASH.dataMin} ate {DASH.dataMax}</span>
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

function DimBars({ agg, dim }) {
  const labels = DIM_LABEL[dim];
  const option = useMemo(() => {
    const entries = Object.entries(agg.totalDim)
      .filter(([, v]) => v > 0)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 14)
      .reverse();
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
  }, [agg.totalDim]);

  return (
    <Card size="small" title={`Top 14 ${labels.many} por Cargas`} className="chart-card">
      <EChart option={option} className="echart" style={{ height: 300 }} />
    </Card>
  );
}

function EvolucaoDiaria({ filters, DASH_DATA }) {
  const option = useMemo(() => {
    const isAllCliente = filters.cliente.includes('all');
    const isAllMotorista = filters.motorista.includes('all');
    const isAllStatus = filters.status.includes('all');
    const inRange = (ds) => {
      if (filters.dataIni && ds < filters.dataIni) return false;
      if (filters.dataFim && ds > filters.dataFim) return false;
      return true;
    };

    const days = [];
    Object.entries(DASH_DATA.diario)
      .filter(([ds]) => inRange(ds))
      .sort((a, b) => a[0].localeCompare(b[0]))
      .forEach(([ds, dv]) => {
        let tot = 0;
        if (isAllCliente && isAllMotorista && isAllStatus) {
          tot = dv.tot_cliente ? Object.values(dv.tot_cliente).reduce((s, v) => s + v, 0) : 0;
        } else {
          Object.entries(dv.tripla || {}).forEach(([st, clMap]) => {
            if (!isAllStatus && !filters.status.includes(st)) return;
            Object.entries(clMap).forEach(([cl, moMap]) => {
              if (!isAllCliente && !filters.cliente.includes(cl)) return;
              Object.entries(moMap).forEach(([mo, n]) => {
                if (!isAllMotorista && !filters.motorista.includes(mo)) return;
                tot += n;
              });
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
          return `${p.axisValue}<br/><span style="color:#93C5FD"></span> <b style="font-family:'Fira Code',monospace">${fmtNum(p.value)}</b> cargas`;
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
  }, [filters.cliente, filters.motorista, filters.status, filters.dataIni, filters.dataFim, DASH_DATA]);

  return (
    <Card size="small" title="Evolução Diária de Cargas" className="chart-card">
      <EChart option={option} className="echart" style={{ height: 260 }} />
    </Card>
  );
}

// ===== Tabela Cruzada (antd Table) =====
function CrossTable({ agg, dim, dimList, statuses, selectedStatus }) {
  const labels = DIM_LABEL[dim];
  const withData = dimList.filter((c) => (agg.totalDim[c] || 0) > 0);
  // Cliente (19 colunas): lista completa. Motorista (488): cap de 30 por volume.
  const sorted = dim === 'motorista'
    ? [...withData].sort((a, b) => (agg.totalDim[b] || 0) - (agg.totalDim[a] || 0))
    : withData;
  const capped = dim === 'motorista' ? sorted.slice(0, 30) : sorted;
  const note =
    capped.length < sorted.length ? (
      <div className="cross-table-note">
        Mostrando os {capped.length} {labels.many.toLowerCase()} com mais cargas ({fmtNum(sorted.length)} no total) — use os filtros para refinar.
      </div>
    ) : null;

  // Mostra todos os status que existem na planilha (statuses = globais com total > 0).
  // Com filtro de cliente/data, linhas zeradas permanecem visíveis com 0.
  // Com filtro de status específico, mostra só os selecionados.
  const sel = Array.isArray(selectedStatus) ? selectedStatus : ['all'];
  const isAllSel = sel.includes('all');
  const stList = isAllSel ? [...statuses] : statuses.filter((s) => sel.includes(s));

  const columns = [
    {
      title: `Status \\ ${labels.one}`,
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
    ...capped.map((c) => ({
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
        row.__status === 'Total' ? agg.kpis.total : (agg.totalStatus[row.__status] || 0),
    },
  ];

  const data = stList.map((st) => {
    const row = { __status: st, key: st };
    capped.forEach((c) => (row[c] = agg.cruzada[st]?.[c] || 0));
    return row;
  });

  const totalRow = {
    __status: 'Total',
    key: '__total',
    ...Object.fromEntries(capped.map((c) => [c, agg.totalDim[c] || 0])),
  };

  return (
    <Card size="small" title={`Cargas por ${labels.one} // Status`} className="table-card">
      {note}
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
