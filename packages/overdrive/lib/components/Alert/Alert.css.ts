import { style, styleVariants } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';
import { mapTokenToProperty } from '../../utils/mapTokenToProperty';

export const root = style({
	':before': {
		position: 'absolute',
		top: 0,
		left: 0,
		width: vars.space['1'],
		height: '100%',
		content: '""',
	},
});

export const intent = styleVariants(
	mapTokenToProperty(
		vars.colours.intent,
		(value) => ({
			color: value.background.standard,
			':before': {
				backgroundColor: value.background.standard,
			},
		}),
		['neutral', 'shine', 'primary', 'secondary'],
	),
);

export const contained = style({
	minWidth: '280px',
	maxWidth: '640px',
});
