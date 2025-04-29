import { style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../../themes/theme.css';

export const hintText = style({
	transition: `color 0.2s ${vars.animation.easing.decelerate} 0s`,
});
