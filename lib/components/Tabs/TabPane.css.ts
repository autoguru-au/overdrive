import { style } from '@vanilla-extract/css';

import { focusOutlineStyle } from '../../styles/focusOutline.css';

export const root = style({
	float: 'left',
	outline: 'none',
	':focus-visible': focusOutlineStyle,
});
