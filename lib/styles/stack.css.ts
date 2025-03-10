import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { odStyle } from './sprinkles.css';

/**
 * Defines stack styles as custom props in a vanilla-extract recipe for using directly or rolling a React component.
 */
export const stack = recipe({
	base: odStyle({ display: 'flex', flexWrap: 'wrap' }),
	variants: {
		space: {
			xxs: odStyle({ gap: '1' }),
			xs: odStyle({ gap: '3' }),
			sm: odStyle({ gap: '5' }),
			md: odStyle({ gap: '8' }),
			lg: odStyle({ gap: '9' }),
		},
		horizontal: {
			false: odStyle({ flexDirection: 'column' }),
			true: odStyle({ flexDirection: 'row' }),
		},
	},
	defaultVariants: {
		horizontal: false,
		space: 'md',
	},
});

type Variants = NonNullable<RecipeVariants<typeof stack>>;

/**
 * Annotated props for the stack recipe
 */
export interface RecipeStackProps {
	/**
	 * Control the gap spacing between items
	 */
	space?: Variants['space'];
	/**
	 * Change the orientation
	 */
	horizontal?: Variants['horizontal'];
}
