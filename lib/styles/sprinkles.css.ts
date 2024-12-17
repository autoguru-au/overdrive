import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { tokens } from '../themes/base/tokens';
const { border, colours, elevation, space, typography } = tokens;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { none, ...spaceWithoutNone } = space;

const interactionConditions = {
	initial: {},
	disabled: { selector: '&:disabled' },
	focus: { selector: '&:focus' },
	focusVisible: { selector: '&:focus-visible' },
	hover: { selector: '&:hover' },
};

const responsiveProperties = defineProperties({
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
	},
	shorthands: {
		font: ['fontSize', 'lineHeight'],
	},
});

const borderProperties = defineProperties({
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
	properties: {
		display: ['none', 'block', 'flex'],
		flexDirection: ['row', 'column'],
		flexGrow: [0, 1],
		flexShrink: [0, 1],
		flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
		alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
		justifyContent: [
			'stretch',
			'flex-start',
			'center',
			'space-between',
			'flex-end',
		],
		alignSelf: ['flex-start', 'center', 'flex-end'],
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
		placeItems: ['justifyContent', 'alignItems'],
		size: ['width', 'height'],
	},
});

const gamutProperties = defineProperties({
	conditions: interactionConditions,
	defaultCondition: 'initial',
	properties: {
		color: colours.gamut,
		background: colours.gamut,
		fill: colours.gamut,
		stroke: colours.gamut,
	},
});

const interactionProperties = defineProperties({
	conditions: interactionConditions,
	defaultCondition: 'initial',
	properties: {
		cursor: ['default', 'pointer', 'not-allowed', 'wait'],
		outlineColor: colours.foreground,
		outlineStyle: ['solid'],
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
	responsiveProperties,
	typographyProperties,
	borderProperties,
	displayProperties,
	gamutProperties,
	interactionProperties,
);

export type ODStyle = Parameters<typeof odStyle>[0];
