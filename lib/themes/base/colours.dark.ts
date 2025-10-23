import type { ColourMap } from '../';

/**
 * Dark mode color palette - Inverted from light mode with adjustments for readability
 *
 * Strategy:
 * - Invert shade scale (900 ↔ 100, 800 ↔ 200, etc.)
 * - Adjust saturation/lightness for dark backgrounds
 * - Maintain brand recognition while ensuring WCAG AA contrast
 */
export const colourMapWithoutWhiteDark = {
	black: {
		// Inverted from light mode with adjustments
		'100': '#222222', // darkest (was 900)
		'200': '#2A2C2A',
		'300': '#444644',
		'400': '#626262',
		'500': '#808080',
		'600': '#ADB1B5',
		'700': '#D4D9DD',
		'800': '#DDE0E3',
		'900': '#E4E4E4', // lightest (was 100)
	},
	gray: {
		// Inverted with mid-point adjustments for neutral grays
		'100': '#212338', // darkest - used for dark page backgrounds
		'200': '#34384c', // dark surfaces
		'300': '#484c5f', // soft surfaces
		'400': '#5c6172', // muted content
		'500': '#6c7283', // mid-tone
		'600': '#8f95a1', // soft content
		'700': '#d4d9dd', // normal content on dark bg
		'800': '#eef0f2', // high contrast content
		'900': '#fafbfc', // lightest - high emphasis text
	},
	green: {
		// Slightly desaturated for dark mode, inverted scale
		'100': '#078171', // darkest
		'200': '#05987a',
		'300': '#03af83',
		'400': '#01c68c', // primary actions
		'500': '#00dd95',
		'600': '#36e5aa', // accent/highlight
		'700': '#71edc2',
		'800': '#e3f8f0',
		'900': '#f2fdf9', // lightest
	},
	blue: {
		// Adjusted for better visibility on dark backgrounds
		'100': '#0d47a1', // darkest
		'200': '#0d4bb7',
		'300': '#0d50ce',
		'400': '#0d54e5',
		'500': '#0d59fc',
		'600': '#4680fc', // links and info
		'700': '#80a7fd',
		'800': '#e1edfe',
		'900': '#f3f8ff', // lightest
	},
	yellow: {
		// Adjusted saturation for dark mode readability
		'100': '#f38e29', // darkest
		'200': '#f69a1f',
		'300': '#f9a715',
		'400': '#fcb30b',
		'500': '#ffc001', // warning emphasis
		'600': '#ffcf3d',
		'700': '#ffde79',
		'800': '#ffedb5',
		'900': '#fffcf2', // lightest
	},
	red: {
		// Slightly increased brightness for visibility on dark
		'100': '#780502', // darkest
		'200': '#96110e',
		'300': '#b51e1a',
		'400': '#d42b26',
		'500': '#e12e28', // danger emphasis
		'600': '#e85f5b',
		'700': '#ef918e',
		'800': '#ffd4d4',
		'900': '#fdf4f4', // lightest
	},
} satisfies ColourMap;

export const colourMapDark = {
	...colourMapWithoutWhiteDark,
	// Dark mode uses a very dark gray instead of pure white for body backgrounds
	// Pure white would be too harsh in dark mode
	white: '#1a1d2e', // Deep dark blue-gray for surfaces
} satisfies ColourMap;

/**
 * Alternative semantic background color for dark mode
 * Used for elevated surfaces and cards
 */
export const darkSurfaceElevated = '#252837';

export const secondaryForegroundDark = colourMapDark.gray['700'];
