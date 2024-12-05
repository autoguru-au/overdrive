import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { tokens } from '../themes/base/tokens';
const { border, colours, elevation, space } = tokens;
const { none, ...spaceWithoutNone } = space;

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
		justifyContent: ['stretch', 'flex-start', 'center', 'flex-end'],
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
	properties: {
		color: colours.gamut,
		background: colours.gamut,
		fill: colours.gamut,
		stroke: colours.gamut,
	},
});

export const sprinkles = createSprinkles(
	responsiveProperties,
	borderProperties,
	displayProperties,
	gamutProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
