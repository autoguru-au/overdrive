---
'@autoguru/overdrive': minor
---

Add `StepProgress`, the DS-2026 multi-step progress indicator, and the
`StepProgressItem` primitive it composes.

`StepProgress` shows the user where they are in a multi-step flow as a numbered
sequence joined by connectors. Progress is linear and driven entirely by
`activeStep` — the component holds no state, and there is deliberately no
"completed" appearance, so steps already visited look the same as steps ahead.

- `layout` runs the sequence `horizontal` (labels beneath) or `vertical` (labels
  beside), `size` switches between 32px and 24px circles, and `onDark` restyles
  it for a dark panel or hero.
- `hideLabels` drops the labels to assistive technology only for widths neither
  layout survives; the labels stay in the accessibility tree.
- Renders a `nav` landmark around an ordered list, with the current step's `<li>`
  marked `aria-current="step"`. The steps are not interactive — this reports
  position, it does not navigate.

Additive: a net-new export that consumes only DS-2026 semantic tokens. Nothing
existing changes.
