import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://insposoft.com',
  output: 'static',
  build: {
    format: 'directory',
  },
});
