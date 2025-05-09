import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const root = style({
	zIndex: 3000,
	justifyItems: 'center',
	top: vars.space['3'],
	left: '50vw',
	transition: `translateX .400s ${vars.animation.easing.standard}`,
	transform: 'translateX(-50%)',
});

export const alert = style({
	pointerEvents: 'initial',
});
