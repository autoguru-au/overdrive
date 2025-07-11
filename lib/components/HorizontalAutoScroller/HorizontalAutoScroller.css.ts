import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

const actionWidth = 50;
export const controllerBtn = style({
	height: '100%',
	top: 0,
	width: actionWidth,
	zIndex: 9,
});
export const controllerCol = style({
	width: actionWidth,
});

export const prevBtn = style({
	background:
		'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6769301470588236) 70%, rgba(255,255,255,0) 100%)',
	left: 0,
});

export const nextBtn = style({
	background:
		'linear-gradient(-90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6769301470588236) 70%, rgba(255,255,255,0) 100%)',
	right: 0,
});

export const item = style({
	opacity: 0.6,
	transform: 'scale(0.9)',
	transition: `opacity 0.3s ${vars.animation.easing.standard} 0s, transform 0.3s ${vars.animation.easing.standard} 0s`,
	userSelect: 'none',
	willChange: 'transform',
});
export const active = style({
	opacity: 1,
	transform: 'scale(1)',
});
