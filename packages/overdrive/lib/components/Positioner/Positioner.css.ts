import { style } from '@vanilla-extract/css';

export const root = style({
	zIndex: 1050,
	top: 0,
	left: 0,
	transform: 'translateZ(0)',
	willChange: 'transform',
});
