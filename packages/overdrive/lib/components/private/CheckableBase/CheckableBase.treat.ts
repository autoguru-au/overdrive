import { style, styleMap } from 'treat';

export const root = style({
	cursor: 'pointer',
});

export const label = styleMap((theme) => ({
	default: {
		paddingLeft: `calc(${theme.space['4']} + ${theme.space['1']} + (${theme.space['3']} * 2))`,
	},
	disabled: {
		color: theme.colours.gamut.gray500,
	},
}));

export const nativeInput = styleMap({
	default: {
		zIndex: 2,
		top: 0,
		left: 0,
		cursor: 'inherit',
		opacity: 0,
	},
	checked: {
		outline: 'none',
	},
});

export const checkable = style((theme) => ({
	zIndex: 1,
	top: `calc(50% - (${theme.space['4']} + (${theme.space[3]} * 2)) * 0.5)`,
	left: theme.space['1'],
	width: `calc(${theme.space['4']} + (${theme.space[3]} * 2))`,
	height: `calc(${theme.space['4']} + (${theme.space[3]} * 2))`,
}));

export const checkableItem = style((theme) => ({
	selectors: {
		[`${nativeInput.default}:focus:checked ~${checkable} &`]: {
			boxShadow: `0 0 0 2px ${theme.colours.gamut.green900}`,
		},
		[`${nativeInput.default}:focus:not(:checked) ~${checkable} >&`]: {
			borderColor: theme.colours.gamut.green900,
		},
	},
}));
