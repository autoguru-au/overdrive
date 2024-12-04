import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { sprinkles } from './sprinkles.css';

export const stack = recipe({
	base: sprinkles({ display: 'flex', flexWrap: 'wrap' }),
	variants: {
		alignItems: {
			start: sprinkles({ justifyContent: 'flex-start' }),
			center: sprinkles({ justifyContent: 'center' }),
			end: sprinkles({ justifyContent: 'flex-end' }),
		},
		space: {
			sm: sprinkles({ gap: '5' }),
			md: sprinkles({ gap: '8' }),
			lg: sprinkles({ gap: '9' }),
		},
		// space: Object.fromEntries(
		// 	Object.entries(tokens.space).map(([key, val]) => [
		// 		key,
		// 		{ gap: val },
		// 	]),
		// ),
		horizontal: {
			false: sprinkles({ flexDirection: 'column' }),
			true: sprinkles({ flexDirection: 'row' }),
		},
		width: {
			full: sprinkles({ width: '100%' }),
		},
	},
	defaultVariants: {
		alignItems: 'start',
		horizontal: false,
		space: 'md',
	},
});

type Variants = NonNullable<RecipeVariants<typeof stack>>;

export interface RecipeStackProps {
	/**
	 * Set the item alignment
	 */
	alignItems?: Variants['alignItems'];
	/**
	 * Control the gap spacing between items
	 */
	space?: Variants['space'];
	/**
	 * Change the orientation
	 */
	horizontal?: Variants['horizontal'];
	/**
	 * Configure full width
	 */
	width?: Variants['width'];
}
