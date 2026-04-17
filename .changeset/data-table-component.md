---
'@autoguru/overdrive': minor
---

Add DataTable component for responsive data tables

Introduces a `DataTable` wrapper component that composes the existing `Table`
inside a horizontally scrollable region. When table content exceeds the
container width, a styled horizontal scrollbar appears and keyboard users can
scroll via arrow keys (`role="region"` with `tabIndex={0}`).

**New component:**
- `DataTable` — accepts all `Table` props plus `minWidth` (CSS value to set
  the minimum readable width before scroll activates) and `aria-label` for
  the scrollable region.

**TableRow entrance animation:**
- Added `staggerIndex?: number` prop to `TableRow`. Pass the row index
  (e.g. `staggerIndex={i}` inside a `.map()`) to opt a row into a
  staggered slide-up-and-fade entrance animation. Omit to disable.

**TableHeadCell accessibility fixes:**
- Removed `tabIndex={-1}` from the sort button so keyboard users can reach
  sort controls via Tab.
- Removed redundant `VisuallyHidden` span that duplicated the `aria-sort`
  attribute announcement.
- Widened `children` type from `string | null` to `ReactNode` to support
  richer header content.

**Stories:** Standard, WithSorting (mixed sortable/non-sortable columns),
LargeDataset (25 rows with sticky header), SmallContainer (320px width
demonstrating horizontal scroll), ComplexCells (fleet-style composition
with icons, badges, and stacked text), and Animated (staggered row
entrance demo).

**ScrollPane refresh:** Overlay-style scrollbar — transparent track, pill
thumb, Firefox support via `scrollbar-width` / `scrollbar-color`. The
`rounded` prop is deprecated (no-op, scheduled for removal in the next
major) since the thumb is now pill-rounded by default.

**Table semantic fix:** `Table`, `TableRowGroup`, `TableRow`, and
`TableCell` now render native `<table>` / `<tbody>` / `<tr>` / `<td>`
elements (instead of `<div>` with ARIA roles) to eliminate a React DOM
nesting warning when `<TableHeadCell>` rendered a `<th>` inside a
non-`<tr>` ancestor. CSS Grid layout is preserved via `display: grid` on
`<table>` and `display: contents` on `<tbody>` / `<tr>`. ARIA roles
retained for the ARIA grid pattern. This introduces TypeScript-level API
changes for the forwarded ref types: `Table` now forwards to
`HTMLTableElement` (was `HTMLDivElement`), `TableRowGroup` to
`HTMLTableSectionElement`, `TableRow` to `HTMLTableRowElement`, and
`TableCell` to `HTMLTableCellElement`. `TableRow`'s `onClick` handler is
correspondingly typed as `MouseEventHandler<HTMLTableRowElement>`.
Runtime behaviour and visual output are unchanged.

**Dependency alignment (not breaking for consumers):** Bumped
`@internationalized/date` (`3.10.0` → `3.12.1`) and `react-stately`
(`3.42.0` → `3.46.0`) to match the versions nested inside
`@react-aria/calendar` and `@react-aria/datepicker`. The previous skew
caused two separately-hoisted copies of these packages, which produced
distinct TypeScript identities for `DateValue` and surfaced as 18 TS
errors and 6 `DateInput` test failures on `main`. Required to unblock
the build; no runtime behaviour changes in the date components. The
`@autoguru/icons` bump (`1.8.16` → `1.8.22`) brings in the new
`SortIcon` used by `TableHeadCell`.
