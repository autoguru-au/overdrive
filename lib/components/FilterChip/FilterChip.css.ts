import { globalLayer, style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { selectors } from '../../styles/selectors';
import { overdriveTokens as vars } from '../../themes/theme.css';

globalLayer(LAYER_ORDER);

/** Duration for the chip's colour transitions. */
const TRANSITION_DURATION = '150ms';

/** Matches the width and offset of the shared `focusOutlineStyle`. */
const FOCUS_RING_WIDTH = vars.border.width['2'];

/**
 * The focus indicator colour, deliberately not `color.focus.ring`.
 *
 * The shared ring is theme-keyed and resolves green in `base` and `flat_red`,
 * where the DS-2026 designs call for `info.foreground` blue. Retheming the
 * shared token moves the ring on every component at once, so it is held for the
 * major (`docs/ds2026-plan/track-c.md` §1.9, C-P9). This component opts in
 * early: it is the first step of that migration, not a one-off.
 *
 * Both the ring and the border swap use it, so the two never disagree — a blue
 * border inside a green ring is worse than either colour on its own.
 */
const FOCUS_COLOUR = vars.color.info.foreground;

/**
 * Hover for the chip surface, keyed on a real button being hovered rather than
 * on the pointer being anywhere over the pill.
 *
 * A plain `&:hover` is wrong here. A chip given only an `onRemove` has an inert
 * `<span>` body, so `&:hover` lit the whole pill up — and promised a click that
 * only the `×` delivers. The two halves cover the two shapes the chip renders
 * as: the chip that *is* the button, and the container whose children are.
 *
 * Nothing here can be disabled, so this deliberately drops the `:not(:disabled)`
 * guard that `selectors.hover` carries.
 */
const chipHover = '&:is(button):hover, &:has(button:hover)';

/**
 * The chip surface only. Spacing lives on `chipBody` and `removeButton` so that
 * every pixel inside the border belongs to an interactive child — padding on the
 * container would render as chip-shaped dead space around the buttons.
 */
export const chip = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				alignItems: 'center',
				borderRadius: vars.border.radius.pill,
				borderStyle: 'solid',
				borderWidth: vars.border.width['1'],
				display: 'inline-flex',
				fontSize: vars.typography.size['4'].fontSize,
				lineHeight: vars.typography.size['4'].lineHeight,
				// Bounds the chip to its container so a long value truncates
				// instead of overflowing. `minWidth` covers the flex-item case
				// (a filter bar row), `maxWidth` the block-container case — an
				// `inline-flex` box does not shrink on its own.
				maxWidth: '100%',
				minWidth: 0,
				position: 'relative',
				transitionDuration: TRANSITION_DURATION,
				transitionProperty: 'background-color, border-color, color',
				transitionTimingFunction: vars.animation.easing.standard,
				selectors: {
					// The ring belongs to the chip, not to whichever button is
					// focused — on a removable chip the body is only part of the
					// pill, so ringing it drew the outline across the chip fill.
					//
					// `:has(:focus-visible)` rather than the `:focus-within` the
					// review suggested: `:focus-within` also matches a pointer
					// click, which would flash the ring on every mouse press.
					// The first two selectors cover the chip that is itself a
					// button, the last two a focused child.
					[`&:focus-visible, &[data-focus-visible], &:has(:focus-visible), &:has([data-focus-visible])`]:
						{
							// The border swaps too, not just the ring. Set here
							// rather than per variant so every shape picks it
							// up; the pseudo-class outranks the variants' plain
							// `borderColor`.
							borderColor: FOCUS_COLOUR,
							outline: `solid ${FOCUS_RING_WIDTH} ${FOCUS_COLOUR}`,
							outlineOffset: FOCUS_RING_WIDTH,
						},
				},
				'@media': {
					'(prefers-reduced-motion: reduce)': {
						transitionDuration: '0s',
					},
				},
			},
		},
	},

	variants: {
		/**
		 * `filter` covers the select/numeric/simple chips, which share a solid
		 * surface. `add` is the dashed, transparent "Add Filter" affordance.
		 */
		variant: {
			filter: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor: vars.color.background.emphasisInactive,
						borderColor: vars.color.border.default,
						color: vars.color.foreground.primary,
					},
				},
			},
			add: {
				'@layer': {
					[cssLayerComponent]: {
						backgroundColor: 'transparent',
						borderColor: vars.color.border.default,
						borderStyle: 'dashed',
						color: vars.color.foreground.secondary,
					},
				},
			},
		},

		selected: {
			true: {},
			false: {},
		},

		/**
		 * Whether the chip has anything to activate. A chip with no handlers is
		 * static text, so it must not react to the pointer.
		 */
		interactive: {
			true: {},
			false: {},
		},
	},

	compoundVariants: [
		{
			variants: { variant: 'filter', interactive: true },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						selectors: {
							[chipHover]: {
								backgroundColor:
									vars.color.background.emphasisLight,
								borderColor: vars.color.border.emphasis,
							},
						},
					},
				},
			},
		},
		{
			variants: { variant: 'add', interactive: true },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						selectors: {
							[chipHover]: {
								borderColor: vars.color.border.selected,
								color: vars.color.foreground.primary,
							},
							// Keyboard focus only — `:focus-within` also fired
							// on click and left the border stuck in the focused
							// colour after the pointer moved away.
							//
							// Same source order as the base focus rule, so the
							// border colour has to be repeated here or this
							// would win and leave the add chip grey.
							[selectors.focusVisible]: {
								borderColor: FOCUS_COLOUR,
								color: vars.color.foreground.primary,
							},
						},
					},
				},
			},
		},
		{
			// Declared after the hover compounds so it wins on source order.
			variants: { variant: 'filter', selected: true },
			style: {
				'@layer': {
					[cssLayerComponent]: {
						// `color.brand.*` rather than `background.reverse` /
						// `foreground.reverse`: a selected chip is the "on"
						// state of a selection control, which is what this pair
						// names, and it is the seed a tenant re-brands through
						// `colorOverrides`. Byte-identical today — both resolve
						// to gray-900 on white in all three themes — so this
						// changes nothing visually, it just makes the chip
						// re-brand alongside Switch, Radio and CheckBox instead
						// of staying gray while they change.
						backgroundColor: vars.color.brand.solid,
						borderColor: vars.color.brand.solid,
						color: vars.color.brand.onSolid,
						selectors: {
							// Selected is a persistent state — hover must not
							// wash it back out to the resting surface.
							[chipHover]: {
								backgroundColor: vars.color.brand.solid,
								borderColor: vars.color.brand.solid,
							},
						},
					},
				},
			},
		},
	],

	defaultVariants: {
		variant: 'filter',
		selected: false,
		interactive: false,
	},
});

