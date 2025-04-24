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
	color: overdriveTokens.color.gamut.gray[600],
	fontFamily: 'monospace',
	fontSize: '13px',
	lineHeight: '1.25',
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
	backgroundColor: 'hsl(0 0 100 / 75%)',
	borderRadius: '100px',
	display: 'inline-block',
	fontSize: '11px',
	padding: '1px 8px',
	position: 'absolute',
	textTransform: 'uppercase',
	top: '5px',
});

export const transitionColours = style({
	transitionProperty: 'background,color',
	transitionDuration: '600ms',
	transitionBehavior: 'ease-in-out',
});

export const variantColourSwatch = recipe({
	base: {
		position: 'relative',
		borderColor: overdriveTokens.color.gamut.gray[200],
		borderStyle: 'solid',
		borderWidth: overdriveTokens.border.width[1],
	},
	variants: {
		size: {
			sm: {
				height: overdriveTokens.space[7],
				width: overdriveTokens.space[7],
			},
			md: {
				height: overdriveTokens.space[8],
				width: overdriveTokens.space[8],
			},
			lg: {
				height: overdriveTokens.space[9],
				width: overdriveTokens.space[9],
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
