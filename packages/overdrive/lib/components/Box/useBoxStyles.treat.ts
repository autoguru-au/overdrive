import { style, styleMap } from 'treat';

import { mapTokenToProperty_Legacy } from '../../utils/mapTokenToProperty_Legacy';
import { makeResponsiveStyle } from '../../utils/responsiveProps';

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
			mapTokenToProperty_Legacy(border.colours, 'borderTopColor'),
		),
		right: styleMap(({ border }) =>
			mapTokenToProperty_Legacy(border.colours, 'borderRightColor'),
		),
		bottom: styleMap(({ border }) =>
			mapTokenToProperty_Legacy(border.colours, 'borderBottomColor'),
		),
		left: styleMap(({ border }) =>
			mapTokenToProperty_Legacy(border.colours, 'borderLeftColor'),
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
	mapTokenToProperty_Legacy(
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
	mapTokenToProperty_Legacy(
		{
			absolute: 'absolute',
			fixed: 'fixed',
			relative: 'relative',
		},
		'position',
	),
);

export const textAlign = styleMap(
	mapTokenToProperty_Legacy(
		{
			left: 'left',
			center: 'center',
			right: 'right',
		},
		'textAlign',
	),
);

export const overflow = styleMap(
	mapTokenToProperty_Legacy(
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
	mapTokenToProperty_Legacy(
		{
			contents: 'contents',
			block: 'block',
			flex: 'flex',
			inlineFlex: 'inline-flex',
			inline: 'inline',
			inlineBlock: 'inline-block',
			none: 'none',
		},
		'display',
	),
);

export const opacity = styleMap({
	0: { opacity: 0 },
	1: { opacity: 1 },
});

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
	mapTokenToProperty_Legacy(
		{
			0: 0,
			1: 1,
		},
		'flexGrow',
	),
);

export const flexShrink = styleMap(
	mapTokenToProperty_Legacy(
		{
			0: 0,
		},
		'flexShrink',
	),
);

export const flexWrap = styleMap(
	mapTokenToProperty_Legacy(
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

export const pointerEvents = styleMap({
	none: { pointerEvents: 'none' },
});
