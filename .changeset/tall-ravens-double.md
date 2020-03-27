---
'@autoguru/overdrive': patch
---

Inline: Supporting alignY responsive prop
StarRating: Consumes `<Inline />`

**FEATURES**

**`<Inline />`**

Now supports an alignY responsive prop to vertically center its items to either `top | center | bottom`, eg: `<Inline alignY="center">`

**`<StarRating />`**

Uses the `<Inline />` component instead of columns, so should use less DOM
