import { style } from 'treat';

export const hintText = style((theme) => ({
	transition: `color 0.2s ${theme.animation.easing.decelerate} 0s`,
}));
