import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../themes/base/vars.css';
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

console.log(intent);

export const contained = style({
	minWidth: '280px',
	maxWidth: '640px',
});