export type StyledFilterChipProps = NonNullable<RecipeVariants<typeof chip>>;

/**
 * The chip's label area, and the element that carries `onClick`. Owns the chip's
 * padding so the whole surface is clickable — on a removable chip this is a
 * sibling of the `×` button, on every other chip it is the chip root itself.
 */
export const chipBody = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				alignItems: 'center',
				display: 'inline-flex',
				gap: vars.space['1'],
				minWidth: 0,
				paddingBlock: vars.space['2'],
				paddingInlineEnd: vars.space['3'],
				paddingInlineStart: vars.space['3'],
			},
		},
	},

	variants: {
		/**
		 * Hands the gap between the label and the `×` to the body rather than
		 * leaving it as a `gap` on the container, where it would be unclickable.
		 */
		withRemove: {
			true: {
				'@layer': {
					[cssLayerComponent]: {
						paddingInlineEnd: vars.space['1'],
					},
				},
			},
			false: {},
		},
	},

	defaultVariants: {
		withRemove: false,
	},
});

/**
 * The part of a `<button>` reset that `elementReset.button` does not cover.
 *
 * `appearance`, `background`, `border-style`, `cursor`, `margin`, `padding`,
 * `outline` and `user-select` all come from that reset, which the component
 * pulls in by rendering through `useBox({ as: 'button' })`. Going through
 * `useBox` is the only way those rules apply: composing the export directly
 * (`style([elementReset.button, …])`) silently contributes no class, because
 * the rules sit inside `@layer reset` and vanilla-extract drops layered classes
 * from a composition.
 *
 * The UA font shorthand is not in the reset and a button does not inherit it,
 * so without this the chip's type is replaced by 13.33px system Arial. Kept off
 * `font-size` and `line-height` deliberately — the `chip` recipe sets those
 * from tokens, and on a chip whose root *is* the button this style is applied
 * to the same element, where an `inherit` would beat the token on source order.
 */
export const buttonFont = style({
	'@layer': {
		[cssLayerComponent]: {
			fontFamily: 'inherit',
			fontWeight: 'inherit',
		},
	},
});

/**
 * Applied to the buttons nested *inside* the chip surface, which take their
 * colour and type scale from the chip root rather than from tokens of their
 * own. Layout and spacing come from `chipBody` / `removeButton`.
 */
export const innerButtonText = style({
	'@layer': {
		[cssLayerComponent]: {
			color: 'inherit',
			fontSize: 'inherit',
			lineHeight: 'inherit',
		},
	},
});

/**
 * Carries the chip's trailing padding so the `×` side has no dead space, and
 * stretches to the chip's full height — centring it instead would leave the
 * corners above and below the glyph hitting the container.
 *
 * Deliberately square: the button is transparent, so a pill radius here is
 * invisible, and its curve cuts a wedge of ~76px² out of the hit area where the
 * button meets the label. A hover surface for the `×` should be drawn behind the
 * glyph rather than by rounding this box.
 */
export const removeButton = style({
	'@layer': {
		[cssLayerComponent]: {
			alignItems: 'center',
			alignSelf: 'stretch',
			display: 'inline-flex',
			flexShrink: 0,
			justifyContent: 'center',
			paddingBlock: vars.space['2'],
			paddingInlineEnd: vars.space['3'],
			paddingInlineStart: 0,
		},
	},
});

/**
 * The category and operator runs. They name the filter, so they hold their width
 * and hand the shrinking to the value.
 */
export const labelText = style({
	'@layer': {
		[cssLayerComponent]: {
			flexShrink: 0,
			whiteSpace: 'nowrap',
		},
	},
});

/**
 * The chosen value, which is the unbounded part of a chip — a long one would
 * otherwise widen the chip past its container instead of truncating.
 */
export const valueText = style({
	'@layer': {
		[cssLayerComponent]: {
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
		},
	},
});

/**
 * The category portion of a select/numeric chip, which sits one step back from
 * the value it qualifies.
 */
export const categoryLabel = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				color: vars.color.foreground.secondary,
			},
		},
	},
	variants: {
		selected: {
			true: {
				'@layer': {
					[cssLayerComponent]: {
						// Tracks the selected surface — see the `chip` recipe.
						color: vars.color.brand.onSolid,
					},
				},
			},
			false: {},
		},
	},
	defaultVariants: {
		selected: false,
	},
});
