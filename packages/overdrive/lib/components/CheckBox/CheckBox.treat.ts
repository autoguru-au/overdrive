import { style, styleMap } from 'treat';

export const icon = style((theme) => ({
	zIndex: 1,
	top: `calc(50% - 0.5*(${theme.space['4']}))`,
	left: `calc(50% - 0.5*(${theme.space['4']}))`,
	width: theme.space['4'],
	height: theme.space['4'],
}));

export const base = styleMap(({ space, animation, colours }) => ({
	default: {
		zIndex: 0,
		borderRadius: '2px',
		top: space['3'],
		left: space['3'],
		width: space['4'],
		height: space['4'],
		transition: `border-color 0.2s ${animation.easing.decelerate} 0s, background-color 0.2s ${animation.easing.decelerate} 0s`,
	},

	selected: {
		borderColor: colours.intent.primary.background,
	},
}));
