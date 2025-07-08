import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const root = style({
	display: 'grid',
	gridGap: vars.space['1'],
	alignContent: 'center',
	alignItems: 'center',
	justifyContent: 'center',
	padding: `${vars.space['3']} ${vars.space['4']}`,
});

export const step = style({
	height: '2px',
});
