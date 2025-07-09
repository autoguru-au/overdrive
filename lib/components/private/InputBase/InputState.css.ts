import { style, styleVariants } from '@vanilla-extract/css';

import { overdriveTokens as vars } from '../../../themes/theme.css';

const activeColour = style({
	color: vars.typography.colour.dark,
});

const activeBorderColour = style({
	color: vars.typography.colour.dark,
});

export const disabled = styleVariants({
	borderColour: {
		borderColor: vars.border.colours.gray,
	},
	colour: {
		color: vars.colours.gamut.gray200,
	},
});

export const natural = {
	default: {
		colour: style({
			color: vars.typography.colour.muted,
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
		colour: style({ color: vars.typography.colour.success }),
		borderColour: style({ borderColor: vars.typography.colour.success }),
	},
	hover: {
		colour: style({
			color: vars.typography.colour.success,
		}),
		borderColour: style({
			borderColor: vars.typography.colour.success,
		}),
	},
	active: {
		colour: style({
			color: vars.typography.colour.success,
		}),
		borderColour: style({
			borderColor: vars.typography.colour.success,
		}),
	},
};

export const error = {
	default: {
		colour: style({
			color: vars.typography.colour.danger,
		}),
		borderColour: style({
			borderColor: vars.typography.colour.danger,
		}),
	},
	hover: {
		colour: style({ color: vars.typography.colour.danger }),
		borderColour: style({ borderColor: vars.typography.colour.danger }),
	},
	active: {
		colour: style({
			color: vars.typography.colour.danger,
		}),
		borderColour: style({
			borderColor: vars.typography.colour.danger,
		}),
	},
};
