import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/gatsby-browser.ts'],
  outDir: '.',
  injectStyle: true,
  platform: 'browser',
  minify: true,
  sourcemap: true,
});
