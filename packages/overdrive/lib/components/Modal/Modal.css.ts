import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../themes/base/vars.css';


export const root = ({
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
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
	root: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		zIndex: 999,
		backgroundColor: vars.colours.intent.neutral.background.strong,
		backdropFilter: 'blur(5px)',
	},
	invisible: {
		backgroundColor: 'transparent',
		backdropFilter: 'none',
	},
});
