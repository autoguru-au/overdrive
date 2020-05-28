import { style } from 'treat';

export const root = style({
	float: 'left',
	outline: 'none',

	':after': {
		display: 'table',
		clear: 'both',
		content: '""',
	},
});
