import { style } from 'treat';

export const root = style({
	position: 'fixed',
	zIndex: 20,
	top: 0,
	left: 0,
	transform: 'translateZ(0)',
	willChange: 'transform',
});
