import { style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { overdriveTokens } from '../../themes';

export const titles = style({
	marginTop: '11px',
});

export const labels = style({
	textTransform: 'capitalize',
});

export const codeVariable = style({
	lineHeight: '1.25',
	color: overdriveTokens.color.gamut.gray[600],
	fontFamily: 'monospace',
	fontSize: '13px',
});

export const small = style({
	fontSize: 'small',
});

export const gridSwatches = style({
	display: 'grid',
	gridTemplateColumns: 'repeat(5, 1fr)',
	gap: '2em',
});

export const hexPill = style({
	position: 'absolute',
	top: '5px',
	display: 'inline-block',
	borderRadius: '100px',
	backgroundColor: 'hsl(0 0 100 / 75%)',
	padding: '1px 8px',
	textTransform: 'uppercase',
	fontSize: '11px',
});

export const transitionColours = style({
	transitionDuration: '600ms',
	transitionProperty: 'background,color',
	transitionBehavior: 'ease-in-out',
});

export const variantColourSwatch = recipe({
	base: {
		position: 'relative',
		borderWidth: overdriveTokens.border.width[1],
		borderStyle: 'solid',
		borderColor: overdriveTokens.color.gamut.gray[200],
	},
	variants: {
		size: {
			sm: {
				width: overdriveTokens.space[7],
				height: overdriveTokens.space[7],
			},
			md: {
				width: overdriveTokens.space[8],
				height: overdriveTokens.space[8],
			},
			lg: {
				width: overdriveTokens.space[9],
				height: overdriveTokens.space[9],
			},
		},
		shape: {
			circle: { borderRadius: '100%' },
			rectangle: {
				borderRadius: overdriveTokens.border.radius['md'],
				width: '140px',
			},
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
