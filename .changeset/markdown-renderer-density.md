---
'@autoguru/overdrive': minor
---

Add `density` prop to MarkdownRenderer for compact widget contexts

Introduces a `density` prop (`'comfortable' | 'compact'`) to the
MarkdownRenderer component. When set to `'compact'`, typography is flattened
(headings become bold body-sized text) and spacing is tightened, reducing
vertical space by ~40-50%. This is optimised for constrained contexts such as
AI summary panels and sidebar widgets where the default page-level typography
is too dominant.

All sub-components (headings, paragraphs, lists, code blocks, blockquotes,
tables, horizontal rules) respond to the density context. Semantic HTML is
fully preserved — headings remain `<h1>`–`<h6>` regardless of density.
