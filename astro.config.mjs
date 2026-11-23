import { defineConfig } from 'astro/config';

// Static output only: plain HTML, one inlined stylesheet, no framework runtime in the browser.
export default defineConfig({
  site: 'https://jsarrion.es',
  outDir: './build',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
    format: 'file',
  },
  devToolbar: { enabled: false },
});
