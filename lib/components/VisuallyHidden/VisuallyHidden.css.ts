import { style } from '@vanilla-extract/css';

export const visuallyHidden = style({
	clip: 'rect(1px, 1px, 1px, 1px)',
	clipPath: 'inset(50%)',
	height: 1,
	margin: -1,
	overflow: 'hidden',
	padding: 0,
	position: 'absolute',
	userSelect: 'none',
	whiteSpace: 'nowrap',
	width: 1,
});
