import { style, styleMap } from 'treat';

import { makeResponsiveStyle, mapTokenToProperty } from '../../utils';

export const padding = {
	top: makeResponsiveStyle((theme) => theme.space, 'paddingTop'),
	right: makeResponsiveStyle((theme) => theme.space, 'paddingRight'),
	bottom: makeResponsiveStyle((theme) => theme.space, 'paddingBottom'),
	left: makeResponsiveStyle((theme) => theme.space, 'paddingLeft'),
};

export const margin = {
	top: makeResponsiveStyle((theme) => theme.space, 'marginTop'),
	right: makeResponsiveStyle((theme) => theme.space, 'marginRight'),
	bottom: makeResponsiveStyle((theme) => theme.space, 'marginBottom'),
	left: makeResponsiveStyle((theme) => theme.space, 'marginLeft'),
};

export const boxShadow = makeResponsiveStyle(
	(theme) => theme.elevation,
	'boxShadow',
);

export const display = styleMap(
	mapTokenToProperty(
		{ block: 'block', 'inline-block': 'inline-block' },
		'display',
	),
);

export const border = {
	style: style({
		borderStyle: 'solid',
	}),
	colour: {
		top: styleMap(({ border }) =>
			mapTokenToProperty(border.colours, 'borderTopColor'),
		),
		right: styleMap(({ border }) =>
			mapTokenToProperty(border.colours, 'borderRightColor'),
		),
		bottom: styleMap(({ border }) =>
			mapTokenToProperty(border.colours, 'borderBottomColor'),
		),
		left: styleMap(({ border }) =>
			mapTokenToProperty(border.colours, 'borderLeftColor'),
		),
	},
	width: {
		top: makeResponsiveStyle(
			({ border }) => border.width,
			'borderTopWidth',
		),
		right: makeResponsiveStyle(
			({ border }) => border.width,
			'borderRightWidth',
		),
		bottom: makeResponsiveStyle(
			({ border }) => border.width,
			'borderBottomWidth',
		),
		left: makeResponsiveStyle(
			({ border }) => border.width,
			'borderLeftWidth',
		),
	},
};

export const borderRadius = makeResponsiveStyle(
	({ border }) => border.radius,
	'borderRadius',
);

export const backgroundColours = styleMap((theme) =>
	mapTokenToProperty(
		{
			...theme.colours.gamut,
			transparent: 'transparent',
		},
		'backgroundColor',
	),
);

export const width = styleMap({
	full: {
		width: '100%',
	},
});

const positionRules = {
	absolute: 'absolute',
	fixed: 'fixed',
	relative: 'relative',
};

export const position = styleMap(mapTokenToProperty(positionRules, 'position'));
