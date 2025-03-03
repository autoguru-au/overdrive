import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { focusOutline } from '../../styles/focusOutline.css';
import { odStyle } from '../../styles/sprinkles.css';
import { themeContractVars as vars } from '../../themes/theme.css';

const intentColors = vars.colours.intent;
const smallHeight = '36px';

// Body styles for button content layout
export const body = style({
	display: 'grid',
	gridAutoFlow: 'column dense',
	gridGap: vars.space['1'],
});

export const hiddenContent = style({
	visibility: 'hidden',
});

export const spinner = style({
	margin: '0 auto',
});

// Button recipe with all variants
export const button = recipe({
	base: [
		{
			transitionDelay: '0s',
			transitionTimingFunction: vars.animation.easing.standard,
			transitionDuration: '0.1s',
			transitionProperty:
				'color, background-color, border-color, box-shadow, transform',
			transform: 'translate(0, 0) scale(1)',
			willChange: 'transform',
			cursor: 'pointer',
			selectors: {
				'&[data-loading], &:disabled': {
					cursor: 'not-allowed',
				},
				'&:not([data-loading])[disabled]': {
					opacity: '0.3',
				},
			},
		},
		odStyle({ ...focusOutline }),
	],

	variants: {
		// Size variants
		size: {
			small: {
				height: smallHeight,
			},
			medium: {
				height: vars.space['8'],
			},
		},
		// Shape variants
		shape: {
			default: {},
			rounded: {},
			iconOnly: {},
		},
		// Intent (color scheme) variants
		intent: {
			primary: {
				color: intentColors.primary.foreground,
				backgroundColor: intentColors.primary.background.standard,
				'&:focus-visible, &:not(:disabled):hover': {
					color: intentColors.primary.foreground,
					backgroundColor: vars.colours.gamut.green700,
				},
			},
			brand: {
				color: intentColors.brand.foreground,
				backgroundColor: intentColors.brand.background.standard,
				'&:focus-visible, &:not(:disabled):hover': {
					backgroundColor: intentColors.brand.background.strong,
				},
				'&:active': {
					backgroundColor: intentColors.brand.background.strong,
				},
			},
			secondary: {
				color: intentColors.secondary.foreground,
				backgroundColor: intentColors.secondary.background.standard,
				border: `1px solid ${intentColors.secondary.border}`,
				selectors: {
					'&:focus-visible, &:not(:disabled):hover, &:not(:disabled):focus, &:active':
						{
							backgroundColor:
								intentColors.secondary.background.strong,
							borderColor:
								intentColors.secondary.background.strong,
						},
				},
			},
			danger: {
				backgroundColor: intentColors.danger.background.standard,
				color: intentColors.danger.foreground,
				'&:focus-visible, &:not(:disabled):hover': {
					backgroundColor: intentColors.danger.background.strong,
				},
				'&:active': {
					backgroundColor: intentColors.danger.background.strong,
				},
			},
			information: {
				backgroundColor: intentColors.information.background.standard,
				color: intentColors.information.foreground,
				'&:focus-visible, &:not(:disabled):hover': {
					backgroundColor: intentColors.information.background.strong,
				},
				'&:active': {
					backgroundColor: intentColors.information.background.strong,
				},
			},
			warning: {
				backgroundColor: intentColors.warning.background.standard,
				color: intentColors.warning.foreground,
				'&:focus-visible, &:not(:disabled):hover': {
					backgroundColor: intentColors.warning.background.strong,
				},
				'&:active': {
					backgroundColor: intentColors.warning.background.strong,
				},
			},
			success: {
				backgroundColor: intentColors.success.background.standard,
				color: intentColors.success.foreground,
				'&:focus-visible, &:not(:disabled):hover': {
					backgroundColor: intentColors.success.background.strong,
				},
				'&:active': {
					backgroundColor: intentColors.success.background.strong,
				},
			},
		},
		// Miminal appearance variant
		minimal: {
			true: {
				color: vars.typography.colour.neutral,
				backgroundColor: 'transparent',
				border: 'none',
			},
			false: [],
		},
	},
	compoundVariants: [
		// Size and shape compound variants
		{
			variants: { size: 'small', shape: 'default' },
			style: {
				minWidth: vars.space['8'],
				gridGap: vars.space['1'],
			},
		},
		{
			variants: { size: 'small', shape: 'rounded' },
			style: {
				minWidth: smallHeight,
			},
		},
		{
			variants: { size: 'small', shape: 'iconOnly' },
			style: {
				width: smallHeight,
			},
		},
		{
			variants: { size: 'medium', shape: 'default' },
			style: {
				minWidth: vars.space['9'],
				gridGap: vars.space['2'],
			},
		},
		{
			variants: { size: 'medium', shape: 'rounded' },
			style: {
				minWidth: vars.space['8'],
			},
		},
		{
			variants: { size: 'medium', shape: 'iconOnly' },
			style: {
				width: vars.space['8'],
			},
		},
		// Minimal compound variants per intent
		{
			variants: { intent: 'primary', minimal: true },
			style: {
				selectors: {
					'&:focus-visible, &:not(:disabled):hover': {
						color: intentColors.primary.background.strong,
						backgroundColor: intentColors.primary.background.mild,
					},
					'&:active': {
						color: intentColors.primary.background.strong,
						backgroundColor: intentColors.primary.background.mild,
					},
				},
			},
		},
		{
			variants: { intent: 'brand', minimal: true },
			style: {
				selectors: {
					'&:focus-visible, &:not(:disabled):hover': {
						color: intentColors.brand.background.strong,
						backgroundColor: intentColors.brand.background.mild,
					},
					'&:active': {
						color: intentColors.brand.background.strong,
						backgroundColor: intentColors.brand.background.mild,
					},
				},
			},
		},
		{
			variants: { intent: 'secondary', minimal: true },
			style: {
				selectors: {
					'&:focus-visible, &:not(:disabled):hover': {
						color: vars.typography.colour.secondary,
						backgroundColor:
							intentColors.secondary.background.strong,
					},
					'&:active': {
						color: vars.typography.colour.secondary,
						backgroundColor:
							intentColors.secondary.background.strong,
					},
				},
			},
		},
		{
			variants: { intent: 'danger', minimal: true },
			style: {
				selectors: {
					'&:focus-visible, &:not(:disabled):hover': {
						color: intentColors.danger.background.strong,
						backgroundColor: intentColors.danger.background.mild,
					},
					'&:active': {
						color: intentColors.danger.background.strong,
						backgroundColor: intentColors.danger.background.mild,
					},
				},
			},
		},
		{
			variants: { intent: 'information', minimal: true },
			style: {
				selectors: {
					'&:focus-visible, &:not(:disabled):hover': {
						color: intentColors.information.background.strong,
						backgroundColor:
							intentColors.information.background.mild,
					},
					'&:active': {
						color: intentColors.information.background.strong,
						backgroundColor:
							intentColors.information.background.mild,
					},
				},
			},
		},
		{
			variants: { intent: 'warning', minimal: true },
			style: {
				selectors: {
					'&:focus-visible, &:not(:disabled):hover': {
						color: intentColors.warning.background.strong,
						backgroundColor: intentColors.warning.background.mild,
					},
					'&:active': {
						color: intentColors.warning.background.strong,
						backgroundColor: intentColors.warning.background.mild,
					},
				},
			},
		},
		{
			variants: { intent: 'success', minimal: true },
			style: {
				selectors: {
					'&:focus-visible, &:not(:disabled):hover': {
						color: intentColors.success.background.strong,
						backgroundColor: intentColors.success.background.mild,
					},
					'&:active': {
						color: intentColors.success.background.strong,
						backgroundColor: intentColors.success.background.mild,
					},
				},
			},
		},
	],
	defaultVariants: {
		size: 'medium',
		shape: 'default',
		intent: 'primary',
		minimal: false,
	},
});

export type StyledButtonProps = NonNullable<RecipeVariants<typeof button>>;
