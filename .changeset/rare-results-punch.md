---
'@autoguru/overdrive': minor
---

Expands theme contract to include new 'color' tokens (work in progress), without
removing existing. Both are documented in Storybook.

**Breaking change** type of the theme tokens object `Tokens` has been renamed to
`ThemeTokens` for clarity.

Replaces local (namespaced) css variables with un-namespaced vars in all themes.
Theme tokens are now assigned to a css layer. And vanilla-extract tokens can be
imported as `overdriveTokens` but using `themeContractVars` will continue to
work.
