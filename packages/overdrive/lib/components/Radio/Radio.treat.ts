import { styleMap } from 'treat';

export const circle = styleMap((theme) => ({
	default: {
		transition: `border-color 0.2s ${theme.animation.easing.decelerate} 0s`,
	},
	outer: {
		top: theme.space['3'],
		left: theme.space['3'],
		width: theme.space['4'],
		height: theme.space['4'],
	},
	inner: {
		top: `calc(${theme.space['3']} + (${theme.space['4']} - ${theme.space['2']}) * 0.5)`,
		left: `calc(${theme.space['3']} + (${theme.space['4']} - ${theme.space['2']}) * 0.5)`,
		width: theme.space['2'],
		height: theme.space['2'],
	},
	selectedInner: {
		borderWidth: `calc(${theme.space['2']} / 2)`,
	},
	selected: {
		borderColor: theme.colours.gamut.green600,
	},
}));
