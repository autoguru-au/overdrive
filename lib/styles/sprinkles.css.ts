import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { tokens } from '../themes/base/tokens';

const responsiveProperties = defineProperties({
	properties: {
		gap: tokens.space,
		marginBottom: tokens.space,
		marginLeft: tokens.space,
		marginRight: tokens.space,
		marginTop: tokens.space,
		paddingBottom: tokens.space,
		paddingLeft: tokens.space,
		paddingRight: tokens.space,
		paddingTop: tokens.space,
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
		borderRadius: { ...tokens.border.radius },
		borderWidth: { ...tokens.border.width },
	},
});

const flexProperties = defineProperties({
	properties: {
		display: ['none', 'block', 'flex'],
		flexDirection: ['row', 'column'],
		flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
		alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
		justifyContent: ['stretch', 'flex-start', 'center', 'flex-end'],
		width: ['100%', 'auto'],
	},
	shorthands: {
		placeItems: ['justifyContent', 'alignItems'],
	},
});

const gamutProperties = defineProperties({
	properties: {
		color: tokens.colours.gamut,
		background: tokens.colours.gamut,
		borderColor: tokens.colours.gamut,
		fill: tokens.colours.gamut,
		stroke: tokens.colours.gamut,
	},
});

export const sprinkles = createSprinkles(
	responsiveProperties,
	borderProperties,
	flexProperties,
	gamutProperties,
);
