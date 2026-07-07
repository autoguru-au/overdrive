import { styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const variant = styleVariants({
	primary: {
		color: vars.color.gamut.green['700'],
	},
	secondary: {
		color: vars.color.foreground.primary,
	},
});
