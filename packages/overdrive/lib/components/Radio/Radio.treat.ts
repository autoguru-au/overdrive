import { styleMap } from 'treat';

export const circle = styleMap(({ animation, space, typography }) => ({
	default: {
		transition: `border-color 0.2s ${animation.easing.decelerate} 0s`,
	},
	outer: {
		top: space['3'],
		left: space['3'],
		width: space['4'],
		height: space['4'],
	},
	inner: {
		top: `calc(${space['3']} + (${space['4']} - ${space['2']}) * 0.5)`,
		left: `calc(${space['3']} + (${space['4']} - ${space['2']}) * 0.5)`,
		width: space['2'],
		height: space['2'],
	},
	selectedInner: {
		borderWidth: `calc(${space['2']} / 2)`,
	},
	selected: {
		borderColor: typography.colour.primary,
	},
}));
