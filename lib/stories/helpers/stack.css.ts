import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { overdriveTokens as tokens } from '../../themes/theme.css';

/**
 * Defines stack styles as custom props in a vanilla-extract recipe for using directly or rolling a React component.
 */
export const stack = recipe({
	base: { display: 'flex', flexWrap: 'wrap' },
	variants: {
		space: {
			xxs: { gap: tokens.space['1'] },
			xs: { gap: tokens.space['3'] },
			sm: { gap: tokens.space['5'] },
			md: { gap: tokens.space['8'] },
			lg: { gap: tokens.space['9'] },
		},
		horizontal: {
			false: { flexDirection: 'column' },
			true: { flexDirection: 'row' },
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
