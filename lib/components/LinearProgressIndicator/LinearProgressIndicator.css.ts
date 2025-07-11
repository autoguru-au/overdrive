import { keyframes, style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const root = style({
	height: vars.space['1'],
	transform: 'translateZ(0)',
	transition: 'opacity 0.25s cubic-bezier(0.4, 0, 0.6, 1) 0ms',
});

const layerOneAnim = keyframes({
	'0%': {
		animationTimingFunction: 'cubic-bezier(0.15, 0, 0.51506, 0.40969)',
		transform: 'translateX(0)',
	},
	'100%': {
		transform: 'translateX(160.27778%)',
	},
	'25%': {
		animationTimingFunction: 'cubic-bezier(0.31033, 0.28406, 0.8, 0.73371)',
		transform: 'translateX(37.65191%)',
	},
	'48.35%': {
		animationTimingFunction: 'cubic-bezier(0.4, 0.62704, 0.6, 0.90203)',
		transform: 'translateX(84.38617%)',
	},
});

export const linearProgressBar = style({
	animationDuration: '2s',
	animationIterationCount: 'infinite',
	animationName: layerOneAnim,
	animationTimingFunction: 'linear',
	left: '-54.888891%',
});

const layerTwoAnim = keyframes({
	'0%': {
		animationTimingFunction:
			'cubic-bezier(0.20503,0.05705,0.57661,0.45397)',
		transform: 'scaleX(0.08)',
	},
	'100%': {
		transform: 'scaleX(0.08)',
	},
	'19.15%': {
		animationTimingFunction:
			'cubic-bezier(0.15231,0.19643,0.64837,1.00432)',
		transform: 'scaleX(0.4571)',
	},
	'44.15%': {
		animationTimingFunction:
			'cubic-bezier(0.25776,-0.00316,0.21176,1.38179)',
		transform: 'scaleX(0.72796)',
	},
});
export const linearProgressBarInner = style({
	animationDuration: '2s',
	animationIterationCount: 'infinite',
	animationName: layerTwoAnim,
	animationTimingFunction: 'linear',
});
