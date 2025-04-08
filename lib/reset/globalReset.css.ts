import { globalStyle } from '@vanilla-extract/css';

import { globalTokens } from '../themes/theme.css';

globalStyle('html', {
	overflowX: 'hidden',
});

globalStyle('body', {
	textRendering: 'optimizeLegibility',
	textSizeAdjust: 'none',
	margin: 0,
	padding: 0,
	border: 'none',
	WebkitTapHighlightColor: 'transparent',
});

globalStyle('body, [data-od-reset]', {
	fontFamily: globalTokens.typography.fontFamily,
	fontSize: globalTokens.typography.size[4].fontSize,
	fontWeight: globalTokens.typography.fontWeight.normal,
	lineHeight: globalTokens.typography.size[4].lineHeight,
});

globalStyle('*', {
	boxSizing: 'border-box',
});
