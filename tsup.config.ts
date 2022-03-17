import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/gatsby-browser.ts'],
  minify: true,
  clean: true,
  sourcemap: true,
});
