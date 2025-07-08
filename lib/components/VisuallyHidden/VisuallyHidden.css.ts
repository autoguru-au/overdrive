import { style } from '@vanilla-extract/css';

export const visuallyHidden = style({
	position: 'absolute',
	clipPath: 'inset(50%)',
	margin: -1,
	padding: 0,
	width: 1,
	height: 1,
	overflow: 'hidden',
	userSelect: 'none',
	whiteSpace: 'nowrap',
	clip: 'rect(1px, 1px, 1px, 1px)',
});
