import { style } from '@vanilla-extract/css';

import { vars } from '../../themes/base/vars.css';

export const root = style({
	transitionDelay: '0s',
	transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
	transitionDuration: '0.2s',
	transitionProperty: 'box-shadow',
	boxShadow: `inset 0 0px 0 0 ${vars.typography.colour.link}`,
	':hover': {
		boxShadow: `inset 0 -2px 0 0 ${vars.typography.colour.link}`,
	},
});

export const muted = style({
	':hover': {
		color: 'white',
		boxShadow: `inset 0 -1.6em 0 0 ${vars.typography.colour.link}`,
	},
});
