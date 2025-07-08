import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const root = style({
	zIndex: 3000,
	top: vars.space['3'],
	left: '50vw',
	justifyItems: 'center',
	transform: 'translateX(-50%)',
	transition: `translateX .400s ${vars.animation.easing.standard}`,
});

export const alert = style({
	pointerEvents: 'initial',
});
