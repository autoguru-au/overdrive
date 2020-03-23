import { style, styleMap } from 'treat';

export const flexCenter = style({
	display: 'flex',
	alignContent: 'center',
	alignItems: 'center',
	flexDirection: 'row',
	justifyContent: 'center',
});

export const disabled = style({ cursor: 'not-allowed' });

export const root = style((theme) => ({
	userSelect: 'none',
	color: theme.colours.gamut.gray900,
	outline: 'none',

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
		cursor: 'pointer',
		color: theme.colours.gamut.white,
		outline: 'none',
		backgroundColor: theme.colours.gamut.green600,
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
	flex: '1 0 auto',
	minWidth: theme.space['8'],
	padding: `0 ${theme.space['2']}`,
	textAlign: 'center',
}));
