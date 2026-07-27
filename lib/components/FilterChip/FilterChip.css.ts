import { globalLayer, style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { focusOutlineStyle } from '../../styles/focusOutline.css';
import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

globalLayer(LAYER_ORDER);

/**
 * Figma specifies an 18px icon ("match text optical weight"). `vars.icon.size`
 * only offers 16/20/32px, so the value is held locally until a token exists.
 */
const ICON_SIZE = '18px';

/**
 * WCAG 2.5.5 minimum target size. The chip is intentionally shorter than this,
 * so interactive elements extend their hit area with a pseudo-element rather
 * than growing the visual box.
 */
const MIN_TOUCH_TARGET = '44px';

/** Figma behaviour section: "Chip add/remove: 150ms ease". */
const TRANSITION_DURATION = '150ms';

/** Extends an element's hit area vertically without altering its layout box. */
const touchTargetRule = {
	content: '""',
	height: MIN_TOUCH_TARGET,
	left: 0,
	position: 'absolute',
	right: 0,
	top: '50%',
	transform: 'translateY(-50%)',
} as const;

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
				gap: vars.space['1'],
				lineHeight: vars.typography.size['4'].lineHeight,
				paddingBlock: vars.space['2'],
				paddingInline: vars.space['3'],
				position: 'relative',
				transitionDuration: TRANSITION_DURATION,
				transitionProperty: 'background-color, border-color, color',
				transitionTimingFunction: vars.animation.easing.standard,
				width: 'fit-content',
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
						selectors: {
							'&:hover': {
								backgroundColor:
									vars.color.button.secondary.hover,
								borderColor: vars.color.border.emphasis,
							},
						},
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
						selectors: {
							'&:hover, &:focus-within': {
								borderColor: vars.color.border.selected,
								color: vars.color.foreground.primary,
							},
						},
					},
				},
			},
		},

		selected: {
			true: {},
			false: {},
		},
	},

	compoundVariants: [
		{
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
							'&:hover': {
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
	},
});

export type StyledFilterChipProps = NonNullable<RecipeVariants<typeof chip>>;

/**
 * Shared button normalisation. Deliberately omits `padding`, `background`,
 * `border` and `color` so it can sit on the chip root without competing with
 * the `chip` recipe, which owns those properties.
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
				position: 'relative',
				'::after': touchTargetRule,
			},
		},
	},
]);

/** Applied to buttons nested *inside* the chip surface. */
export const innerButton = style({
	'@layer': {
		[cssLayerComponent]: {
			alignItems: 'center',
			backgroundColor: 'transparent',
			borderStyle: 'none',
			color: 'inherit',
			display: 'inline-flex',
			fontSize: 'inherit',
			gap: vars.space['1'],
			lineHeight: 'inherit',
			padding: 0,
		},
	},
});

export const removeButton = style({
	'@layer': {
		[cssLayerComponent]: {
			borderRadius: vars.border.radius.pill,
			flexShrink: 0,
			justifyContent: 'center',
		},
	},
});

/**
 * `Icon` sizes its wrapper with a class declared outside any cascade layer, and
 * unlayered rules beat layered ones regardless of order. This rule therefore
 * stays unlayered too and doubles its own class to win on specificity —
 * otherwise `Icon`'s 16px default silently overrides the 18px design.
 */
export const icon = style({
	selectors: {
		'&&': {
			display: 'block',
			height: ICON_SIZE,
			width: ICON_SIZE,
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
