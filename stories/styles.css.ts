import { style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { themeContractVars as vars } from '../lib/themes/theme.css';

export const boxSize = style({
	width: vars.space[9],
	height: vars.space[9],
});

export const titles = style({
	marginTop: '11px',
});

export const labels = style({
	textTransform: 'capitalize',
});

export const styleStack = recipe({
	base: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	variants: {
		vertical: {
			true: { flexDirection: 'column' },
		},
		gap: {
			sm: { gap: vars.space[3] },
			md: { gap: vars.space[6] },
			lg: { gap: vars.space[9] },
		},
	},
});

export type StyleStackProps = RecipeVariants<typeof styleStack>;
