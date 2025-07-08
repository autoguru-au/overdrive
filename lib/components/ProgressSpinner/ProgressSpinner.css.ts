import { keyframes, style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

const spinAnim = keyframes({
	'100%': {
		transform: 'rotate(360deg)',
	},
});
export const circular = style({
	transformOrigin: 'center center',
	animationName: spinAnim,
	animationDuration: '2s',
	animationTimingFunction: 'linear',
	animationIterationCount: 'infinite',
});

const stokeAnim = keyframes({
	'0%': {
		strokeDasharray: '1, 200',
		strokeDashoffset: 0,
	},

	'50%': {
		strokeDasharray: '89, 200',
		strokeDashoffset: '-35px',
	},

	'100%': {
		strokeDasharray: '89, 200',
		strokeDashoffset: '-124px',
	},
});
export const path = style({
	animationName: stokeAnim,
	animationDuration: '1.5s',
	animationTimingFunction: vars.animation.easing.standard,
	animationIterationCount: 'infinite',
	strokeDasharray: '1, 200',
	strokeDashoffset: 0,
	strokeLinecap: 'round',
});

export const colours = styleVariants({
	default: {
		stroke: vars.colours.foreground.body,
	},
	light: {
		stroke: vars.typography.colour.white,
	},
	primary: {
		stroke: vars.typography.colour.primary,
	},
	secondary: {
		stroke: vars.typography.colour.secondary,
	},
	warning: {
		stroke: vars.typography.colour.warning,
	},
	danger: {
		stroke: vars.typography.colour.danger,
	},
});

export const size = {
	small: styleVariants({
		circular: {
			width: vars.space['3'],
			height: vars.space['3'],
		},

		path: {
			strokeWidth: '4px',
		},
	}),
	medium: styleVariants({
		circular: {
			width: vars.space['4'],
			height: vars.space['4'],
		},

		path: {
			strokeWidth: '5px',
		},
	}),
	large: styleVariants({
		circular: {
			width: vars.space['6'],
			height: vars.space['6'],
		},

		path: {
			strokeWidth: '6px',
		},
	}),
};
