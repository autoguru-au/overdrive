import { globalLayer, globalStyle, style } from '@vanilla-extract/css';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { selectors } from '../../styles/selectors';
import { sprinkles } from '../../styles/sprinkles.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

globalLayer(LAYER_ORDER);

export const root = style({
	boxShadow: `inset 0 0px 0 0 ${vars.typography.colour.link}`,
	transitionDelay: '0s',
	transitionDuration: '0.2s',
	transitionProperty: 'box-shadow',
	transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
	':hover': {
		boxShadow: `inset 0 -2px 0 0 ${vars.typography.colour.link}`,
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

export const muted = style({
	':hover': {
		boxShadow: `inset 0 -1.6em 0 0 ${vars.typography.colour.link}`,
		// The hover floods the whole line with the link colour, so the label is
		// sitting on it. `white` was fine while the link was always dark; on a
		// dark surface the derived link is deliberately light, and white on it
		// is 1.64:1. This token tracks whichever the nearest surface declared.
		color: vars.color.interactive.onLink,
	},
});

/**
 * DS-2026 "Linked text" — the `Style=Linked text` axis of the Figma Button
 * component (node `362:2275`), NOT the superseded standalone `Link` frame
 * (`739:8560`). Opt-in via the `variant` prop; with `variant` unset the legacy
 * styles above are used unchanged.
 *
 * `labelFollowsState` splits the two behaviours Figma uses. Primary and Critical
 * move the **label and underline together** to the state colour (nodes
 * `1445:17691`/`17687`, `1445:17846`/`17848` bind a single colour variable).
 * Secondary holds its label and moves **only the underline** (`1445:18008`/
 * `18010` keep `color/link/secondary` on the text).
 */
const linkedTextVariant = ({
	label,
	hover,
	pressed,
	labelFollowsState,
}: {
	label: string;
	hover: string;
	pressed: string;
	labelFollowsState: boolean;
}) => ({
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
				// Figma shows the underline in every state, including Default —
				// unlike the legacy `root` style, which reveals it on hover.
				borderBottomStyle: 'solid',
				borderBottomWidth: vars.border.width['1'],
				// Deliberately `inline`, not the `inline-flex` the Figma frame
				// implies. A flex box is atomic, so it cannot be split across
				// lines — inside a sentence it gets pushed onto its own line
				// instead of flowing with the text, and every markdown link
				// renders through this component. `inline` wraps like text and
				// draws the underline per line fragment.
				//
				// `border-bottom` rather than `text-decoration` because it keeps
				// running under a trailing icon, which is how Figma draws it;
				// `text-decoration` stops at the end of the text.
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
			primary: linkedTextVariant({
				label: vars.color.link.primary,
				hover: vars.color.link.hover,
				pressed: vars.color.link.pressed,
				labelFollowsState: true,
			}),
			// The only class that holds its label: Figma keeps the black text on
			// the shared green hover/pressed underline. `color.link` has no
			// secondary-specific hover/pressed pair.
			secondary: linkedTextVariant({
				label: vars.color.link.secondary,
				hover: vars.color.link.hover,
				pressed: vars.color.link.pressed,
				labelFollowsState: false,
			}),
			critical: linkedTextVariant({
				label: vars.color.link.critical,
				hover: vars.color.link.criticalHover,
				pressed: vars.color.link.criticalPressed,
				labelFollowsState: true,
			}),
		},

		disabled: {
			true: {
				'@layer': {
					[cssLayerComponent]: {
						// Figma's Disabled linked text is the Default look at
						// 30% — the same treatment Button already uses.
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

const linkedTextIcon = `${linkedText.classNames.base} > [data-od-component='icon']`;

/**
 * Figma sizes the linked-text icon to its label — 16px at Large, 14px at Small,
 * i.e. `1em`. Deliberately unlayered: `Icon`'s own size class sets width/height
 * outside any layer, so a layered rule here would lose regardless of
 * specificity. Kept as a child selector because `Icon` owns that element.
 */
globalStyle(linkedTextIcon, {
	height: '1em',
	// Nudged off the baseline so the glyph centres on the label rather than
	// sitting on it — `inline-flex` used to do this with `align-items`.
	verticalAlign: '-0.125em',
	width: '1em',
});

/**
 * The gap between icon and label, which `inline-flex`'s `gap` used to own.
 * Logical margins so the spacing follows the writing direction, and keyed off
 * position because the icon sits on either side.
 */
globalStyle(`${linkedTextIcon}:first-child`, {
	marginInlineEnd: vars.space['1'],
});

globalStyle(`${linkedTextIcon}:last-child`, {
	marginInlineStart: vars.space['1'],
});

type LinkedTextRecipeProps = NonNullable<
	Required<RecipeVariants<typeof linkedText>>
>;

/** DS-2026 linked-text colour class, per Figma's `Class` axis. */
export type TextLinkVariant = LinkedTextRecipeProps['variant'];
