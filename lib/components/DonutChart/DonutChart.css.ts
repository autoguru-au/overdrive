import { createVar, globalLayer, style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { overdriveTokens as vars } from '../../themes/theme.css';
import { DIMMED_OPACITY, dimTransition } from '../private/Chart/Chart.css';

globalLayer(LAYER_ORDER);

/** The series colour of a slice. */
export const sliceColor = createVar();

/**
 * The ring diameter. Figma draws 150px; 160px is the nearest step on the
 * space ladder, and it gives the total in the centre more room.
 */
const RING_SIZE = `calc(${vars.space['11']} * 2)`; // 160px

/** Header, body and footer, from top to bottom. The body is centred. */
export const root = style({
	'@layer': {
		[cssLayerComponent]: {
			display: 'flex',
			flexDirection: 'column',
			gap: vars.space['4'],
			minWidth: 0,
		},
	},
});

export const ring = style({
	'@layer': {
		[cssLayerComponent]: {
			alignSelf: 'center',
			flexShrink: 0,
			height: RING_SIZE,
			position: 'relative',
			width: RING_SIZE,
		},
	},
});

export const svg = style({
	'@layer': {
		[cssLayerComponent]: {
			display: 'block',
			height: '100%',
			overflow: 'visible',
			width: '100%',
		},
	},
});

export const slice = style({
	'@layer': {
		[cssLayerComponent]: {
			cursor: 'default',
			fill: sliceColor,
			outline: 'none',
			transition: dimTransition,
			selectors: {
				[`${svg}[data-has-active] &:not([data-active])`]: {
					opacity: DIMMED_OPACITY,
				},
			},
			'@media': {
				'(prefers-reduced-motion: reduce)': { transition: 'none' },
			},
		},
	},
});

/**
 * The focus ring of the focused slice. It is a separate path on top of all
 * slices, so that the next slice does not cover part of the ring. The stroke
 * width stays in screen pixels at any ring size.
 */
export const focusRing = style({
	'@layer': {
		[cssLayerComponent]: {
			display: 'none',
			fill: 'none',
			pointerEvents: 'none',
			stroke: vars.color.focus.ring,
			strokeWidth: vars.border.width['2'],
			vectorEffect: 'non-scaling-stroke',
			selectors: {
				// Keyboard focus only, as `:focus-visible` decides it.
				[`${svg}:has(:focus-visible) &`]: { display: 'inline' },
			},
		},
	},
});

export const centre = style({
	'@layer': {
		[cssLayerComponent]: {
			alignItems: 'center',
			display: 'flex',
			flexDirection: 'column',
			inset: 0,
			justifyContent: 'center',
			pointerEvents: 'none',
			position: 'absolute',
		},
	},
});

/** The point where the tooltip starts: the outer edge of the active slice, at its middle angle. */
export const tooltipX = createVar();
export const tooltipY = createVar();

/** Space between the ring and the tooltip. */
const TOOLTIP_GAP = vars.space['2'];
const TOOLTIP_GAP_BACK = `calc(${TOOLTIP_GAP} * -1)`;

/**
 * The tooltip of a slice, when the legend is hidden. It goes away from the
 * centre of the ring, so it does not cover the total.
 */
export const tooltip = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				left: tooltipX,
				position: 'absolute',
				top: tooltipY,
				zIndex: 1,
			},
		},
	},
	variants: {
		placement: {
			'bottom-end': {
				'@layer': {
					[cssLayerComponent]: {
						marginLeft: TOOLTIP_GAP,
						marginTop: TOOLTIP_GAP,
					},
				},
			},
			'bottom-start': {
				'@layer': {
					[cssLayerComponent]: {
						marginLeft: TOOLTIP_GAP_BACK,
						marginTop: TOOLTIP_GAP,
						translate: '-100% 0',
					},
				},
			},
			'top-end': {
				'@layer': {
					[cssLayerComponent]: {
						marginLeft: TOOLTIP_GAP,
						marginTop: TOOLTIP_GAP_BACK,
						translate: '0 -100%',
					},
				},
			},
			'top-start': {
				'@layer': {
					[cssLayerComponent]: {
						marginLeft: TOOLTIP_GAP_BACK,
						marginTop: TOOLTIP_GAP_BACK,
						translate: '-100% -100%',
					},
				},
			},
		},
	},
});

export type TooltipPlacement = NonNullable<
	NonNullable<RecipeVariants<typeof tooltip>>['placement']
>;

/** The empty state: a flat disc in place of the ring, from the Figma skeleton. */
export const emptyDisc = style({
	'@layer': {
		[cssLayerComponent]: {
			alignSelf: 'center',
			backgroundImage: `linear-gradient(to right, ${vars.color.gamut.gray['200']}, ${vars.color.gamut.gray['100']})`,
			borderRadius: vars.border.radius.full,
			height: RING_SIZE,
			width: RING_SIZE,
		},
	},
});
