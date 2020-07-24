---
'@autoguru/overdrive': patch
---

Major refactor of how `treat` files get used in our project. Instead of a
redefinition of _shared_ styles such as margin/padding. We now instead prefer
the usage of `useBoxStyles` or the `Box` component.

There _should_ be no real regression in terms of usage api.
