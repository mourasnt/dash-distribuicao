import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // base relativo: assets usam caminhos relativos (./assets/...), então o app
  // funciona sob qualquer subpath do Kong, sem precisar saber a rota de antemão.
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
});
