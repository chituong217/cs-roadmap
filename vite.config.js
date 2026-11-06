import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()], base: './',
  build: { rollupOptions: { output: { manualChunks(id) { if (id.includes('edition-content.js')) return 'units'; if (id.includes('/curriculum/') || id.includes('\\curriculum\\')) return 'curriculum'; if (id.includes('node_modules')) return 'vendor'; } } } },
});
