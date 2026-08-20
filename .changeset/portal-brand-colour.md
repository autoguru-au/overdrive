---
'@autoguru/overdrive': patch
---

Portal: apply the provider's `colorOverrides` to the themed wrapper, alongside
the theme class it already sets. Custom properties inherit down the DOM, not the
React tree, so a portalled subtree — mounted as a child of `<body>`, outside
`<div data-od-component="provider">` — was falling back to base-theme tokens. A
branded tenant saw its colour on in-flow UI but not on any floating surface: the
same component rendered branded in place and default mint once portalled.

`overrideStyles` was already on the theme context and read by nothing; this is
the first consumer.

Blast radius: every portalled component — `Drawer`, `Modal`, `Toaster`/`Toast`,
`Positioner` (so `DropDown` and popovers) and `AutoSuggest` — now inherits the
brand. No-op for unbranded apps: `useColorOverrides` returns `{}` with no
overrides and `assignInlineVars` drops undefined values, so React renders no
`style` attribute at all. No new DOM node, no class change, and portals mount
where they always did, so stacking and layering are untouched.

`noThemedWrapper` (opt-in on `Modal` and `StandardModal`) renders no wrapper, so
it still cannot carry the brand — documented on the prop.
