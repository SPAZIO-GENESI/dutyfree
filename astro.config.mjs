import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://SPAZIO-GENESI.github.io/dutyfree',
  outDir: 'docs',        // <-- qui, non dentro build
  publicDir: 'public'    // <-- qui, non dentro build
});
