import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { breakpoints } from '../../themes/makeTheme';
import { themeContractVars as tokens } from '../../themes/theme.css';

const { border, colours, elevation, space } = tokens;
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
		display: [
			'none',
			'block',
			'flex',
			'grid',
			'inline-block',
			'inline-flex',
		],
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
		overflow: ['hidden', 'scroll', 'visible', 'auto'],
	},
	shorthands: {
		gridColumns: ['gridTemplateColumns'],
		placeItems: ['justifyContent', 'alignItems'],
		size: ['width', 'height'],
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

export const sprinkles = createSprinkles(
	spaceProperties,
	borderProperties,
	displayProperties,
	interactionProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
