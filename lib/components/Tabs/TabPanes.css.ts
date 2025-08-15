import { style } from '@vanilla-extract/css';

export const root = style({
	float: 'left',
	outline: 'none',

	':after': {
		clear: 'both',
		content: '""',
		display: 'table',
	},
});
