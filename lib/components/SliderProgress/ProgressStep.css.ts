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
	bottom: 0,
	left: 0,
	right: 0,
	top: 0,
});

export const fill = style({
	animationName: scaleAnim,
	animationPlayState: 'paused',
	animationTimingFunction: 'linear',
	transformOrigin: '0% center',
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
