import { styleMap } from 'treat';

export const root = styleMap((theme) => ({
	default: {
		listStyle: 'outside lower-roman',
	},
	firstOccurrence: {
		paddingLeft: `calc(${theme.space['6']} * 2)`,
	},
}));
