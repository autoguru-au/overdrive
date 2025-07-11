import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const root = style({
	justifyItems: 'center',
	left: '50vw',
	top: vars.space['3'],
	transform: 'translateX(-50%)',
	transition: `translateX .400s ${vars.animation.easing.standard}`,
	zIndex: 3000,
});

export const alert = style({
	pointerEvents: 'initial',
});
