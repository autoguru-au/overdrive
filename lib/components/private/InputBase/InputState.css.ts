import { style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../../themes/theme.css';

const activeColour = style({
	color: vars.color.foreground.primary,
});

const activeBorderColour = style({
	color: vars.color.foreground.primary,
});

export const disabled = styleVariants({
	borderColour: {
		borderColor: vars.border.colours.gray,
	},
	colour: {
		color: vars.color.gamut.gray['200'],
	},
});

export const natural = {
	default: {
		colour: style({
			color: vars.color.foreground.tertiaryInactive,
		}),
		borderColour: style({
			borderColor: vars.border.colours.gray,
		}),
	},
	hover: {
		colour: activeColour,
		borderColour: activeBorderColour,
	},
	active: {
		colour: activeColour,
		borderColour: activeBorderColour,
	},
};

export const active = {
	default: {
		colour: activeColour,
		borderColour: activeBorderColour,
	},
	hover: {
		colour: activeColour,
		borderColour: activeBorderColour,
	},
	active: {
		colour: activeColour,
		borderColour: activeBorderColour,
	},
};

export const success = {
	default: {
		colour: style({ color: vars.color.success.foreground }),
		borderColour: style({ borderColor: vars.color.success.foreground }),
	},
	hover: {
		colour: style({
			color: vars.color.success.foreground,
		}),
		borderColour: style({
			borderColor: vars.color.success.foreground,
		}),
	},
	active: {
		colour: style({
			color: vars.color.success.foreground,
		}),
		borderColour: style({
			borderColor: vars.color.success.foreground,
		}),
	},
};

export const error = {
	default: {
		colour: style({
			color: vars.color.alert.foreground,
		}),
		borderColour: style({
			borderColor: vars.color.alert.foreground,
		}),
	},
	hover: {
		colour: style({ color: vars.color.alert.foreground }),
		borderColour: style({ borderColor: vars.color.alert.foreground }),
	},
	active: {
		colour: style({
			color: vars.color.alert.foreground,
		}),
		borderColour: style({
			borderColor: vars.color.alert.foreground,
		}),
	},
};
