import { style, styleMap } from 'treat';

export const disabled = style({ cursor: 'not-allowed' });

export const root = style((theme) => ({
	selectors: {
		[`&:not(${disabled}):focus`]: {
			borderColor: theme.colours.gamut.blue500,
		},
	},
}));

export const handle = styleMap((theme) => ({
	default: {
		width: theme.space[6],
		height: theme.space[6],
		transition: `background-color 0.1s ${theme.animation.easing.standard}`,
		selectors: {
			[`${root}:not(${disabled}) &:hover`]: {
				backgroundColor: theme.colours.gamut.green700,
			},
			[`${root}:not(${disabled}) &:active`]: {
				backgroundColor: theme.colours.gamut.green800,
			},
		},
	},
	disabled: {
		borderColor: theme.colours.gamut.green200,
		backgroundColor: theme.colours.gamut.green200,
	},
}));

export const label = style((theme) => ({
	minWidth: theme.space['8'],
}));
