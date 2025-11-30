import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',             // Astro genera solo file statici
  site: 'https://SPAZIO-GENESI.github.io/dutyfree',
  build: {
    outDir: 'docs',             // Cartella che pubblicheremo su GitHub Pages
  },
});
