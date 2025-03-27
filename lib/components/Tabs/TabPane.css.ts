import { style } from '@vanilla-extract/css';

import { focusOutline } from '../../styles/focusOutline.css';

export const root = style({
	float: 'left',
	outline: 'none',
	':focus-visible': focusOutline,
});
