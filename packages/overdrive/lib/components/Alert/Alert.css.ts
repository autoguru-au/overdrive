import { style } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';

export const intentBox = style({
	position: 'absolute',
	top: 0,
	left: 0,
	width: vars.space['1'],
	height: '100%',
});

export const contained = style({
	minWidth: '280px',
	maxWidth: '640px',
});
