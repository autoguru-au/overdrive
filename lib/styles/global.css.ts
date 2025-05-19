import { globalFontFace, globalStyle } from '@vanilla-extract/css';

import { overdriveTokens } from '../themes/theme.css';

import { cssLayerReset } from './layers.css';

// -- web fonts

globalFontFace('AvertaStandard', {
	fontStyle: 'normal',
	fontWeight: 400,
	fontDisplay: 'swap',
	src: `local('Averta Std Regular'), local('AvertaStd-Regular'),url('https://cdn.autoguru.com.au/assets/fonts/avertastd-regular-webfont.woff2') format('woff2'),url('https://cdn.autoguru.com.au/assets/fonts/avertastd-regular-webfont.woff') format('woff')`,
});

globalFontFace('AvertaStandard', {
	fontStyle: 'normal',
	fontWeight: 500,
	fontDisplay: 'swap',
	src: `local('Averta Std Semibold'), local('AvertaStd-Semibold'),url('https://cdn.autoguru.com.au/assets/fonts/avertastd-semibold-webfont.woff2') format('woff2'),url('https://cdn.autoguru.com.au/assets/fonts/avertastd-semibold-webfont.woff') format('woff')`,
});

globalFontFace('AvertaStandard', {
	fontStyle: 'normal',
	fontWeight: 700,
	fontDisplay: 'swap',
	src: `local('Averta Std Bold'), local('AvertaStd-Bold'),url('https://cdn.autoguru.com.au/assets/fonts/avertastd-bold-webfont.woff2') format('woff2'),url('https://cdn.autoguru.com.au/assets/fonts/avertastd-bold-webfont.woff') format('woff')`,
});

// -- root styles

globalStyle(':where(html)', {
	'@layer': {
		[cssLayerReset]: {
			overflowX: 'hidden',
			scrollbarGutter: 'stable',
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
