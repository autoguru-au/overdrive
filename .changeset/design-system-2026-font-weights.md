---
'@autoguru/overdrive': minor
---

feat: add `medium` (500) font-weight and align `semiBold` to 600 (Design System 2026)

Rounds out the font-weight scale to match Design System 2026 (AG-20362):

- New **`medium` (500)** weight token, accepted by the `weight` prop of `<Text>`,
  `<Heading>`, `textStyles()` and `typography()`.
- **`semiBold` now maps to 600** (was 500), matching the Figma design system.
- Existing components that previously used `semiBold` (Button, Badge, TextLink,
  Slider labels, and MarkdownHeading `h4`–`h6`) were **repointed to `medium`**, so
  they render at the same 500 weight as before — **no visual change** to those
  components or to MFEs that consume them.
- Note: code that passes `weight="semiBold"` directly will now render at 600.
  Switch to `weight="medium"` to keep the previous 500 weight.

Weight scale is now `normal` 400 · `medium` 500 · `semiBold` 600 · `bold` 700.
