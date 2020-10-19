---
'@autoguru/overdrive': minor
---

Corrected types to be more type safe and accurate.

Notably `<Box>`. Seeing as we `createElement`, we fixed types to only allow
`IntrinsicElements | JSXElementConstructor`. As such, any `"button"` or
`TextLink` prop values will work. However, `<TextLink />` will not.
