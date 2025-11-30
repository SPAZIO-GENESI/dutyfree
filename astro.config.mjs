import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://SPAZIO-GENESI.github.io/dutyfree',
  build: {
    outDir: 'docs',      // cartella che GitHub Pages pubblica
    publicDir: 'public', // qui metti index.html
  },
});
