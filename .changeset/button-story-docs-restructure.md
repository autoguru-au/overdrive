---
'@autoguru/overdrive': major
---

feat(Button)!: restyle the DS-2026 variants to match Figma, and restructure the
stories (AG-20713)

**Breaking: `primary`, `secondary` and `danger` change appearance everywhere.**
No API changes — no prop removed, renamed or retyped — but the rendered output
of three variants moves onto the Figma DS-2026 button classes.

| `variant`   | Figma class        | before → after                                                                              |
| ----------- | ------------------ | ------------------------------------------------------------------------------------------- |
| `primary`   | Primary Solid      | dark green `#01C68C` fill / white label → mint `#71EDC2` fill / near-black `#212338` label  |
| `secondary` | Secondary Outlined | white fill → transparent, border holds `#D4D9DD` through hover instead of tracking the fill |
| `danger`    | Critical Solid     | `#D42B26` → `#E12E28`                                                                       |

`primary` is the dramatic one: it inverts from a dark fill with a light label to
a light fill with a dark label.

**Hover and press are now separate states.** They were collapsed into one
selector, so pressed looked identical to hover. Each now takes its own fill.

**Buttons gain elevation**, which they never had: `z2` at rest, `z3` hovered,
`z1` pressed, none once disabled — matching Figma, and mapping onto the existing
`elevation.z*` tokens. `outlined` and `minimal` carry no elevation, per Figma.

The loading spinner on `primary` now uses the dark treatment. On the old dark
fill a white spinner was correct; on the new mint fill it measured about 1.4:1
and was effectively invisible.

**Geometry and label type now match Figma.** Every size gains an explicit height
and the label's own line height in place of `line-height: 1`, and each value
below was read off the Figma frame:

| `size`   | Figma class   | height                   | padding             | gap           | radius        |
| -------- | ------------- | ------------------------ | ------------------- | ------------- | ------------- |
| `medium` | `Large`       | 48px → **46px**          | `0 16px`            | 4px → **8px** | 8px           |
| `small`  | `Small`       | 36px (unchanged)         | `0 12px`            | 4px → **8px** | 8px           |
| `xsmall` | `Extra small` | content-sized → **28px** | `2px 8px` → `0 8px` | **4px**       | 8px → **4px** |

Icon-only and pill `medium` buttons follow the height down to 46px so they stay
square. Legacy variants share the recipe's geometry and move with it — the
closest match available, as they have no Figma frame to read.

**Label typography moves onto the DS-2026 named text styles.** Figma labels
every button `p1 semibold` or `p2 semibold`, so the sizes now read
`typography.size.p1` / `.p2` rather than the numeric `size[4]` / `size[3]` scale
— those carry the ratio-derived 22.4px and 19.6px line heights the design uses,
where the numeric scale rounds them to 22px and 20px.

