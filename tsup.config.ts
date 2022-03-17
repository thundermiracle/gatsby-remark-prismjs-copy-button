import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/gatsby-browser.ts'],
  injectStyle: true,
  platform: 'browser',
  minify: true,
  clean: true,
  sourcemap: true,
});
