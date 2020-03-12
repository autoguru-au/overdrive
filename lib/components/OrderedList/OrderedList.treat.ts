import { style, styleMap } from 'treat';

export const listItem = style(theme => ({
	selectors: {
		'&:not(:last-of-type)': {
			marginBottom: theme.space['2'],
		},
	},
}));

export const root = styleMap(theme => ({
	default: {
		paddingLeft: theme.space['6'],
		listStyle: 'outside lower-roman',
		color: theme.colours.gamut.gray900,
		selectors: {
			[`${listItem} :last-of-type + &`]: {
				marginTop: theme.space['2'],
			},
		},
	},
	firstOccurrence: {
		paddingLeft: `calc(${theme.space['6']} * 2)`,
	},
}));
