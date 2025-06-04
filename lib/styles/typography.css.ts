import { styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { overdriveTokens as tokens } from '../themes/theme.css';

const fontScale = {
	...tokens.typography.size,
	xxs: tokens.typography.size[1],
	xs: tokens.typography.size[2],
	sm: tokens.typography.size[3],
	md: tokens.typography.size[4],
	lg: tokens.typography.size[5],
	xl: tokens.typography.size[6],
	'2xl': tokens.typography.size[7],
	'3xl': tokens.typography.size[8],
	'4xl': tokens.typography.size[9],
};

const fontSizes = Object.entries(fontScale).reduce(
	(obj, [key, value]) => {
		obj[key] = { fontSize: value.fontSize };
		return obj;
	},
	{} as Record<keyof typeof fontScale, { fontSize: string }>,
);

export const fontSize = styleVariants(fontSizes);
export const fontWeight = styleVariants(
	tokens.typography.fontWeight,
	(weight) => ({
		fontWeight: weight,
	}),
);

/**
 * A recipe for styling text from the typography scale, including line-height and font weight.
 */
export const styledFont = recipe({
	base: [],
	variants: {
		size: fontScale,
		weight: fontWeight,
		lineHeight: {
			true: [],
		},
	},
	defaultVariants: {
		size: 'md',
		lineHeight: true,
	},
	compoundVariants: [
		{
			variants: { lineHeight: false },
			style: {
				lineHeight: '1',
			},
		},
	],
});
