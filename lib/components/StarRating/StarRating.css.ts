import { styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const star = styleVariants({
	default: {
		color: vars.color.intent.shine.foreground,
	},
	empty: {
		color: vars.color.intent.shine.background.standard,
	},
});
