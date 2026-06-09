import { globalLayer, style } from '@vanilla-extract/css';

import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { sprinkles } from '../../styles/sprinkles.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

globalLayer(LAYER_ORDER);

/**
 * Wrapper that joins the primary action and the menu trigger into a single
 * visual control.
 */
export const group = style([
	sprinkles({
		display: 'flex',
		position: 'relative',
		width: 'fit-content',
	}),
]);

/**
 * Primary action segment (left). Only the outer (left) corners are rounded so
 * it visually fuses with the trigger segment.
 *
 * The radius override lives in the `component` layer, which sits *after*
 * `styleprops` (where the Button's base `borderRadius: 'md'` sprinkle is
 * emitted) in `LAYER_ORDER`, so it reliably wins.
 */
export const primary = style({
	'@layer': {
		[cssLayerComponent]: {
			borderBottomRightRadius: 0,
			borderTopRightRadius: 0,
		},
	},
});

/**
 * Menu trigger segment (right, the chevron). Only the outer (right) corners are
 * rounded. A negative left margin collapses the adjacent 1px borders of the two
 * bordered segments into a single divider line; for filled intents the
 * `::before` overlay renders a subtle divider instead.
 */
export const trigger = style({
	'@layer': {
		[cssLayerComponent]: {
			borderBottomLeftRadius: 0,
			borderTopLeftRadius: 0,
			marginLeft: `calc(-1 * ${vars.border.width['1']})`,
			selectors: {
				// Render the active segment above its sibling so the focus
				// outline and overlapped border are never clipped.
				'&:hover, &:focus-visible': {
					zIndex: 1,
				},
				'&::before': {
					backgroundColor: 'currentColor',
					bottom: vars.space['1'],
					content: '""',
					left: 0,
					opacity: 0.2,
					position: 'absolute',
					width: vars.border.width['1'],
				},
			},
		},
	},
});
