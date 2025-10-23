import deepmerge from 'deepmerge';

import type { ColourMap } from '..';
import { tokensDark as baseTokensDark } from '../base/tokens.dark';
import type { ThemeTokens } from '../theme.css';

/**
 * Dark mode color overrides for neutral theme
 * Matches the neutral theme's light mode customizations
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
		900: '#212338',
		800: '#34384c',
		700: '#484c5f',
		600: '#5c6172',
		500: '#6c7283',
		400: '#8f95a1',
		300: '#d4d9dd',
		200: '#eef0f2',
		100: '#fafbfc',
	},
	green: {
		900: '#078171',
		800: '#05987a',
		700: '#03af83',
		600: '#01c68c',
		500: '#00dd95',
		400: '#36e5aa',
		300: '#71edc2',
		200: '#e3f8f0',
		100: '#f2fdf9',
	},
	blue: {
		900: '#0d47a1',
		800: '#0d4bb7',
		700: '#0d50ce',
		600: '#0d54e5',
		500: '#0d59fc',
		400: '#4680fc',
		300: '#80a7fd',
		200: '#e1edfe',
		100: '#f3f8ff',
	},
	yellow: {
		900: '#f38e29',
		800: '#f69a1f',
		700: '#f9a715',
		600: '#fcb30b',
		500: '#ffc001',
		400: '#ffcf3d',
		300: '#ffde79',
		200: '#ffedb5',
		100: '#fffcf2',
	},
	red: {
		900: '#780502',
		800: '#96110e',
		700: '#b51e1a',
		600: '#d42b26',
		500: '#e12e28',
		400: '#e85f5b',
		300: '#ef918e',
		200: '#ffd4d4',
		100: '#fdf4f4',
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

const white = '#1a1d2e';

/**
 * Neutral theme dark mode tokens
 * Extends base dark theme with neutral theme color customizations
 */
export const tokensDark = deepmerge(baseTokensDark, {
	mode: 'dark' as const,
	body: {
		backgroundColour: coloursDark.gray['100'],
		colour: coloursDark.gray['900'],
	},
	colours: {
		intent: {
			// Neutral theme uses black as primary instead of green
			primary: {
				background: {
					standard: coloursDark.black['700'],
					mild: coloursDark.black['200'],
					strong: coloursDark.black['800'],
				},
				foreground: white,
				border: coloursDark.black['800'],
			},
			// Secondary uses inverted gray colors
			secondary: {
				foreground: coloursDark.gray['700'],
			},
		},
	},
	typography: {
		colour: {
			primary: coloursDark.black['800'],
			secondary: coloursDark.gray['600'],
		},
	},
}) satisfies ThemeTokens;
