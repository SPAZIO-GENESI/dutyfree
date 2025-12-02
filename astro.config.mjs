import { defineConfig } from 'astro/config';
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: 'static',
  
  outDir: 'docs',        // <-- qui, non dentro build
  publicDir: 'public',    // <-- qui, non dentro build

  site: "https://dutyfree.spaziogenesi.org", // URL pubblico del sito
  integrations: [sitemap()],
});