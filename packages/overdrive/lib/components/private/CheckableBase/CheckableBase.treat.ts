import { style, styleMap } from 'treat';

export const root = style({
	cursor: 'pointer',
});

export const label = styleMap((theme) => ({
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
	width: `calc(${theme.space['4']} + (${theme.space[3]} * 2))`,
	height: `calc(${theme.space['4']} + (${theme.space[3]} * 2))`,

	marginTop: `calc(-1*${theme.space['3']})`,
	marginBottom: `calc(-1*${theme.space['3']})`,
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
