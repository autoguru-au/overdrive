import { Style, style, styleMap } from 'treat';
import type { Theme } from 'treat/theme';

import { mapTokenToProperty } from '../../utils/mapTokenToProperty';

export const root = style(({ typography }) => ({
	selectors: {
		'&::selection': {
			color: typography.colour.white,
			background: typography.colour.primary,
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

export const fontWeight = styleMap((theme) =>
	mapTokenToProperty(theme.typography.fontWeight, 'fontWeight'),
);

export const noWrap = style({ whiteSpace: 'nowrap' });

export const transform = styleMap(
	mapTokenToProperty(
		{ uppercase: 'uppercase', capitalize: 'capitalize' },
		'textTransform',
	),
);
