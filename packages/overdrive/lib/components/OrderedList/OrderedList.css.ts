import { styleVariants } from '@vanilla-extract/css';

import { vars } from '../../themes/base/vars.css';

export const root = styleVariants({
	default: {
		listStyle: 'outside lower-roman',
	},
	firstOccurrence: {
		paddingLeft: `calc(${vars.space['6']} * 2)`,
	},
});
