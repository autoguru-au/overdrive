import { style, styleMap } from 'treat';

import { hex2rgba } from '../../utils';

const reducedMotion = style({
	'@media': {
		'screen and (prefers-reduced-motion)': {
			transform: 'none !important',
		},
	},
});

export const root = style({
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	zIndex: 1000,
});

export const transition = style((theme) => ({
	transition: `transform .175s ${theme.animation.easing.standard}, opacity 0.3s ${theme.animation.easing.standard}`,
}));

export const entry = [
	reducedMotion,
	style({
		transform: 'scale(.95)',
	}),
];

const backdropRoot = styleMap((theme) => ({
	default: {
		backgroundColor: hex2rgba(theme.colours.gamut.gray900, '0.8'),
		backdropFilter: 'blur(5px)',
	},
	invisible: {
		backgroundColor: 'transparent',
		backdropFilter: 'none',
	},
}));

export const backdrop = {
	root: [
		backdropRoot.default,
		style({
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			zIndex: 999,
		}),
	],
	invisible: backdropRoot.invisible,
};
