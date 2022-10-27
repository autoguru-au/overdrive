import { styleVariants } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';

export const root = styleVariants({
	default: {
		listStyle: 'outside lower-roman',
	},
	firstOccurrence: {
		paddingLeft: `calc(${vars.space['6']} * 2)`,
	},
});
