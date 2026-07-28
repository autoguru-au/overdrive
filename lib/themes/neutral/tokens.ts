import deepmerge from 'deepmerge';

import type { ColourMap } from '../';
import { tokens as baseTokens } from '../base/tokens';
import type { ThemeTokens } from '../theme.css';

const colours = {
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
		900: '#00574c',
		800: '#18856f',
		700: '#03af83',
		600: '#01c68c',
		500: '#00dda5',
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
		400: '#4a86ff',
		300: '#81afff',
		200: '#bad4ff',
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

const white = '#fff';
const secondaryForeground = colours.gray['700'];

export const tokens = deepmerge(baseTokens, {
	mode: 'light',
	body: {
		backgroundColour: white,
		colour: colours.gray['900'],
	},
	contentWidth: {
		small: '592px',
		large: '1344px',
		medium: '940px',
	},
	// `space` intentionally omitted: inherited from baseTokens via deepmerge
	// so the DS-2026 spacing scale lives in one place and can't drift.
	color: {
		gamut: {
			...colours,
			white,
		},
		foreground: {
			primary: colours.gray['900'],
		},
		interactive: {
			link: colours.blue['500'],
		},
		background: {
			default: white,
			emphasisInactive: colours.gray['200'],
			inactive: colours.gray['400'],
		},
		intent: {
			primary: {
				background: {
					standard: colours.gray['900'],
					mild: colours.gray['300'],
					strong: colours.gray['900'],
				},
				foreground: white,
				border: colours.gray['900'],
			},
			brand: {
				background: {
					standard: colours.green['700'],
					mild: colours.green['200'],
					strong: colours.green['900'],
				},
				foreground: white,
				border: colours.gray['900'],
			},
			secondary: {
				background: {
					standard: white,
					mild: white,
					strong: colours.gray['200'],
				},
				foreground: secondaryForeground,
				border: colours.gray['300'],
			},
			shine: {
				background: {
					standard: colours.gray['200'],
					mild: colours.gray['100'],
					strong: colours.gray['300'],
				},
				foreground: colours.yellow['500'],
				border: colours.gray['300'],
			},
			danger: {
				background: {
					standard: colours.red['600'],
					mild: colours.red['100'],
					strong: colours.red['800'],
				},
				foreground: white,
				border: colours.red['800'],
			},
			warning: {
				background: {
					standard: colours.yellow['800'],
					mild: colours.yellow['100'],
					strong: colours.yellow['900'],
				},
				foreground: white,
				border: colours.yellow['900'],
			},
			neutral: {
				background: {
					standard: colours.gray['700'],
					mild: colours.gray['200'],
					strong: colours.gray['900'],
				},
				foreground: white,
				border: colours.gray['900'],
			},
			success: {
				background: {
					standard: colours.green['700'],
					mild: colours.green['200'],
					strong: colours.green['900'],
				},
				foreground: white,
				border: colours.green['900'],
			},
			information: {
				background: {
					standard: colours.blue['800'],
					mild: colours.blue['200'],
					strong: colours.blue['900'],
				},
				foreground: white,
				border: colours.blue['900'],
			},
		},
	},
	// `elevation` intentionally omitted: inherited from baseTokens via deepmerge.
	border: {
		width: {
			none: '0',
			'1': '1px',
			'2': '2px',
			'3': '4px',
		},
		colours: {
			light: colours.gray['200'],
			gray: colours.gray['300'],
			dark: colours.gray['900'],
		},
		radius: {
			none: 'none',
			min: '2px',
			md: '8px',
			lg: '12px',
			xl: '16px',
			'2xl': '24px',
			pill: `${1e9}px`,
			full: '50%',
		},
	},
	animation: {
		easing: {
			standard: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
			decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
			accelerate: 'cubic-bezier(0.4, 0.0, 1, 1)',
		},
	},
	icon: {
		size: {
			small: '16px',
			medium: '20px',
			large: '32px',
		},
	},
}) satisfies ThemeTokens;
