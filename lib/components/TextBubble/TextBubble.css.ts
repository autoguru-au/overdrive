import { style } from '@vanilla-extract/css';

export const bubbleText = style({
	left: '50%',
	textAlign: 'center',
	textOverflow: 'ellipsis',
	top: '50%',
	transform: 'translate(-50%, -50%)',
});
