import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://novaraiz.netlify.app',
  integrations: [
    sitemap()
  ]
});
