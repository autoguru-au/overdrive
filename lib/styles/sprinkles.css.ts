/* eslint-disable sonarjs/no-duplicate-string */
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { breakpoints } from '../themes/makeTheme';
import { themeContractVars as tokens } from '../themes/theme.css';

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

// --- Base sprinkles (non-responsive)
const baseProperties = defineProperties({
	properties: {
		// Borders
		borderColor: tokens.border.colours,
		borderRadius: tokens.border.radius,
		borderWidth: tokens.border.width,
		borderLeftStyle: ['none', 'solid'],
		borderBottomStyle: ['none', 'solid'],
		borderRightStyle: ['none', 'solid'],
		borderTopStyle: ['none', 'solid'],
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
		// Color
		color: tokens.typography.colour,
		backgroundColor: tokens.colours.background,
		// Typography
		fontSize: fontSizes,
		lineHeight: lineHeights,
		fontWeight: tokens.typography.fontWeight,
		textAlign: ['left', 'center', 'right'],
		// Shadows
		boxShadow: tokens.elevation,
	},
	shorthands: {
		text: ['fontSize', 'lineHeight'],
		bg: ['backgroundColor'],
		fg: ['color'],
		border: [
			'borderBottomStyle',
			'borderLeftStyle',
			'borderRightStyle',
			'borderTopStyle',
		],
		padding: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
		p: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
		pt: ['paddingTop'],
		pr: ['paddingRight'],
		pb: ['paddingBottom'],
		pl: ['paddingLeft'],
		px: ['paddingLeft', 'paddingRight'],
		py: ['paddingTop', 'paddingBottom'],
		margin: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
		m: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
		mt: ['marginTop'],
		mr: ['marginRight'],
		mb: ['marginBottom'],
		ml: ['marginLeft'],
		mx: ['marginLeft', 'marginRight'],
		my: ['marginTop', 'marginBottom'],
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
	conditions: { ...responsiveConditions },
	defaultCondition: 'mobile',
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
			'100%': '100%',
			auto: 'auto',
		},
		width: {
			...spaceWithoutNone,
			'100%': '100%',
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
		alignSelf: ['flex-start', 'center', 'flex-end'],
		justifySelf: ['flex-start', 'center', 'flex-end'],
		// Flexbox
		flexDirection: ['row', 'column'],
		flexGrow: [0, 1],
		flexShrink: [0, 1],
		flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
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
	},
	shorthands: {
		gridColumns: ['gridTemplateColumns'],
		placeItems: ['justifyContent', 'alignItems'],
		size: ['width', 'height'],
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
