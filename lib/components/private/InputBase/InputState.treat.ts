import { style, styleMap, styleTree } from 'treat';

const activeColour = style((theme) => ({ color: theme.colours.gamut.blue600 }));

const activeBorderColour = style((theme) => ({
	borderColor: theme.colours.gamut.blue600,
}));

export const disabled = styleMap((theme) => ({
	colour: {
		color: theme.colours.gamut.gray300,
	},
	borderColour: {
		borderColor: theme.colours.gamut.gray200,
	},
}));

export const natural = styleTree((theme, styleNode) => ({
	default: {
		colour: styleNode({ color: theme.colours.gamut.gray400 }),
		borderColour: styleNode({ borderColor: theme.colours.gamut.gray300 }),
	},
	hover: {
		colour: activeColour,
		borderColour: activeBorderColour,
	},
	active: {
		colour: activeColour,
		borderColour: activeBorderColour,
	},
}));

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

export const success = styleTree((theme, styleNode) => ({
	default: {
		colour: styleNode({ color: theme.colours.gamut.green600 }),
		borderColour: styleNode({ borderColor: theme.colours.gamut.green600 }),
	},
	hover: {
		colour: styleNode({ color: theme.colours.gamut.green500 }),
		borderColour: styleNode({ borderColor: theme.colours.gamut.green500 }),
	},
	active: {
		colour: styleNode({ color: theme.colours.gamut.green700 }),
		borderColour: styleNode({ borderColor: theme.colours.gamut.green700 }),
	},
}));

export const error = styleTree((theme, styleNode) => ({
	default: {
		colour: styleNode({ color: theme.colours.gamut.red700 }),
		borderColour: styleNode({ borderColor: theme.colours.gamut.red700 }),
	},
	hover: {
		colour: styleNode({ color: theme.colours.gamut.red600 }),
		borderColour: styleNode({ borderColor: theme.colours.gamut.red600 }),
	},
	active: {
		colour: styleNode({ color: theme.colours.gamut.red800 }),
		borderColour: styleNode({ borderColor: theme.colours.gamut.red800 }),
	},
}));
