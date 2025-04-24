import { style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const input = style({
	opacity: 0,
});
export const colouredBoxHolder = style({
	top: '0',
	left: '0',
});
export const colouredBoxHolderSize = styleVariants({
	small: {
		width: `calc(${vars.typography.size['3'].lineHeight} + (2* ${vars.space['2']}))`,
	},
	medium: {
		width: vars.space['8'],
	},
});
export const valueText = style({
	top: '50%',
	transform: 'translateY(-50%)',
});
export const valueTextSize = styleVariants({
	small: {
		left: `calc(${vars.typography.size['3'].lineHeight} + (2* ${vars.space['2']}))`,
	},
	medium: {
		left: vars.space['8'],
	},
});
