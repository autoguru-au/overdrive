import { style, StyleRule, styleVariants } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';
import { Tokens } from '../../themes/tokens';
import { mapTokenToProperty } from '../../utils/mapTokenToProperty';

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
	mapTokenToProperty(vars.typography.colour, 'color'),
);

export const fontWeight = styleVariants(
	mapTokenToProperty(vars.typography.fontWeight, 'fontWeight'),
);

export const noWrap = style({ whiteSpace: 'nowrap' });
export const breakWord = style({ wordBreak: 'break-word' });

export const transform = styleVariants(
	mapTokenToProperty(
		{ uppercase: 'uppercase', capitalize: 'capitalize' },
		'textTransform',
	),
);
