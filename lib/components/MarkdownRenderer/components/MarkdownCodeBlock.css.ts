import { globalLayer, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { LAYER_ORDER, cssLayerComponent } from '../../../styles/layers.css';
import { overdriveTokens as tokens } from '../../../themes/theme.css';

globalLayer(LAYER_ORDER);

export const codeBlock = recipe({
	base: {
		'@layer': {
			[cssLayerComponent]: {
				backgroundColor: tokens.color.gamut.gray[900],
				borderRadius: tokens.border.radius.md,
				color: tokens.color.gamut.white,
				fontFamily: tokens.typography.fontFamilyMono,
				overflowX: 'auto',
			},
		},
	},
	variants: {
		density: {
			comfortable: {
				'@layer': {
					[cssLayerComponent]: {
						fontSize: tokens.typography.size[3].fontSize,
						lineHeight: tokens.typography.size[3].lineHeight,
						marginBottom: tokens.space[3],
						marginTop: tokens.space[3],
						padding: tokens.space[4],
					},
				},
			},
			compact: {
				'@layer': {
					[cssLayerComponent]: {
						fontSize: tokens.typography.size[2].fontSize,
						lineHeight: tokens.typography.size[2].lineHeight,
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

export const codeBlockInner = style({
	'@layer': {
		[cssLayerComponent]: {
			backgroundColor: 'transparent',
			fontFamily: 'inherit',
			fontSize: 'inherit',
			padding: 0,
		},
	},
});
