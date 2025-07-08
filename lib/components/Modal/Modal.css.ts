import { style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const root = style({
	zIndex: 1000,
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
});

export const transition = style({
	transition: `transform .175s ${vars.animation.easing.standard}, opacity 0.3s ${vars.animation.easing.standard}`,
});

export const entry = style({
	'@media': {
		'screen and (prefers-reduced-motion)': {
			transform: 'none !important',
		},
	},
	transform: 'scale(.95)',
});

export const backdrop = styleVariants({
	root: {
		zIndex: 999,
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		opacity: 0.75,
		backdropFilter: 'blur(5px)',
	},
	invisible: {
		backdropFilter: 'none',
	},
});
