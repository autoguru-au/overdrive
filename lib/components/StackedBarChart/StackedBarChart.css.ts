import { createVar, globalLayer, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { overdriveTokens as vars } from '../../themes/theme.css';
import {
	DIMMED_OPACITY,
	dimTransition,
	subtleRuleColor,
} from '../private/Chart/Chart.css';

globalLayer(LAYER_ORDER);

/** Distance of a tick or a grid line from the baseline, as a percentage of the plot height. */
export const tickPosition = createVar();

/** Height of a column (its total), as a percentage of the plot height. */
export const columnSize = createVar();

/** Height of a segment, as a percentage of its column. */
export const segmentSize = createVar();

/** The series colour of a segment. */
export const segmentColor = createVar();

/**
 * The widest column. Figma draws 64px columns on a 1190px plot with eight
 * periods; narrower plots scale the columns down to half the band.
 */
const COLUMN_MAX_WIDTH = vars.space['10']; // 64px
const COLUMN_BAND_SHARE = '50%';

/** Space between the top of a column and its total label. */
const VALUE_LABEL_GAP = vars.space['1'];

/**
 * The plot keeps this height when its container gives it no height. Figma
 * draws a 430px plot; this is the nearest step on the space ladder that
 * keeps the chart readable on a phone.
 */
const PLOT_MIN_HEIGHT = `calc(${vars.space['12']} * 4)`; // 384px

export const root = style({
	'@layer': {
		[cssLayerComponent]: {
			display: 'flex',
			flexDirection: 'column',
			gap: vars.space['4'],
			height: '100%',
			minWidth: 0,
		},
	},
});

/**
 * Two columns (Y axis, plot) and two rows (plot area, X axis labels). The top
 * padding keeps room for the total label of the tallest column.
 */
export const body = style({
	'@layer': {
		[cssLayerComponent]: {
			columnGap: vars.space['2'],
			display: 'grid',
			flexGrow: 1,
			gridTemplateColumns: 'auto minmax(0, 1fr)',
			gridTemplateRows: 'minmax(0, 1fr) auto',
			minHeight: PLOT_MIN_HEIGHT,
			paddingTop: `calc(${vars.typography.size['2'].lineHeight} + ${VALUE_LABEL_GAP})`,
			position: 'relative',
		},
	},
});

/**
 * The tick labels share one grid cell, so the column is as wide as the
 * widest label in any locale. Each label then moves up to its tick.
 */
export const yAxis = style({
	'@layer': {
		[cssLayerComponent]: {
			display: 'grid',
			gridColumn: 1,
			gridRow: 1,
		},
	},
});

export const tick = style({
	'@layer': {
		[cssLayerComponent]: {
			alignSelf: 'end',
			bottom: tickPosition,
			gridArea: '1 / 1',
			justifySelf: 'end',
			position: 'relative',
			transform: 'translateY(50%)',
			whiteSpace: 'nowrap',
		},
	},
});

/**
 * The marks. Each period is one column of a subgrid, so the X axis labels of
 * all periods share one row height, also when a label wraps.
 */
export const plot = style({
	'@layer': {
		[cssLayerComponent]: {
			display: 'grid',
			gridAutoColumns: 'minmax(0, 1fr)',
			gridAutoFlow: 'column',
			gridColumn: 2,
			gridRow: '1 / span 2',
			gridTemplateRows: 'subgrid',
			position: 'relative',
		},
	},
});

/**
 * The grid lines sit behind the plot, in the plot area cell of the body. The
 * body is not a subgrid, so the grid placement sets the containing block of
 * this absolutely positioned layer.
 */
export const gridLines = style({
	'@layer': {
		[cssLayerComponent]: {
			// An absolutely positioned item needs both lines: an `auto` end line
			// is the padding edge, not the end of the track.
			gridColumn: '2 / 3',
			gridRow: '1 / 2',
			inset: 0,
			pointerEvents: 'none',
			position: 'absolute',
		},
	},
});

export const gridLine = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				bottom: tickPosition,
				left: 0,
				position: 'absolute',
				right: 0,
			},
		},
	},
	variants: {
		baseline: {
			true: {
				'@layer': {
					[cssLayerComponent]: {
						borderTop: `${vars.border.width['1']} solid ${vars.color.border.default}`,
					},
				},
			},
			false: {
				'@layer': {
					[cssLayerComponent]: {
						borderTop: `${vars.border.width['1']} solid ${subtleRuleColor}`,
					},
				},
			},
		},
	},
});

