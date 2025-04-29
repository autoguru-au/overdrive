import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const root = style({
	display: 'grid',
	gridGap: vars.space['1'],
	padding: `${vars.space['3']} ${vars.space['4']}`,
	alignContent: 'center',
	justifyContent: 'center',
	alignItems: 'center',
});

export const step = style({
	height: '2px',
});
