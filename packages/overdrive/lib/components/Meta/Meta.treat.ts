import { styleMap } from 'treat';

export const variant = styleMap((theme) => ({
	primary: {
		color: theme.colours.gamut.green900,
	},
	secondary: {
		color: theme.colours.gamut.gray900,
	},
}));
