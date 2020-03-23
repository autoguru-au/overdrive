import { style } from 'treat';

export const hintText = style((theme) => ({
	marginTop: theme.space['2'],
	marginLeft: theme.space['4'],
	transition: `color 0.2s ${theme.animation.easing.decelerate} 0s`,
}));
