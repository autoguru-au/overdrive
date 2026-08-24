---
'@autoguru/overdrive': minor
---

Add `StickyFooterModal`, a modal variant with a fixed header, scrollable body,
and sticky footer containing one or two CTAs. Supports `dual-cta` (default) and
`single-cta` layouts, auto-close on CTA click (opt out via `closeOnPrimary` /
`closeOnSecondary`), a scroll-shadow hint on the header when the body overflows,
and dialog a11y — focus trap, escape-to-close, `aria-labelledby` /
`aria-describedby`, `"Close dialog"` label, and a 48×48 close-× hit area.

Base `Modal` gains a document-level Escape handler (fires
`onRequestClose('escapeKeyDown')`), a symmetric enter/exit scale animation
(`styles.entry` now applies during `CLOSING` as well as `OPENING`),
`prefers-reduced-motion` gating on the whole transition rather than just the
transform, and unified 200ms timings.

`StandardModal` `min-height` bumped to 400px so short-body modals still look
intentional.
