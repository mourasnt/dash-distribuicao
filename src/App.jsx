import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardView from './DashboardView.jsx';
import { useDashData } from './dataHooks.js';

// Filtros vivem no App (shell) para persistir ao alternar entre rotas.
function useFilters() {
  const [cliente, setCliente] = useState(['all']);
  const [motorista, setMotorista] = useState(['all']);
  const [status, setStatus] = useState(['all']);
  const [range, setRange] = useState(null);

  const reset = () => {
    setCliente(['all']);
    setMotorista(['all']);
    setStatus(['all']);
    setRange(null);
  };

  return {
    cliente,
    motorista,
    status,
    range,
    set: { cliente: setCliente, motorista: setMotorista, status: setStatus, range: setRange, reset },
  };
}

export default function App() {
  const { dash, updatedAt, loading } = useDashData();
  const filters = useFilters();

  const common = {
    DASH: dash,
    updatedAt,
    loading,
    filters,
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/clientes" replace />} />
      <Route path="/clientes" element={<DashboardView dim="cliente" {...common} />} />
      <Route path="/motoristas" element={<DashboardView dim="motorista" {...common} />} />
      <Route path="*" element={<Navigate to="/clientes" replace />} />
    </Routes>
  );
}
