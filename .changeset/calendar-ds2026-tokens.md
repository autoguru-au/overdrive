---
'@autoguru/overdrive': patch
---

Calendar: finish the DS-2026 token repoint. Replace the last legacy reference,
`border.colours.light`, with `color.interactive.borderMuted` on the disabled
nav-button border (gray200 `#eef0f2` in base, neutral and flat_red — the
semantic key is not tenant-overridden, so the computed value is identical in
all three themes), and rename `borderRadius: 'md'` to the DS-2026 `small` on
day cells and nav buttons (same 8px in base/neutral; both resolve to `none`
under flat_red).

Pixel-neutral in every theme. Blast radius: Calendar and its only consumer,
DatePicker.
