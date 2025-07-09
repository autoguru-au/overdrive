import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const root = style({
	boxShadow: `inset 0 -1px 0 0 ${vars.typography.colour.muted}`,
	transitionDelay: '0s',
	transitionDuration: '0.2s',
	transitionProperty: 'box-shadow',
	transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
});

export const text = style({
	cursor: 'pointer',
});

export const textHidden = style({
	position: 'absolute',
	visibility: 'hidden',
});
