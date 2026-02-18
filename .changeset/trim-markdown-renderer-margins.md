---
'@autoguru/overdrive': patch
---

Remove excessive top/bottom margins on first/last children inside MarkdownRenderer

The MarkdownHeading component applies `mt="5"` to all headings, which creates
unwanted spacing when a heading is the first element rendered. This adds
`globalStyle` rules to the MarkdownRenderer root to strip `margin-top` from
the first child and `margin-bottom` from the last child, ensuring the
component sits flush within its container.
