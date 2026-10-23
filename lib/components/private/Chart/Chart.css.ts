import { createVar, globalLayer, style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { LAYER_ORDER, cssLayerComponent } from '../../../styles/layers.css';
import { overdriveTokens as vars } from '../../../themes/theme.css';

globalLayer(LAYER_ORDER);

/**
 * Opacity of the marks and labels that are not active while one item is
 * hovered or focused. Taken from the Figma hover frame (Reporting, 5526:10506).
 */
export const DIMMED_OPACITY = '0.2';

/** The fade between the normal and the dimmed state. */
export const dimTransition = `opacity 0.2s ${vars.animation.easing.standard}`;

/**
 * The thin rules inside the chart (grid lines, tooltip dividers). Figma uses
 * #f1f3f7 and #eff1f4; gray-200 is the nearest gamut value. There is no
 * semantic "subtle border" token yet.
 */
export const subtleRuleColor = vars.color.gamut.gray['200'];

/** The colour of a series swatch, set inline from the series `color`. */
export const swatchColor = createVar();

export const swatch = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				backgroundColor: swatchColor,
				borderRadius: vars.border.radius.full,
				flexShrink: 0,
			},
		},
	},
	variants: {
		size: {
			// 12px, the legend dot in both Figma frames.
			medium: {
				'@layer': {
					[cssLayerComponent]: {
						height: vars.space['3'],
						width: vars.space['3'],
					},
				},
			},
			// 8px, the tooltip dot.
			small: {
				'@layer': {
					[cssLayerComponent]: {
						height: vars.space['2'],
						width: vars.space['2'],
					},
				},
			},
		},
	},
	defaultVariants: { size: 'medium' },
});

export type SwatchVariants = NonNullable<RecipeVariants<typeof swatch>>;

export const legend = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				display: 'flex',
				listStyle: 'none',
				margin: vars.space.none,
				padding: vars.space.none,
			},
		},
	},
	variants: {
		layout: {
			// Column chart: one row that wraps, left aligned.
			horizontal: {
				'@layer': {
					[cssLayerComponent]: {
						columnGap: vars.space['4'],
						flexWrap: 'wrap',
						rowGap: vars.space['2'],
					},
				},
			},
			// Donut chart: one item for each line, centred under the ring.
			vertical: {
				'@layer': {
					[cssLayerComponent]: {
						alignItems: 'center',
						flexDirection: 'column',
						gap: vars.space['1'],
					},
				},
			},
		},
	},
	defaultVariants: { layout: 'horizontal' },
});

export type LegendVariants = NonNullable<RecipeVariants<typeof legend>>;

export const legendItem = style({
	'@layer': {
		[cssLayerComponent]: {
			alignItems: 'center',
			display: 'inline-flex',
			gap: vars.space['2'],
			transition: dimTransition,
			selectors: {
				'&[data-dimmed]': { opacity: DIMMED_OPACITY },
			},
			'@media': {
				'(prefers-reduced-motion: reduce)': { transition: 'none' },
			},
		},
	},
});

export const tooltip = style({
	'@layer': {
		[cssLayerComponent]: {
			backgroundColor: vars.color.background.default,
			border: `${vars.border.width['1']} solid ${vars.color.border.default}`,
			borderRadius: vars.border.radius.medium,
			boxShadow: vars.elevation['4'],
			display: 'flex',
			flexDirection: 'column',
			gap: vars.space['2'],
			padding: vars.space['4'],
			pointerEvents: 'none',
			// `keepInside` sets the maximum width from the space of the chart.
			width: 'max-content',
		},
	},
});

export const tooltipRule = style({
	'@layer': {
		[cssLayerComponent]: {
			borderTop: `${vars.border.width['1']} solid ${subtleRuleColor}`,
		},
	},
});

/** The title of the tooltip, with the swatch of the item when it has one. */
export const tooltipTitle = style({
	'@layer': {
		[cssLayerComponent]: {
			alignItems: 'center',
			display: 'flex',
			gap: vars.space['2'],
		},
	},
});

export const tooltipRow = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				alignItems: 'center',
				columnGap: vars.space['2'],
				display: 'grid',
			},
		},
	},
	variants: {
		swatch: {
			// Swatch, label, value. The value column keeps the numbers aligned.
			true: {
				'@layer': {
					[cssLayerComponent]: {
						gridTemplateColumns: `${vars.space['2']} 1fr auto`,
					},
				},
			},
			// Label, value.
			false: {
				'@layer': {
					[cssLayerComponent]: { gridTemplateColumns: '1fr auto' },
				},
			},
		},
	},
	defaultVariants: { swatch: true },
});

export const tooltipTotalRow = style({
	'@layer': {
		[cssLayerComponent]: {
			alignItems: 'center',
			display: 'grid',
			gridTemplateColumns: '1fr auto',
		},
	},
});

export const tooltipValue = style({
	'@layer': {
		[cssLayerComponent]: {
			fontVariantNumeric: 'tabular-nums',
			paddingLeft: vars.space['6'],
			textAlign: 'right',
		},
	},
});
