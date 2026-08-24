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
		color: 'white',
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
				alignItems: 'center',
				// Figma shows the underline in every state, including Default —
				// unlike the legacy `root` style, which reveals it on hover.
				borderBottomStyle: 'solid',
				borderBottomWidth: vars.border.width['1'],
				display: 'inline-flex',
				gap: vars.space['1'],
				textDecoration: 'none',
				transitionDuration: '0.2s',
				transitionProperty: 'border-color, color',
				transitionTimingFunction: vars.animation.easing.decelerate,
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

/**
 * Figma sizes the linked-text icon to its label — 16px at Large, 14px at Small,
 * i.e. `1em`. Deliberately unlayered: `Icon`'s own size class sets width/height
 * outside any layer, so a layered rule here would lose regardless of
 * specificity. Kept as a child selector because `Icon` owns that element.
 */
globalStyle(`${linkedText.classNames.base} > [data-od-component='icon']`, {
	height: '1em',
	width: '1em',
});

type LinkedTextRecipeProps = NonNullable<
	Required<RecipeVariants<typeof linkedText>>
>;

/** DS-2026 linked-text colour class, per Figma's `Class` axis. */
export type TextLinkVariant = LinkedTextRecipeProps['variant'];
