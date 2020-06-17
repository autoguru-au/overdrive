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

export const height = styleMap({
	full: {
		height: '100%',
	},
});

export const position = styleMap(
	mapTokenToProperty(
		{
			absolute: 'absolute',
			fixed: 'fixed',
			relative: 'relative',
		},
		'position',
	),
);

export const overflow = styleMap(
	mapTokenToProperty(
		{
			hidden: 'hidden',
			scroll: 'scroll',
			visible: 'visible',
			auto: 'auto',
		},
		'overflow',
	),
);

export const display = styleMap(
	mapTokenToProperty(
		{
			block: 'block',
			flex: 'flex',
			inline: 'inline',
			inlineBlock: 'inline-block',
			none: 'none',
		},
		'display',
	),
);

export const userSelect = styleMap({
	none: { userSelect: 'none' },
});

// Flex things

export const alignItems = makeResponsiveStyle(
	() => ({
		flexStart: 'flex-start',
		center: 'center',
		flexEnd: 'flex-end',
	}),
	'alignItems',
);

export const flexDirection = makeResponsiveStyle(
	() => ({
		row: 'row',
		rowReverse: 'row-reverse',
		column: 'column',
		columnReverse: 'column-reverse',
	}),
	'flexDirection',
);

export const flexGrow = styleMap(
	mapTokenToProperty(
		{
			0: 0,
			1: 1,
		},
		'flexGrow',
	),
);

export const flexShrink = styleMap(
	mapTokenToProperty(
		{
			0: 0,
		},
		'flexShrink',
	),
);

export const flexWrap = styleMap(
	mapTokenToProperty(
		{
			wrap: 'wrap',
			nowrap: 'nowrap',
		},
		'flexWrap',
	),
);

export const justifyContent = makeResponsiveStyle(
	() => ({
		flexStart: 'flex-start',
		center: 'center',
		flexEnd: 'flex-end',
		spaceBetween: 'space-between',
	}),
	'justifyContent',
);
