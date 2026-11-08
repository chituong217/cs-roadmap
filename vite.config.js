import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: { main: 'index.html', legacy: 'legacy.html', map: 'map.html', reader: 'reader.html' },
      output: {
        manualChunks(rawId) {
          const id = rawId.replaceAll('\\', '/');
          if (id.includes('/syllabus/courses/')) return 'syllabus-' + id.split('/').pop().replace('.mjs', '');
          if (/\/syllabus\/catalog[^/]*\.mjs$/.test(id)) return 'syllabus-catalog';
          if (id.includes('/node_modules/katex/')) return 'math-renderer';
          if (id.includes('/node_modules/@xyflow/')) return 'legacy-flow';
          if (id.includes('edition-content.js')) return 'units';
          if (id.includes('/curriculum/')) return 'curriculum';
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
  },
});
