import { style } from 'treat';

export const root = style((theme) => ({
	position: 'relative',

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
		transition: `background-color 0.2s ${theme.animation.easing.accelerate}`,
	},

	selectors: {
		'&:hover:before': {
			transitionTimingFunction: theme.animation.easing.decelerate,
			backgroundColor: theme.colours.gamut.gray100,
		},
	},
}));
