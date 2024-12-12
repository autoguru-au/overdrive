import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { tokens } from '../themes/base/tokens';
const { border, colours, elevation, space } = tokens;
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

const borderProperties = defineProperties({
	properties: {
		borderColor: { ...border.colours },
		borderRadius: { ...border.radius },
		borderStyle: ['solid', 'dotted', 'dashed'],
		borderWidth: { ...border.width },
		boxShadow: { ...elevation },
	},
});

const displayProperties = defineProperties({
	properties: {
		display: ['none', 'block', 'flex'],
		flexDirection: ['row', 'column'],
		flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
		alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
		justifyContent: [
			'stretch',
			'flex-start',
			'center',
			'space-between',
			'flex-end',
		],
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
	borderProperties,
	displayProperties,
	gamutProperties,
	interactionProperties,
);

export type ODStyle = Parameters<typeof odStyle>[0];
