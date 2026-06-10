import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        industries: resolve(__dirname, 'industries/index.html'),
        'our-mission': resolve(__dirname, 'our-mission/index.html'),
        apply: resolve(__dirname, 'apply/index.html'),
        'request-crew': resolve(__dirname, 'request-crew/index.html'),
      }
    }
  }
});
