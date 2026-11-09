import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // À changer quand tu auras ton nom de domaine (ex. https://dojo-maison.fr)
  site: 'https://grappling-maison.c-l-c.workers.dev',
  build: { format: 'file' },
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !page.includes('mentions-legales') })],
});
