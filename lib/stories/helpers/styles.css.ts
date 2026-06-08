import { style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { overdriveTokens } from '../../themes';
import { breakpoints } from '../../themes/makeTheme';

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
	gap: '1.3em',
	gridTemplateColumns: 'repeat(2, 1fr)',
	'@media': {
		[`screen and (min-width: ${breakpoints.tablet})`]: {
			gridTemplateColumns: 'repeat(4, 1fr)',
		},
		[`screen and (min-width: ${breakpoints.desktop})`]: {
			gridTemplateColumns: 'repeat(5, 1fr)',
		},
	},
});

export const paletteGrid = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '32px',
	maxWidth: '1040px',
});

export const hueGroup = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '10px',
});

export const rampBar = style({
	borderRadius: overdriveTokens.border.radius.lg,
	boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 10%)',
	display: 'flex',
	overflow: 'hidden',
	width: '100%',
});

export const rampSegment = style({
	alignItems: 'flex-start',
	appearance: 'none',
	border: 'none',
	color: 'inherit',
	cursor: 'pointer',
	display: 'flex',
	flex: 1,
	flexDirection: 'column',
	font: 'inherit',
	gap: '3px',
	justifyContent: 'flex-end',
	margin: 0,
	minHeight: '84px',
	minWidth: 0,
	overflow: 'hidden',
	padding: '10px',
	textAlign: 'left',
	transitionDuration: '120ms',
	transitionProperty: 'box-shadow',
	transitionTimingFunction: 'ease',
	selectors: {
		'&:hover': {
			boxShadow: 'inset 0 0 0 9999px rgb(255 255 255 / 14%)',
		},
		'&:focus-visible': {
			outline: `2px solid ${overdriveTokens.color.gamut.gray[900]}`,
			outlineOffset: '-2px',
		},
	},
});

export const rampShade = style({
	fontSize: '13px',
	fontWeight: 700,
	letterSpacing: '0.02em',
});

export const rampHex = style({
	fontFamily: 'monospace',
	fontSize: '10px',
	opacity: 0.85,
	textTransform: 'uppercase',
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

export const icon = style({
	alignItems: 'center',
	backgroundColor: overdriveTokens.color.surface.page,

	borderColor: overdriveTokens.color.interactive.border,
	borderRadius: overdriveTokens.border.radius.md,

	borderStyle: 'solid',
	borderWidth: overdriveTokens.border.width[2],
	color: overdriveTokens.color.content.normal,
	display: 'flex',
	flexDirection: 'column',

	height: '120px',
	justifyContent: 'center',
	listStyle: 'none',
	padding: overdriveTokens.space[2],
	textAlign: 'center',
	transitionBehavior: 'ease-in-out',

	transitionDuration: '600ms',
	transitionProperty: 'background,color',
	width: '140px',

	selectors: {
		'&:hover': {
			backgroundColor: overdriveTokens.colours.gamut.gray800,
			color: overdriveTokens.color.content.inverse,
		},
	},
});

export const variantColourSwatch = recipe({
	base: {
		borderColor: overdriveTokens.color.gamut.gray[200],
		borderStyle: 'solid',
		borderWidth: overdriveTokens.border.width[1],
		position: 'relative',
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
				maxWidth: 160,
				minWidth: 120,
				width: 'auto',
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
