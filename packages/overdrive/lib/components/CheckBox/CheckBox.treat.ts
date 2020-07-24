import { style, styleMap } from 'treat';

export const icon = style((theme) => ({
	zIndex: 1,
	top: `calc(50% - 0.5*(${theme.space['4']}))`,
	left: `calc(50% - 0.5*(${theme.space['4']}))`,
	width: theme.space['4'],
	height: theme.space['4'],
}));

export const base = styleMap((theme) => ({
	default: {
		zIndex: 0,
		borderRadius: '2px',
		top: theme.space['3'],
		left: theme.space['3'],
		width: theme.space['4'],
		height: theme.space['4'],
		transition: `border-color 0.2s ${theme.animation.easing.decelerate} 0s, background-color 0.2s ${theme.animation.easing.decelerate} 0s`,
	},

	selected: {
		borderColor: theme.colours.gamut.green600,
	},
}));
