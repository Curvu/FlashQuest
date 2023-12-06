import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 3000,
  },
  define: {
    'process.env': {},
  },
  resolve: {
    alias: {
      hooks: '/src/hooks',
      api: '/src/api',
      utils: '/src/utils',
      pages: '/src/pages',
      components: '/src/components',
      assets: '/src/assets',
      fonts: '/src/assets/fonts',
      styles: '/src/styles',
    },
  },
});
