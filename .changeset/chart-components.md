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
  centre and a legend with the value and the share of each slice. A slice of 0
  has no mark and no tab stop, but the legend shows it. When all values are 0,
  it shows `emptyLabel`.
- Each chart has three parts, as a modal does: a header with `title` and
  `description`, the body, and a footer with the legend. Without `title` there
  is no header. `titleAs` sets the heading level of the title (default `h2`).
- `hideLegend` removes the footer legend.
- On `DonutChart`, hover or focus on a slice shows a tooltip with the name, the
  value and the share of the slice. `hideTooltip` (default `false`) removes the
  tooltip. With `hideLegend`, the tooltip always shows, because it is then the
  only text for the slices.
- The charts have no border or card. To show a chart in a card, put it in a
  container with a border.
- A negative, `NaN` or infinite value counts as 0.
- Hover or keyboard focus shows the details of a column or a slice and dims the
  other bars, slices and legend swatches. The text does not dim, so it keeps the
  WCAG AA contrast. The chart is one tab stop. The arrow keys, Home and End move
  between the items. Escape closes the tooltip and does not close an enclosing
  modal. The column tooltip stays inside the chart, and the donut tooltip stays
  inside the viewport.
- The charts have no fixed words, locale or currency. All words, the value
  formatters and the series colours come from props. The charts join the parts
  of the screen reader names with commas, and the donut legend shows the share
  in parentheses.
- Screen readers read the name of the chart and the name of each column or
  slice, with its values. The charts have no table view.
- A 2px gap in the background colour separates the touching slices and segments,
  so that two colours with almost the same lightness stay apart.
- In forced colours mode (Windows high contrast), the bars, the slices and the
  swatches keep the series colours.
- The width follows the container.

An MFE that imports both charts grows by approximately 5.9 KB gzip JS and 1.3 KB
gzip CSS. One chart alone adds approximately 4.3 KB gzip JS. An MFE that does
not import the charts does not change.