/** One period: the full band, so a thin column is still easy to hover. */
export const column = style({
	'@layer': {
		[cssLayerComponent]: {
			cursor: 'default',
			display: 'grid',
			gridRow: '1 / span 2',
			gridTemplateRows: 'subgrid',
			outline: 'none',
			transition: dimTransition,
			selectors: {
				[`${root}[data-has-active] &:not([data-active])`]: {
					opacity: DIMMED_OPACITY,
				},
				// Each bar area is a query container, and so a stacking context.
				// The active column goes on top, so its tooltip covers the next
				// columns.
				'&[data-active]': { zIndex: 1 },
			},
			'@media': {
				'(prefers-reduced-motion: reduce)': { transition: 'none' },
			},
		},
	},
});

export const barArea = style({
	'@layer': {
		[cssLayerComponent]: {
			// The query container for the total label. It is not on the column,
			// because a container cannot be a subgrid.
			containerType: 'inline-size',
			position: 'relative',
		},
	},
});

export const stack = style({
	'@layer': {
		[cssLayerComponent]: {
			borderTopLeftRadius: vars.border.radius.sm,
			borderTopRightRadius: vars.border.radius.sm,
			bottom: 0,
			display: 'flex',
			// The first series sits on the baseline.
			flexDirection: 'column-reverse',
			height: columnSize,
			left: 0,
			marginInline: 'auto',
			maxWidth: COLUMN_MAX_WIDTH,
			overflow: 'hidden',
			position: 'absolute',
			right: 0,
			width: COLUMN_BAND_SHARE,
			selectors: {
				[`${column}:focus-visible &`]: {
					outline: `${vars.border.width['2']} solid ${vars.color.focus.ring}`,
					outlineOffset: vars.border.width['2'],
				},
			},
		},
	},
});

export const segment = style({
	'@layer': {
		[cssLayerComponent]: {
			backgroundColor: segmentColor,
			flexBasis: segmentSize,
			flexGrow: 0,
			flexShrink: 0,
		},
	},
});

export const valueLabel = style({
	'@layer': {
		[cssLayerComponent]: {
			bottom: columnSize,
			left: 0,
			paddingBottom: VALUE_LABEL_GAP,
			position: 'absolute',
			right: 0,
			textAlign: 'center',
			whiteSpace: 'nowrap',
			// There is no mobile design. Below this band width the total labels of
			// neighbour columns touch, so they go. The tooltip and the screen
			// reader text still give the totals. A container query cannot read a token, so the value
			// repeats the 64px of `space['10']`.
			'@container': {
				'(max-width: 64px)': { display: 'none' },
			},
		},
	},
});

export const axisLabel = style({
	'@layer': {
		[cssLayerComponent]: {
			paddingInline: vars.space['1'],
			paddingTop: vars.space['8'],
			textAlign: 'center',
		},
	},
});

/**
 * Holds the tooltip beside the active column, from the top of the column to
 * the baseline. The tooltip starts at the top of the column. If the tooltip is
 * taller than the space below that point, it moves up and ends at the baseline.
 */
export const tooltipRail = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				bottom: 0,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-end',
				pointerEvents: 'none',
				position: 'absolute',
				top: `calc(100% - ${columnSize})`,
				zIndex: 1,
			},
		},
	},
	variants: {
		side: {
			// Columns in the first half: the tooltip is to the right.
			end: { '@layer': { [cssLayerComponent]: { left: '100%' } } },
			// Columns in the second half: the tooltip is to the left.
			start: { '@layer': { [cssLayerComponent]: { right: '100%' } } },
		},
	},
});

/**
 * Puts the tooltip at the top of the rail. If the tooltip is taller than the
 * rail, the auto margin becomes 0 and the rail aligns the tooltip to the end.
 */
export const tooltip = style({
	'@layer': {
		[cssLayerComponent]: {
			marginBottom: 'auto',
		},
	},
});
