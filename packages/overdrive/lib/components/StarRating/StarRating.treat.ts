import { styleMap } from 'treat';

export const star = styleMap((theme) => ({
	default: {
		position: 'relative',
		color: theme.colours.gamut.yellow500,
	},
	empty: {
		color: theme.colours.gamut.gray200,
	},
}));
