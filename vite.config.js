import { defineConfig } from 'vite';
import { resolve } from 'path';
import htmlPurge from 'vite-plugin-purgecss';

export default defineConfig({
  base: '/no-focus',
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../build',
    emptyOutDir: true,
  },
  plugins: [htmlPurge()],
});
