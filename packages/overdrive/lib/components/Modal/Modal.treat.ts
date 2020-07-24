import { style, styleMap } from 'treat';

import { hex2rgba } from '../../utils';

export const root = {
	default: style({
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		zIndex: 1000,
		animationDuration: '0.2s',
		animationTimingFunction: 'ease',
	}),
	fadeIn: style({
		'@keyframes': {
			from: {
				opacity: 0,
			},
			to: {
				opacity: 1,
			},
		},
	}),
	fadeOut: style({
		'@keyframes': {
			from: {
				opacity: 1,
			},
			to: {
				opacity: 0,
			},
		},
	}),
};

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
			zIndex: -1,
		}),
	],
	invisible: backdropRoot.invisible,
};
