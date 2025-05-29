/* eslint-disable sonarjs/no-duplicate-string */
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { breakpoints } from '../themes/makeTheme';
import { overdriveTokens as tokens } from '../themes/theme.css';

import { cssLayerUtil } from './layers.css';
import { gapVar } from './vars.css';

const { space } = tokens;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { none, ...spaceWithoutNone } = space;

const flexAlignments = {
	flexEnd: 'flex-end',
	'flex-end': 'flex-end',
	flexStart: 'flex-start',
	'flex-start': 'flex-start',
	center: 'center',
	centre: 'center',
	stretch: 'stretch',
};

const flexAlignmentsWithSpace = {
	...flexAlignments,
	spaceAround: 'space-around',
	'space-around': 'space-around',
	spaceBetween: 'space-between',
	'space-between': 'space-between',
	spaceEvenely: 'space-evenly',
	'space-evenely': 'space-evenly',
};

// --- transformations over the tokens to make ready for sprinkles

const fontSizes = Object.entries(tokens.typography.size).reduce(
	(sizes, [scale, fontSize]) => {
		sizes[scale] = fontSize.fontSize;
		return sizes;
	},
	{},
);

const lineHeights = Object.entries(tokens.typography.size).reduce(
	(sizes, [scale, lineHeight]) => {
		sizes[scale] = lineHeight.lineHeight;
		return sizes;
	},
	{},
);

const intentForegroundColours = Object.entries(tokens.colours.intent).reduce(
	(acc, [intent, { foreground }]) => {
		acc[intent] = foreground;
		return acc;
	},
	{} as Record<keyof typeof tokens.colours.intent, string>,
);

const intentBackgroundColoursStandard = Object.entries(
	tokens.colours.intent,
).reduce(
	(acc, [intent, { background }]) => {
		acc[intent] = background.standard;
		return acc;
	},
	{} as Record<keyof typeof tokens.colours.intent, string>,
);

const intentBorderColours = Object.entries(tokens.colours.intent).reduce(
	(acc, [intent, { border }]) => {
		acc[intent] = border;
		return acc;
	},
	{} as Record<keyof typeof tokens.colours.intent, string>,
);

const borderColors = {
	default: tokens.color.interactive.border,
	muted: tokens.color.interactive.borderMuted,
	disabled: tokens.color.interactive.borderDisabled,
	...tokens.color.surface,
};

const gapSizesWithVar = Object.entries(space).reduce(
	(acc, [key, value]) => {
		acc[key] = {
			vars: { [gapVar]: value },
			gap: value,
		};
		return acc;
	},
	{} as Record<
		keyof typeof space,
		{ vars: Record<string, string>; gap: string }
	>,
);

export const valueArrays = {
	borderColors: Object.keys(borderColors),
	fontSizes: Object.keys(fontSizes),
	gapSizesWithVar: Object.keys(gapSizesWithVar),
	intentBackgroundColoursStandard: Object.keys(
		intentBackgroundColoursStandard,
	),
	intentBorderColours: Object.keys(intentBackgroundColoursStandard),
	intentForegroundColours: Object.keys(
		intentForegroundColours,
	) as SprinklesLegacyColours['colour'][],
	lineHeights: Object.keys(lineHeights),
};

// --- Base sprinkles (non-responsive)
const baseProperties = defineProperties({
	'@layer': cssLayerUtil,
	properties: {
		// Borders
		borderBottomColor: borderColors,
		borderLeftColor: borderColors,
		borderRightColor: borderColors,
		borderTopColor: borderColors,
		borderLeftStyle: ['none', 'solid'],
		borderBottomStyle: ['none', 'solid'],
		borderRightStyle: ['none', 'solid'],
		borderTopStyle: ['none', 'solid'],
		// Color
		color: tokens.color.content,
		backgroundColor: {
			...tokens.color.surface,
			transparent: 'transparent',
		},
		opacity: [0, '1', '0'],
		// Typography
		fontSize: fontSizes,
		lineHeight: lineHeights,
		fontWeight: tokens.typography.fontWeight,
		textWrap: ['balance', 'pretty', 'stable', 'nowrap'],
		// Shadows
		boxShadow: tokens.elevation,
		// Misc
		pointerEvents: ['auto', 'none'],
		userSelect: ['auto', 'text', 'none'],
		useVar: {
			gap: {
				gap: gapVar,
			},
		},
	},
	shorthands: {
		text: ['fontSize', 'lineHeight'],
		bg: ['backgroundColor'],
		fg: ['color'],
		borderColor: [
			'borderBottomColor',
			'borderLeftColor',
			'borderRightColor',
			'borderTopColor',
		],
		borderStyle: [
			'borderBottomStyle',
			'borderLeftStyle',
			'borderRightStyle',
			'borderTopStyle',
		],
	},
});

