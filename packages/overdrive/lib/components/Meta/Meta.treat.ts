import { style, styleMap } from 'treat';

export const root = style((theme) => ({
	display: 'flex',
	alignContent: 'center',
	alignItems: 'center',
	flexDirection: 'row',
	justifyContent: 'flex-start',
	boxSizing: 'border-box',
	textDecoration: 'none',
	color: theme.colours.gamut.gray900,
}));

export const variant = styleMap((theme) => ({
	default: {
		flexShrink: 0,
		marginRight: '10px',
	},
	primary: {
		color: theme.colours.gamut.green900,
	},
	secondary: {
		color: theme.colours.gamut.gray900,
	},
}));
