export interface ChartSeries<Key extends string = string> {
	/** Identifies the series. Keep it stable and unique in the chart. */
	key: Key;
	/**
	 * The series name in the legend, the tooltip, the table and the screen
	 * reader text. Give it in the language of the user.
	 */
	label: string;
	/**
	 * The series colour. Any CSS colour is valid, but use a token, for example
	 * `tokens.color.gamut.green['900']`, so that the colour follows the theme.
	 */
	color: string;
}

/**
 * `chart` shows the graphic, with a visually hidden table for screen readers.
 * `table` shows the same data as a visible table.
 */
export type ChartView = 'chart' | 'table';

/** Formats a number for display, for example with `Intl.NumberFormat`. */
export type ChartFormatter = (value: number) => string;
