import { style, type StyleRule } from '@vanilla-extract/css';

import { themeContractVars as tokens } from '../themes/theme.css';

const width = '2px';

export const focusOutline: StyleRule = {
	outline: `solid ${width} ${tokens.colours.foreground.link}`,
	outlineOffset: width,
};

export const focusOutlineStyle = style({
	selectors: {
		'&:focus-visible, &[data-focus-visible], [data-focus-visible] &': {
			outline: `solid ${width} ${tokens.colours.foreground.link}`,
			outlineWidth: width,
		},
	},
});
