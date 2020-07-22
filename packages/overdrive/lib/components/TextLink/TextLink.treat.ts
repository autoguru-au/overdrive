import { style } from 'treat';

export const root = style((theme) => ({
	transitionDelay: '0s',
	transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
	transitionDuration: '0.2s',
	transitionProperty: 'box-shadow',
	boxShadow: `inset 0 -2px 0 0 ${theme.colours.gamut.green500}`,
	':hover': {
		boxShadow: `inset 0 -1.6em 0 0 ${theme.colours.gamut.green400}`,
	},
}));

export const muted = style((theme) => ({
	':hover': {
		color: 'white',
		boxShadow: `inset 0 -1.6em 0 0 ${theme.colours.gamut.gray500}`,
	},
}));
