import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

const actionWidth = 50;
export const controllerBtn = style({
	top: 0,
	height: '100%',
	width: actionWidth,
	zIndex: 9,
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
	userSelect: 'none',
	willChange: 'transform',
	transition: `opacity 0.3s ${vars.animation.easing.standard} 0s, transform 0.3s ${vars.animation.easing.standard} 0s`,
	transform: 'scale(0.9)',
	opacity: 0.6,
});
export const active = style({
	transform: 'scale(1)',
	opacity: 1,
});
