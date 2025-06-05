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
	responsiveArray: ['mobile', 'tablet', 'desktop', 'largeDesktop'],
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
		flexGrow: ['0', '1'],
		flexShrink: ['0', '1'],
		flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
		gap: space,
		gridTemplateColumns: {
			'1': '1fr',
			'2': 'repeat(2, 1fr)',
			'3': 'repeat(3, 1fr)',
			'4': 'repeat(4, 1fr)',
			'5': 'repeat(5, 1fr)',
			auto: 'auto',
		},
		alignContent: [
			'baseline',
			'center',
			'end',
			'space-between',
			'space-evenly',
			'start',
			'stretch',
		],
		alignItems: ['stretch', 'start', 'center', 'end'],
		justifyContent: [
			'center',
			'end',
			'space-between',
			'space-evenly',
			'start',
			'stretch',
		],
		alignSelf: ['start', 'center', 'end'],
		height: {
			...spaceWithoutNone,
			'100%': '100%',
			auto: 'auto',
		},
		width: {
			...spaceWithoutNone,
			'100%': '100%',
			full: '100%',
			auto: 'auto',
		},
	},
	shorthands: {
		gridColumns: ['gridTemplateColumns'],
		placeItems: ['justifyContent', 'alignItems'],
		size: ['width', 'height'],
	},
});

export const sprinkles = createSprinkles(responsiveProperties);
export type Sprinkles = Parameters<typeof sprinkles>[0];
