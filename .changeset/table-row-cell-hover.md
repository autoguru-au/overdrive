---
'@autoguru/overdrive': minor
---

`TableRow` and `TableCell` gain a `hover` prop to switch the cell hover
background off.

**Hover was always on.** Every `TableCell` painted a grey wash on hover, with no
way to opt out. Rows that are not interactive, or tables where the wash fought
with a custom row background, had to override the pseudo-element from outside.

**Now it is a prop.** `hover` defaults to `true`, so nothing changes unless you
pass it. Set `hover={false}` on a `TableRow` to turn it off for every cell in
that row, or on an individual `TableCell` to control just that one. A cell
always wins over its row, so `<TableRow hover={false}>` with one
`<TableCell hover>` inside gives you a single hovering cell.

The hover styles are now keyed on a `data-hover` attribute on the `<td>`, which
is present when hover is enabled and absent when it is not.

Also in this release:

- `TableRow` and `TableCell` accept `testId`, rendered as `data-testid` on the
  `<tr>` and `<td>`.
- The `<tr>` carries `data-od-component="table-row"` and the `<td>`
  `data-od-component="table-cell"` for test and analytics selectors.
