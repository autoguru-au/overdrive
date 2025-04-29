import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const input = style({
	marginTop: `calc(-1 * ${vars.border.width['1']})`,
	marginBottom: `calc(-1 * ${vars.border.width['1']})`,
});
export const paddedInput = style({
	selectors: {
		[`${input}&`]: {
			paddingRight: vars.space['8'],
		},
	},
});

export const arrow = style({
	top: '0',
	right: '0',
});

export const arrowDisabled = style({
	opacity: 0.2,
});
