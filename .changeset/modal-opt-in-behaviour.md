---
'@autoguru/overdrive': patch
---

`Modal`: add opt-in `lockScroll` and `closeOnEscapeKeyDown` props.

- `lockScroll` (default `false`) locks page scroll while the modal is open,
  reserving the scrollbar-gutter width as `body` `padding-right` so the page
  underneath does not shift. Previous `body` `overflow` and `padding-right` are
  captured on open and restored on close/unmount.
- `closeOnEscapeKeyDown` (default `false`) attaches a document-level `keydown`
  listener while the modal is open and dispatches
  `onRequestClose('escapeKeyDown')` on `Escape`.

`StandardModal` and `MinimalModal` migrate to the new opt-ins and drop their
duplicated `useLayoutEffect` scroll-lock blocks. Consumers see no behavioural
change: both still lock scroll when open, and now support Escape-to-close
without any prop changes.
