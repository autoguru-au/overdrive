import { recipe } from '@vanilla-extract/recipes';

import { cssLayerComponent, ensureLayerOrder } from '../../../styles/layers.css';

ensureLayerOrder();
import { overdriveTokens as tokens } from '../../../themes/theme.css';

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
