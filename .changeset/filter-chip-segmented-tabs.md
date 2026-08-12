---
'@autoguru/overdrive': minor
---

**Filter chips, and a segmented look for Tabs**

A new FilterChip component, and a new segmented look for Tabs. Neither one gets
picked up by anything you already have. Two bits of text got slightly darker,
and that's the only thing you'll actually see change.

### Added

- **FilterChip.** A new component for filter UI. It comes in four shapes:
  `select`, `numeric`, `simple` and `add`. Each one has hover, selected and
  focus states, and can carry a removable `×`.
- **Segmented tabs.** Set `appearance="segmented"` on `Tabs` for an equal-width
  bordered control with the selected segment filled in. The default is still
  `underlined`, so your existing tabs are untouched.

### Changed

- **Idle tab text is a bit darker.** It moves from gray600 `#5c6172` to
  `foreground.secondary` `#484c5f`, which takes contrast against white from
  6.4:1 to 8.6:1. You'll only see it on the appearances that don't set their own
  idle colour, so `underlined` (the default) and `minimal`. `pill` and
  `segmented` set their own, so they're unchanged. Selected tabs are unchanged
  too, and nothing moves.
- **Alert's `information` intent is a bit darker.** blue500 becomes blue600
  (`info.foreground`). The other intents look the same as before.
- **Focus rings have a token now.** `focus.ring` is set in the `neutral` and
  `flat_red` themes, using the focus colour each one already had, so it matches
  what the rest of the library draws. FilterChip is the odd one out. It draws
  its focus in `info.foreground`, so its ring is blue while everything else is
  still theme-green. We'll move the shared token later, because changing it
  shifts every focus ring at once.
- **Tabs and Alert read semantic colour tokens under the hood** instead of the
  old ramps. No props changed, and apart from the two colours above they render
  the same. Worth knowing if you ship your own theme: Tabs doesn't read
  `background.light` or `background.neutral` any more, and those are two keys
  themes tend to override. Its indication badge will take the base value instead
  of yours. On `flat_red` the tab chrome goes base grey, because that theme has
  a different gray ramp (`#263238` rather than `#212338`).
- **Alert's border radius** was on the deprecated `borderRadius="1"`. It's
  `xsmall` now. Same 4px.

### Deprecated

- Nothing in the library uses `sprinklesLegacyText` any more. It stays exported
  until the next major, so if you're still on it you're fine for now.
