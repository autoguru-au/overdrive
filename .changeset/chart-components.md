---
'@autoguru/overdrive': minor
---

Add `StackedBarChart` and `DonutChart` (AG-22543).

Overdrive draws the charts with its own code. The package has no new
dependencies, and the charts do not use `react-aria`.

- `StackedBarChart` stacks the values of each series in one column for each
  period. Each column shows its total. The Y axis starts at 0 and uses steps of
  1, 2, 2.5 or 5 times a power of 10.
- `DonutChart` shows the share of each category in a ring, with the total in the
  centre and a legend with the value and the share of each slice. When all
  values are 0, it shows `emptyLabel`.
- Hover or keyboard focus shows the details of a column or a slice and dims the
  others. The chart is one tab stop. The arrow keys, Home and End move between
  the items. Escape closes the column tooltip and does not close an enclosing
  modal.
- The charts have no fixed text, locale or currency. All text, the value
  formatters and the series colours come from props.
- `view="table"` shows the same data as a table. In the chart view, a visually
  hidden table stays available to screen readers.
- The width follows the container.

An MFE that imports both charts grows by approximately 4.7 KB gzip JS and 1.2 KB
gzip CSS. An MFE that does not import them does not change.
