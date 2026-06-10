---
"@autoguru/overdrive": major
---

Raise the `@autoguru/icons` peer-dependency floor to `>=2.0.0`.

**Breaking change.** Overdrive now requires `@autoguru/icons@>=2.0.0`. The icons
2.x release (Phosphor redesign) renames and removes a number of icons, so any
consumer importing icon components directly by their 1.x names must update those
imports when upgrading.

Internal usage across the library has been migrated to the new icon names:

- `Chevron*` → `Caret*`
- `Close` / `WindowClose` → `X`
- `Magnify` → `MagnifyingGlass`
- `Email` → `Envelope`
- `Settings` → `Gear`
- `Sort` → `ArrowsDownUp`
- `StoreOutline` → `Storefront`
- `TrashCanOutline` → `Trash`
- `Alert` → `Warning`

No public Overdrive component API changed.

The `Foundation/Icon Set` story was rebuilt with live name search and icons
grouped into the DS 2026 design-system categories.
