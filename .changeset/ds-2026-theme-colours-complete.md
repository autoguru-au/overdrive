---
"@autoguru/overdrive": minor
---

feat: complete DS 2026 theme colour tokens to match Figma (AG-20362)

Aligns the code's `color.*` theme tokens with the finalised Figma "Theme
colours" collection (naming and structure decisions confirmed with design),
and rebuilds the Foundation → Theme Colours Storybook page to mirror Figma's
groups 1:1.

- `color.foreground`: `tertiaryInactive` → `tertiary`, `tertiaryInactiveLight`
  → `placeholder`.
- `color.focus`: new group with `ring`.
- Feedback statuses now share one structure — `info`/`alert` gain a
  `backgroundStrong` + `backgroundSubtle` pair (was a single `background`);
  `success`/`warning` renamed `backgroundDark`/`backgroundLight` →
  `backgroundStrong`/`backgroundSubtle`.
- `color.button`: solid gains a `pressed` fill and outlined gains a `text`
  colour (the shipped `border` keys are unchanged); new `disabled.{fill,text}`.
- `color.link`: new top-level group (lifted out of `button.linkedText`). Link
  hover/pressed — and their critical variants — were swapped so hover darkens
  relative to pressed.
- `color.illustration`: new group (bright/dark side, fills, outline, shadow,
  white, yellow accents).

Only the `foreground` and feedback-`background` renames touch tokens that
actually shipped (v4.60.0, still in v4.61.0): `--od-color-foreground-tertiary-inactive`/`-light`
→ `-tertiary`/`-placeholder`, and `--od-color-{success,warning}-background-{dark,light}`
plus `--od-color-{info,alert}-background` → `…-background-{strong,subtle}`. These
have no consumers in this repo or the MFE monorepo (verified), so this ships as a
`minor` under the DS-2026 preview-token convention (preview `color.*` tokens may
be renamed within the major). Everything else is additive or net-new — `focus.ring`,
`button.{pressed,text,disabled}`, and the `link` and `illustration` groups (the
intermediate `borderPressed`/`borderText`/`linkedText` names only ever existed on
this in-flight branch, never in a release). Component snapshots were regenerated
for shifted vanilla-extract atom class names — no behavioural change.
