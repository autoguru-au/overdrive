import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { breakpoints } from '../themes/makeTheme';
import { overdriveTokens as tokens } from '../themes/theme.css';

const { space } = tokens;
const { none, ...spaceWithoutNone } = space;

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
		flexDirection: ['row', 'column'],
		flexGrow: [0, 1],
		flexShrink: [0, 1],
		flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
		gap: space,
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

export const sprinklesResponsive = createSprinkles(responsiveProperties);
export type SprinklesResponsive = Parameters<typeof sprinklesResponsive>[0];
