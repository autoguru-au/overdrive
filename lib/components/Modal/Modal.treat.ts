import { style, styleMap } from 'treat';

export const root = {
	default: style((theme) => ({
		position: 'fixed',
		inset: '0px',
		zIndex: 1000,
	})),
	enter: style({
		opacity: 0,
	}),
	exit: style({
		opacity: 1,
	}),
	active: style((theme) => ({
		opacity: 1,
		transition: `opacity 0.2s ${theme.animation.easing.decelerate}`,
	})),
	exitActive: style((theme) => ({
		opacity: 0,
		transition: `opacity 0.2s ${theme.animation.easing.decelerate}`,
	})),
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
