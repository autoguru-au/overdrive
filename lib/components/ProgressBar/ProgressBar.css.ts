import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

export const container = style({
	height: vars.space['2'],
});

export const bar = style({
	transition: `width 0.2s ${vars.animation.easing.standard} 0s`,
	willChange: 'width',
});
