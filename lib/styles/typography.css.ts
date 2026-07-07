import { style } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { overdriveTokens as tokens } from '../themes/theme.css';

import { cssLayerTypography } from './layers.css';

const legacyTextProperties = defineProperties({
	'@layer': cssLayerTypography,
	properties: {
		color: {
			...tokens.typography.colour,
			unset: 'unset',
		},
	},
});

/**
 * @deprecated Use the semantic `color` path (sprinkles `color` / `textStyles({ color })`) — removed in v5 (DS-2026 major).
 */
export const sprinklesLegacyText = createSprinkles(legacyTextProperties);
export type LegacyTextColours = Parameters<
	typeof sprinklesLegacyText
>[0]['color'];

export const common = style({
	'@layer': {
		[cssLayerTypography]: {
			selectors: {
				'&::selection': {
					background: tokens.color.surface.accent,
					color: tokens.color.content.inverse,
				},
			},
		},
	},
});
