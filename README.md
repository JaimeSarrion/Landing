# jsarrion.es

Portfolio and CV of Jaime Sarrión. Static site built with [Astro](https://astro.build): plain HTML, one inlined stylesheet, a self-hosted subset font and a few lines of JS (project tabs and the phone menu).

- Content: `src/data/content.ts`
- Page: `src/pages/index.astro`
- Styles: `src/styles/global.css`
- Product brief: `PRODUCT.md`

```bash
pnpm install
pnpm dev       # local server
pnpm build     # static output in build/ (deployed by .github/workflows/deploy.yml)
```
