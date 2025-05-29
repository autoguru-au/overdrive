import { globalStyle } from '@vanilla-extract/css';

import { overdriveTokens } from '../../themes/theme.css';
import { cssLayerReset } from '../layers.css';

globalStyle(':where(html)', {
	'@layer': {
		[cssLayerReset]: {
			overflowX: 'hidden',
		},
	},
});

globalStyle('body', {
	'@layer': {
		[cssLayerReset]: {
			margin: 0,
			padding: 0,
			border: 'none',
		},
	},
});

globalStyle('body, [data-od-base]', {
	'@layer': {
		[cssLayerReset]: {
			fontFamily: overdriveTokens.typography.fontFamily,
			fontSize: overdriveTokens.typography.size[4].fontSize,
			fontWeight: overdriveTokens.typography.fontWeight.normal,
			lineHeight: overdriveTokens.typography.size[4].lineHeight,
			textRendering: 'optimizeLegibility',
			textSizeAdjust: 'none',
			WebkitTapHighlightColor: 'transparent',
			WebkitTextSizeAdjust: 'none',
		},
	},
});

globalStyle('*, *::after, *::before', {
	'@layer': {
		[cssLayerReset]: {
			boxSizing: 'border-box',
		},
	},
});

// inspired from https://fokus.dev/tools/uaplus/
globalStyle(':where(button, input, select, textarea)', {
	'@layer': {
		[cssLayerReset]: {
			fontFamily: 'inherit',
			fontSize: 'inherit',
		},
	},
});
