import deepmerge from 'deepmerge';

import type { ColourMap } from '..';
import { tokensDark as baseTokensDark } from '../base/tokens.dark';
import type { ThemeTokens } from '../theme.css';

/**
 * Dark mode color palette for flat_red theme
 * Inverted scale with red as primary color
 */
const colours = {
	black: {
		900: '#222222',
		800: '#2A2C2A',
		700: '#444644',
		600: '#626262',
		500: '#808080',
		400: '#ADB1B5',
		300: '#D4D9DD',
		200: '#DDE0E3',
		100: '#E4E4E4',
	},
	gray: {
		900: '#263238',
		800: '#37474F',
		700: '#455A64',
		600: '#607D8B',
		500: '#78909C',
		400: '#90A4AE',
		300: '#B0BEC5',
		200: '#CFD8DC',
		100: '#ECEFF1',
	},
	green: {
		900: '#007800',
		800: '#009b00',
		700: '#00af00',
		600: '#00c400',
		500: '#00d500',
		400: '#52dc42',
		300: '#7ce36a',
		200: '#a6ec98',
		100: '#cbf4c1',
	},
	blue: {
		900: '#1a259c',
		800: '#3530aa',
		700: '#4336b2',
		600: '#523ebb',
		500: '#5c43c2',
		400: '#765ecb',
		300: '#8f7ad5',
		200: '#b0a1e0',
		100: '#cfc6ec',
	},
	yellow: {
		900: '#cb5300',
		800: '#d56b00',
		700: '#db7903',
		600: '#e18807',
		500: '#e5930b',
		400: '#e8a229',
		300: '#ebb24e',
		200: '#f0c880',
		100: '#f6ddb2',
	},
	red: {
		900: '#d50000',
		800: '#ED0C06',
		700: '#fb1e0d',
		600: '#ff2813',
		500: '#ff3018',
		400: '#ff5a3c',
		300: '#ff7d5f',
		200: '#ffa48d',
		100: '#ffc8ba',
	},
} satisfies ColourMap;

// Invert for dark mode
const coloursDark = {
	black: {
		100: colours.black[900],
		200: colours.black[800],
		300: colours.black[700],
		400: colours.black[600],
		500: colours.black[500],
		600: colours.black[400],
		700: colours.black[300],
		800: colours.black[200],
		900: colours.black[100],
	},
	gray: {
		100: colours.gray[900],
		200: colours.gray[800],
		300: colours.gray[700],
		400: colours.gray[600],
		500: colours.gray[500],
		600: colours.gray[400],
		700: colours.gray[300],
		800: colours.gray[200],
		900: colours.gray[100],
	},
	green: {
		100: colours.green[900],
		200: colours.green[800],
		300: colours.green[700],
		400: colours.green[600],
		500: colours.green[500],
		600: colours.green[400],
		700: colours.green[300],
		800: colours.green[200],
		900: colours.green[100],
	},
	blue: {
		100: colours.blue[900],
		200: colours.blue[800],
		300: colours.blue[700],
		400: colours.blue[600],
		500: colours.blue[500],
		600: colours.blue[400],
		700: colours.blue[300],
		800: colours.blue[200],
		900: colours.blue[100],
	},
	yellow: {
		100: colours.yellow[900],
		200: colours.yellow[800],
		300: colours.yellow[700],
		400: colours.yellow[600],
		500: colours.yellow[500],
		600: colours.yellow[400],
		700: colours.yellow[300],
		800: colours.yellow[200],
		900: colours.yellow[100],
	},
	red: {
		100: colours.red[900],
		200: colours.red[800],
		300: colours.red[700],
		400: colours.red[600],
		500: colours.red[500],
		600: colours.red[400],
		700: colours.red[300],
		800: colours.red[200],
		900: colours.red[100],
	},
} satisfies ColourMap;

const flatElevation = '0 0 0 0 rgba(0, 0, 0, 0.0)';

/**
 * Flat Red theme dark mode tokens
 * Extends base dark theme with:
 * - Red as primary color (instead of green)
 * - Flat elevation (no shadows)
 * - No border radius
 */
export const tokensDark = deepmerge(baseTokensDark, {
	mode: 'dark' as const,
	colours: {
		foreground: {
			link: coloursDark.green['600'],
		},
		intent: {
			// Red as primary/brand for flat_red theme
			primary: {
				background: {
					standard: coloursDark.red['500'],
					mild: coloursDark.red['200'],
					strong: coloursDark.red['700'],
				},
				border: coloursDark.red['700'],
			},
			brand: {
				background: {
					standard: coloursDark.red['500'],
					mild: coloursDark.red['200'],
					strong: coloursDark.red['700'],
				},
				border: coloursDark.red['700'],
			},
		},
	},
	// Flat theme: no elevation/shadows
	elevation: {
		none: flatElevation,
		'1': flatElevation,
		'2': flatElevation,
		'3': flatElevation,
		'4': flatElevation,
		'5': flatElevation,
	},
	// Flat theme: no border radius
	border: {
		radius: {
			none: 'none',
			min: 'none',
			sm: 'none',
			md: 'none',
			lg: 'none',
			xl: 'none',
			'2xl': 'none',
			'1': 'none',
			pill: 'none',
			full: 'none',
		},
	},
	typography: {
		colour: {
			primary: coloursDark.red['500'],
			brand: coloursDark.red['500'],
			link: coloursDark.green['600'],
		},
	},
}) satisfies ThemeTokens;
