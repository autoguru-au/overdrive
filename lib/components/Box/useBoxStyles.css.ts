import { style, styleVariants } from '@vanilla-extract/css';

import {
	overdriveTokens as vars,
	type ThemeTokens as Tokens,
} from '../../themes/theme.css';
import { mapTokenToProperty } from '../../utils/mapTokenToProperty';
import { makeResponsiveStyle } from '../../utils/responsiveProps.css';

export const padding = {
	top: makeResponsiveStyle(vars.space, 'paddingTop'),
	right: makeResponsiveStyle(vars.space, 'paddingRight'),
	bottom: makeResponsiveStyle(vars.space, 'paddingBottom'),
	left: makeResponsiveStyle(vars.space, 'paddingLeft'),
};

export const margin = {
	top: makeResponsiveStyle(vars.space, 'marginTop'),
	right: makeResponsiveStyle(vars.space, 'marginRight'),
	bottom: makeResponsiveStyle(vars.space, 'marginBottom'),
	left: makeResponsiveStyle(vars.space, 'marginLeft'),
};

export const boxShadow = makeResponsiveStyle(vars.elevation, 'boxShadow');
type IntentColours = keyof Tokens['colours']['intent'];
type BorderColours = keyof Tokens['border']['colours'];
type GamutColours = keyof Tokens['colours']['gamut'];

const borderColours: Record<
	IntentColours | BorderColours,
	ReturnType<typeof style>
> = {
	...vars.border.colours,
	...(Object.fromEntries(
		Object.entries(vars.colours.intent).map((entry) => [
			entry[0],
			entry[1].border,
		]),
	) as Record<IntentColours, ReturnType<typeof style>>),
};
const backgroundColourTokens: Record<
	IntentColours | GamutColours | 'transparent',
	ReturnType<typeof style>
> = {
	...vars.colours.gamut,
	...(Object.fromEntries(
		Object.entries(vars.colours.intent).map((entry) => [
			entry[0],
			entry[1].background.standard,
		]),
	) as Record<IntentColours, ReturnType<typeof style>>),
	transparent: 'transparent',
};
const foregroundColourTokens: Record<
	IntentColours,
	ReturnType<typeof style>
> = Object.fromEntries(
	Object.entries(vars.colours.intent).map((entry) => [
		entry[0],
		entry[1].foreground,
	]),
) as Record<IntentColours, ReturnType<typeof style>>;

export const border = {
	style: style({
		borderStyle: 'solid',
	}),
	colour: {
		top: styleVariants(mapTokenToProperty(borderColours, 'borderTopColor')),
		right: styleVariants(
			mapTokenToProperty(borderColours, 'borderRightColor'),
		),
		bottom: styleVariants(
			mapTokenToProperty(borderColours, 'borderBottomColor'),
		),
		left: styleVariants(
			mapTokenToProperty(borderColours, 'borderLeftColor'),
		),
	},
	width: {
		top: makeResponsiveStyle(vars.border.width, 'borderTopWidth'),
		right: makeResponsiveStyle(vars.border.width, 'borderRightWidth'),
		bottom: makeResponsiveStyle(vars.border.width, 'borderBottomWidth'),
		left: makeResponsiveStyle(vars.border.width, 'borderLeftWidth'),
	},
};

export const borderRadius = makeResponsiveStyle(
	vars.border.radius,
	'borderRadius',
);

export const backgroundColours = styleVariants(
	mapTokenToProperty(backgroundColourTokens, 'backgroundColor'),
);

export const colours = styleVariants(
	mapTokenToProperty(foregroundColourTokens, 'color'),
);

export const width = styleVariants({
	full: {
		width: '100%',
	},
	none: {
		width: 'auto',
	},
});

export const height = styleVariants({
	full: {
		height: '100%',
	},
});

export const position = styleVariants(
	mapTokenToProperty(
		{
			absolute: 'absolute',
			fixed: 'fixed',
			relative: 'relative',
		},
		'position',
	),
);

export const textAlign = styleVariants(
	mapTokenToProperty(
		{
			left: 'left',
			center: 'center',
			right: 'right',
		},
		'textAlign',
	),
);

export const overflow = styleVariants(
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

export const display = styleVariants(
	mapTokenToProperty(
		{
			contents: 'contents',
			block: 'block',
			flex: 'flex',
			grid: 'grid',
			inlineFlex: 'inline-flex',
			inline: 'inline',
			inlineBlock: 'inline-block',
			none: 'none',
		},
		'display',
	),
);

export const opacity = styleVariants({
	0: { opacity: 0 },
	1: { opacity: 1 },
});

export const userSelect = styleVariants({
	none: { userSelect: 'none' },
});

// Flex things

export const order = makeResponsiveStyle(
	{
		0: '0',
		1: '1',
		2: '2',
	},
	'order',
);

export const alignItems = makeResponsiveStyle(
	{
		flexStart: 'flex-start',
		center: 'center',
		flexEnd: 'flex-end',
	},
	'alignItems',
);

export const flexDirection = makeResponsiveStyle(
	{
		row: 'row',
		rowReverse: 'row-reverse',
		column: 'column',
		columnReverse: 'column-reverse',
	},
	'flexDirection',
);

export const flexGrow = styleVariants(
	mapTokenToProperty(
		{
			0: 0,
			1: 1,
		},
		'flexGrow',
	),
);

export const flexShrink = styleVariants(
	mapTokenToProperty(
		{
			0: 0,
		},
		'flexShrink',
	),
);

export const flexWrap = styleVariants(
	mapTokenToProperty(
		{
			wrap: 'wrap',
			nowrap: 'nowrap',
		},
		'flexWrap',
	),
);

export const justifyContent = makeResponsiveStyle(
	{
		flexStart: 'flex-start',
		center: 'center',
		flexEnd: 'flex-end',
		spaceBetween: 'space-between',
		spaceAround: 'space-around',
	},
	'justifyContent',
);

export const pointerEvents = styleVariants({
	none: { pointerEvents: 'none' },
});
