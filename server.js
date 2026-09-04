import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { fetchData } from './fetch_sheets.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 80;
const POLL_INTERVAL = 15_000;

const app = express();

let cache = null;
let lastUpdate = null;
let fetching = false;

async function refreshData() {
  if (fetching) return;
  fetching = true;
  try {
    const data = await fetchData();
    cache = data;
    lastUpdate = new Date().toISOString();
    console.log(`[sheets] Dados atualizados em ${lastUpdate} — ${data.kpis.total} registros`);
  } catch (err) {
    console.error(`[sheets] Erro ao buscar dados: ${err.message}`);
  } finally {
    fetching = false;
  }
}

app.get('/api/data', (_req, res) => {
  if (!cache) {
    return res.status(503).json({ error: 'Dados ainda não disponíveis' });
  }
  res.json({ data: cache, updatedAt: lastUpdate });
});

app.use(express.static(join(__dirname, 'dist'), {
  index: 'index.html',
  maxAge: '1y',
  setHeaders(res, filePath) {
    if (filePath.endsWith('.html')) {
      res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    }
  },
}));

app.get('*', (_req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

await refreshData();
setInterval(refreshData, POLL_INTERVAL);

app.listen(PORT, () => {
  console.log(`[server] Escutando na porta ${PORT}`);
});