| `size`   | Figma style   | before → after              |
| -------- | ------------- | --------------------------- |
| `medium` | `p1 semibold` | 16px/22px → 16px/**22.4px** |
| `small`  | `p2 semibold` | 14px/20px → 14px/**19.6px** |
| `xsmall` | `p2 semibold` | 12px/18px → **14px/19.6px** |

The weight goes from `medium` (500) to **`semiBold` (600)** at every size. This
is the one change in the release that touches the legacy variants' appearance —
they share the recipe's base weight.

`xsmall` taking the same `p2` as `small` is deliberate: Figma has no smaller
button label, and the larger label still clears the 28px box.

**`minimal` is Figma's `Style=Minimal (Ghost)`**, renamed from `Ghost`. On
`variant="secondary"` — the only class Figma specs a Minimal for — it now takes
the DS-2026 tokens: no fill or border at rest, `color.button.secondary.hover`
with a visible `…/border` on hover, `…/pressed` on press, and a label that holds
`color.button.secondary.text` through all three. Every `minimal` button now
carries a transparent 1px border at rest so that hover border cannot nudge the
box 2px wider; that also brings minimal buttons to the same width as their solid
counterparts. `minimal` on the other intents keeps its legacy colours — Figma
has no Minimal for Primary or Critical.

`variant="danger"` gains an **outlined** set (Figma's Critical Outlined),
following the same rules as Primary Outlined. `outlined` was previously a no-op
on `danger`.

`brand`, `information`, `warning` and `success` keep their colours — untouched —
they have no Figma counterpart, and are not part of the DS-2026 button classes.

Also restructures the variant stories to follow the Figma classes, adds a
**Critical Set** story for `variant="danger"` (previously the only variant with
no story), and documents when to reach for each.

## Accessibility: the loading state keeps the button's name

`isLoading` used to replace the accessible name with the `localeText.loading`
word, and hid the label with `visibility: hidden` — which also removes it from
the accessibility tree. A screen reader announced "loading" with no indication
of _what_ was loading, and nothing marked the button busy.

The label now survives: `aria-label` is no longer overwritten,
`aria-busy="true"` carries the state, `hiddenContent` holds the button's width
with `opacity: 0` instead, and the loading word rides in a `VisuallyHidden`
after the label. The spinner is `aria-hidden`, as decoration.

⚠️ **This changes the accessible name while loading** — `"Submit"` becomes
`"Submit loading"`, where it was `"loading"` alone. Any test querying a loading
button by exact name, or asserting `aria-label === 'loading'`, needs updating:

```diff
- screen.getByRole('button', { name: 'loading' })
+ screen.getByRole('button', { name: 'Submit loading' })
```

`localeText.loading` still supplies that word, so existing overrides keep
working.

## `ButtonProps` is now exported

`Button` was already in both public barrels but its props type was not, unlike
its siblings `SplitButtonProps` and `ToggleButtonsProps`. `type ButtonProps` is
now exported from `@autoguru/overdrive`.

## Also

`Button`'s root element now carries `data-od-component="button"`, matching the
house convention and the 38 other components that set it.

## Loading no longer disables the button natively

`isLoading` used to set the native `disabled` attribute, which removes the
element from the tab order — so focus jumped to the body the moment the button
was pressed, and the busy state was never announced. It now sets `aria-disabled`
instead and keeps the button focusable, with `onClick` enforcing the inertness
that the attribute used to give for free (Enter and Space arrive as clicks, so
keyboard is covered).

⚠️ **`expect(button).toBeDisabled()` no longer passes for a loading button.**
Assert the ARIA state instead:

```diff
- expect(button).toBeDisabled();
+ expect(button).toHaveAttribute('aria-disabled', 'true');
```

A genuinely `disabled` button is unchanged — still natively disabled, still
`opacity: 0.3`, still out of the tab order, and it does _not_ gain a redundant
`aria-disabled`.

Because a loading button is now focusable, `[data-loading]` is excluded from the
hover, press and `:focus-visible` fill selectors — otherwise tabbing onto one
mid-request would light it up. The focus ring is unaffected; it comes from
`focusOutlineStyle`, so a focused loading button still shows where focus is.

## `linkColor` defaults from `primaryBackground`

A tenant supplying only `primaryBackground` used to get branded buttons beside
base-theme green links and focus rings — the DS-2026 button work made that
mismatch more obvious, since more of the page now follows the brand. Links and
focus rings now default from the brand, and an explicit `linkColor` still wins
for brands whose accent does not make a legible link.

The colour is still derived per surface rather than used verbatim, so it stays
above 4.5:1 on both light and dark fills. From `primaryBackground: '#e5bc01'`:

| surface | link colour                                                   |
| ------- | ------------------------------------------------------------- |
| light   | `#705c00` (darkened — the raw amber cannot reach AA on white) |
| dark    | `#e5bc01` (the brand, which already clears AA there)          |

If neither surface can reach AA without losing the brand, that surface keeps the
theme's own link colour and a dev-mode warning says so — unchanged.

⚠️ **Visual change for any tenant that supplies `primaryBackground` without
`linkColor`**: links and focus rings move from the theme's green to their brand.
Pass `linkColor` explicitly to keep the previous colour.
