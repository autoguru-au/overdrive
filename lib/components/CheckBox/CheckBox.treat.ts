import { style, styleMap } from 'treat';

export const checkbox = style({
	display: 'flex',
});

export const icon = style(theme => ({
	position: 'absolute',
	zIndex: 1,
	top: theme.space['3'],
	left: theme.space['3'],
	width: theme.space['4'],
	height: theme.space['4'],
	color: theme.colours.gamut.white,
}));

export const base = styleMap(theme => ({
	default: {
		zIndex: 0,
		position: 'absolute',
		borderRadius: '2px',
		top: theme.space['3'],
		left: theme.space['3'],
		width: theme.space['4'],
		height: theme.space['4'],
		transition: `border-color 0.2s ${theme.animation.easing.decelerate} 0s, background-color 0.2s ${theme.animation.easing.decelerate} 0s`,
		border: `2px solid ${theme.colours.gamut.gray300}`,
	},

	selected: {
		borderColor: theme.colours.gamut.green600,
		backgroundColor: theme.colours.gamut.green600,
	},
}));