// --- Legacy sprinkles with old colour tokens (non-responsive)
const borderColours = {
	...tokens.border.colours,
	...intentBorderColours,
};
const legacyColourProperties = defineProperties({
	'@layer': cssLayerUtil,
	properties: {
		backgroundColor: {
			...intentBackgroundColoursStandard,
			...tokens.colours.gamut,
			transparent: 'transparent',
		},
		borderBottomColor: borderColours,
		borderLeftColor: borderColours,
		borderRightColor: borderColours,
		borderTopColor: borderColours,
		color: {
			...tokens.colours.foreground,
			...tokens.typography.colour,
			...intentForegroundColours,
			unset: 'unset',
			white: tokens.colours.gamut.white,
		},
	},
	// use the shorthands to remap 'color' to 'colour'
	shorthands: {
		backgroundColour: ['backgroundColor'],
		borderColour: [
			'borderBottomColor',
			'borderLeftColor',
			'borderRightColor',
			'borderTopColor',
		],
		borderColourX: ['borderLeftColor', 'borderRightColor'],
		borderColourY: ['borderBottomColor', 'borderTopColor'],
		borderBottomColour: ['borderBottomColor'],
		borderLeftColour: ['borderLeftColor'],
		borderRightColour: ['borderRightColor'],
		borderTopColour: ['borderTopColor'],
		borderColourBottom: ['borderBottomColor'],
		borderColourLeft: ['borderLeftColor'],
		borderColourRight: ['borderRightColor'],
		borderColourTop: ['borderTopColor'],
		colour: ['color'],
	},
});

export const sprinklesLegacyColours = createSprinkles(legacyColourProperties);
// filter out the spellings of 'color' from the type as well
export type SprinklesLegacyColours = Omit<
	Parameters<typeof sprinklesLegacyColours>[0],
	| 'backgroundColor'
	| 'borderColor'
	| 'borderBottomColor'
	| 'borderLeftColor'
	| 'borderRightColor'
	| 'borderTopColor'
	| 'color'
>;

const legacyTextProperties = defineProperties({
	'@layer': cssLayerUtil,
	properties: {
		color: {
			...tokens.typography.colour,
			unset: 'unset',
		},
	},
	shorthands: {
		colour: ['color'],
	},
});

export const sprinklesLegacyText = createSprinkles(legacyTextProperties);
export type SprinklesLegacyText = Omit<
	Parameters<typeof sprinklesLegacyText>[0],
	'color'
>;

// --- Responsive sprinkles
export const responsiveConditions = {
	mobile: {},
	tablet: { '@media': `screen and (min-width: ${breakpoints.tablet})` },
	desktop: { '@media': `screen and (min-width: ${breakpoints.desktop})` },
	largeDesktop: {
		'@media': `screen and (min-width: ${breakpoints.largeDesktop})`,
	},
};

