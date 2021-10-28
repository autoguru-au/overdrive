import { style, StyleRule, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../themes/base/vars.css';
import { Tokens } from '../../themes/tokens';
import { mapTokenToProperty_Legacy } from '../../utils/mapTokenToProperty_Legacy';

export const root = style({
	selectors: {
		'&::selection': {
			color: vars.typography.colour.white,
			background: vars.typography.colour.primary,
		},
	},
});

export const sizes = styleVariants(
	Object.entries(vars.typography.size).reduce(
		(result, [name, size]) => ({
			...result,
			[name]: {
				fontSize: size.fontSize,
				lineHeight: size.lineHeight,
			},
		}),
		{} as Record<keyof Tokens['typography']['size'], StyleRule>,
	),
);

export const colours = styleVariants(
	mapTokenToProperty_Legacy(vars.typography.colour, 'color'),
);

export const fontWeight = styleVariants(
	mapTokenToProperty_Legacy(vars.typography.fontWeight, 'fontWeight'),
);

export const noWrap = style({ whiteSpace: 'nowrap' });

export const transform = styleVariants(
	mapTokenToProperty_Legacy(
		{ uppercase: 'uppercase', capitalize: 'capitalize' },
		'textTransform',
	),
);
