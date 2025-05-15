import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { overdriveTokens as tokens } from '../themes/theme.css';

export const typographyStyles = recipe({
	base: {
		selectors: {
			'&::selection': {
				color: tokens.typography.colour.white,
				background: tokens.typography.colour.primary,
			},
		},
	},
	variants: {
		breakWord: {
			true: {
				wordBreak: 'break-word',
			},
		},
		noWrap: {
			true: {
				whiteSpace: 'nowrap',
			},
		},
		transform: {
			uppercase: {
				textTransform: 'uppercase',
			},
			capitalize: {
				textTransform: 'capitalize',
			},
		},
	},
});

export type TypographyStyles = NonNullable<
	RecipeVariants<typeof typographyStyles>
>;
