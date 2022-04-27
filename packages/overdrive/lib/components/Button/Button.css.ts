import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../themes/base/vars.css';

export const root = style({
	transitionDelay: '0s',
	transitionTimingFunction: vars.animation.easing.standard,
	transitionDuration: '0.1s',
	transitionProperty:
		'color, background-color, border-color, box-shadow, transform',
	transform: 'translate3d(0, 0, 1) scale(1)',
	willChange: 'transform',
});

export const body = style({
	display: 'grid',
	gridAutoFlow: 'column dense',
	gridGap: vars.space['1'],
});

export const hiddenContent = style({
	visibility: 'hidden',
});
export const loading = style({
	cursor: 'not-allowed',
});

export const enabled = style({
	cursor: 'pointer',
});

export const disabled = style({
	cursor: 'not-allowed',
	opacity: '0.3',
});

export const spinner = style({
	margin: '0 auto',
});

const smallHeight = '36px';

export const size = {
	small: styleVariants({
		default: {
			minWidth: vars.space['8'],
			height: smallHeight,
			gridGap: vars.space['1'],
		},
		rounded: {
			minWidth: smallHeight,
		},
		iconOnly: {
			width: smallHeight,
		},
	}),
	medium: styleVariants({
		default: {
			minWidth: vars.space['9'],
			height: vars.space['8'],
			gridGap: vars.space['2'],
		},
		rounded: {
			minWidth: vars.space['8'],
		},
		iconOnly: {
			width: vars.space['8'],
		},
	}),
};
export const variant = {
	primary: style({
		color: vars.colours.intent.primary.foreground,
		backgroundColor: vars.colours.intent.primary.background.standard,
		boxShadow: `inset 0 0 0 1px ${vars.colours.intent.primary.border}, ${vars.elevation['2']}`,
	}),
	secondary: style({
		color: vars.colours.intent.secondary.foreground,
		backgroundColor: vars.colours.intent.secondary.background.standard,
		boxShadow: `inset 0 0 0 1px ${vars.colours.intent.secondary.border}, ${vars.elevation['2']}`,
	}),
	danger: style({
		backgroundColor: vars.colours.intent.danger.background.standard,
		color: vars.colours.intent.danger.foreground,
		boxShadow: `inset 0 0 0 1px ${vars.colours.intent.danger.border}, ${vars.elevation['2']}`,
	}),
};

export const defaultStates = {
	primary: style({
		':hover': {
			color: vars.colours.intent.primary.foreground,
			backgroundColor: vars.colours.intent.primary.background.strong,
			boxShadow: `inset 0 0 0 1px ${vars.colours.intent.primary.border}, ${vars.elevation['3']}`,
		},
		':active': {
			transform: 'scale(0.97)',
			boxShadow: `inset 0 0 0 1px ${vars.colours.intent.primary.border}, ${vars.elevation['1']}`,
			color: vars.colours.intent.primary.foreground,
			backgroundColor: vars.colours.intent.primary.background.strong,
		},
	}),
	secondary: style({
		':hover': {
			color: vars.colours.intent.secondary.foreground,
			backgroundColor: vars.colours.intent.secondary.background.strong,
			boxShadow: `inset 0 0 0 1px ${vars.colours.intent.secondary.border}, ${vars.elevation['3']}`,
		},
		':active': {
			transform: 'scale(0.97)',
			color: vars.colours.intent.secondary.foreground,
			backgroundColor: vars.colours.intent.secondary.background.strong,
			boxShadow: `inset 0 0 0 1px ${vars.colours.intent.secondary.border}, ${vars.elevation['1']}`,
		},
	}),
	danger: style({
		':hover': {
			color: vars.colours.intent.danger.foreground,
			backgroundColor: vars.colours.intent.danger.background.strong,
			boxShadow: `inset 0 0 0 1px ${vars.colours.intent.danger.border}, ${vars.elevation['3']}`,
		},
		':active': {
			transform: 'scale(0.97)',
			color: vars.colours.intent.danger.foreground,
			backgroundColor: vars.colours.intent.danger.background.strong,
			boxShadow: `inset 0 0 0 1px ${vars.colours.intent.danger.border}, ${vars.elevation['1']}`,
		},
	}),
};

export const minimal = {
	defaults: style({
		color: vars.typography.colour.neutral,
	}),
	noneRounded: style({
		minWidth: '50px',
	}),
};

export const minimalStates = {
	primary: style({
		':hover': {
			color: vars.colours.intent.primary.background.strong,
			backgroundColor: vars.colours.intent.primary.background.mild,
			boxShadow: 'none',
		},
		':active': {
			color: vars.colours.intent.primary.background.strong,
			backgroundColor: vars.colours.intent.primary.background.mild,
			boxShadow: 'none',
		},
	}),
	secondary: style({
		':hover': {
			color: vars.typography.colour.secondary,
			backgroundColor: vars.colours.intent.secondary.background.strong,
			boxShadow: 'none',
		},
		':active': {
			color: vars.typography.colour.secondary,
			backgroundColor: vars.colours.intent.secondary.background.strong,
			boxShadow: 'none',
		},
	}),
	danger: style({
		':hover': {
			color: vars.colours.intent.danger.background.strong,
			backgroundColor: vars.colours.intent.danger.background.mild,
			boxShadow: 'none',
		},
		':active': {
			color: vars.colours.intent.danger.background.strong,
			backgroundColor: vars.colours.intent.danger.background.mild,
			boxShadow: 'none',
		},
	}),
};
