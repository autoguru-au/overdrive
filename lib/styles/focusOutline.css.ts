import { style } from '@vanilla-extract/css';

import { themeContractVars as tokens } from '../themes/theme.css';

const width = '2px';

export const focusOutlineStyle = style({
	outlineOffset: width,
	outlineStyle: 'none',
	outlineWidth: width,
	selectors: {
		'&:focus-visible, &[data-focus-visible], [data-focus-visible] &': {
			outlineColor: tokens.colours.foreground.link,
			outlineStyle: 'solid',
		},
	},
});
