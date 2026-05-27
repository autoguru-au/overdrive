import { recipe } from '@vanilla-extract/recipes';

import { cssLayerComponent, ensureLayerOrder } from '../../../styles/layers.css';

ensureLayerOrder();
import { overdriveTokens as tokens } from '../../../themes/theme.css';

export const blockquote = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				backgroundColor: tokens.color.gamut.gray[100],
				borderLeft: `${tokens.border.width['3']} solid ${tokens.color.gamut.gray[400]}`,
				color: tokens.color.gamut.gray[700],
				marginLeft: 0,
				marginRight: 0,
			},
		},
	},
	variants: {
		density: {
			comfortable: {
				'@layer': {
					[cssLayerComponent]: {
						marginBottom: tokens.space[3],
						marginTop: tokens.space[3],
						padding: tokens.space[4],
					},
				},
			},
			compact: {
				'@layer': {
					[cssLayerComponent]: {
						marginBottom: tokens.space[2],
						marginTop: tokens.space[2],
						padding: tokens.space[2],
					},
				},
			},
		},
	},
	defaultVariants: {
		density: 'comfortable',
	},
});
