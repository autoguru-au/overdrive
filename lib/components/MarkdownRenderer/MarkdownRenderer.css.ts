import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { cssLayerComponent } from '../../styles/layers.css';
import { overdriveTokens as tokens } from '../../themes/theme.css';

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
	marginTop: '0 !important',
});

globalStyle(`${rootBase} > *:last-child`, {
	marginBottom: '0 !important',
});
