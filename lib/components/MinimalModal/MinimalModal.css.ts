import { style } from '@vanilla-extract/css';

export const container = style({
	outline: '0',
});

export const content = style({
	overflowY: 'auto',
	overscrollBehavior: 'contain',
});
