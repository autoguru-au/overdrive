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

const intentBackgroundColoursStandard = {
	primary: tokens.colours.intent.primary.background,
	secondary: tokens.colours.intent.secondary.background,
	brand: tokens.colours.intent.brand.background,
	shine: tokens.colours.intent.shine.background,
	danger: tokens.colours.intent.danger.background,
	warning: tokens.colours.intent.warning.background,
	neutral: tokens.colours.intent.neutral.background,
	success: tokens.colours.intent.success.background,
	information: tokens.colours.intent.information.background,
};

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
		colour: { ...tokens.colours.gamut, ...tokens.colours.foreground },
		backgroundColor: tokens.color.surface,
		backgroundColour: {
			...tokens.colours.background,
			...intentBackgroundColoursStandard,
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
/**
 * Typeguard function for base sprinkles (non-responsive) props
 */
export const isSprinklesProperty = (key: string): key is keyof Sprinkles => {
	return Boolean(sprinkles.properties[key]);
};

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
/**
 * Typeguard function for responsive sprinkles  props
 */
export const isSprinklesResponsiveProperty = (
	key: string,
): key is keyof SprinklesResponsive => {
	return Boolean(sprinklesResponsive.properties[key]);
};

/**
 * Filters and separates sprinkles props into three categories that relate to base sprinkes, responsive sprinkles, and leftovers
 *
 * @param props - Object containing all props to be filtered
 * @returns `{ sprinklesProps, sprinklesResponsiveProps }`
 */
export const filterSprinklesProps = (props: object) =>
	Object.entries(props).reduce(
		(acc, [key, value]) => {
			if (isSprinklesProperty(key)) {
				acc.sprinklesProps[key] = value;
			} else if (isSprinklesResponsiveProperty(key)) {
				//@ts-expect-error responsive sprinkles props are too complex to represent
				acc.sprinklesResponsiveProps[key] = value;
			}
			return acc;
		},
		{
			sprinklesProps: {} as Sprinkles,
			sprinklesResponsiveProps: {} as SprinklesResponsive,
		},
	);

/**
 * Filters out sprinkles and responsive sprinkles props, returning only the non-sprinkles props.
 *
 * @param props - Object containing all props to be filtered
 * @returns Object containing only non-sprinkles props
 */
export const filterNonSprinklesProps = <T extends object>(props: T) =>
	Object.entries(props).reduce(
		(acc, [key, value]) => {
			if (
				!isSprinklesProperty(key) &&
				!isSprinklesResponsiveProperty(key)
			) {
				acc[key] = value;
			}
			return acc;
		},
		{} as {
			[K in keyof T]: T[K];
		},
	);
