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
