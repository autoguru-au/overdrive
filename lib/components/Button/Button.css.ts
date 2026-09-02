import { globalLayer, style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { sprinkles } from '../../styles/sprinkles.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

globalLayer(LAYER_ORDER);

const intentColors = vars.colours.intent;
const buttonColors = vars.color.button;

/**
 * Figma sizes each button by padding plus the label's line height rather than a
 * fixed height — Large is `space/12` + 22px + `space/12` = 46px, Small is
 * `space/8` + 20px + `space/8` = 36px. Kept as explicit heights because the
 * icon-only and rounded compounds need a square to work from, and derived
 * heights would leave those guessing.
 *
 * `medium` is Figma's Large; there is no Medium in the DS-2026 set.
 */
const buttonHeight = {
	xsmall: '28px',
	small: '36px',
	medium: '46px',
} as const;
const smallHeight = buttonHeight.small;

/**
 * Figma labels every button `p1 semibold` or `p2 semibold`, so the sizes read
 * the DS-2026 named text styles rather than the numeric scale — `p1`/`p2` carry
 * the ratio-derived 22.4px and 19.6px line heights the design uses, where
 * `size[4]`/`size[3]` round them to 22px and 20px. The weight comes from the
 * recipe's base `fontWeight: 'semiBold'`.
 *
 * Extra small takes the same `p2` as Small; Figma has no smaller button label.
 */
const buttonText = {
	medium: vars.typography.size.p1,
	small: vars.typography.size.p2,
	xsmall: vars.typography.size.p2,
} as const;

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
 * A DS-2026 `Style=Outlined` intent: transparent fill, the class colour as both
 * border and label, washing in on hover and press.
 *
 * Every state restates `borderColor`, `boxShadow` and `color`. The solid intent
 * this sits on top of sets all three, and its nested `:active` (0,3,0) beats a
 * compound's `:focus-visible` — so anything left unstated leaks the solid
 * appearance through.
 */
const outlinedIntent = (outlined: {
	border: string;
	hover: string;
	pressed: string;
	text: string;
}) => ({
	'@layer': {
		[cssLayerComponent]: {
			// The solid intent sets this too, at equal specificity.
			backgroundColor: 'transparent',
			border: `1px solid ${outlined.border}`,
			// Figma's Outlined carries no elevation.
			boxShadow: 'none',
			color: outlined.text,
			selectors: {
				[selectorFocusHover]: {
					backgroundColor: outlined.hover,
					borderColor: outlined.border,
					boxShadow: 'none',
					color: outlined.text,
				},
				[selectorPressed]: {
					backgroundColor: outlined.pressed,
					borderColor: outlined.border,
					boxShadow: 'none',
					color: outlined.text,
				},
			},
		},
	},
});

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
			// Figma's button label is `p1/p2 semibold` (600) at every size.
			fontWeight: 'semiBold',
			// Figma's `space/8`. Extra small narrows this to `space/4`.
			gap: '2',
			justifyContent: 'center',
			position: 'relative',
			width: 'fit-content',
		}),
		{
			'@layer': {
				[cssLayerComponent]: {
					cursor: 'pointer',
					display: 'flex',
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
			// Figma `Size=Small`: `space/8` padding around a `p2` line in a
			// 36px box.
			small: {
				'@layer': {
					[cssLayerComponent]: {
						fontSize: buttonText.small.fontSize,
						height: buttonHeight.small,
						lineHeight: buttonText.small.lineHeight,
						padding: `0 ${vars.space[3]}`,
					},
				},
			},
			// Figma `Size=Large` — the DS-2026 set has no Medium, so this is
			// the largest. 46px, not the 48px this used to hard-code.
			medium: {
				'@layer': {
					[cssLayerComponent]: {
						fontSize: buttonText.medium.fontSize,
						height: buttonHeight.medium,
						lineHeight: buttonText.medium.lineHeight,
						padding: `0 ${vars.space[4]}`,
					},
				},
			},
			// Figma `Size=Extra small` — the one size that departs from the
			// other two: `space/4` padding and gap, `border/radius/xsmall`, and
			// the same `p2` label as Small rather than a smaller one.
			xsmall: {
				'@layer': {
					[cssLayerComponent]: {
						borderRadius: vars.border.radius.xsmall,
						fontSize: buttonText.xsmall.fontSize,
						gap: vars.space[1],
						height: buttonHeight.xsmall,
						lineHeight: buttonText.xsmall.lineHeight,
						padding: `0 ${vars.space[2]}`,
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
		// Minimal appearance variant — Figma's `Style=Minimal (Ghost)`
		minimal: {
			true: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor: 'transparent',
						// Transparent rather than absent: Figma's Minimal has no
						// border at rest but grows one on hover, and reserving the
						// 1px here keeps that from nudging the box 2px wider.
						border: '1px solid transparent',
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
						minWidth: buttonHeight.medium,
					},
				},
			},
		},
		{
			variants: { size: 'medium', shape: 'iconOnly' },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						width: buttonHeight.medium,
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
		// DS-2026 `Class=Secondary, Style=Minimal (Ghost)` — the only class
		// Figma specs a Minimal for. The label colour holds through every
		// state; only the fill and the border move.
		{
			variants: { intent: 'secondary', minimal: true },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						color: buttonColors.secondary.text,
						selectors: {
							[selectorFocusHover]: {
								backgroundColor: buttonColors.secondary.hover,
								borderColor: buttonColors.secondary.border,
								color: buttonColors.secondary.text,
							},
							[selectorPressed]: {
								backgroundColor: buttonColors.secondary.pressed,
								borderColor: buttonColors.secondary.border,
								color: buttonColors.secondary.text,
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
			style: outlinedIntent(vars.color.button.primary.outlined),
		},
		{
			variants: { intent: 'danger', outlined: true },
			style: outlinedIntent(vars.color.button.critical.outlined),
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
	 * Borderless, fill-less appearance — Figma's `Style=Minimal (Ghost)`.
	 *
	 * On `variant="secondary"` this is the DS-2026 Minimal: nothing at rest, a
	 * wash and a visible border on hover and press. The other intents keep
	 * their pre-DS-2026 minimal colours; Figma specs a Minimal for Secondary
	 * only.
	 *
	 * Wins over `outlined` — the two are opposites.
	 */
	minimal?: ButtonMinimal;
	/**
	 * Transparent fill with the intent's border and label — Figma's
	 * `Style=Outlined`.
	 *
	 * Applies to `variant="primary"` (Primary Outlined) and `variant="danger"`
	 * (Critical Outlined); a no-op on the other intents, which have no outlined
	 * tokens. Ignored when `minimal` is set.
	 */
	outlined?: ButtonOutlined;
	isFullWidth?: ButtonIsFullWidth;
	isLoading?: ButtonIsLoading;
}
