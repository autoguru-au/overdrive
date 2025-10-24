import deepmerge from 'deepmerge';

import { buildColourGamut } from '../makeTheme';
import type { ThemeTokens } from '../theme.css';

import {
	colourMap,
	colourMapWithoutWhite,
	secondaryForeground,
} from './colours';
import { tokens } from './tokens';

/**
 * Dark mode theme tokens for the base theme
 */
export const tokensDark = deepmerge(tokens, {
	mode: 'dark' as const,
	body: {
		backgroundColour: colourMap.gray['100'], // Deep dark background
		colour: colourMap.gray['900'], // High contrast text
	},
	// New color token structure (2025)
	color: {
		gamut: colourMap,
		surface: {
			page: colourMap.gray['100'], // Deep dark page background
			hard: colourMap.gray['900'], // Light surface on dark (inverted)
			soft: colourMap.gray['700'], // Soft light surface
			accent: colourMap.green['400'], // Accent remains visible
			success: colourMap.green['600'], // Brighter for visibility
			info: colourMap.blue['600'], // Adjusted blue
			danger: colourMap.red['500'], // Bright red for emphasis
			warning: colourMap.yellow['500'], // Bright yellow
		},
		content: {
			normal: colourMap.gray['900'], // High contrast text
			soft: colourMap.gray['700'], // Muted text
			inverse: colourMap.gray['100'], // Dark text on light surfaces
			info: colourMap.blue['600'], // Info text
			danger: colourMap.red['500'], // Danger text
			success: colourMap.green['600'], // Success text
			warning: colourMap.yellow['500'], // Warning text
		},
		interactive: {
			border: colourMap.gray['600'], // Visible borders
			borderMuted: colourMap.gray['500'], // Subtle borders
			borderDisabled: colourMap.gray['300'], // Disabled state
			surfaceDisabled: colourMap.gray['400'], // Disabled backgrounds
			contentDisabled: colourMap.gray['500'], // Disabled text
			overlayBg: colourMap.gray['200'], // Dark overlay
			overlayContainer: colourMap.gray['800'], // Elevated surface for modals
			placeholder: colourMap.gray['600'], // Placeholder text
			focusOutline: colourMap.blue['600'], // Focus indicator
		},
	},
	// Legacy colors for backward compatibility
	colours: {
		gamut: {
			...buildColourGamut(colourMapWithoutWhite),
			white: colourMap.white,
		},
		foreground: {
			body: colourMap.gray['900'],
			link: colourMap.blue['600'],
		},
		background: {
			body: colourMap.gray['100'],
			light: colourMap.gray['200'], // Slightly lighter than body
			neutral: colourMap.gray['300'], // Neutral surface
			neutralDark: colourMap.gray['800'], // Light surface for contrast
		},
		// Legacy intent colorsets - full backward compatibility
		intent: {
			primary: {
				background: {
					standard: colourMap.green['400'], // Primary action
					mild: colourMap.green['200'], // Subtle background
					strong: colourMap.green['600'], // Emphasized
				},
				foreground: colourMap.gray['100'], // Dark text on bright bg
				border: colourMap.green['500'],
			},
			brand: {
				background: {
					standard: colourMap.green['600'],
					mild: colourMap.green['200'],
					strong: colourMap.green['700'],
				},
				foreground: colourMap.gray['100'],
				border: colourMap.green['700'],
			},
			secondary: {
				background: {
					standard: colourMap.gray['800'], // Elevated surface
					mild: colourMap.gray['200'],
					strong: colourMap.gray['300'],
				},
				foreground: secondaryForeground,
				border: colourMap.gray['600'],
			},
			shine: {
				background: {
					standard: colourMap.gray['300'],
					mild: colourMap.gray['200'],
					strong: colourMap.gray['400'],
				},
				foreground: colourMap.yellow['500'],
				border: colourMap.gray['600'],
			},
			danger: {
				background: {
					standard: colourMap.red['500'],
					mild: colourMap.red['200'],
					strong: colourMap.red['600'],
				},
				foreground: colourMap.gray['100'],
				border: colourMap.red['600'],
			},
			warning: {
				background: {
					standard: colourMap.yellow['500'],
					mild: colourMap.yellow['200'],
					strong: colourMap.yellow['600'],
				},
				foreground: colourMap.gray['100'],
				border: colourMap.yellow['600'],
			},
			neutral: {
				background: {
					standard: colourMap.gray['600'],
					mild: colourMap.gray['300'],
					strong: colourMap.gray['700'],
				},
				foreground: colourMap.gray['100'],
				border: colourMap.gray['700'],
			},
			success: {
				background: {
					standard: colourMap.green['600'],
					mild: colourMap.green['200'],
					strong: colourMap.green['700'],
				},
				foreground: colourMap.gray['100'],
				border: colourMap.green['700'],
			},
			information: {
				background: {
					standard: colourMap.blue['600'],
					mild: colourMap.blue['200'],
					strong: colourMap.blue['700'],
				},
				foreground: colourMap.gray['100'],
				border: colourMap.blue['700'],
			},
		},
	},
	// Elevation: lighter shadows for dark mode using white overlays
	elevation: {
		none: 'none',
		'1': '0 1px 5px 0 rgba(255, 255, 255, 0.03), 0 2px 2px 0 rgba(255, 255, 255, 0.02), 0 3px 1px -2px rgba(255, 255, 255, 0.04)',
		'2': '0 1px 10px 0 rgba(255, 255, 255, 0.04), 0 4px 5px 0 rgba(255, 255, 255, 0.03), 0 2px 4px -1px rgba(255, 255, 255, 0.05)',
		'3': '0 3px 14px 2px rgba(255, 255, 255, 0.05), 0 8px 10px 1px rgba(255, 255, 255, 0.04), 0 5px 5px -3px rgba(255, 255, 255, 0.06)',
		'4': '0 6px 30px 5px rgba(255, 255, 255, 0.06), 0 16px 24px 2px rgba(255, 255, 255, 0.05), 0 8px 10px -5px rgba(255, 255, 255, 0.07)',
		'5': '0 9px 46px 8px rgba(255, 255, 255, 0.07), 0 24px 38px 3px rgba(255, 255, 255, 0.06), 0 11px 15px -7px rgba(255, 255, 255, 0.08)',
	},
	border: {
		colours: {
			light: colourMap.gray['500'], // Lighter for visibility
			gray: colourMap.gray['600'],
			dark: colourMap.gray['900'], // Light in dark mode
		},
	},
	typography: {
		// Legacy typography colors for backward compatibility
		colour: {
			primary: colourMap.green['400'],
			secondary: colourMap.gray['700'],
			brand: colourMap.green['400'],
			shine: colourMap.yellow['500'],
			link: colourMap.blue['600'],
			dark: colourMap.gray['900'], // Light in dark mode
			white: colourMap.white, // Dark in dark mode
			muted: colourMap.gray['600'],
			neutral: colourMap.gray['700'],
			light: colourMap.gray['800'],
			danger: colourMap.red['500'],
			warning: colourMap.yellow['500'],
			success: colourMap.green['600'],
			information: colourMap.blue['600'],
		},
	},
	opacity: {
		overlayBg: '0.5', // Slightly darker overlay for dark mode
	},
}) as ThemeTokens;
