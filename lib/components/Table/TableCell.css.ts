import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const root = style({
	borderBottomColor: vars.colours.gamut.black100,

	/*
	We do this hack, as our row's have no distinct element. Once subgrid is
		supported across browsers we can revisit this approach.

	@see https://caniuse.com/#feat=css-subgrid
	 */
	':before': {
		bottom: 0,
		content: '""',
		display: 'block',
		left: '-1000%',
		position: 'absolute',
		right: '-1000%',
		top: 0,
		transition: `background-color 0.2s ${vars.animation.easing.accelerate}`,
		zIndex: -1,
	},

	selectors: {
		'&:hover:before': {
			backgroundColor: vars.colours.gamut.gray100,
			transitionTimingFunction: vars.animation.easing.decelerate,
		},
	},
});
