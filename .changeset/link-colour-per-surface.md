---
'@autoguru/overdrive': minor
---

Derive the tenant `linkColor` per surface instead of writing it verbatim.

`colorOverrides.linkColor` reaches the app as a single inline CSS var on the
provider, so one value had to serve both a white page and a `gray900` header —
and no colour clears 4.5:1 on both. A brand supplied as a button fill (a colour
picked to sit *behind* white text) could land as low as 1.6:1 as link text.
Because `focusOutline` reads the same token, that also took every focus ring in
the library below WCAG 1.4.11.

`useColorOverrides` now shades the supplied colour away from each surface until
it clears 4.5:1, preserving hue: a light brand darkens for pale surfaces and is
left alone for dark ones, a dark brand does the reverse. A brand already legible
on a surface is passed through untouched. If a hue cannot get there without
ceasing to be the brand, that side keeps the theme's own link colour and warns
in development.

New `color.interactive.linkOnDark` token holds the dark-surface value; its base
value is the current link colour, so unbranded consumers are unchanged.

New `darkSurface` class (exported from `@autoguru/overdrive/styles`) opts a
dark-filled region into that value for its subtree — links and focus rings both
follow:

```tsx
<Box as="header" backgroundColor="gray900" color="white" className={darkSurface}>
```
