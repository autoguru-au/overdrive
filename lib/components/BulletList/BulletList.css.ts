import { style } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';

export const root = style({
	listStyle: 'inside none',
});

export const firstOccurrence = style({
	paddingLeft: vars.space['6'],
});
