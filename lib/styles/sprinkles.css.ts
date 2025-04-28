/* eslint-disable sonarjs/no-duplicate-string */
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { breakpoints } from '../themes/makeTheme';
import { overdriveTokens as tokens } from '../themes/theme.css';

const { space } = tokens;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { none, ...spaceWithoutNone } = space;

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

// --- Base sprinkles (non-responsive)
const baseProperties = defineProperties({
	properties: {
		// Borders
		borderRadius: tokens.border.radius,
		borderColor: { ...tokens.color.surface, ...tokens.color.interactive },
		borderBottomColour: tokens.border.colours,
		borderLeftColour: tokens.border.colours,
		borderRightColour: tokens.border.colours,
		borderTopColour: tokens.border.colours,
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
		colour: {
			...intentForegroundColours,
			...tokens.colours.gamut,
			...tokens.colours.foreground,
		},
		backgroundColor: tokens.color.surface,
		backgroundColour: {
			...intentBackgroundColoursStandard,
			...tokens.colours.background,
			...tokens.colours.gamut,
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
		borderColour: [
			'borderBottomColour',
			'borderLeftColour',
			'borderRightColour',
			'borderTopColour',
		],
		borderWidth: [
			'borderBottomWidth',
			'borderLeftWidth',
			'borderRightWidth',
			'borderLeftWidth',
		],
		border: [
			'borderBottomStyle',
			'borderLeftStyle',
			'borderRightStyle',
			'borderTopStyle',
		],
	},
});

export const sprinkles = createSprinkles(baseProperties);
export type Sprinkles = Parameters<typeof sprinkles>[0];

// --- Responsive sprinkles
const responsiveConditions = {
	mobile: {},
	tablet: { '@media': `screen and (min-width: ${breakpoints.tablet})` },
	desktop: { '@media': `screen and (min-width: ${breakpoints.desktop})` },
	largeDesktop: {
		'@media': `screen and (min-width: ${breakpoints.largeDesktop})`,
	},
};

const responsiveProperties = defineProperties({
	conditions: responsiveConditions,
	defaultCondition: 'mobile',
	responsiveArray: ['mobile', 'tablet', 'desktop', 'largeDesktop'],
	properties: {
		display: [
			'none',
			'block',
			'flex',
			'grid',
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
			full: '100%',
			auto: 'auto',
		},
		width: {
			...spaceWithoutNone,
			full: '100%',
			auto: 'auto',
		},
		gap: space,
		// Alignment
		alignItems: ['flex-start', 'center', 'flex-end', 'baseline'],
		justifyContent: [
			'flex-start',
			'center',
			'flex-end',
			'space-around',
			'space-between',
			'space-evenly',
		],
		alignContent: [
			'flex-start',
			'center',
			'flex-end',
			'space-around',
			'space-between',
			'space-evenly',
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
		// Padding
		paddingBottom: tokens.space,
		paddingLeft: tokens.space,
		paddingRight: tokens.space,
		paddingTop: tokens.space,
		// Margin
		marginBottom: tokens.space,
		marginLeft: tokens.space,
		marginRight: tokens.space,
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
