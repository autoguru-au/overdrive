import { style, styleMap } from 'treat';

import { mapTokenToProperty } from '../../utils';

export const root = style((theme) => ({
	':before': {
		position: 'absolute',
		top: 0,
		left: 0,
		width: theme.space['1'],
		height: '100%',
		content: '""',
	},
}));

export const intent = styleMap((theme) =>
	mapTokenToProperty(theme.colours.intent, (value) => ({
		color: value.background,
		':before': {
			backgroundColor: value.background,
		},
	})),
);

export const contained = style(() => ({
	minWidth: '280px',
	maxWidth: '640px',
}));
