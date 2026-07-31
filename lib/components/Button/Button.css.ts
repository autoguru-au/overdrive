import { globalLayer, style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { sprinkles } from '../../styles/sprinkles.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

globalLayer(LAYER_ORDER);

const intentColors = vars.colours.intent;
const smallHeight = '36px';

const selectorFocusHoverActive =
	'&:focus-visible, &:not(:disabled):hover, &:not(:disabled):active';

export const hiddenContent = style({ visibility: 'hidden' });
export const spinnerWrapper = sprinkles({
	display: 'grid',
	placeItems: 'center',
	position: 'absolute',
	width: 'full',
});
export const spinner = sprinkles({ mx: 'auto' });

// Button recipe with all variants
export const button = recipe({
	base: [
		sprinkles({
			alignItems: 'center',
			borderRadius: 'md',
			borderStyle: 'none',
			fontWeight: 'medium',
			gap: '1',
			justifyContent: 'center',
			position: 'relative',
			width: 'fit-content',
		}),
		{
			'@layer': {
				[cssLayerComponent]: {
					cursor: 'pointer',
					display: 'flex',
					lineHeight: 1,
					padding: `0 ${vars.space[4]}`,
					transform: 'translate(0, 0) scale(1)',
					transitionTimingFunction: vars.animation.easing.standard,
					transitionDuration: '0.1s',
					transitionProperty:
						'color, background-color, border-color, box-shadow, transform',
					willChange: 'transform',
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
			},
		},
		focusOutlineStyle,
	],

	variants: {
		// Size variants
		size: {
			small: {
				'@layer': {
					[cssLayerComponent]: {
						fontSize: vars.typography.size[3].fontSize,
						height: smallHeight,
						padding: `0 ${vars.space[3]}`,
					},
				},
			},
			medium: {
				'@layer': {
					[cssLayerComponent]: {
						fontSize: vars.typography.size[4].fontSize,
						height: vars.space['9'],
					},
				},
			},
			xsmall: {
				'@layer': {
					[cssLayerComponent]: {
						fontSize: vars.typography.size[2].fontSize,
						fontWeight: vars.typography.fontWeight.normal,
						padding: `2px ${vars.space['2']}`,
					},
				},
			},
		},
		// Shape variants
		shape: {
			default: {},
			rounded: {},
			iconOnly: {
				'@layer': {
					[cssLayerComponent]: {
						padding: 0,
					},
				},
			},
		},
		// Intent (color scheme) variants
		intent: {
			primary: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor:
							intentColors.primary.background.standard,
						color: intentColors.primary.foreground,
						[selectorFocusHoverActive]: {
							backgroundColor:
								intentColors.primary.background.strong,
							color: intentColors.primary.foreground,
						},
					},
				},
			},
			brand: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor: intentColors.brand.background.standard,
						color: intentColors.brand.foreground,
						[selectorFocusHoverActive]: {
							backgroundColor:
								intentColors.brand.background.strong,
						},
					},
				},
			},
			secondary: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor:
							intentColors.secondary.background.standard,
						border: `1px solid ${intentColors.secondary.border}`,
						color: intentColors.secondary.foreground,
						selectors: {
							[selectorFocusHoverActive]: {
								backgroundColor:
									intentColors.secondary.background.strong,
								borderColor:
									intentColors.secondary.background.strong,
							},
						},
					},
				},
			},
			danger: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor:
							intentColors.danger.background.standard,
						color: intentColors.danger.foreground,
						[selectorFocusHoverActive]: {
							backgroundColor:
								intentColors.danger.background.strong,
						},
					},
				},
			},
			information: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor:
							intentColors.information.background.standard,
						color: intentColors.information.foreground,
						[selectorFocusHoverActive]: {
							backgroundColor:
								intentColors.information.background.strong,
						},
					},
				},
			},
			warning: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor:
							intentColors.warning.background.standard,
						color: intentColors.warning.foreground,
						[selectorFocusHoverActive]: {
							backgroundColor:
								intentColors.warning.background.strong,
						},
					},
				},
			},
			success: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor:
							intentColors.success.background.standard,
						color: intentColors.success.foreground,
						[selectorFocusHoverActive]: {
							backgroundColor:
								intentColors.success.background.strong,
						},
					},
				},
			},
		},
		// Miminal appearance variant
		minimal: {
			true: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor: 'transparent',
						borderStyle: 'none',
						color: vars.color.foreground.secondary,
					},
				},
			},
			false: [],
		},
		rounded: {
			true: sprinkles({ borderRadius: 'pill' }),
		},
		isFullWidth: {
			true: sprinkles({ width: 'full' }),
		},
		isLoading: {
			true: {},
		},
		/**
		 * Transparent fill with a brand border and label.
		 *
		 * Empty on its own — the appearance lives in the `intent: 'primary'`
		 * compound below, because the DS 2026 outlined token set only exists for
		 * primary and critical, and a shared default here would put a
		 * currentColor border on intents whose label colour is white.
		 */
		outlined: {
			true: {},
		},
	},
	compoundVariants: [
		// Size and shape compound variants
		{
			variants: { size: 'small', shape: 'default' },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						minWidth: vars.space['9'],
					},
				},
			},
		},
		{
			variants: { size: 'small', shape: 'rounded' },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						minWidth: smallHeight,
					},
				},
			},
		},
		{
			variants: { size: 'small', shape: 'iconOnly' },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						width: smallHeight,
					},
				},
			},
		},
		{
			variants: { size: 'medium', shape: 'default' },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						minWidth: vars.space['12'],
					},
				},
			},
		},
		{
			variants: { size: 'medium', shape: 'rounded' },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						minWidth: vars.space['9'],
					},
				},
			},
		},
		{
			variants: { size: 'medium', shape: 'iconOnly' },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						width: vars.space['9'],
					},
				},
			},
		},
		// Minimal compound variants per intent
		{
			variants: { intent: 'primary', minimal: true },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						selectors: {
							[selectorFocusHoverActive]: {
								color: intentColors.primary.background.strong,
								backgroundColor:
									intentColors.primary.background.mild,
							},
						},
					},
				},
			},
		},
		{
			variants: { intent: 'brand', minimal: true },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						selectors: {
							[selectorFocusHoverActive]: {
								color: intentColors.brand.background.strong,
								backgroundColor:
									intentColors.brand.background.mild,
							},
						},
					},
				},
			},
		},
		{
			variants: { intent: 'secondary', minimal: true },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						selectors: {
							[selectorFocusHoverActive]: {
								color: vars.typography.colour.secondary,
								backgroundColor:
									intentColors.secondary.background.strong,
							},
						},
					},
				},
			},
		},
		{
			variants: { intent: 'danger', minimal: true },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						selectors: {
							[selectorFocusHoverActive]: {
								color: intentColors.danger.background.strong,
								backgroundColor:
									intentColors.danger.background.mild,
							},
						},
					},
				},
			},
		},
		{
			variants: { intent: 'information', minimal: true },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						selectors: {
							[selectorFocusHoverActive]: {
								color: intentColors.information.background
									.strong,
								backgroundColor:
									intentColors.information.background.mild,
							},
						},
					},
				},
			},
		},
		{
			variants: { intent: 'warning', minimal: true },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						selectors: {
							'&:focus-visible, &:not(:disabled):hover': {
								color: intentColors.warning.background.strong,
								backgroundColor:
									intentColors.warning.background.mild,
							},
						},
					},
				},
			},
		},
		{
			variants: { intent: 'success', minimal: true },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						selectors: {
							'&:focus-visible, &:not(:disabled):hover': {
								color: intentColors.success.background.strong,
								backgroundColor:
									intentColors.success.background.mild,
							},
						},
					},
				},
			},
		},
		// Compound class names are index-based, so append rather than insert:
		// inserting remaps existing indices onto different style rules.
		{
			variants: { intent: 'primary', outlined: true },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						// `intent: 'primary'` sets this too, at equal specificity in
						// the same layer, so don't lean on emission order.
						backgroundColor: 'transparent',
						border: `1px solid ${vars.color.button.primary.outlined.border}`,
						color: vars.color.button.primary.outlined.text,
						selectors: {
							'&:focus-visible, &:not(:disabled):hover': {
								backgroundColor:
									vars.color.button.primary.outlined.hover,
								borderColor:
									vars.color.button.primary.outlined.border,
								color: vars.color.button.primary.outlined.text,
							},
							'&:active:not(:disabled, [data-loading])': {
								backgroundColor:
									vars.color.button.primary.outlined.pressed,
								// Label and border must be restated: `intent:
								// 'primary'`'s nested `:active` is (0,3,0) and
								// sets `color`, beating this variant's (0,2,0)
								// `:focus-visible`. Without them a keyboard or
								// touch press — `:active` with no `:hover` —
								// paints a white label on the pale wash.
								borderColor:
									vars.color.button.primary.outlined.border,
								color: vars.color.button.primary.outlined.text,
							},
						},
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
export type ButtonIsFullWidth = ButtonRecipeProps['isFullWidth'];
export type ButtonIsLoading = ButtonRecipeProps['isLoading'];
export type ButtonMinimal = ButtonRecipeProps['minimal'];
export type ButtonOutlined = ButtonRecipeProps['outlined'];
export type ButtonRounded = ButtonRecipeProps['rounded'];

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
	 * Pill shaped button appearance
	 */
	rounded?: ButtonRounded;
	/**
	 * Present a borderless minimal appearance
	 */
	minimal?: ButtonMinimal;
	/**
	 * Transparent fill with a brand-coloured border and label.
	 *
	 * Currently applies to `variant="primary"` only, and ignored when `minimal`
	 * is set — the two are opposites.
	 */
	outlined?: ButtonOutlined;
	isFullWidth?: ButtonIsFullWidth;
	isLoading?: ButtonIsLoading;
}
