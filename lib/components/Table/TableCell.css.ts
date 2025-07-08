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
		position: 'absolute',
		zIndex: -1,
		top: 0,
		right: '-1000%',
		bottom: 0,
		left: '-1000%',
		display: 'block',
		transition: `background-color 0.2s ${vars.animation.easing.accelerate}`,
		content: '""',
	},

	selectors: {
		'&:hover:before': {
			transitionTimingFunction: vars.animation.easing.decelerate,
			backgroundColor: vars.colours.gamut.gray100,
		},
	},
});
