import { style, styleMap } from 'treat';

export const circular = style({
	transformOrigin: 'center center',
	animationDuration: '2s',
	animationTimingFunction: 'linear',
	animationIterationCount: 'infinite',
	'@keyframes': {
		'100%': {
			transform: 'rotate(360deg)',
		},
	},
});

export const path = style((theme) => ({
	strokeDasharray: '1, 200',
	strokeDashoffset: 0,
	strokeLinecap: 'round',
	animationDuration: '1.5s',
	animationTimingFunction: theme.animation.easing.standard,
	animationIterationCount: 'infinite',

	'@keyframes': {
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
	},
}));

export const colours = styleMap(({ typography }) => ({
	light: {
		stroke: typography.colour.white,
	},
	primary: {
		stroke: typography.colour.primary,
	},
	secondary: {
		stroke: typography.colour.secondary,
	},
	warning: {
		stroke: typography.colour.warning,
	},
	danger: {
		stroke: typography.colour.danger,
	},
}));

export const size = {
	small: styleMap((theme) => ({
		circular: {
			width: theme.space['3'],
			height: theme.space['3'],
		},

		path: {
			strokeWidth: '4px',
		},
	})),
	medium: styleMap((theme) => ({
		circular: {
			width: theme.space['4'],
			height: theme.space['4'],
		},

		path: {
			strokeWidth: '5px',
		},
	})),
	large: styleMap((theme) => ({
		circular: {
			width: theme.space['6'],
			height: theme.space['6'],
		},

		path: {
			strokeWidth: '6px',
		},
	})),
};
