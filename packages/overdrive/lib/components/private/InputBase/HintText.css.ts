import { style } from '@vanilla-extract/css';
import { vars } from '../../../themes/base/vars.css';

export const hintText = style({
	transition: `color 0.2s ${vars.animation.easing.decelerate} 0s`,
});
