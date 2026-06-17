---
"@autoguru/overdrive": minor
---

Upgrade `@autoguru/icons` to `2.1.0` — the full Phosphor 2.1 regular-weight set
plus AutoGuru's custom icons, bringing the library to **1,576 icons (up from
203)**. The release preserves every existing export name, so this is **purely
additive — no public component or icon-import API changed**.

Regenerated the icon-gallery category map (`lib/stories/iconCategories.ts`) so
the **Foundation → Icon Set** story maps all 1,576 icons (previously 202) across
20 categories, with **0 unmapped icons**. Added the new **"Health & Wellness"**
category and kept Overdrive's synthetic **"Filled"** group (any export ending in
`Filled`). The gallery retains its live name search and design-system grouping
from the DS 2026 Figma.

The `Icon` component and its `IconType` are unchanged — existing imports such as
`<Icon icon={ChevronRightIcon} />` continue to work without modification.

Note: consumers on `@autoguru/icons@2.0.x` pick up the new icons automatically
once the peer dependency resolves; no migration is required for code already on
the 2.x line.
