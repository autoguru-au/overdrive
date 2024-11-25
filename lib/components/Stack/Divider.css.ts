import { style } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';

export const line = style({
	height: '1px',
	boxShadow: `inset 0 0 0 1px ${vars.colours.background.neutral}`,
});
