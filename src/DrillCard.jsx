import { useState } from 'react';
import { Card, Empty, Flex, Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { fmtPct, clientColor, initials, SPACING } from './utils.js';

const { Text } = Typography;

function OcorrenciasDetail({ cliente, occ }) {
  const total = occ.reduce((s, [, n]) => s + n, 0);
  return (
    <div className="dcard-detail">
      <div className="dcard-detail-header">
        <Text strong>{cliente}</Text>
        <Text type="secondary">{total} ocorrências</Text>
      </div>
      <ul className="ocorrencias-list">
        {occ.map(([tipo, n]) => (
          <li key={tipo} className="ocorrencia-item">
            <span className="ocorrencia-tipo">{tipo}</span>
            <span className="ocorrencia-qtd num">{n}</span>
          </li>
        ))}
        {occ.length === 0 && (
          <li className="ocorrencia-item"><span className="ocorrencia-tipo">Sem ocorrências</span></li>
        )}
      </ul>
    </div>
  );
}

function OcorrenciaPanel({ isOpen, cliente, ocorrencias }) {
  return (
    <div className={`dcard-detail-wrap${isOpen ? ' open' : ''}`}>
      <div className="dcard-detail-inner">
        {isOpen && <OcorrenciasDetail cliente={cliente} occ={ocorrencias} />}
      </div>
    </div>
  );
}

export default function DrillCard({
  title,
  icon,
  rows,
  ocorrencias,
  pctBase,
  isProd,
  prodRows,
  filterCliente,
  extra,
}) {
  const [openClient, setOpenClient] = useState(null);
  const toggle = (cl) => setOpenClient(openClient === cl ? null : cl);

  const renderRow = (cl, share, rightCells) => {
    const isOpen = openClient === cl;
    const occ = Object.entries((ocorrencias && ocorrencias[cl]) || {}).sort(
      (a, b) => b[1] - a[1]
    );
    const cc = clientColor(cl);
    return (
      <div key={cl} className="dcard-cliente">
        <button
          className="dcard-row"
          onClick={() => toggle(cl)}
          aria-expanded={isOpen}
        >
          <span className="avatar" style={{ background: cc.bg }} aria-hidden="true">
            {initials(cl)}
          </span>
          <span className="dcard-name">{cl}</span>
          {rightCells}
          <DownOutlined className="dcard-chevron" rotate={isOpen ? 0 : -90} style={{ fontSize: 11 }} />
        </button>
        <span className="sharebar" aria-hidden="true">
          <i style={{ width: `${Math.min(share * 100, 100)}%`, background: `hsl(${cc.hsl} 70% 48%)` }} />
        </span>
        <OcorrenciaPanel isOpen={isOpen} cliente={cl} ocorrencias={occ} />
      </div>
    );
  };

  if (isProd) {
    let entries = Object.entries(prodRows || {}).sort((a, b) => b[1].paradas - a[1].paradas);
    if (filterCliente && filterCliente !== 'all') {
      entries = entries.filter(([cl]) => cl === filterCliente);
    }
    const totalParadas = entries.reduce((s, [, v]) => s + v.paradas, 0);
    const mediaGlobal =
      entries.length > 0
        ? entries.reduce((s, [, v]) => s + v.produtividade * v.paradas, 0) / (totalParadas || 1)
        : 0;

    return (
      <Card
        size="small"
        title={
          <Flex align="center" gap={SPACING.inline}>
            {icon}
            <span>{title}</span>
          </Flex>
        }
        extra={extra}
        className="dcard"
      >
        <div className="dcard-kpis">
          <div className="mini-kpi">
            <span>Paradas</span>
            <strong className="num">{totalParadas.toLocaleString('pt-BR')}</strong>
          </div>
          <div className="mini-kpi">
            <span>Média</span>
            <strong className="num">{fmtPct(mediaGlobal)}</strong>
          </div>
        </div>
        <div className="dcard-list">
          {entries.map(([cl, v]) =>
            renderRow(cl, totalParadas ? v.paradas / totalParadas : 0, [
              <span key="sub" className="dcard-subinfo num">{fmtPct(v.produtividade)}</span>,
              <span key="qtd" className="dcard-qtd num">{v.paradas.toLocaleString('pt-BR')}</span>,
            ])
          )}
          {entries.length === 0 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Sem dados" />}
        </div>
      </Card>
    );
  }

  const entries = Object.entries(rows || {}).sort((a, b) => b[1] - a[1]);
  const totalQtd = entries.reduce((s, [, v]) => s + v, 0);

  return (
    <Card
      size="small"
      title={
        <Flex align="center" gap={SPACING.inline}>
          {icon}
          <span>{title}</span>
        </Flex>
      }
      extra={extra}
      className="dcard"
    >
      <div className="dcard-kpis">
        <div className="mini-kpi">
          <span>Quantidade</span>
          <strong className="num">{totalQtd.toLocaleString('pt-BR')}</strong>
        </div>
        <div className="mini-kpi">
          <span>%</span>
          <strong className="num">{pctBase ? fmtPct(totalQtd / pctBase) : '—'}</strong>
        </div>
      </div>
      <div className="dcard-list">
        {entries.map(([cl, qtd]) =>
          renderRow(cl, totalQtd ? qtd / totalQtd : 0, [
            <span key="qtd" className="dcard-qtd num">{qtd.toLocaleString('pt-BR')}</span>,
          ])
        )}
        {entries.length === 0 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Sem dados" />}
      </div>
    </Card>
  );
}
