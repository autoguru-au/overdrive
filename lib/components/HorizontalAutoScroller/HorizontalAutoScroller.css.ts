import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

const actionWidth = 50;
export const controllerBtn = style({
	zIndex: 9,
	top: 0,
	width: actionWidth,
	height: '100%',
});
export const controllerCol = style({
	width: actionWidth,
});

export const prevBtn = style({
	left: 0,
	background:
		'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6769301470588236) 70%, rgba(255,255,255,0) 100%)',
});

export const nextBtn = style({
	right: 0,
	background:
		'linear-gradient(-90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6769301470588236) 70%, rgba(255,255,255,0) 100%)',
});

export const item = style({
	transform: 'scale(0.9)',
	transition: `opacity 0.3s ${vars.animation.easing.standard} 0s, transform 0.3s ${vars.animation.easing.standard} 0s`,
	opacity: 0.6,
	willChange: 'transform',
	userSelect: 'none',
});
export const active = style({
	transform: 'scale(1)',
	opacity: 1,
});
