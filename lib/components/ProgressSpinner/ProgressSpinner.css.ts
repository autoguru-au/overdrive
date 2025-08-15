import { keyframes, style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../themes/theme.css';

const spinAnim = keyframes({
	'100%': {
		transform: 'rotate(360deg)',
	},
});
export const circular = style({
	animationDuration: '2s',
	animationIterationCount: 'infinite',
	animationName: spinAnim,
	animationTimingFunction: 'linear',
	transformOrigin: 'center center',
});

const stokeAnim = keyframes({
	'0%': {
		strokeDasharray: '1, 200',
		strokeDashoffset: 0,
	},

	'100%': {
		strokeDasharray: '89, 200',
		strokeDashoffset: '-124px',
	},

	'50%': {
		strokeDasharray: '89, 200',
		strokeDashoffset: '-35px',
	},
});
export const path = style({
	animationDuration: '1.5s',
	animationIterationCount: 'infinite',
	animationName: stokeAnim,
	animationTimingFunction: vars.animation.easing.standard,
	strokeDasharray: '1, 200',
	strokeDashoffset: 0,
	strokeLinecap: 'round',
});

export const colours = styleVariants({
	danger: {
		stroke: vars.typography.colour.danger,
	},
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
});

export const size = {
	small: styleVariants({
		circular: {
			height: vars.space['3'],
			width: vars.space['3'],
		},

		path: {
			strokeWidth: '4px',
		},
	}),
	medium: styleVariants({
		circular: {
			height: vars.space['4'],
			width: vars.space['4'],
		},

		path: {
			strokeWidth: '5px',
		},
	}),
	large: styleVariants({
		circular: {
			height: vars.space['6'],
			width: vars.space['6'],
		},

		path: {
			strokeWidth: '6px',
		},
	}),
};
