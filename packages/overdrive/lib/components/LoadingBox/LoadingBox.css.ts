import { keyframes, style } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';

export const root = style({
	minHeight: vars.typography.size['3'].fontSize,
});

const blinker = keyframes({
	'0%': {
		opacity: 0.4,
	},

	'50%': {
		opacity: 1,
	},

	'100%': {
		opacity: 0.4,
	},
});

export const blinking = style({
	animationDuration: '1.5s',
	animationTimingFunction: vars.animation.easing.standard,
	animationIterationCount: 'infinite',
	animationName: blinker,
});
