# Foundation — Shadows (W1-P3 Spec)

Source: Figma file `ZkQlQcJkF7NTnZomVrPRN5` ("AutoGuru Design System 2026"),
node `360:12800` ("Borders & shadows"). Values pulled via `get_variable_defs`
(bound effect variables), not drawn text labels, and cross-checked against the
Tailwind `box-shadow` output Figma's own design-context generator produced for
the S / M / L / XL example instances on that frame (which use `Shadow/z1..z4`
directly).

All layers use pure black (`#000000`) at two alpha steps: hex `0D` = 5%
(`0.05`) and hex `08` = 3% (`0.03`).

## Ready-to-paste CSS `box-shadow` strings

```
z1: 0px 1px 5px 0px rgba(0,0,0,0.03), 0px 2px 2px 0px rgba(0,0,0,0.03), 0px 3px 1px -2px rgba(0,0,0,0.05)
z2: 0px 1px 10px 0px rgba(0,0,0,0.03), 0px 4px 5px 0px rgba(0,0,0,0.03), 0px 2px 4px -1px rgba(0,0,0,0.05)
z3: 0px 3px 14px 2px rgba(0,0,0,0.03), 0px 8px 10px 1px rgba(0,0,0,0.03), 0px 5px 5px -3px rgba(0,0,0,0.05)
z4: 0px 6px 30px 5px rgba(0,0,0,0.03), 0px 16px 24px 2px rgba(0,0,0,0.03), 0px 8px 10px -5px rgba(0,0,0,0.05)
```

## Per-layer breakdown (bound effect variables, `Shadow/z1..z4`)

Layers below are listed in the order Figma's effect list returns them
(`get_variable_defs`); the CSS strings above render them in reverse order
(tightest/lowest-y layer first), matching exactly how Figma's own
design-context tool converted the same effect styles when applied to the S/M/L/XL
example shapes on this frame.

| Token | Layer | x | y | blur (radius) | spread | colour |
|---|---|---|---|---|---|---|
| `z1` | 1 | 0 | 3 | 1 | -2 | `rgba(0,0,0,0.05)` |
| `z1` | 2 | 0 | 2 | 2 | 0 | `rgba(0,0,0,0.03)` |
| `z1` | 3 | 0 | 1 | 5 | 0 | `rgba(0,0,0,0.03)` |
| `z2` | 1 | 0 | 2 | 4 | -1 | `rgba(0,0,0,0.05)` |
| `z2` | 2 | 0 | 4 | 5 | 0 | `rgba(0,0,0,0.03)` |
| `z2` | 3 | 0 | 1 | 10 | 0 | `rgba(0,0,0,0.03)` |
| `z3` | 1 | 0 | 5 | 5 | -3 | `rgba(0,0,0,0.05)` |
| `z3` | 2 | 0 | 8 | 10 | 1 | `rgba(0,0,0,0.03)` |
| `z3` | 3 | 0 | 3 | 14 | 2 | `rgba(0,0,0,0.03)` |
| `z4` | 1 | 0 | 8 | 10 | -5 | `rgba(0,0,0,0.05)` |
| `z4` | 2 | 0 | 16 | 24 | 2 | `rgba(0,0,0,0.03)` |
| `z4` | 3 | 0 | 6 | 30 | 5 | `rgba(0,0,0,0.03)` |

## Y-offset cross-check

The plan's known/expected y-offset set was:

- z1: `3, 2, 1` (x=0)
- z2: `2, 4, 1`
- z3: `5, 8, 3`
- z4: `8, 16, 6`

Figma's bound effect variables returned, **in the same layer order**:

- z1: `3, 2, 1` — **match**
- z2: `2, 4, 1` — **match**
- z3: `5, 8, 3` — **match**
- z4: `8, 16, 6` — **match**

**Result: no discrepancy.** All four tokens' y-offsets agree exactly with the
plan's known set, in the same per-layer order. Safe to proceed with the
blur/spread/rgba values captured above.

## Motion-duration / focus-ring variable check

Checked node `360:12800` ("Borders & shadows", contains the shadow effects)
plus `360:12801` ("Hair lines") and `360:12802` ("Spacing", which also hosts
the breakpoints/device-size reference) via `get_variable_defs` on each node.

**No motion-duration variables and no dedicated focus-ring variables exist on
any of these three nodes.** The full variable set bound within these frames
is limited to: grey/white colour swatches (`Grey/200..900`, `White`),
typography styles (`H3`, `H4`), spacing (`space/16`, `space/20`, `space/3`),
border-radius (`border/radius/*`), and the four `Shadow/z1..z4` effect
variables documented above. Nothing named `motion`, `duration`, `transition`,
`focus`, or `ring` was returned. Confirms the expected "none" outcome — motion
and focus-ring tokens are not sourced from this part of the Figma file.
