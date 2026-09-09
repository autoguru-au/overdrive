---
'@autoguru/overdrive': minor
---

`TableRow` and `TableCell` gain a `hover` prop to switch the hover background
off.

**Hover was always on.** Hovering any `TableCell` painted a grey wash across its
whole row, with no way to opt out. Rows that are not interactive, or tables
where the wash fought with a custom row background, had to override the
pseudo-element from outside.

**Now it is a prop.** `hover` defaults to `true`, so nothing changes unless you
pass it. Set `hover={false}` on a `TableRow` to turn the wash off for every cell
in that row, or on an individual `TableCell` to stop that one cell from
triggering it. A cell always wins over its row, and the wash follows whoever
switched it on: with the row's hover on, hovering a cell washes the full row as
before; with `<TableRow hover={false}>` and a single `<TableCell hover>` inside,
hovering that cell washes just that cell.

The hover styles are keyed on a `data-hover` attribute, present when hover is
enabled and absent when it is not. It is rendered on the `<tr>` (the row's own
setting) and on each `<td>` (the cell's resolved setting); the row attribute is
what widens the wash from the cell to the full row.

Also in this release:

- `TableRow` and `TableCell` accept `testId`, rendered as `data-testid` on the
  `<tr>` and `<td>`.
- The `<tr>` carries `data-od-component="table-row"` and the `<td>`
  `data-od-component="table-cell"` for test and analytics selectors.
