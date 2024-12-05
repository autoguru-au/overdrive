import { style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { themeContractVars as vars } from '../../themes/theme.css';

export const titles = style({
	marginTop: '11px',
});

export const labels = style({
	textTransform: 'capitalize',
});

export const small = style({
	fontSize: 'small',
});

export const hexPill = style({
	backgroundColor: 'hsl(0 0 100 / 75%)',
	borderRadius: '100px',
	display: 'inline-block',
	fontSize: '11px',
	padding: '1px 8px',
	position: 'absolute',
	textTransform: 'uppercase',
	top: '5px',
});

export const variantColourSwatch = recipe({
	base: {
		position: 'relative',
		borderColor: vars.border.colours.light,
		borderStyle: 'solid',
		borderWidth: vars.border.width[1],
	},
	variants: {
		size: {
			sm: { height: vars.space[7], width: vars.space[7] },
			md: { height: vars.space[8], width: vars.space[8] },
			lg: { height: vars.space[9], width: vars.space[9] },
		},
		shape: {
			circle: { borderRadius: '100%' },
		},
	},
	defaultVariants: {
		size: 'md',
		shape: 'circle',
	},
});

export type VariantColourSwatchProps = NonNullable<
	RecipeVariants<typeof variantColourSwatch>
>;
