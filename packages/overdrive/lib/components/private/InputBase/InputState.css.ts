import { style, styleVariants } from '@vanilla-extract/css';

import { themeContractVars as vars } from '../../../themes/theme.css';

const activeColour = style({
	color: vars.typography.colour.information,
});

const activeBorderColour = style({
	color: vars.typography.colour.information,
});

export const disabled = styleVariants({
	colour: {
		color: vars.typography.colour.muted,
	},
	borderColour: {
		borderColor: vars.typography.colour.muted,
	},
});

export const natural = {
	default: {
		colour: style({
			color: vars.typography.colour.muted,
		}),
		borderColour: style({
			borderColor: vars.typography.colour.muted,
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
