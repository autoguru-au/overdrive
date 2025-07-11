import { keyframes, style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const root = style({
	minHeight: vars.typography.size['3'].fontSize,
});

const blinker = keyframes({
	'0%': {
		opacity: 0.4,
	},

	'100%': {
		opacity: 0.4,
	},

	'50%': {
		opacity: 1,
	},
});

export const blinking = style({
	animationDuration: '1.5s',
	animationIterationCount: 'infinite',
	animationName: blinker,
	animationTimingFunction: vars.animation.easing.standard,
});
