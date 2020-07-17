import { style } from 'treat';

export const container = style((theme) => ({
	height: theme.space['2'],
	borderRadius: theme.space['2'],
}));

export const bar = style((theme) => ({
	transition: `width 0.2s ${theme.animation.easing.standard} 0s`,
	willChange: 'width',
}));
