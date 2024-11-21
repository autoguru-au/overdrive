import { style } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';

export const root = style({
	display: 'grid',
	gridGap: `${vars.space['1']} ${vars.space['5']}`,
});
