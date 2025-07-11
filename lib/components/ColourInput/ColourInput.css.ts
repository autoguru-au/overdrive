import { style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const input = style({
	opacity: 0,
});
export const colouredBoxHolder = style({
	left: '0',
	top: '0',
});
export const colouredBoxHolderSize = styleVariants({
	medium: {
		width: vars.space['8'],
	},
	small: {
		width: `calc(${vars.typography.size['3'].lineHeight} + (2* ${vars.space['2']}))`,
	},
});
export const valueText = style({
	top: '50%',
	transform: 'translateY(-50%)',
});
export const valueTextSize = styleVariants({
	medium: {
		left: vars.space['8'],
	},
	small: {
		left: `calc(${vars.typography.size['3'].lineHeight} + (2* ${vars.space['2']}))`,
	},
});
