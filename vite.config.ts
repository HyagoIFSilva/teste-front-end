import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api/produtos': {
        target: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json',
        changeOrigin: true,
        rewrite: () => '',
      },
    },
  },
});
