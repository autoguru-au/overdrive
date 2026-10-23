import { createVar, globalLayer, style } from '@vanilla-extract/css';

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

export const root = style({
	'@layer': {
		[cssLayerComponent]: {
			alignItems: 'center',
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

/** The empty state: a flat disc in place of the ring, from the Figma skeleton. */
export const emptyDisc = style({
	'@layer': {
		[cssLayerComponent]: {
			backgroundImage: `linear-gradient(to right, ${vars.color.gamut.gray['200']}, ${vars.color.gamut.gray['100']})`,
			borderRadius: vars.border.radius.full,
			height: RING_SIZE,
			width: RING_SIZE,
		},
	},
});
