import { globalStyle } from '@vanilla-extract/css';

import { cssLayerReset } from '../styles/layers.css';
import { overdriveTokens } from '../themes/theme.css';

globalStyle('html', {
	'@layer': {
		[cssLayerReset]: {
			overflowX: 'hidden',
		},
	},
});

globalStyle('body', {
	'@layer': {
		[cssLayerReset]: {
			textRendering: 'optimizeLegibility',
			textSizeAdjust: 'none',
			margin: 0,
			padding: 0,
			border: 'none',
			WebkitTapHighlightColor: 'transparent',
		},
	},
});

globalStyle('body, [data-od-reset]', {
	'@layer': {
		[cssLayerReset]: {
			fontFamily: overdriveTokens.typography.fontFamily,
			fontSize: overdriveTokens.typography.size[4].fontSize,
			fontWeight: overdriveTokens.typography.fontWeight.normal,
			lineHeight: overdriveTokens.typography.size[4].lineHeight,
		},
	},
});

globalStyle('*', {
	'@layer': {
		[cssLayerReset]: {
			boxSizing: 'border-box',
			font: 'inherit',
		},
	},
});
