import { styleVariants } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';

export const star = styleVariants({
	default: {
		color: vars.colours.intent.shine.foreground,
	},
	empty: {
		color: vars.colours.intent.shine.background.standard,
	},
});
