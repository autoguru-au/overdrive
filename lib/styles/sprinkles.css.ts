/* eslint-disable sonarjs/no-duplicate-string */
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { mapValues } from 'es-toolkit';

import { breakpoints } from '../themes/makeTheme';
import { overdriveTokens as tokens } from '../themes/theme.css';
import { arrayFromKeys } from '../utils/object';

import { cssLayerStyleprops } from './layers.css';
import { gapVar } from './vars.css';

const { space } = tokens;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { none, ...spaceWithoutNone } = space;

const flexAlignments = {
	center: 'center',
	centre: 'center',
	end: 'end',
	flexEnd: 'end',
	flexStart: 'start',
	start: 'start',
	stretch: 'stretch',
};

const flexAlignmentsWithSpace = {
	...flexAlignments,
	spaceAround: 'space-around',
	'space-around': 'space-around',
	spaceBetween: 'space-between',
	'space-between': 'space-between',
	'space-evenly': 'space-evenly',
};

const intentForegroundColours = mapValues(
	tokens.colours.intent,
	({ foreground }) => foreground,
);

const intentBackgroundColoursStandard = mapValues(
	tokens.colours.intent,
	({ background }) => background.standard,
);

const intentBorderColours = mapValues(
	tokens.colours.intent,
	({ border }) => border,
);

const backgroundColours = {
	...intentBackgroundColoursStandard,
	...tokens.colours.gamut,
	transparent: 'transparent',
};

const borderColors = {
	default: tokens.color.interactive.border,
	muted: tokens.color.interactive.borderMuted,
	disabled: tokens.color.interactive.borderDisabled,
	...tokens.color.surface,
};

const borderColours = {
	...tokens.border.colours,
	...intentBorderColours,
};

const colours = {
	...tokens.colours.foreground,
	...tokens.typography.colour,
	...intentForegroundColours,
	unset: 'unset',
	white: tokens.colours.gamut.white,
};

const gapSizesWithVar = mapValues(space, (value) => ({
	vars: { [gapVar]: value },
	gap: value,
}));

// --- MAPPED COLOURS ---
const mappedBackgroundColours = mapValues(
	backgroundColours,
	(backgroundColor) => ({ backgroundColor }),
);

const mappedBorderBottomColours = mapValues(
	borderColours,
	(borderBottomColor) => ({ borderBottomColor }),
);

const mappedBorderLeftColours = mapValues(borderColours, (borderLeftColor) => ({
	borderLeftColor,
}));

const mappedBorderRightColours = mapValues(
	borderColours,
	(borderRightColor) => ({ borderRightColor }),
);

const mappedBorderTopColours = mapValues(borderColours, (borderTopColor) => ({
	borderTopColor,
}));

const mappedColours = mapValues(colours, (color) => ({ color }));

// --- BASE SPRINKLES (NON-RESPONSIVE) ---
const baseProperties = defineProperties({
	'@layer': cssLayerStyleprops,
	properties: {
		// Borders
		borderBottomColor: borderColors,
		borderLeftColor: borderColors,
		borderRightColor: borderColors,
		borderTopColor: borderColors,
		borderBottomColour: mappedBorderBottomColours,
		borderLeftColour: mappedBorderLeftColours,
		borderRightColour: mappedBorderRightColours,
		borderTopColour: mappedBorderTopColours,
		borderLeftStyle: ['none', 'solid'],
		borderBottomStyle: ['none', 'solid'],
		borderRightStyle: ['none', 'solid'],
		borderTopStyle: ['none', 'solid'],
		// Color
		color: tokens.color.content,
		colour: mappedColours,
		backgroundColor: {
			...tokens.color.surface,
			transparent: 'transparent',
		},
		backgroundColour: mappedBackgroundColours,
		opacity: [0, '1', '0'],
		// Typography
		lineHeight: mapValues(
			tokens.typography.size,
			(size) => size.lineHeight,
		),
		fontSize: mapValues(tokens.typography.size, (size) => size.fontSize),
		fontWeight: tokens.typography.fontWeight,
		textTransform: ['capitalize', 'lowercase', 'uppercase'],
		textWrap: ['balance', 'pretty', 'stable', 'nowrap'],
		wordBreak: ['break-all', 'break-word', 'keep-all'],
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
		borderColorX: ['borderLeftColor', 'borderRightColor'],
		borderColorY: ['borderBottomColor', 'borderTopColor'],
		borderColour: [
			'borderBottomColour',
			'borderLeftColour',
			'borderRightColour',
			'borderTopColour',
		],
		borderColourX: ['borderLeftColour', 'borderRightColour'],
		borderColourY: ['borderBottomColour', 'borderTopColour'],
		borderStyle: [
			'borderBottomStyle',
			'borderLeftStyle',
			'borderRightStyle',
			'borderTopStyle',
		],
		borderStyleBottom: ['borderBottomStyle'],
		borderStyleLeft: ['borderLeftStyle'],
		borderStyleRight: ['borderRightStyle'],
		borderStyleTop: ['borderTopStyle'],
	},
});

// --- RESPONSIVE SPRINKLES ---
export const responsiveConditions = {
	mobile: {},
	tablet: { '@media': `screen and (min-width: ${breakpoints.tablet})` },
	desktop: { '@media': `screen and (min-width: ${breakpoints.desktop})` },
	largeDesktop: {
		'@media': `screen and (min-width: ${breakpoints.largeDesktop})`,
	},
};

const responsiveProperties = defineProperties({
	'@layer': cssLayerStyleprops,
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
			'min-content': 'min-content',
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
		alignContent: flexAlignmentsWithSpace,
		alignItems: {
			...flexAlignments,
			baseline: 'baseline',
		},
		alignSelf: flexAlignments,
		justifyContent: {
			...flexAlignmentsWithSpace,
		},
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
		gridColumns: ['1', 'auto'], // Note: original had ['1', 'auto'], assuming this is correct
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

/**
 * Legacy colours are not a discreet combination of all colours as many typeography colour
 * tokens are overwritten by the intentional colour sets
 */
export type SprinklesLegacyColours = Pick<
	Sprinkles,
	| 'backgroundColour'
	| 'borderColour'
	| 'borderBottomColour'
	| 'borderLeftColour'
	| 'borderRightColour'
	| 'borderTopColour'
	| 'colour'
>;

// --- VALUE ARRAYS ---
// (Useful for Storybook controls, etc.)
export const valueArrays = {
	alignItems: arrayFromKeys(responsiveProperties.styles.alignItems.values),
	borderColors: arrayFromKeys(borderColors),
	gapSizesWithVar: arrayFromKeys(gapSizesWithVar),
	intentBackgroundColoursStandard: arrayFromKeys(
		intentBackgroundColoursStandard,
	),
	intentBorderColours: arrayFromKeys(intentBorderColours),
	intentForegroundColours: arrayFromKeys(intentForegroundColours),
	justifyContent: arrayFromKeys(
		responsiveProperties.styles.justifyContent.values,
	),
	spaceWithNone: arrayFromKeys(space),
	width: arrayFromKeys(responsiveProperties.styles.width.values),
};
