import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../themes/base/vars.css';

export const variant = styleVariants({
	primary: {
		color: vars.colours.intent.primary.background.strong,
	},
	secondary: {
		color: vars.typography.colour.dark,
	},
});
