import { globalLayer, globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { LAYER_ORDER, cssLayerComponent } from '../../styles/layers.css';
import { overdriveTokens as tokens } from '../../themes/theme.css';

globalLayer(LAYER_ORDER);

export const rootBase = style({
	'@layer': {
		[cssLayerComponent]: {
			fontFamily: tokens.typography.fontFamily,
			wordBreak: 'break-word',
		},
	},
});

export const rootDensity = recipe({
	variants: {
		density: {
			comfortable: {
				'@layer': {
					[cssLayerComponent]: {
						fontSize: tokens.typography.size[4].fontSize,
						lineHeight: tokens.typography.size[4].lineHeight,
					},
				},
			},
			compact: {
				'@layer': {
					[cssLayerComponent]: {
						fontSize: tokens.typography.size[3].fontSize,
						lineHeight: tokens.typography.size[3].lineHeight,
					},
				},
			},
		},
	},
	defaultVariants: {
		density: 'comfortable',
	},
});

globalStyle(`${rootBase} > *:first-child`, {
	'@layer': {
		[cssLayerComponent]: {
			marginTop: 0,
		},
	},
});

globalStyle(`${rootBase} > *:last-child`, {
	'@layer': {
		[cssLayerComponent]: {
			marginBottom: 0,
		},
	},
});
