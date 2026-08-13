import katex from 'katex';

const INLINE_MATH = /\$([^$\n]+)\$/g;

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * Renders `$...$` segments in short frontmatter strings (proposition text,
 * step text) through KaTeX. Longer-form markdown bodies are instead run
 * through Astro's own remark-math/rehype-katex pipeline (astro.config.mjs) —
 * this is for the plain strings that pipeline never touches.
 */
export function renderInlineMath(input: string): string {
  let result = '';
  let lastIndex = 0;
  for (const match of input.matchAll(INLINE_MATH)) {
    const [full, expr] = match;
    const index = match.index ?? 0;
    result += escapeHtml(input.slice(lastIndex, index));
    try {
      result += katex.renderToString(expr, { throwOnError: false, output: 'html' });
    } catch {
      result += escapeHtml(full);
    }
    lastIndex = index + full.length;
  }
  result += escapeHtml(input.slice(lastIndex));
  return result;
}
