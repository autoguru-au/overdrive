import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { tokens } from '../themes/base/tokens';
import { breakpoints } from '../themes/makeTheme';

const { border, colours, elevation, space, typography } = tokens;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { none, ...spaceWithoutNone } = space;

const responsiveConditions = {
	mobile: {},
	tablet: { '@media': `screen and (min-width: ${breakpoints.tablet})` },
	desktop: { '@media': `screen and (min-width: ${breakpoints.desktop})` },
	largeDesktop: {
		'@media': `screen and (min-width: ${breakpoints.largeDesktop})`,
	},
};

const interactionConditions = {
	initial: {},
	active: { selector: '&:active' },
	checked: { selector: '&:checked, &[data-checked]' },
	disabled: { selector: '&:disabled, &[data-disabled]' },
	focus: { selector: '&:focus, &[data-focus], &[data-focused]' },
	focusVisible: { selector: '&:focus-visible, &[data-focus-visible]' },
	hover: { selector: '&:hover, &[data-hover]' },
	selected: { selector: '&[data-selected]' },
};

const spaceProperties = defineProperties({
	properties: {
		gap: space,
		marginBottom: space,
		marginLeft: space,
		marginRight: space,
		marginTop: space,
		paddingBottom: space,
		paddingLeft: space,
		paddingRight: space,
		paddingTop: space,
	},
	shorthands: {
		margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
		marginX: ['marginLeft', 'marginRight'],
		marginY: ['marginTop', 'marginBottom'],
		padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
		paddingX: ['paddingLeft', 'paddingRight'],
		paddingY: ['paddingTop', 'paddingBottom'],
	},
});

const typographyProperties = defineProperties({
	properties: {
		fontSize: {
			'1': typography.size[1].fontSize,
			'2': typography.size[2].fontSize,
			'3': typography.size[3].fontSize,
			'4': typography.size[4].fontSize,
			'5': typography.size[5].fontSize,
			'6': typography.size[6].fontSize,
			'7': typography.size[7].fontSize,
			'8': typography.size[8].fontSize,
			'9': typography.size[9].fontSize,
			xxs: typography.size[1].fontSize,
			xs: typography.size[2].fontSize,
			sm: typography.size[3].fontSize,
			md: typography.size[4].fontSize,
			lg: typography.size[5].fontSize,
			xl: typography.size[6].fontSize,
			xxl: typography.size[7].fontSize,
			'2xl': typography.size[8].fontSize,
			'3xl': typography.size[9].fontSize,
		},
		lineHeight: {
			'1': typography.size[1].lineHeight,
			'2': typography.size[2].lineHeight,
			'3': typography.size[3].lineHeight,
			'4': typography.size[4].lineHeight,
			'5': typography.size[5].lineHeight,
			'6': typography.size[6].lineHeight,
			'7': typography.size[7].lineHeight,
			'8': typography.size[8].lineHeight,
			'9': typography.size[9].lineHeight,
			xxs: typography.size[1].lineHeight,
			xs: typography.size[2].lineHeight,
			sm: typography.size[3].lineHeight,
			md: typography.size[4].lineHeight,
			lg: typography.size[5].lineHeight,
			xl: typography.size[6].lineHeight,
			xxl: typography.size[7].lineHeight,
			'2xl': typography.size[8].lineHeight,
			'3xl': typography.size[9].lineHeight,
		},
		fontWeight: {
			normal: '400',
			semibold: '500',
			bold: '700',
		},
		textAlign: ['left', 'center', 'right'],
	},
	shorthands: {
		font: ['fontSize', 'lineHeight'],
	},
});

const borderProperties = defineProperties({
	conditions: { ...interactionConditions },
	defaultCondition: 'initial',
	properties: {
		borderColor: { ...border.colours },
		borderRadius: { ...border.radius },
		borderBottomLeftRadius: { ...border.radius },
		borderBottomRightRadius: { ...border.radius },
		borderTopLeftRadius: { ...border.radius },
		borderTopRightRadius: { ...border.radius },
		borderStyle: ['none', 'solid', 'dotted', 'dashed'],
		borderBottomStyle: ['none', 'solid', 'dotted', 'dashed'],
		borderLeftStyle: ['none', 'solid', 'dotted', 'dashed'],
		borderRightStyle: ['none', 'solid', 'dotted', 'dashed'],
		borderTopStyle: ['none', 'solid', 'dotted', 'dashed'],
		borderWidth: { ...border.width },
		boxShadow: { ...elevation },
	},
});

const displayProperties = defineProperties({
	conditions: { ...responsiveConditions },
	defaultCondition: 'mobile',
	properties: {
		display: ['none', 'block', 'flex', 'grid'],
		flexDirection: ['row', 'column'],
		flexGrow: [0, 1],
		flexShrink: [0, 1],
		flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
		gridTemplateColumns: {
			'1': '1fr',
			'2': 'repeat(2, 1fr)',
			'3': 'repeat(3, 1fr)',
			'4': 'repeat(4, 1fr)',
			'5': 'repeat(5, 1fr)',
		},
		alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
		justifyContent: [
			'stretch',
			'flex-start',
			'center',
			'space-between',
			'flex-end',
		],
		alignSelf: ['flex-start', 'center', 'flex-end'],
		position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
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
	},
	shorthands: {
		gridColumns: ['gridTemplateColumns'],
		placeItems: ['justifyContent', 'alignItems'],
		size: ['width', 'height'],
	},
});

const gamutProperties = defineProperties({
	conditions: { ...interactionConditions },
	defaultCondition: 'initial',
	properties: {
		color: { ...colours.gamut, transparent: 'transparent' },
		background: { ...colours.gamut, transparent: 'transparent' },
		fill: colours.gamut,
		stroke: colours.gamut,
	},
});

const interactionProperties = defineProperties({
	conditions: { ...interactionConditions },
	defaultCondition: 'initial',
	properties: {
		cursor: ['default', 'pointer', 'not-allowed', 'text', 'wait'],
		outlineColor: colours.foreground,
		outlineStyle: ['solid', 'none'],
		outlineOffset: {
			sm: '1px',
			md: '2px',
			lg: '4px',
		},
		outlineWidth: {
			none: '0',
			default: '2px',
		},
	},
});

export const odStyle = createSprinkles(
	spaceProperties,
	typographyProperties,
	borderProperties,
	displayProperties,
	gamutProperties,
	interactionProperties,
);

export type ODStyle = Parameters<typeof odStyle>[0];
