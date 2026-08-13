// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Fully static output for Cloudflare Pages — no adapter needed. The one
// dynamic route (/random) is a standalone Cloudflare Pages Function in
// functions/random.js, independent of Astro's own build.
// https://astro.build/config
export default defineConfig({
  site: 'https://hypotenuse.pages.dev',
  output: 'static',
  trailingSlash: 'never',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, { throwOnError: false }]],
  },
});
