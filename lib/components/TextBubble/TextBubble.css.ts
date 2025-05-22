import { style } from '@vanilla-extract/css';

export const bubbleText = style({
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	textAlign: 'center',
	textOverflow: 'ellipsis',
});
