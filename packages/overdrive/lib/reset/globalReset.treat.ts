import { globalStyle } from 'treat';

globalStyle(':root', {
	boxSizing: 'border-box',
	font: '400 16px/22px AvertaStandard, system-ui, sans-serif',
});

globalStyle('*, *:before, *:after', {
	font: 'inherit',
	boxSizing: 'inherit',
	WebkitTapHighlightColor: 'transparent',
	// @ts-ignore
	MozOsxFontSmoothing: 'grayscale',
	textRendering: 'optimizeLegibility',
});

globalStyle('body', {
	lineHeight: 1,
	WebkitTextSizeAdjust: 'none',
	margin: 0,
	padding: 0,
	border: 'none',
});

globalStyle('html', {
	overflowX: 'hidden',
});
