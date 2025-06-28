import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://coderdojo-kitakata.com',
  base: '/',
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    css: {
      transformer: 'postcss'
    }
  }
});
