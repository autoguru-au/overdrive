import { styleVariants } from '@vanilla-extract/css';

import { vars } from '../../themes/base/vars.css';

export const star = styleVariants({
	default: {
		color: vars.colours.intent.shine.foreground,
	},
	empty: {
		color: vars.colours.intent.shine.background.standard,
	},
});
