---
"@autoguru/overdrive": minor
---

Upgrade `@autoguru/icons` to `2.0.1` (Phosphor-style redesign) and bump the peer dependency floor to `>=2.0.0`.

`@autoguru/icons@2.0.x` renames/removes a number of icons, so every internal usage in the library was migrated to the new names (e.g. `Chevron*` → `Caret*`, `Close`/`WindowClose` → `X`, `Magnify` → `MagnifyingGlass`, `Email` → `Envelope`, `Settings` → `Gear`, `Sort` → `ArrowsDownUp`, `StoreOutline` → `Storefront`, `TrashCanOutline` → `Trash`, `Alert` → `Warning`). No public component API changed.

The `Foundation/Icon Set` story was also rebuilt with a live name search and icons grouped into the design-system categories from the DS 2026 Figma.

> Note: consumers still on `@autoguru/icons` 1.x must upgrade to 2.0.1. Reviewers may wish to release this as a major bump if that peer-dependency change is treated as breaking for downstream apps.
