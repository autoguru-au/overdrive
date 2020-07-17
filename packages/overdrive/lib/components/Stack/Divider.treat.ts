import { style } from 'treat';

export const line = style((theme) => ({
	height: '1px',
	boxShadow: `inset 0 0 0 1px ${theme.colours.gamut.gray200}`,
}));
