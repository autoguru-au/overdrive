import { globalLayer } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { LAYER_ORDER, cssLayerComponent } from '../../../styles/layers.css';
import { overdriveTokens as tokens } from '../../../themes/theme.css';

globalLayer(LAYER_ORDER);

export const inlineCode = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				backgroundColor: tokens.color.gamut.gray[200],
				borderRadius: tokens.border.radius.sm,
				fontFamily: tokens.typography.fontFamilyMono,
				padding: `${tokens.space[1]} ${tokens.space[1]}`,
			},
		},
	},
	variants: {
		density: {
			comfortable: {
				'@layer': {
					[cssLayerComponent]: {
						fontSize: tokens.typography.size[3].fontSize,
					},
				},
			},
			compact: {
				'@layer': {
					[cssLayerComponent]: {
						fontSize: tokens.typography.size[2].fontSize,
					},
				},
			},
		},
	},
	defaultVariants: {
		density: 'comfortable',
	},
});
