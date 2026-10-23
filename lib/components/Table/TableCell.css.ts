import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

const wash = {
	backgroundColor: vars.color.gamut.gray['100'],
	transitionTimingFunction: vars.animation.easing.decelerate,
};

export const root = style({
	borderBottomColor: vars.color.border.default,
	transition: `background-color 0.2s ${vars.animation.easing.accelerate}`,

	selectors: {
		/*
		The wash is painted by the cells themselves rather than by one cell's
			pseudo-element stretched across the row. Our rows have no box of
			their own (the `<tr>` is display: contents), and anything that has to
			escape a cell to paint — a `z-index: -1` pseudo-element, say — is
			trapped the moment any cell forms a stacking context. A cell's own
			background cannot be.

		@see AG-22531
		 */
		'tr[data-hover]:has(> &[data-hover]:hover) > &[data-hover]': wash,

		/* A cell that opts back in inside a `hover={false}` row washes alone. */
		'&[data-hover]:hover': wash,
	},
});
