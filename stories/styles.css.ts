import { style } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../lib/themes/theme.css';

export const boxSize = style({
	width: vars.space[9],
	height: vars.space[9]
})
