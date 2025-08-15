import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const root = style({
	alignContent: 'center',
	alignItems: 'center',
	display: 'grid',
	gridGap: vars.space['1'],
	justifyContent: 'center',
	padding: `${vars.space['3']} ${vars.space['4']}`,
});

export const step = style({
	height: '2px',
});
