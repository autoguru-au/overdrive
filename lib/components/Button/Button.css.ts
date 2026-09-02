import { globalLayer, style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { sprinkles } from '../../styles/sprinkles.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

globalLayer(LAYER_ORDER);

const intentColors = vars.colours.intent;
const buttonColors = vars.color.button;
const smallHeight = '36px';

const selectorFocusHoverActive =
	'&:focus-visible, &:not(:disabled):hover, &:not(:disabled):active';

/**
 * The DS-2026 intents split hover from press — Figma gives each its own fill
 * and its own elevation, where the legacy intents collapse both into
 * `selectorFocusHoverActive`.
 */
const selectorFocusHover = '&:focus-visible, &:not(:disabled):hover';
const selectorPressed = '&:active:not(:disabled, [data-loading])';
const selectorInert = '&:disabled, &[data-loading]';

/**
 * Figma lifts the button on hover and presses it in on click — `z2` at rest,
 * `z3` hovered, `z1` pressed, and no shadow at all once disabled. These map
 * one-to-one onto the `elevation.z*` tokens, which already carry the Figma
 * values.
 */
const buttonElevation = {
	rest: vars.elevation.z2,
	hover: vars.elevation.z3,
	pressed: vars.elevation.z1,
} as const;

/**
 * A DS-2026 filled intent: Figma's `Style=Solid`. `hover` and `pressed` are
 * passed rather than derived because the classes differ — Primary moves its
 * fill on hover, Critical keeps the same fill and moves only the elevation.
 */
const solidIntent = ({
	border,
	fill,
	hover,
	pressed,
	text,
}: Record<'border' | 'fill' | 'hover' | 'pressed' | 'text', string>) => ({
	'@layer': {
		[cssLayerComponent]: {
			backgroundColor: fill,
			border: `1px solid ${border}`,
			boxShadow: buttonElevation.rest,
			color: text,
			selectors: {
				[selectorFocusHover]: {
					backgroundColor: hover,
					boxShadow: buttonElevation.hover,
				},
				[selectorPressed]: {
					backgroundColor: pressed,
					boxShadow: buttonElevation.pressed,
				},
				// Figma drops the shadow entirely when disabled; the base
				// `opacity: 0.3` carries the rest of that state.
				[selectorInert]: { boxShadow: 'none' },
			},
		},
	},
});

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
			// DS-2026 `Class=Primary, Style=Solid`. The fill lightens on hover
			// and deepens to the border colour on press.
			primary: solidIntent({
				border: buttonColors.primary.solid.border,
				fill: buttonColors.primary.solid.default,
				hover: buttonColors.primary.solid.hover,
				pressed: buttonColors.primary.solid.pressed,
				text: buttonColors.primary.solid.text,
			}),
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
			// DS-2026 `Class=Secondary, Style=Outlined` — transparent at rest,
			// washing in on hover and press. Figma gives it no elevation, so
			// the border keeps its colour throughout rather than tracking the
			// fill the way the legacy intent did.
			secondary: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor: 'transparent',
						border: `1px solid ${buttonColors.secondary.border}`,
						color: buttonColors.secondary.text,
						selectors: {
							[selectorFocusHover]: {
								backgroundColor: buttonColors.secondary.hover,
							},
							[selectorPressed]: {
								backgroundColor: buttonColors.secondary.pressed,
							},
						},
					},
				},
			},
			// DS-2026 `Class=Critical, Style=Solid`. Unlike Primary the fill
			// holds on hover — Figma moves only the elevation — and deepens to
			// the border colour on press.
			danger: solidIntent({
				border: buttonColors.critical.solid.border,
				fill: buttonColors.critical.solid.default,
				hover: buttonColors.critical.solid.default,
				pressed: buttonColors.critical.solid.pressed,
				text: buttonColors.critical.solid.text,
			}),
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
		// Miminal appearance variant — Figma's `Style=Ghost`
		minimal: {
			true: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor: 'transparent',
						borderStyle: 'none',
						// Ghost carries no elevation. Cleared in every state
						// the DS-2026 intents set one, or a minimal Primary
						// would keep the solid button's shadow.
						boxShadow: 'none',
						color: vars.color.foreground.secondary,
						selectors: {
							[selectorFocusHover]: { boxShadow: 'none' },
							[selectorPressed]: { boxShadow: 'none' },
						},
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
		/** Empty here; the appearance lives in the `intent: 'primary'` compound. */
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
		// Compound class names are index-based — append, never insert.
		{
			variants: { intent: 'primary', outlined: true },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						// intent primary sets this too, at equal specificity.
						backgroundColor: 'transparent',
						border: `1px solid ${vars.color.button.primary.outlined.border}`,
						// Figma's Outlined carries no elevation, so the shadow
						// `intent: primary` now sets has to be cleared in every
						// state it sets one.
						boxShadow: 'none',
						color: vars.color.button.primary.outlined.text,
						selectors: {
							'&:focus-visible, &:not(:disabled):hover': {
								backgroundColor:
									vars.color.button.primary.outlined.hover,
								borderColor:
									vars.color.button.primary.outlined.border,
								boxShadow: 'none',
								color: vars.color.button.primary.outlined.text,
							},
							'&:active:not(:disabled, [data-loading])': {
								backgroundColor:
									vars.color.button.primary.outlined.pressed,
								// Restated: intent primary's nested `:active`
								// (0,3,0) beats this variant's `:focus-visible`.
								borderColor:
									vars.color.button.primary.outlined.border,
								boxShadow: 'none',
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
