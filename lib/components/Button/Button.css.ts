import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { themeContractVars as vars } from '../../themes/theme.css';

const intentColors = vars.colours.intent;
const smallHeight = '36px';

const selectorFocusHoverActive =
	'&:focus-visible, &:not(:disabled):hover, &:not(:disabled):active';

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
			transitionTimingFunction: vars.animation.easing.standard,
			transitionDuration: '0.1s',
			transitionProperty:
				'color, background-color, border-color, box-shadow, transform',
			transform: 'translate(0, 0) scale(1)',
			willChange: 'transform',
			cursor: 'pointer',
			selectors: {
				'&:active:not(:disabled, [data-loading])': {
					transform: 'scale(0.97)',
				},
				'&[data-loading], &:disabled': {
					cursor: 'not-allowed',
				},
				'&:not([data-loading]):disabled': {
					opacity: '0.3',
				},
			},
		},
		focusOutlineStyle,
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
			xsmall: {
				padding: `2px ${vars.space['2']}`,
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
				[selectorFocusHoverActive]: {
					color: intentColors.primary.foreground,
					backgroundColor: intentColors.primary.background.strong,
				},
			},
			brand: {
				color: intentColors.brand.foreground,
				backgroundColor: intentColors.brand.background.standard,
				[selectorFocusHoverActive]: {
					backgroundColor: intentColors.brand.background.strong,
				},
			},
			secondary: {
				color: intentColors.secondary.foreground,
				backgroundColor: intentColors.secondary.background.standard,
				border: `1px solid ${intentColors.secondary.border}`,
				selectors: {
					[selectorFocusHoverActive]: {
						backgroundColor:
							intentColors.secondary.background.strong,
						borderColor: intentColors.secondary.background.strong,
					},
				},
			},
			danger: {
				backgroundColor: intentColors.danger.background.standard,
				color: intentColors.danger.foreground,
				[selectorFocusHoverActive]: {
					backgroundColor: intentColors.danger.background.strong,
				},
			},
			information: {
				backgroundColor: intentColors.information.background.standard,
				color: intentColors.information.foreground,
				[selectorFocusHoverActive]: {
					backgroundColor: intentColors.information.background.strong,
				},
			},
			warning: {
				backgroundColor: intentColors.warning.background.standard,
				color: intentColors.warning.foreground,
				[selectorFocusHoverActive]: {
					backgroundColor: intentColors.warning.background.strong,
				},
			},
			success: {
				backgroundColor: intentColors.success.background.standard,
				color: intentColors.success.foreground,
				[selectorFocusHoverActive]: {
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
					[selectorFocusHoverActive]: {
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
					[selectorFocusHoverActive]: {
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
					[selectorFocusHoverActive]: {
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
					[selectorFocusHoverActive]: {
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
					[selectorFocusHoverActive]: {
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

type ButtonRecipeProps = NonNullable<Required<RecipeVariants<typeof button>>>;

export type ButtonSize = ButtonRecipeProps['size'];
export type ButtonShape = ButtonRecipeProps['shape'];
export type ButtonIntent = ButtonRecipeProps['intent'];
export type ButtonMinimal = ButtonRecipeProps['minimal'];

export interface StyledButtonProps {
	/**
	 * Button sizing
	 */
	size?: ButtonSize;
	/**
	 * Button intentional colour scheme
	 */
	variant?: ButtonIntent;
	/**
	 * Present a borderless minimal appearance
	 */
	minimal?: ButtonMinimal;
}
