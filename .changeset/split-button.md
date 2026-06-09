---
'@autoguru/overdrive': minor
---

Add `SplitButton`: a button that pairs a primary action with a dropdown menu of related secondary actions. The left segment triggers the primary action while the chevron on the right opens a menu of `DropDownOption` children. Both segments share a single `variant`/`size`.

It composes existing primitives (`Button`, `Flyout`, `DropDownOptionsList`, `DropDownOption`) and follows the WAI-ARIA split button pattern: two independent buttons in a `role="group"`, with the trigger exposing `aria-haspopup`/`aria-expanded` and Escape-to-close.

`Button` was also extended to accept and forward `onKeyDown` and the `aria-controls`/`aria-expanded`/`aria-haspopup` attributes, which menu and disclosure patterns require. This is additive and backwards compatible.
