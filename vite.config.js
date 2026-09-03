import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // base absoluto com o prefixo fixo do Kong. O Kong usa strip_path (remove
  // /distribuicao antes de repassar ao nginx), então os assets servem da raiz no
  // nginx, enquanto o browser pede com o prefixo.
  base: '/distribuicao/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
});
