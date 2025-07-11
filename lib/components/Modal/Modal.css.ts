import { style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const root = style({
	bottom: 0,
	left: 0,
	right: 0,
	top: 0,
	zIndex: 1000,
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
	invisible: {
		backdropFilter: 'none',
	},
	root: {
		backdropFilter: 'blur(5px)',
		bottom: 0,
		left: 0,
		opacity: 0.75,
		right: 0,
		top: 0,
		zIndex: 999,
	},
});
