import { style } from '@vanilla-extract/css';

import { overdriveTokens as tokens } from '../themes/theme.css';

const width = '2px';

export const focusOutline = {
	outline: `solid ${width} ${tokens.colours.foreground.link}`,
	outlineOffset: width,
};

export const focusOutlineStyle = style({
	selectors: {
		'&:focus-visible, &[data-focus-visible], [data-focus-visible] &': {
			outline: `solid ${width} ${tokens.colours.foreground.link}`,
			outlineOffset: width,
		},
	},
});
