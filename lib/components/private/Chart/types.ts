import type { HeadingTags } from '../../../styles/typography';

export interface ChartSeries<Key extends string = string> {
	/** Identifies the series. Keep it stable and unique in the chart. */
	key: Key;
	/**
	 * The series name in the legend, the tooltip and the screen
	 * reader text. Give it in the language of the user.
	 */
	label: string;
	/**
	 * The series colour. Any CSS colour is valid, but use a token, for example
	 * `tokens.color.gamut.green['900']`, so that the colour follows the theme.
	 */
	color: string;
}

/** Formats a number for display, for example with `Intl.NumberFormat`. */
export type ChartFormatter = (value: number) => string;

/** The props of the chart header. Without `title`, the chart has no header. */
export interface ChartHeaderOptions {
	/** The chart title, in the header above the chart. */
	title?: string;
	/** Text under the title, for example the period of the data. */
	description?: string;
	/**
	 * The heading element of the title. Use the level that fits the outline
	 * of the page.
	 * @default 'h2'
	 */
	titleAs?: HeadingTags;
}
