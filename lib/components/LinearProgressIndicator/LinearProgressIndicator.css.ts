import { keyframes, style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const root = style({
	transform: 'translateZ(0)',
	transition: 'opacity 0.25s cubic-bezier(0.4, 0, 0.6, 1) 0ms',
	height: vars.space['1'],
});

const layerOneAnim = keyframes({
	'0%': {
		transform: 'translateX(0)',
		animationTimingFunction: 'cubic-bezier(0.15, 0, 0.51506, 0.40969)',
	},
	'25%': {
		transform: 'translateX(37.65191%)',
		animationTimingFunction: 'cubic-bezier(0.31033, 0.28406, 0.8, 0.73371)',
	},
	'48.35%': {
		transform: 'translateX(84.38617%)',
		animationTimingFunction: 'cubic-bezier(0.4, 0.62704, 0.6, 0.90203)',
	},
	'100%': {
		transform: 'translateX(160.27778%)',
	},
});

export const linearProgressBar = style({
	left: '-54.888891%',
	animationName: layerOneAnim,
	animationDuration: '2s',
	animationTimingFunction: 'linear',
	animationIterationCount: 'infinite',
});

const layerTwoAnim = keyframes({
	'0%': {
		transform: 'scaleX(0.08)',
		animationTimingFunction:
			'cubic-bezier(0.20503,0.05705,0.57661,0.45397)',
	},
	'19.15%': {
		transform: 'scaleX(0.4571)',
		animationTimingFunction:
			'cubic-bezier(0.15231,0.19643,0.64837,1.00432)',
	},
	'44.15%': {
		transform: 'scaleX(0.72796)',
		animationTimingFunction:
			'cubic-bezier(0.25776,-0.00316,0.21176,1.38179)',
	},
	'100%': {
		transform: 'scaleX(0.08)',
	},
});
export const linearProgressBarInner = style({
	animationName: layerTwoAnim,
	animationDuration: '2s',
	animationTimingFunction: 'linear',
	animationIterationCount: 'infinite',
});
