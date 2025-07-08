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
			border: 'none',
			padding: 0,
		},
	},
});

globalStyle('body, [data-od-base]', {
	'@layer': {
		[cssLayerReset]: {
			textRendering: 'optimizeLegibility',
			textSizeAdjust: 'none',
			lineHeight: overdriveTokens.typography.size[4].lineHeight,
			fontFamily: overdriveTokens.typography.fontFamily,
			fontSize: overdriveTokens.typography.size[4].fontSize,
			fontWeight: overdriveTokens.typography.fontWeight.normal,
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
