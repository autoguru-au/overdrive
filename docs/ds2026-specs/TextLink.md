# TextLink — DS-2026 linked text (W3c-P2 Spec)

Source: Figma file `ZkQlQcJkF7NTnZomVrPRN5` ("AutoGuru Design System 2026"), the
**`Style=Linked text`** axis of the **Button** component, node
[`362:2275`](https://www.figma.com/design/ZkQlQcJkF7NTnZomVrPRN5/AutoGuru-Design-System-2026?node-id=362-2275).
Values pulled via `get_variable_defs` and `get_design_context` on the individual
variant nodes, not from drawn text labels.

> **This supersedes the node `wave-3.md` §W3c-P2 points at.** That package
> targets the standalone `Link` frame `739:8560`, which is stale: it carries
> only `State{Default, Hover-Active}`, a `Colour{Blue, Black}` axis, and binds
> `color/info/*` (`#0d47a1`) plus `color/foreground/*` — it references **no**
> `color/link/*` variable at all. The live link spec is the `Linked text` style
> inside the Button component, which is what this document records. Same
> situation as the `FilterChip` note in `wave-2.md`.
>
> Consequently §W3c-P2's proposed `linkColour?: 'blue' | 'black'` is **wrong** —
> the real axis is `Class{Primary, Secondary, Critical}`. There is also no
> `color.button.linkedText.*` namespace (the name `wave-3.md` §W3c-P2(b)/(e) and
> `track-c.md` use); the shipped family is **`color.link.*`**.

## Axes

72 variants:

```
Class{Primary, Secondary, Critical}
  × Size{Large, Small}
  × Icon{None, Left, Right}
  × State{Default, Hover, Pressed, Disabled}
```

`Shape` is `n/a` for this style, and there is **no** `Extra small` size and
**no** `Icon only` — unlike the Solid/Outlined/Ghost styles on the same
component.

**`Extra small` is deliberately absent** (confirmed by design, AG-20713). Linked
text ships at Large and Small only, so `variant` intentionally has no third size
and none should be added — its absence is a decision, not a hole in the file.

## Colour

There are **two state behaviours**, not one. Primary and Critical move the
**label and underline together** to the state colour; Secondary **holds its
label** and moves only the underline. All values are bound variables, already
present in `lib/themes/base/tokens.ts` under `color.link.*`, matching
hex-for-hex.

| Class     | Default (label + underline) | Hover                                     | Pressed                                     |
| --------- | --------------------------- | ----------------------------------------- | ------------------------------------------- |
| Primary   | `link.primary` `#18856F`    | **both** → `link.hover` `#03AF83`         | **both** → `link.pressed` `#36E5AA`         |
| Secondary | `link.secondary` `#212338`  | label held; underline → `link.hover`      | label held; underline → `link.pressed`      |
| Critical  | `link.critical` `#B51E1A`   | **both** → `link.criticalHover` `#E12E28` | **both** → `link.criticalPressed` `#EF918E` |

The icon follows the label — its SVG fills from `currentColor`, so it moves with
the label on Primary/Critical and stays put on Secondary.

Notes:

- **Primary and Critical hover/pressed nodes bind a single colour variable**
  (`1445:17691`/`17687` and `1445:17846`/`17848`), which is what makes the label
  move. This was corrected in Figma after the first pass of this spec — the
  earlier revision held the label fixed for all three classes.
- **Secondary is the exception, and shares Primary's hover/pressed underline.**
  `1445:18008`/`18010` keep `color/link/secondary` on the text while the border
  takes `color/link/hover` / `color/link/pressed`. `color.link` has no
  secondary-specific pair; this is deliberate in the file, not a gap.
- Primary's resting label binds `color/link/text`, which resolves to the same
  `#18856F` as `color/link/primary`. Only `color.link.primary` exists in the
  contract; the duplicate Figma alias needs no counterpart.

## Geometry & type

|                     | Large                                  | Small                                  |
| ------------------- | -------------------------------------- | -------------------------------------- |
| Text style          | `p1 semibold` — 16px / 1.4, weight 600 | `p2 semibold` — 14px / 1.4, weight 600 |
| Overdrive `size`    | `'4'` (16px)                           | `'3'` (14px)                           |
| Icon                | 16px                                   | 14px                                   |
| Gap (icon ↔ label) | `space/4` = 4px                        | `space/4` = 4px                        |
| Node height         | 22px                                   | 20px                                   |

- The **underline is drawn in every state, including Default** — a 1px
  `border-bottom`, so it runs beneath the icon as well as the label. This is the
  key departure from the legacy TextLink, which reveals a 2px inset box-shadow
  on hover only.
- The icon is a **sibling** of the label at `1em` with a `space/4` margin — 16px
  against a 16px label, 14px against 14px. The root carries the label's font
  size so that `em` resolves against the right value.
- No padding, no background, no border radius, no shadow.

### The root is `display: inline`, not `inline-flex`

The Figma frame implies `inline-flex` — a gap between icon and label, and a box
sized to its content. **The implementation deliberately uses
`display: inline`.**

A flex box is atomic: it cannot be split across lines, so inside a sentence it
is pushed onto its own line instead of flowing with the text around it. That is
right for a standalone control and wrong for a phrase in prose — and
`MarkdownRenderer` renders every markdown link through this component, so the
prose case is the common one the moment linked text becomes the default.

`inline` wraps like text and draws the underline once per line fragment.
Confirmed with design (AG-20713):

- **A per-line underline is accepted**, provided the `secondary` treatment still
  holds — its label stays `link.secondary` while only the underline moves to
  `link.hover`. It does: `border-bottom-color` and `color` are independent
  properties, and staying inline does not change that.
- **The icon may wrap away from its label.** The guidance is to omit the icon
  when a link sits inside a multi-line paragraph, rather than to force the
  phrase to break as a unit.

`border-bottom` is used rather than `text-decoration: underline` for one reason:
the border keeps running under a trailing icon, which is how Figma draws it,
whereas `text-decoration` stops at the end of the text. The trade is that the
border sits below the descenders instead of skipping them.

## Disabled

The Default look at **`opacity: 0.3`** (node `1445:17686` — it keeps
`border-[color/link/primary]` and adds `opacity-30`). Same treatment Button
already uses for its disabled state, so no new token is involved.

`color.button.disabled.{fill,text}` is **not** used by linked text.

## Implemented API

Additive on `lib/components/TextLink/`; with `variant` unset the established
appearance is unchanged (`display: inline`, legacy `typography.colour.link`
`#01C68C`, hover-only box-shadow underline, absolutely positioned icon).

```ts
variant?: 'primary' | 'secondary' | 'critical';  // opts into linked text
iconPosition?: 'left' | 'right';                 // default 'right'; requires `variant`
disabled?: boolean;                              // requires `variant`
```

When `variant` is set and no `size`/`weight` is given, they default to `'4'` and
`'semiBold'` — Figma's Large. Pass `size="3"` for Small.

### Deliberately not done here

- **No token changes.** `color.link.*` already existed with correct values; this
  only starts consuming it. The legacy `typography.colour.link` references in
  `TextLink.css.ts` (`root`, `muted`) are left in place — repointing them would
  change the default appearance for every existing consumer.
- **The base link colour is not flipped** from legacy green `#01C68C` to
  `color.link.primary` `#18856F`. That is the major-only change `wave-3.md`
  §W3c-P2 already flags.
- `iconPosition` is not wired into the legacy appearance, which would require
  restyling its absolutely-positioned icon.

## Open question for design

`Icon only` exists for Solid/Outlined/Ghost but not for `Linked text`. If an
icon-only link is ever needed it has no Figma source yet — unlike `Extra small`,
which is a settled decision (see Axes above), this one is simply unasked.
