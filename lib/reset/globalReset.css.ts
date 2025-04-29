import { globalStyle } from '@vanilla-extract/css';

import { overdriveTokens } from '../themes/theme.css';

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
	fontFamily: overdriveTokens.typography.fontFamily,
	fontSize: overdriveTokens.typography.size[4].fontSize,
	fontWeight: overdriveTokens.typography.fontWeight.normal,
	lineHeight: overdriveTokens.typography.size[4].lineHeight,
});

globalStyle('*', {
	boxSizing: 'border-box',
	font: 'inherit',
});
