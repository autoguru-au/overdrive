---
'@autoguru/overdrive': patch
---

docs(Button): restructure the variant stories to match Figma (AG-20713)

Documentation only — no component behaviour or styling changed.

The variant sets are reordered to follow the Figma DS-2026 button classes
(Primary, Primary Outlined, Secondary, Critical) ahead of the legacy status
sets, and a **Critical Set** story is added for `variant="danger"` — the one
variant that had no story at all.

Each of the four DS-2026 sets now carries guidance on when to reach for it, with
a summary table on the `Button` docs page.
