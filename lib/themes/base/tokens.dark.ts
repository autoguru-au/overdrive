import { buildColourGamut } from '../makeTheme';
import { overdriveTokens, type ThemeTokens } from '../theme.css';

import {
	colourMapDark,
	colourMapWithoutWhiteDark,
	darkSurfaceElevated,
	secondaryForegroundDark,
} from './colours.dark';

/**
 * Dark mode theme tokens for the base theme
 *
 * Key differences from light mode:
 * - Inverted color scales for text and backgrounds
 * - Lighter shadows using white overlays instead of black shadows
 * - Adjusted border colors for better visibility
 * - Semantic tokens remapped for dark backgrounds
 */
export const tokensDark = {
	mode: 'dark' as const,
	body: {
		backgroundColour: colourMapDark.gray['100'], // Deep dark background
		colour: colourMapDark.gray['900'], // High contrast text
	},
	contentWidth: {
		small: '592px',
		large: '1344px',
		medium: '940px',
	},
	space: {
		'1': '4px',
		'2': '8px',
		'3': '12px',
		'4': '16px',
		'5': '20px',
		'6': '24px',
		'7': '32px',
		'8': '48px',
		'9': '96px',
		none: '0px',
	},
	// New color token structure (2025)
	color: {
		gamut: colourMapDark,
		surface: {
			page: colourMapDark.gray['100'], // Deep dark page background
			hard: colourMapDark.gray['900'], // Light surface on dark (inverted)
			soft: colourMapDark.gray['700'], // Soft light surface
			accent: colourMapDark.green['400'], // Accent remains visible
			success: colourMapDark.green['600'], // Brighter for visibility
			info: colourMapDark.blue['600'], // Adjusted blue
			danger: colourMapDark.red['500'], // Bright red for emphasis
			warning: colourMapDark.yellow['500'], // Bright yellow
		},
		content: {
			normal: colourMapDark.gray['900'], // High contrast text
			soft: colourMapDark.gray['700'], // Muted text
			inverse: colourMapDark.gray['100'], // Dark text on light surfaces
			info: colourMapDark.blue['600'], // Info text
			danger: colourMapDark.red['500'], // Danger text
			success: colourMapDark.green['600'], // Success text
			warning: colourMapDark.yellow['500'], // Warning text
		},
		interactive: {
			border: colourMapDark.gray['600'], // Visible borders
			borderMuted: colourMapDark.gray['500'], // Subtle borders
			borderDisabled: colourMapDark.gray['300'], // Disabled state
			surfaceDisabled: colourMapDark.gray['400'], // Disabled backgrounds
			contentDisabled: colourMapDark.gray['500'], // Disabled text
			link: `${overdriveTokens.color.content.info}`, // Reference to info color
			linkVisited: `${overdriveTokens.color.interactive.link}`, // Same as link
			overlayBg: colourMapDark.gray['200'], // Dark overlay
			overlayContainer: darkSurfaceElevated, // Elevated surface for modals
			placeholder: colourMapDark.gray['600'], // Placeholder text
			focusOutline: colourMapDark.blue['600'], // Focus indicator
		},
	},
	// Legacy colors for backward compatibility
	colours: {
		gamut: {
			...buildColourGamut(colourMapWithoutWhiteDark),
			white: colourMapDark.white,
		},
		foreground: {
			body: colourMapDark.gray['900'],
			link: colourMapDark.blue['600'],
		},
		background: {
			body: colourMapDark.gray['100'],
			light: colourMapDark.gray['200'], // Slightly lighter than body
			neutral: colourMapDark.gray['300'], // Neutral surface
			neutralDark: colourMapDark.gray['800'], // Light surface for contrast
		},
		// Legacy intent colorsets - full backward compatibility
		intent: {
			primary: {
				background: {
					standard: colourMapDark.green['400'], // Primary action
					mild: colourMapDark.green['200'], // Subtle background
					strong: colourMapDark.green['600'], // Emphasized
				},
				foreground: colourMapDark.gray['100'], // Dark text on bright bg
				border: colourMapDark.green['500'],
			},
			brand: {
				background: {
					standard: colourMapDark.green['600'],
					mild: colourMapDark.green['200'],
					strong: colourMapDark.green['700'],
				},
				foreground: colourMapDark.gray['100'],
				border: colourMapDark.green['700'],
			},
			secondary: {
				background: {
					standard: darkSurfaceElevated, // Elevated surface
					mild: colourMapDark.gray['200'],
					strong: colourMapDark.gray['300'],
				},
				foreground: secondaryForegroundDark,
				border: colourMapDark.gray['600'],
			},
			shine: {
				background: {
					standard: colourMapDark.gray['300'],
					mild: colourMapDark.gray['200'],
					strong: colourMapDark.gray['400'],
				},
				foreground: colourMapDark.yellow['500'],
				border: colourMapDark.gray['600'],
			},
			danger: {
				background: {
					standard: colourMapDark.red['500'],
					mild: colourMapDark.red['200'],
					strong: colourMapDark.red['600'],
				},
				foreground: colourMapDark.gray['100'],
				border: colourMapDark.red['600'],
			},
			warning: {
				background: {
					standard: colourMapDark.yellow['500'],
					mild: colourMapDark.yellow['200'],
					strong: colourMapDark.yellow['600'],
				},
				foreground: colourMapDark.gray['100'],
				border: colourMapDark.yellow['600'],
			},
			neutral: {
				background: {
					standard: colourMapDark.gray['600'],
					mild: colourMapDark.gray['300'],
					strong: colourMapDark.gray['700'],
				},
				foreground: colourMapDark.gray['100'],
				border: colourMapDark.gray['700'],
			},
			success: {
				background: {
					standard: colourMapDark.green['600'],
					mild: colourMapDark.green['200'],
					strong: colourMapDark.green['700'],
				},
				foreground: colourMapDark.gray['100'],
				border: colourMapDark.green['700'],
			},
			information: {
				background: {
					standard: colourMapDark.blue['600'],
					mild: colourMapDark.blue['200'],
					strong: colourMapDark.blue['700'],
				},
				foreground: colourMapDark.gray['100'],
				border: colourMapDark.blue['700'],
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
		width: {
			none: '0',
			'1': '1px',
			'2': '2px',
			'3': '4px',
		},
		colours: {
			light: colourMapDark.gray['500'], // Lighter for visibility
			gray: colourMapDark.gray['600'],
			dark: colourMapDark.gray['900'], // Light in dark mode
		},
		radius: {
			none: 'none',
			min: '2px',
			sm: '4px',
			md: '8px',
			lg: '12px',
			xl: '16px',
			'2xl': '24px',
			'1': '4px',
			pill: `${1e9}px`,
			full: '50%',
		},
	},
	typography: {
		size: {
			'1': {
				fontSize: '10px',
				lineHeight: '12px',
			},
			'2': {
				fontSize: '12px',
				lineHeight: '18px',
			},
			'3': {
				fontSize: '14px',
				lineHeight: '20px',
			},
			'4': {
				fontSize: '16px',
				lineHeight: '22px',
			},
			'5': {
				fontSize: '18px',
				lineHeight: '26px',
			},
			'6': {
				fontSize: '20px',
				lineHeight: '28px',
			},
			'7': {
				fontSize: '24px',
				lineHeight: '30px',
			},
			'8': {
				fontSize: '30px',
				lineHeight: '40px',
			},
			'9': {
				fontSize: '40px',
				lineHeight: '48px',
			},
		},
		// Legacy typography colors for backward compatibility
		colour: {
			primary: colourMapDark.green['400'],
			secondary: colourMapDark.gray['700'],
			brand: colourMapDark.green['400'],
			shine: colourMapDark.yellow['500'],
			link: colourMapDark.blue['600'],
			dark: colourMapDark.gray['900'], // Light in dark mode
			white: colourMapDark.white, // Dark in dark mode
			muted: colourMapDark.gray['600'],
			neutral: colourMapDark.gray['700'],
			light: colourMapDark.gray['800'],
			danger: colourMapDark.red['500'],
			warning: colourMapDark.yellow['500'],
			success: colourMapDark.green['600'],
			information: colourMapDark.blue['600'],
		},
		fontFamily: 'AvertaStandard, system-ui, sans-serif',
		fontWeight: {
			normal: '400',
			semiBold: '500',
			bold: '700',
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
	opacity: {
		overlayBg: '0.5', // Slightly darker overlay for dark mode
	},
} satisfies ThemeTokens;
