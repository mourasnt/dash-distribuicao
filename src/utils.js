export const COLORS = {
  primary: '#2563EB',
  secondary: '#3B82F6',
  accent: '#22C55E',
  destructive: '#DC2626',
  success: '#22C55E',
  warning: '#D97706',
  muted: '#E9EFF8',
  text: '#1E40AF',
  textMuted: '#64748B',
};

export const STATUS_COLORS = {
  'ENTREGAS FINALIZADAS': '#22C55E',
  'CANCELADO PELO CLIENTE': '#DC2626',
  'NO SHOW': '#D97706',
  BACKUP: '#3B82F6',
  QUEBROU: '#6D28D9',
  'EM TRANSITO': '#0891B2',
  'MOTORISTA AGENDADO': '#2563EB',
  'A CAMINHO DO CD': '#EA580C',
  'SEM STATUS': '#94A3B8',
};

export function fmtPct(v) {
  if (v === null || v === undefined || isNaN(v)) return '—';
  return `${(v * 100).toFixed(1)}%`;
}

export function fmtNum(v) {
  if (v === null || v === undefined) return '—';
  return Number(v).toLocaleString('pt-BR');
}

// Espelho dos tokens de espaçamento do styles.css (:root).
// JS não lê CSS vars — manter sincronizado.
export const SPACING = {
  section: 20, // --gap-section — entre seções (Row gutter vertical)
  grid: 16, // --gap-grid — entre colunas (Row gutter horizontal)
  inline: 8, // --gap-inline — ícone/texto, chips
  list: 8, // --gap-list
  tight: 4, // --gap-tight
  // aliases usados em JSX
  gapGrid: 16,
  gapSection: 20,
  gapInline: 8,
};

export function shortName(name) {
  if (!name) return '';
  const parts = name.split(' ');
  let out = parts[0] || '';
  for (let i = 1; i < parts.length && out.length < 16; i++) {
    out += ' ' + parts[i][0] + '.';
  }
  return out;
}

const AVATAR_HUES = [222, 262, 198, 168, 18, 342, 288, 148, 96, 46];

export function clientColor(name) {
  let h = 0;
  const s = name || '?';
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  const hue = AVATAR_HUES[h % AVATAR_HUES.length];
  return {
    bg: `linear-gradient(135deg, hsl(${hue} 78% 52%), hsl(${hue} 70% 40%))`,
    hsl: hue,
  };
}

export function initials(name) {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
