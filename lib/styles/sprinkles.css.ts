/* eslint-disable sonarjs/no-duplicate-string */
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { mapValues } from 'es-toolkit';

import { breakpoints, buildColourGamut } from '../themes/makeTheme';
import { overdriveTokens as tokens } from '../themes/theme.css';
import { arrayFromKeys } from '../utils/object';

import { cssLayerStyleprops } from './layers.css';
import { LEGACY_TEXT_COLOURS } from './legacyTextColours';
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
	tokens.color.intent,
	({ foreground }) => foreground,
);

const intentBackgroundColoursStandard = mapValues(
	tokens.color.intent,
	({ background }) => background.standard,
);

const intentBorderColours = mapValues(
	tokens.color.intent,
	({ border }) => border,
);

// --- SEMANTIC COLOUR PARITY (C-P1) ---
// Flat semantic ramp: every legacy gamut key (gray900, green300, …) gets a
// semantic equivalent at the IDENTICAL base value (color.gamut === colours.gamut).
const semanticGamut = buildColourGamut({
	gray: tokens.color.gamut.gray,
	green: tokens.color.gamut.green,
	blue: tokens.color.gamut.blue,
	yellow: tokens.color.gamut.yellow,
	red: tokens.color.gamut.red,
});

const backgroundColours = {
	...intentBackgroundColoursStandard,
	...semanticGamut,
	white: tokens.color.gamut.white,
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

// `color` (text/foreground) semantic value space
const semanticColor = {
	...tokens.color.content, // normal, soft, inverse, info, danger, success, warning (existing)
	...tokens.color.foreground, // primary, secondary, reverse, tertiary, placeholder (W1-P1)
	infoText: tokens.color.info.text,
	infoForeground: tokens.color.info.foreground,
	successText: tokens.color.success.text,
	successForeground: tokens.color.success.foreground,
	warningText: tokens.color.warning.text,
	warningForeground: tokens.color.warning.foreground,
	alertText: tokens.color.alert.text,
	alertForeground: tokens.color.alert.foreground,
	...semanticGamut, // gray900 … red100
	white: tokens.color.gamut.white,
	unset: 'unset',
};

// `backgroundColor` semantic value space
const semanticBackgroundColor = {
	...tokens.color.surface, // page, hard, soft, accent, success, info, danger, warning (existing)
	...tokens.color.background, // default, reverse, inactive, emphasisInactive, emphasisLight, modal (W1-P1)
	infoBackgroundStrong: tokens.color.info.backgroundStrong,
	infoBackgroundSubtle: tokens.color.info.backgroundSubtle,
	successBackgroundStrong: tokens.color.success.backgroundStrong,
	successBackgroundSubtle: tokens.color.success.backgroundSubtle,
	warningBackgroundStrong: tokens.color.warning.backgroundStrong,
	warningBackgroundSubtle: tokens.color.warning.backgroundSubtle,
	alertBackgroundStrong: tokens.color.alert.backgroundStrong,
	alertBackgroundSubtle: tokens.color.alert.backgroundSubtle,
	...semanticGamut,
	white: tokens.color.gamut.white,
	transparent: 'transparent',
};

// `border*Color` semantic value space
const semanticBorderColor = {
	// W1-P1: emphasis, selected, strong (+ default, which the explicit
	// `default` below overrides to preserve the pre-existing gray300 binding
	// byte-for-byte — both resolve to gray300, so zero drift).
	...tokens.color.border,
	default: tokens.color.interactive.border, // existing (gray300)
	muted: tokens.color.interactive.borderMuted, // existing (gray200)
	disabled: tokens.color.interactive.borderDisabled, // existing (gray100)
	...tokens.color.surface, // existing
	...semanticGamut,
	white: tokens.color.gamut.white,
	transparent: 'transparent',
};

// Preserves the legacy `colours.foreground` key order (body, link) so the
// generated sprinkles class indices stay stable; `link` is re-set by the
// `LEGACY_TEXT_COLOURS` spread below, exactly as it was before the migration.
const legacyForegroundColours = {
	body: tokens.color.foreground.primary,
	link: tokens.color.interactive.link,
};

const colours = {
	...legacyForegroundColours,
	// The `typography.colour.*` tokens were removed in v5 (AG-20568); the
	// deprecated `colour` prop value space is preserved by this alias map.
	...LEGACY_TEXT_COLOURS,
	...intentForegroundColours,
	unset: 'unset',
	white: tokens.color.gamut.white,
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
		borderBottomColor: semanticBorderColor,
		borderLeftColor: semanticBorderColor,
		borderRightColor: semanticBorderColor,
		borderTopColor: semanticBorderColor,
		/** @deprecated Use borderBottomColor — removed in v5 (DS-2026 major). */
		borderBottomColour: mappedBorderBottomColours,
		/** @deprecated Use borderLeftColor — removed in v5 (DS-2026 major). */
		borderLeftColour: mappedBorderLeftColours,
		/** @deprecated Use borderRightColor — removed in v5 (DS-2026 major). */
		borderRightColour: mappedBorderRightColours,
		/** @deprecated Use borderTopColor — removed in v5 (DS-2026 major). */
		borderTopColour: mappedBorderTopColours,
		borderLeftStyle: ['none', 'solid'],
		borderBottomStyle: ['none', 'solid'],
		borderRightStyle: ['none', 'solid'],
		borderTopStyle: ['none', 'solid'],
		// Color
		color: semanticColor,
		/** @deprecated Use color — removed in v5 (DS-2026 major). */
		colour: mappedColours,
		backgroundColor: semanticBackgroundColor,
		/** @deprecated Use backgroundColor — removed in v5 (DS-2026 major). */
		backgroundColour: mappedBackgroundColours,
		opacity: [0, '1', '0'],
		// Typography
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
		/** @deprecated Use borderColor — removed in v5 (DS-2026 major). */
		borderColour: [
			'borderBottomColour',
			'borderLeftColour',
			'borderRightColour',
			'borderTopColour',
		],
		/** @deprecated Use borderColorX — removed in v5 (DS-2026 major). */
		borderColourX: ['borderLeftColour', 'borderRightColour'],
		/** @deprecated Use borderColorY — removed in v5 (DS-2026 major). */
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
		// Typography
		lineHeight: mapValues(
			tokens.typography.size,
			(size) => size.lineHeight,
		),
		fontSize: mapValues(tokens.typography.size, (size) => size.fontSize),
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
		text: ['fontSize', 'lineHeight'],
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
