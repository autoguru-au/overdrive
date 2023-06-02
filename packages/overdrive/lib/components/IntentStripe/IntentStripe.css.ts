import { style } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';

export const intentBox = style({
	top: 0,
	left: 0,
	width: vars.space['1'],
});
