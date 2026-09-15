import { globalLayer, globalStyle, style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { selectors } from '../../styles/selectors';
import { sprinkles } from '../../styles/sprinkles.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

globalLayer(LAYER_ORDER);

export const root = style({
	boxShadow: `inset 0 0px 0 0 ${vars.color.link.primary}`,
	transitionDelay: '0s',
	transitionDuration: '0.2s',
	transitionProperty: 'box-shadow',
	transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
	':hover': {
		boxShadow: `inset 0 -2px 0 0 ${vars.color.link.primary}`,
	},
});

export const icon = style({
	position: 'absolute',
	right: 0,
	top: '50%',
	transform: 'translateY(-50%)',
	transition: `transform 0.2s ${vars.animation.easing.decelerate} 0s`,
});

export const body = sprinkles({
	pointerEvents: 'none',
	position: 'relative',
});

/**
 * The established link colour, on the label rather than the root — the `as`
 * path never receives the root class, so the label is the only element both
 * paths share.
 *
 * `&&` doubles the class to 0-2-0 so it beats the single-class `color` atom
 * `Text` sets. The alternative, a semantic `link` value in `sprinkles`, renumbers
 * every atom after it and churns 136 snapshots for one colour.
 */
export const legacyLabel = style({
	selectors: {
		'&&': {
			color: vars.color.link.primary,
		},
	},
});

export const muted = style({
	':hover': {
		boxShadow: `inset 0 -1.6em 0 0 ${vars.color.link.primary}`,
		// The hover floods the whole line with the link colour, so the label is
		// sitting on it. `white` was fine while the link was always dark; on a
		// dark surface the derived link is deliberately light, and white on it
		// is 1.64:1. This token tracks whichever the nearest surface declared.
		color: vars.color.interactive.onLink,
	},
});

interface LinkedTextClass {
	label: string;
	hover: string;
	pressed: string;
	labelFollowsState: boolean;
}

const linkedTextClasses = {
	primary: {
		label: vars.color.link.primary,
		hover: vars.color.link.hover,
		pressed: vars.color.link.pressed,
		labelFollowsState: true,
	},
	secondary: {
		label: vars.color.link.secondary,
		hover: vars.color.link.hover,
		pressed: vars.color.link.pressed,
		labelFollowsState: false,
	},
	critical: {
		label: vars.color.link.critical,
		hover: vars.color.link.criticalHover,
		pressed: vars.color.link.criticalPressed,
		labelFollowsState: true,
	},
} as const satisfies Record<string, LinkedTextClass>;

const linkedTextVariant = ({
	label,
	hover,
	pressed,
	labelFollowsState,
}: LinkedTextClass) => ({
	'@layer': {
		[cssLayerComponent]: {
			borderBottomColor: label,
			color: label,
			selectors: {
				[selectors.hover]: {
					borderBottomColor: hover,
					...(labelFollowsState && { color: hover }),
				},
				[selectors.active]: {
					borderBottomColor: pressed,
					...(labelFollowsState && { color: pressed }),
				},
			},
		},
	},
});

export const linkedText = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				borderBottomStyle: 'solid',
				borderBottomWidth: vars.border.width['1'],
				display: 'inline',
				textDecoration: 'none',
				transitionDuration: '0.2s',
				transitionProperty: 'border-color, color',
				transitionTimingFunction: vars.animation.easing.decelerate,
				'@media': {
					'(prefers-reduced-motion: reduce)': {
						transitionDuration: '0s',
					},
				},
			},
		},
	},

	variants: {
		variant: {
			primary: linkedTextVariant(linkedTextClasses.primary),
			secondary: linkedTextVariant(linkedTextClasses.secondary),
			critical: linkedTextVariant(linkedTextClasses.critical),
		},

		disabled: {
			true: {
				'@layer': {
					[cssLayerComponent]: {
						cursor: 'not-allowed',
						opacity: '0.3',
						pointerEvents: 'none',
					},
				},
			},
			false: {},
		},
	},

	defaultVariants: {
		disabled: false,
		variant: 'primary',
	},
});

/**
 * Story-only: replays each class's `:active` declarations so a static story can
 * show the pressed state. Hover needs no equivalent — `selectors.hover` already
 * matches `[data-hover]`, so a story forces it with an attribute.
 *
 * Same layer and same specificity as the rule it stands in for
 * (`.variant.storyForcePressed` vs `.variant:active`), so it wins on source
 * order, which is why it is declared after the recipe.
 */
export const storyForcePressed = style({});

for (const [name, { pressed, labelFollowsState }] of Object.entries(
	linkedTextClasses,
) as Array<[TextLinkVariant, LinkedTextClass]>) {
	globalStyle(
		`${linkedText.classNames.variants.variant[name]}${storyForcePressed}`,
		{
			'@layer': {
				[cssLayerComponent]: {
					borderBottomColor: pressed,
					...(labelFollowsState && { color: pressed }),
				},
			},
		},
	);
}

const linkedTextIcon = `${linkedText.classNames.base} > [data-od-component='icon']`;

/**
 * Sizes the linked-text icon to its label, i.e. `1em`. Deliberately unlayered:
 * `Icon`'s own size class sets width/height outside any layer, so a layered
 * rule here would lose regardless of specificity. Kept as a child selector
 * because `Icon` owns that element.
 */
globalStyle(linkedTextIcon, {
	height: '1em',
	// Nudged off the baseline so the glyph centres on the label rather than
	// sitting on it — `inline-flex` used to do this with `align-items`.
	marginInlineStart: vars.space['1'],
	verticalAlign: '-0.125em',
	width: '1em',
});

type LinkedTextRecipeProps = NonNullable<
	Required<RecipeVariants<typeof linkedText>>
>;

/** Linked-text colour class. */
export type TextLinkVariant = LinkedTextRecipeProps['variant'];
