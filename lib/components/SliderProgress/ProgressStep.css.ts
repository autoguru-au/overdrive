import { keyframes, style } from '@vanilla-extract/css';

export const empty = style({
	opacity: 0.4,
});

const scaleAnim = keyframes({
	'0%': {
		transform: 'scale(0, 1)',
	},
	'100%': {
		transform: 'scale(1, 1)',
	},
});

export const item = style({
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
});

export const fill = style({
	animationTimingFunction: 'linear',
	transformOrigin: '0% center',
	animationPlayState: 'paused',
	animationName: scaleAnim,
});

export const active = style({
	animationPlayState: 'running',
});

export const paused = style({
	animationPlayState: 'paused',
});

export const passed = style({
	animation: 'none',
});
