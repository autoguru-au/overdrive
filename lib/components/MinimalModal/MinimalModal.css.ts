import { style } from '@vanilla-extract/css';

export const container = style({
	outline: '0',
});

export const content = style({
	overflowY: 'auto',
	overscrollBehavior: 'contain',
	// @ts-expect-error Object literal may only specify known properties
	webkitOverflowScrolling: 'touch',
	'-webkit-overflow-scrolling': 'touch',
});
