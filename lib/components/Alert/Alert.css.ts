import { style } from '@vanilla-extract/css';

// Component-specific dimensions with no token equivalent
// (contentWidth.small is 592px); revisit in the W3c-P7 restyle.
export const contained = style({
	maxWidth: '640px',
	minWidth: '280px',
});
