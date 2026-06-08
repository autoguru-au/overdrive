# AutoGuru Design System 2026 (WIP) — Figma notes

**Source:** https://www.figma.com/design/ZkQlQcJkF7NTnZomVrPRN5/AutoGuru-Design-System-2026--WIP-?node-id=1-304
**File key:** `ZkQlQcJkF7NTnZomVrPRN5`
**Node:** `1:304` (top-level overview canvas, ~15900×9823px)
**Captured:** 2026-06-08

## What the board contains (overview-zoom — detail not yet read precisely)

| Section | Notes |
| --- | --- |
| Brand | AutoGuru "ag" logo mark / lockup |
| Colour palette | Swatch grid — greys, greens, yellow + accent rows |
| Typography | "This is Averta Std" specimen + type scale |
| Buttons / form controls | Component column (left-centre) |
| Grid / layout | Red column-grid overlay frames |
| Iconography | Large icon library grid (hundreds of glyphs, categorised) |
| Illustrations / spot icons | Colourful illustration row (pink banner) |
| Vehicle imagery | Long catalogue of car renders by make/colour + colour-chip legend |
| Callout / notes cards | Dark cards scattered across the top |

> To extract exact values, re-pull individual section nodes at higher `maxDimension`
> (or use `get_variable_defs` / `get_design_context` per frame).

## Current Overdrive theme/CSS structure (impact surface)

Styling = **Vanilla Extract** + **Sprinkles**. Tokens are typed via `ThemeTokens`.

- `lib/themes/base/colours.ts` — raw `colourMap`: `black/gray/green/blue/yellow/red`
  each with `100–900` scale, plus `white`. **This is the single source of hex values.**
- `lib/themes/base/tokens.ts` — semantic tokens built FROM `colourMap`:
  - `space` (4/8/12/16/20/24/32/48/96px), `contentWidth`
  - `color.surface / content / interactive` (newer semantic layer)
  - `colours.intent.*` (primary/brand/secondary/shine/danger/warning/neutral/success/information)
  - `elevation` 1–5, `border.width/colours/radius`
  - `typography.size` 1–9 (10→40px), `typography.colour`, `fontFamily: AvertaStandard`, `fontWeight`
  - `animation.easing`, `icon.size` (16/20/32), `opacity`
- `lib/themes/{neutral,flat_red}/tokens.ts` — theme variants (override base)
- `lib/themes/theme.css.ts` — `ThemeTokens` type / contract + `createTheme` vars
- `lib/styles/sprinkles.css.ts` — sprinkles atoms generated from the token scales

## How the 2026 design likely affects them.css / tokens

1. **Colour palette → `base/colours.ts`** — new palette = edit `colourMap` hex values
   and/or add scales. If steps change (e.g. different 100–900), every semantic token
   that references them updates transitively. Variant themes (neutral, flat_red) must
   be reconciled.
2. **Semantic colour layer → `base/tokens.ts`** — the new DS may reorganise intents /
   surface-content-interactive groupings. Mapping change > value change in effort.
3. **Typography → `tokens.ts typography`** — confirm font is still Averta Std; check
   if the type scale (sizes/line-heights/weights) matches the new specimen.
4. **Spacing / radius / elevation → `tokens.ts`** — verify the 4px-based space scale,
   radius set, and shadow elevations still match.
5. **Sprinkles → `lib/styles/sprinkles.css.ts`** — regenerates from token scales; if
   scale KEYS change (not just values) the sprinkles atoms + any consuming components change.
6. **Iconography / illustrations / vehicle imagery** — asset-level, largely outside
   the token files (separate icon package / assets), but icon `size` tokens may shift.

### Lowest-risk path
Value-only changes (same token keys, new hex/px) ripple automatically and are cheap.
Structural changes (renamed/added/removed token keys) are the expensive ones — they
touch `ThemeTokens`, all theme variants, sprinkles, and component code.