const responsiveProperties = defineProperties({
	'@layer': cssLayerUtil,
	conditions: responsiveConditions,
	defaultCondition: 'mobile',
	responsiveArray: ['mobile', 'tablet', 'desktop', 'largeDesktop'],
	properties: {
		display: {
			none: 'none',
			block: 'block',
			contents: 'contents',
			flex: 'flex',
			grid: 'grid',
			inline: 'inline',
			inlineBlock: 'inline-block',
			'inline-block': 'inline-block',
			inlineFlex: 'inline-flex',
			'inline-flex': 'inline-flex',
		},
		overflow: ['auto', 'hidden', 'visible'],
		overflowX: ['auto', 'scroll', 'hidden'],
		overflowY: ['auto', 'scroll', 'hidden'],
		position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
		textAlign: {
			left: 'left',
			center: 'center',
			centre: 'center',
			right: 'right',
		},
		// Borders
		borderRadius: tokens.border.radius,
		borderLeftWidth: tokens.border.width,
		borderBottomWidth: tokens.border.width,
		borderRightWidth: tokens.border.width,
		borderTopWidth: tokens.border.width,
		// Size
		height: {
			...spaceWithoutNone,
			'fit-content': 'fit-content',
			'max-content': 'max-content',
			'min-content': 'max-content',
			full: '100%',
			auto: 'auto',
		},
		width: {
			...spaceWithoutNone,
			'fit-content': 'fit-content',
			'max-content': 'max-content',
			'min-content': 'min-content',
			full: '100%',
			auto: 'auto',
		},
		maxWidth: {
			...tokens.contentWidth,
			'fit-content': 'fit-content',
			'max-content': 'max-content',
		},
		minWidth: ['auto', 'fit-content'],
		gap: gapSizesWithVar,
		columnGap: space,
		rowGap: space,
		// Alignment
		alignItems: {
			...flexAlignments,
			baseline: 'baseline',
		},
		justifyContent: flexAlignmentsWithSpace,
		alignContent: flexAlignmentsWithSpace,
		alignSelf: ['flex-start', 'center', 'flex-end', 'stretch'],
		justifySelf: ['flex-start', 'center', 'flex-end'],
		// Flexbox
		flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
		flexGrow: [0, '0', '1'],
		flexShrink: [0, '0', '1'],
		flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
		order: [0, '0', '1', '2', '3', '4'],
		// Grid
		gridAutoColumns: ['auto', '1fr', 'min-content', 'max-content'],
		gridAutoRows: ['auto', '1fr'],
		gridAutoFlow: ['row', 'column', 'row dense', 'column dense'],
		gridColumns: ['1', 'auto'],
		// Padding
		paddingBottom: tokens.space,
		paddingLeft: tokens.space,
		paddingRight: tokens.space,
		paddingTop: tokens.space,
		// Margin
		marginBottom: tokens.space,
		marginLeft: { ...tokens.space, auto: 'auto' },
		marginRight: { ...tokens.space, auto: 'auto' },
		marginTop: tokens.space,
	},
	shorthands: {
		borderWidth: [
			'borderBottomWidth',
			'borderLeftWidth',
			'borderRightWidth',
			'borderTopWidth',
		],
		borderWidthX: ['borderLeftWidth', 'borderRightWidth'],
		borderWidthY: ['borderBottomWidth', 'borderTopWidth'],
		borderWidthBottom: ['borderBottomWidth'],
		borderWidthLeft: ['borderLeftWidth'],
		borderWidthRight: ['borderRightWidth'],
		borderWidthTop: ['borderTopWidth'],
		placeItems: ['justifyContent', 'alignItems'],
		size: ['width', 'height'],
		padding: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
		p: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
		paddingX: ['paddingLeft', 'paddingRight'],
		px: ['paddingLeft', 'paddingRight'],
		paddingY: ['paddingTop', 'paddingBottom'],
		py: ['paddingTop', 'paddingBottom'],
		pt: ['paddingTop'],
		pr: ['paddingRight'],
		pb: ['paddingBottom'],
		pl: ['paddingLeft'],
		margin: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
		m: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
		marginX: ['marginLeft', 'marginRight'],
		mx: ['marginLeft', 'marginRight'],
		marginY: ['marginTop', 'marginBottom'],
		my: ['marginTop', 'marginBottom'],
		mt: ['marginTop'],
		mr: ['marginRight'],
		mb: ['marginBottom'],
		ml: ['marginLeft'],
	},
});

export const sprinkles = createSprinkles(baseProperties, responsiveProperties);
export type Sprinkles = Parameters<typeof sprinkles>[0];
