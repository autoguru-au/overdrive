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

const selectorHover = '&:focus-visible, &:not(:disabled):hover';
const selectorPressed = '&:active:not(:disabled, [data-loading])';

interface AppearanceColours {
	resting: string;
	hover: string;
	pressed: string;
	text: string;
	border?: string;
	shadow?: string;
}

/**
 * The `intent` variant sets `backgroundColor` and `color` at equal specificity,
 * so every state here restates them rather than relying on source order.
 */
const appearanceStyle = ({
	resting,
	hover,
	pressed,
	text,
	border,
	shadow,
}: AppearanceColours) => {
	const edge = border ? { borderColor: border } : {};
	return {
		'@layer': {
			[cssLayerComponent]: {
				backgroundColor: resting,
				border: border ? `1px solid ${border}` : 'none',
				color: text,
				...(shadow ? { boxShadow: shadow } : {}),
				selectors: {
					[selectorHover]: {
						backgroundColor: hover,
						color: text,
						...edge,
					},
					[selectorPressed]: {
						backgroundColor: pressed,
						color: text,
						...edge,
					},
				},
			},
		},
	};
};

const sizedAppearance = (
	height: string,
	size: { fontSize: string; lineHeight: string },
	rest?: Record<string, string>,
) => ({
	'@layer': {
		[cssLayerComponent]: {
			fontSize: size.fontSize,
			height,
			lineHeight: size.lineHeight,
			...rest,
		},
	},
});

/** The default `size: 'medium'`; the other two sizes compound over this. */
const ds2026Sizing = sizedAppearance('46px', vars.typography.size.p1, {
	borderRadius: vars.border.radius.small,
	fontWeight: vars.typography.fontWeight.semiBold,
});

const ds2026Xsmall = sizedAppearance('28px', vars.typography.size.p2, {
	borderRadius: vars.border.radius.xsmall,
});
const ds2026Small = sizedAppearance('36px', vars.typography.size.p2);

/** Compounded after the sized rules, so `rounded` still wins. */
const ds2026Pill = {
	'@layer': {
		[cssLayerComponent]: { borderRadius: vars.border.radius.pill },
	},
};

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
			// NOT `small`, despite the identical 8px. Both are atomic sprinkles
			// classes of equal specificity in the same layer, and `small` is
			// emitted after `pill` — so renaming this makes the base radius
			// beat `rounded`, and every pill button squares off. Stays on `md`
			// until the legacy aliases go at the major.
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
		/** Empty here; the appearance lives in the `intent: 'primary'` compound. */
		outlined: {
			true: {},
		},
		/**
		 * Opting a call site into the 2026 design. Colour lives in the
		 * `intent × appearance` compounds; the shared sizing is here, keyed on
		 * the default `size: 'medium'`, with the other two sizes compounded.
		 */
		appearance: {
			solid: ds2026Sizing,
			outlined: ds2026Sizing,
			ghost: ds2026Sizing,
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
								// NOT color.button.secondary.text — that is
								// gray900 and this is gray700, so the swap
								// would darken every minimal secondary label.
								// Stays on the legacy contract until the major.
								// eslint-disable-next-line no-restricted-syntax -- RETAINED: see above.
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
								// Restated: intent primary's nested `:active`
								// (0,3,0) beats this variant's `:focus-visible`.
								borderColor:
									vars.color.button.primary.outlined.border,
								color: vars.color.button.primary.outlined.text,
							},
						},
					},
				},
			},
		},
		// --- DS-2026 `appearance`, appended. Order within this block matters:
		// colour, then the sized overrides, then `rounded` last.
		{
			variants: { intent: 'primary', appearance: 'solid' },
			style: appearanceStyle({
				resting: vars.color.button.primary.solid.default,
				hover: vars.color.button.primary.solid.hover,
				pressed: vars.color.button.primary.solid.pressed,
				border: vars.color.button.primary.solid.border,
				text: vars.color.button.primary.solid.text,
				shadow: vars.elevation.z1,
			}),
		},
		{
			variants: { intent: 'primary', appearance: 'outlined' },
			style: appearanceStyle({
				resting: 'transparent',
				hover: vars.color.button.primary.outlined.hover,
				pressed: vars.color.button.primary.outlined.pressed,
				border: vars.color.button.primary.outlined.border,
				text: vars.color.button.primary.outlined.text,
			}),
		},
		{
			variants: { intent: 'danger', appearance: 'solid' },
			style: appearanceStyle({
				resting: vars.color.button.critical.solid.default,
				hover: vars.color.button.critical.solid.hover,
				pressed: vars.color.button.critical.solid.pressed,
				border: vars.color.button.critical.solid.border,
				text: vars.color.button.critical.solid.text,
				shadow: vars.elevation.z1,
			}),
		},
		{
			variants: { intent: 'danger', appearance: 'outlined' },
			style: appearanceStyle({
				resting: 'transparent',
				hover: vars.color.button.critical.outlined.hover,
				pressed: vars.color.button.critical.outlined.pressed,
				border: vars.color.button.critical.outlined.border,
				text: vars.color.button.critical.outlined.text,
			}),
		},
		{
			variants: { intent: 'secondary', appearance: 'outlined' },
			style: appearanceStyle({
				resting: 'transparent',
				hover: vars.color.button.secondary.hover,
				pressed: vars.color.button.secondary.pressed,
				border: vars.color.button.secondary.border,
				text: vars.color.button.secondary.text,
			}),
		},
		{
			variants: { intent: 'secondary', appearance: 'ghost' },
			style: appearanceStyle({
				resting: 'transparent',
				hover: vars.color.button.secondary.hover,
				pressed: vars.color.button.secondary.pressed,
				text: vars.color.button.secondary.text,
			}),
		},
		{
			variants: { size: 'xsmall', appearance: 'solid' },
			style: ds2026Xsmall,
		},
		{
			variants: { size: 'xsmall', appearance: 'outlined' },
			style: ds2026Xsmall,
		},
		{
			variants: { size: 'xsmall', appearance: 'ghost' },
			style: ds2026Xsmall,
		},
		{
			variants: { size: 'small', appearance: 'solid' },
			style: ds2026Small,
		},
		{
			variants: { size: 'small', appearance: 'outlined' },
			style: ds2026Small,
		},
		{
			variants: { size: 'small', appearance: 'ghost' },
			style: ds2026Small,
		},
		{
			variants: { rounded: true, appearance: 'solid' },
			style: ds2026Pill,
		},
		{
			variants: { rounded: true, appearance: 'outlined' },
			style: ds2026Pill,
		},
		{
			variants: { rounded: true, appearance: 'ghost' },
			style: ds2026Pill,
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
export type ButtonAppearance = ButtonRecipeProps['appearance'];

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
	/**
	 * Opts into the 2026 design: a pill-or-square button drawn from the
	 * `color.button.*` tokens, at the 2026 sizes and weight.
	 *
	 * This is a different axis from `rounded`, `minimal` and `outlined`, which
	 * together describe the established appearance. Leave it unset and the
	 * button renders exactly as it always has.
	 *
	 * Applies to `variant` `primary`, `secondary` and `danger` — the three
	 * classes the 2026 design covers. `solid` and `outlined` suit `primary`
	 * and `danger`; `outlined` and `ghost` suit `secondary`. Any other
	 * combination is ignored.
	 */
	appearance?: ButtonAppearance;
	isFullWidth?: ButtonIsFullWidth;
	isLoading?: ButtonIsLoading;
}
