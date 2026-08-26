import { keyframes, style } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

const reduceMotion = {
	'@media': {
		'screen and (prefers-reduced-motion)': {
			animation: 'none',
		},
	},
};

const enter = keyframes({
	from: { opacity: 0, transform: 'scale(0.96) translateY(-4px)' },
	to: { opacity: 1, transform: 'none' },
});

const exit = keyframes({
	from: { opacity: 1, transform: 'none' },
	to: { opacity: 0, transform: 'scale(0.96) translateY(-4px)' },
});

export const animatedContent = style({
	animation: `${enter} 160ms ${vars.animation.easing.decelerate}`,
	...reduceMotion,
	selectors: {
		'[data-exiting] &': {
			animation: `${exit} 400ms ${vars.animation.easing.accelerate} forwards`,
			pointerEvents: 'none',
			...reduceMotion,
		},
	},
});
