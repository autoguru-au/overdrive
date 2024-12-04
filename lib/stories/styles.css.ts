import { style } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../themes/theme.css';

export const swatch = style({
	width: vars.space[9],
	height: vars.space[9],
	position: 'relative',
});

export const titles = style({
	marginTop: '11px',
});

export const labels = style({
	textTransform: 'capitalize',
});

export const hexPill = style({
	backgroundColor: 'hsl(0 0 100 / 75%)',
	borderRadius: '100px',
	display: 'inline-block',
	fontSize: '11px',
	padding: '1px 8px',
	position: 'absolute',
	textTransform: 'uppercase',
	top: '5px',
});
