import { style, styleMap } from 'treat';

export const root = {
	default: style((theme) => ({
		position: 'fixed',
		inset: '0px',
		zIndex: 1000,
		transition: `opacity 0.2s ${theme.animation.easing.decelerate}, visibility 0s linear`,
	})),
	hidden: style((theme) => ({
		transition: `opacity 0.1s ${theme.animation.easing.decelerate} 0s, visibility 0s linear 0.1s`,
		visibility: 'hidden',
		opacity: 0,
	})),
	open: style({
		transition: `visibility 0s linear`,
		opacity: 1,
	}),
};

const backdropRoot = styleMap((theme) => ({
	default: {
		backgroundColor: theme.colours.gamut.gray900,
		opacity: 0.8,
	},
	invisible: {
		backgroundColor: 'transparent',
	},
}));

export const backdrop = {
	root: [
		backdropRoot.default,
		style({
			position: 'fixed',
			inset: '0px',
			zIndex: -1,
		}),
	],
	invisible: backdropRoot.invisible,
};
