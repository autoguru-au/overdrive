import { style, styleMap } from 'treat';

export const starList = style({
	display: 'flex',
	alignContent: 'center',
	alignItems: 'center',
	flexDirection: 'row',
	justifyContent: 'flex-start',
	boxSizing: 'border-box',
});
export const label = style((theme) => ({
	marginLeft: theme.space['2'],
}));

export const star = styleMap((theme) => ({
	default: {
		position: 'relative',
		color: theme.colours.gamut.yellow500,
	},
	empty: {
		color: theme.colours.gamut.gray200,
	},
}));
