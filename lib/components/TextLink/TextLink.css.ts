import { style } from '@vanilla-extract/css';

import { sprinkles } from '../../styles/sprinkles.css';
import { overdriveTokens as vars } from '../../themes/theme.css';

export const root = style({
	boxShadow: `inset 0 0px 0 0 ${vars.typography.colour.link}`,
	transitionDelay: '0s',
	transitionDuration: '0.2s',
	transitionProperty: 'box-shadow',
	transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
	':hover': {
		boxShadow: `inset 0 -2px 0 0 ${vars.typography.colour.link}`,
	},
});

export const icon = style({
	position: 'absolute',
	right: 0,
	top: '50%',
	transform: 'translateY(-50%)',
	transition: `transform 0.2s ${vars.animation.easing.decelerate} 0s`,
});

export const body = sprinkles({
	pointerEvents: 'none',
	position: 'relative',
});

export const muted = style({
	':hover': {
		boxShadow: `inset 0 -1.6em 0 0 ${vars.typography.colour.link}`,
		color: 'white',
	},
});
