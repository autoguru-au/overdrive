import { globalLayer, style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { selectors } from '../../styles/selectors';
import { overdriveTokens as vars } from '../../themes/theme.css';

globalLayer(LAYER_ORDER);

/** Figma behaviour section: "Chip add/remove: 150ms ease". */
const TRANSITION_DURATION = '150ms';

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
							[selectors.hover]: {
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
							[selectors.hover]: {
								borderColor: vars.color.border.selected,
								color: vars.color.foreground.primary,
							},
							// Keyboard focus only — `:focus-within` also fired
							// on click and left the border stuck in the focused
							// colour after the pointer moved away.
							[selectors.focusVisible]: {
								borderColor: vars.color.border.selected,
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
						backgroundColor: vars.color.background.reverse,
						borderColor: vars.color.border.strong,
						color: vars.color.foreground.reverse,
						selectors: {
							// Selected is a persistent state — hover must not
							// wash it back out to the resting surface.
							[selectors.hover]: {
								backgroundColor: vars.color.background.reverse,
								borderColor: vars.color.border.strong,
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
 * Shared button normalisation.
 *
 * These duplicate `elementReset.button` (`elementReset.css.ts:59`) on purpose.
 * Composing it — `style([elementReset.button, ...])` — silently contributes no
 * class, because its rules sit inside `@layer reset` and vanilla-extract drops
 * layered classes from a composition. `ToggleButtons.css.ts:67` composes it too
 * and gets nothing; it only looks correct because it redeclares `appearance` and
 * `userSelect` itself and takes its background and border from sprinkles.
 *
 * The reset is applied properly by rendering through `useBox`, which passes
 * `as="button"` to the `resetVariants` recipe. Until this component is rebuilt on
 * that primitive, these declarations are what actually clear the UA button style.
 */
export const resetButton = style([
	focusOutlineStyle,
	{
		'@layer': {
			[cssLayerComponent]: {
				appearance: 'none',
				cursor: 'pointer',
				fontFamily: 'inherit',
				fontWeight: 'inherit',
				margin: 0,
			},
		},
	},
]);

/**
 * Applied to buttons nested *inside* the chip surface, which inherit their
 * appearance from it. Layout and spacing come from `chipBody` / `removeButton`.
 * `appearance: none` does not remove the UA `background-color` and `border`, so
 * they are cleared explicitly — without this the `×` renders as a bordered
 * circle and the selected chip's white text lands on `ButtonFace`.
 */
export const innerButton = style({
	'@layer': {
		[cssLayerComponent]: {
			backgroundColor: 'transparent',
			borderStyle: 'none',
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
						color: vars.color.foreground.reverse,
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
