import { globalLayer, style } from '@vanilla-extract/css';

import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

globalLayer(LAYER_ORDER);

const wash = {
	backgroundColor: vars.color.gamut.gray['100'],
	transitionTimingFunction: vars.animation.easing.decelerate,
};

export const root = style({
	borderBottomColor: vars.color.border.default,
	transition: `background-color 0.2s ${vars.animation.easing.accelerate}`,

	'@layer': {
		/*
		The wash sits in the component layer so that any unlayered rule a
			consumer writes beats it outright, whatever its specificity. It sets
			`background-color` on the cell itself, and the row-wide selector
			carries a specificity of (0,6,1) — `:has()` contributes its most
			specific argument — so an ordinary `.selected > td { background }`
			at (0,1,1) would lose to it on specificity alone. Layer order
			settles that before specificity is ever consulted.
		 */
		[cssLayerComponent]: {
			selectors: {
				/*
				The wash is painted by the cells themselves rather than by one
					cell's pseudo-element stretched across the row. Our rows have
					no box of their own (the `<tr>` is display: contents), and
					anything that has to escape a cell to paint — a
					`z-index: -1` pseudo-element, say — is trapped the moment any
					cell forms a stacking context. A cell's own background
					cannot be.
				 */
				'tr[data-hover]:has(> &[data-hover]:hover) > &[data-hover]':
					wash,

				/* A cell that opts back in inside a `hover={false}` row washes alone. */
				'&[data-hover]:hover': wash,
			},
		},
	},
});
