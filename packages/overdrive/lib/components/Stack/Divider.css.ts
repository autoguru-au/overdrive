import { style } from '@vanilla-extract/css';

import { vars } from '../../themes/base/vars.css';

export const line = style({
	height: '1px',
	boxShadow: `inset 0 0 0 1px ${vars.colours.background.light}`,
});
