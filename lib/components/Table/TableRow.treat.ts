import { style } from 'treat';

export const root = style({
	outline: 0,
	verticalAlign: 'middle',
});

export const hover = style((theme) => ({
	':hover': {
		backgroundColor: theme.colours.gamut.gray100,
	},
}));
