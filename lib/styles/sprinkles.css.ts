/* eslint-disable sonarjs/no-duplicate-string */
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { breakpoints } from '../themes/makeTheme';
import { overdriveTokens as tokens } from '../themes/theme.css';

import { gapVar } from './vars.css';

const { space } = tokens;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { none, ...spaceWithoutNone } = space;

// --- transformations over the tokens to make ready for sprinkles

const fontSizes = Object.entries(tokens.typography.size).reduce(
	(sizes, [scale, fontSize]) => {
		sizes[scale] = fontSize;
		return sizes;
	},
	{},
);

const lineHeights = Object.entries(tokens.typography.size).reduce(
	(sizes, [scale, lineHeight]) => {
		sizes[scale] = lineHeight;
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

// --- Base sprinkles (non-responsive)
const baseProperties = defineProperties({
	properties: {
		// Borders
		borderRadius: tokens.border.radius,
		borderBottomColor: borderColors,
		borderLeftColor: borderColors,
		borderRightColor: borderColors,
		borderTopColor: borderColors,
		borderLeftWidth: tokens.border.width,
		borderBottomWidth: tokens.border.width,
		borderRightWidth: tokens.border.width,
		borderTopWidth: tokens.border.width,
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
		opacity: ['1', '0'],
		// Typography
		fontSize: fontSizes,
		lineHeight: lineHeights,
		fontWeight: tokens.typography.fontWeight,
		textAlign: ['left', 'center', 'right'],
		// Shadows
		boxShadow: tokens.elevation,
		// Misc
		pointerEvents: ['auto', 'none'],
		userSelect: ['auto', 'text', 'none'],
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
		borderWidth: [
			'borderBottomWidth',
			'borderLeftWidth',
			'borderRightWidth',
			'borderTopWidth',
		],
	},
});

export const sprinkles = createSprinkles(baseProperties);
export type Sprinkles = Parameters<typeof sprinkles>[0];

// --- Legacy sprinkles with old colour tokens (non-responsive)
const legacyColourProperties = defineProperties({
	properties: {
		backgroundColor: {
			...intentBackgroundColoursStandard,
			...tokens.colours.background,
			...tokens.colours.gamut,
			transparent: 'transparent',
		},
		borderBottomColor: tokens.border.colours,
		borderLeftColor: tokens.border.colours,
		borderRightColor: tokens.border.colours,
		borderTopColor: tokens.border.colours,
		color: {
			...intentForegroundColours,
			...tokens.colours.foreground,
			...tokens.typography.colour,
			...tokens.colours.gamut,
			unset: 'unset',
		},
	},
	// use the shorthands to remap 'color' to 'colour'
	shorthands: {
		backgroundColour: ['backgroundColor'],
		borderBottomColour: ['borderBottomColor'],
		borderLeftColour: ['borderLeftColor'],
		borderRightColour: ['borderRightColor'],
		borderTopColour: ['borderTopColor'],
		borderColour: [
			'borderBottomColor',
			'borderLeftColor',
			'borderRightColor',
			'borderTopColor',
		],
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

// --- Responsive sprinkles
const responsiveConditions = {
	mobile: {},
	tablet: { '@media': `screen and (min-width: ${breakpoints.tablet})` },
	desktop: { '@media': `screen and (min-width: ${breakpoints.desktop})` },
	largeDesktop: {
		'@media': `screen and (min-width: ${breakpoints.largeDesktop})`,
	},
};

export const totalGridColumns = 12; // chosen to be divisible by 2, 3, 4

const responsiveProperties = defineProperties({
	conditions: responsiveConditions,
	defaultCondition: 'mobile',
	responsiveArray: ['mobile', 'tablet', 'desktop', 'largeDesktop'],
	properties: {
		display: [
			'none',
			'block',
			'contents',
			'flex',
			'grid',
			'inline',
			'inline-block',
			'inline-flex',
		],
		overflow: ['auto', 'hidden', 'visible'],
		overflowX: ['auto', 'scroll', 'hidden'],
		overflowY: ['auto', 'scroll', 'hidden'],
		position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
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
		maxWidth: ['fit-content', 'max-content'],
		minWidth: ['auto', 'fit-content'],
		gap: gapSizesWithVar,
		columnGap: space,
		rowGap: space,
		// Alignment
		alignItems: ['flex-start', 'center', 'flex-end', 'baseline', 'stretch'],
		justifyContent: [
			'flex-start',
			'center',
			'flex-end',
			'space-around',
			'space-between',
			'space-evenly',
			'stretch',
		],
		alignContent: [
			'flex-start',
			'center',
			'flex-end',
			'space-around',
			'space-between',
			'space-evenly',
			'stretch',
		],
		alignSelf: ['flex-start', 'center', 'flex-end', 'stretch'],
		justifySelf: ['flex-start', 'center', 'flex-end'],
		// Flexbox
		flexDirection: ['row', 'column'],
		flexGrow: [0, 1],
		flexShrink: [0, 1],
		flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
		order: [0, 1, 2, 3, 4],
		// Grid
		gridAutoColumns: ['auto', '1fr', 'min-content', 'max-content'],
		gridAutoRows: ['auto', '1fr'],
		gridAutoFlow: ['row', 'column', 'row dense', 'column dense'],
		gridTemplateColumns: {
			auto: 'auto',
			none: 'none',
		},
		gridTemplateRows: {
			auto: 'auto',
			none: 'none',
		},
		gridColumn: {
			'1/2': `span ${totalGridColumns / 2}`,
			'1/3': `span ${totalGridColumns / 3}`,
			'2/3': `span ${(totalGridColumns / 3) * 2}`,
			'1/4': `span ${totalGridColumns / 4}`,
			'3/4': `span ${(totalGridColumns / 4) * 3}`,
			'1/6': `span ${totalGridColumns / 6}`,
			'2/6': `span ${(totalGridColumns / 6) * 2}`,
			'3/6': `span ${(totalGridColumns / 6) * 3}`,
			'4/6': `span ${(totalGridColumns / 6) * 4}`,
			full: `span ${totalGridColumns}`,
			auto: 'auto',
		},
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
		gridColumns: ['gridTemplateColumns'],
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

export const sprinklesResponsive = createSprinkles(responsiveProperties);
export type SprinklesResponsive = Parameters<typeof sprinklesResponsive>[0];
