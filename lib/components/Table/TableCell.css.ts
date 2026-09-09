import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const root = style({
	borderBottomColor: vars.color.border.default,

	selectors: {
		/*
		Hover wash. On its own the pseudo-element covers just this cell, which is
			what a cell gets when it opts in to hover inside a row that has it
			switched off.
		 */
		'&[data-hover]:before': {
			bottom: 0,
			content: '""',
			display: 'block',
			left: 0,
			position: 'absolute',
			right: 0,
			top: 0,
			transition: `background-color 0.2s ${vars.animation.easing.accelerate}`,
			zIndex: -1,
		},

		/*
		Row wash. Our rows have no box of their own (the `<tr>` is display:
			contents), so when the row has hover on we stretch the hovered cell's
			pseudo-element across the whole row and let the table clip it. Once
			subgrid is supported across browsers we can revisit this approach.

		@see https://caniuse.com/#feat=css-subgrid
		 */
		'tr[data-hover] > &[data-hover]:before': {
			left: '-1000%',
			right: '-1000%',
		},

		'&[data-hover]:hover:before': {
			backgroundColor: vars.color.gamut.gray['100'],
			transitionTimingFunction: vars.animation.easing.decelerate,
		},
	},
});
