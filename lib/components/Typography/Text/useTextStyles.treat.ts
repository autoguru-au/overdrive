import { Style, style, styleMap } from 'treat';
import { Theme } from 'treat/theme';

import { mapTokenToProperty } from '../../../utils';

export const root = style((theme) => ({
	fontWeight: theme.typography.fontWeight.normal,
	margin: 0,
	padding: 0,

	selectors: {
		'&::selection': {
			color: theme.typography.colour.white,
			background: theme.colours.gamut.green600,
		},
	},
}));

export const sizes = styleMap((theme) =>
	Object.entries(theme.typography.size).reduce(
		(result, [name, size]) => ({
			...result,
			[name]: {
				fontSize: size.fontSize,
				lineHeight: size.lineHeight,
			},
		}),
		{} as Record<keyof Theme['typography']['size'], Style>,
	),
);

export const colours = styleMap((theme) =>
	mapTokenToProperty(theme.typography.colour, 'color'),
);

export const align = styleMap({
	left: {
		textAlign: 'left',
	},
	center: {
		textAlign: 'center',
	},
	right: {
		textAlign: 'right',
	},
});

export const fontWeight = styleMap((theme) =>
	mapTokenToProperty(theme.typography.fontWeight, 'fontWeight'),
);

export const noWrap = style({ whiteSpace: 'nowrap' });
