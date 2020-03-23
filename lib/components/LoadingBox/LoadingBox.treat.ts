import { style } from 'treat';

export const root = style((theme) => ({
	width: '100%',
	display: 'inline-block',
	minHeight: theme.typography.size['3'].fontSize,
}));

export const blinking = style((theme) => ({
	animationDuration: '1.5s',
	animationTimingFunction: theme.animation.easing.standard,
	animationIterationCount: 'infinite',

	'@keyframes': {
		'0%': {
			opacity: 0.4,
		},

		'50%': {
			opacity: 1,
		},

		'100%': {
			opacity: 0.4,
		},
	},
}));
