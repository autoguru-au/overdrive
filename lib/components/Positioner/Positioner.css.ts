import { style } from '@vanilla-extract/css';

export const root = style({
	left: 0,
	top: 0,
	transform: 'translateZ(0)',
	willChange: 'transform',
	zIndex: 1050,
});
