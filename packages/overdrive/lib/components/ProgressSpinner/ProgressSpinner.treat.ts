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

export const colours = styleMap((theme) => ({
	light: {
		stroke: 'white',
	},
	primary: {
		stroke: theme.colours.gamut.green600,
	},
	secondary: {
		stroke: theme.colours.gamut.gray700,
	},
	warning: {
		stroke: theme.colours.gamut.yellow900,
	},
	danger: {
		stroke: theme.colours.gamut.red600,
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
