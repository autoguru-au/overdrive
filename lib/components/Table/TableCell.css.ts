import { style } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';

export const root = style({
	position: 'relative',
	borderBottomColor: vars.colours.gamut.black100,

	/*
	We do this hack, as our row's have no distinct element. Once subgrid is
		supported across browsers we can revisit this approach.

	@see https://caniuse.com/#feat=css-subgrid
	 */
	':before': {
		display: 'block',
		content: '""',
		position: 'absolute',
		zIndex: -1,
		top: 0,
		bottom: 0,
		left: '-1000%',
		right: '-1000%',
		transition: `background-color 0.2s ${vars.animation.easing.accelerate}`,
	},

	selectors: {
		'&:hover:before': {
			transitionTimingFunction: vars.animation.easing.decelerate,
			backgroundColor: vars.colours.gamut.gray100,
		},
	},
});
