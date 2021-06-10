import { style } from 'treat';

import { shadedColour } from '../../themes/helpers';

export const root = style(({ animation, border, shadeIntensity, isDark }) => ({
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
		transition: `background-color 0.2s ${animation.easing.accelerate}`,
	},

	selectors: {
		'&:hover:before': {
			transitionTimingFunction: animation.easing.decelerate,
			backgroundColor: shadedColour(
				border.colours.light,
				shadeIntensity.slight,
				'forward',
				isDark,
			),
		},
	},
}));
