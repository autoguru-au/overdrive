import { style } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../themes/theme.css';

export const root = style({
	transitionDelay: '0s',
	transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
	transitionDuration: '0.2s',
	transitionProperty: 'box-shadow',
	boxShadow: `inset 0 -1px 0 0 ${vars.typography.colour.muted}`,
});

export const text = style({
	cursor: 'pointer',
});

export const textHidden = style({
	position: 'absolute',
	visibility: 'hidden',
});
