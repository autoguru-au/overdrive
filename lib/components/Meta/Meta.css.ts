import { styleVariants } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';

export const variant = styleVariants({
	primary: {
		color: vars.colours.intent.primary.background.strong,
	},
	secondary: {
		color: vars.typography.colour.dark,
	},
});
