import { buildColourGamut } from '../makeTheme';
import { overdriveTokens, type ThemeTokens } from '../theme.css';

import {
	colourMap,
	colourMapWithoutWhite,
	secondaryForeground,
} from './colours';

/**
 * Here lie the global tokens for theming Overdrive
 */
export const tokens = {
	mode: 'light',
	body: {
		backgroundColour: colourMap.white,
		colour: colourMap.gray['900'],
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
	color: {
		gamut: colourMap,
		surface: {
			body: colourMap.white,
			accent: colourMap.green['400'],
			hard: colourMap.gray['900'],
			soft: colourMap.gray['700'],
			success: colourMap.green['700'],
			info: colourMap.blue['600'],
			danger: colourMap.red['600'],
			warning: colourMap.yellow['800'],
		},
		content: {
			onBody: overdriveTokens.color.content.hard,
			onSurface: colourMap.white,
			accent: overdriveTokens.color.surface.accent,
			hard: colourMap.gray['900'],
			soft: colourMap.gray['700'],
			info: colourMap.blue['600'],
			danger: colourMap.red['600'],
			success: colourMap.green['700'],
			warning: colourMap.yellow['800'],
		},
		interactive: {
			border: colourMap.gray['300'],
			borderMuted: colourMap.gray['200'],
			borderDisabled: colourMap.gray['100'],
			surfaceDisabled: colourMap.gray['400'],
			contentDisabled: colourMap.gray['600'],
			link: overdriveTokens.color.content.info,
			linkVisited: overdriveTokens.color.interactive.link,
			overlayBg: colourMap.gray['300'],
			overlayContainer: colourMap.white,
			placeholder: colourMap.gray['700'],
			focusOutline: colourMap.blue['500'],
		},
	},
	colours: {
		gamut: {
			...buildColourGamut(colourMapWithoutWhite),
			white: colourMap.white,
		},
		foreground: {
			body: colourMap.gray['900'],
			link: colourMap.blue['500'],
		},
		background: {
			body: colourMap.white,
			light: colourMap.gray['200'],
			neutral: colourMap.gray['300'],
			neutralDark: colourMap.gray['800'],
		},
		intent: {
			primary: {
				background: {
					standard: colourMap.green['600'],
					mild: colourMap.green['200'],
					strong: colourMap.green['700'],
				},
				foreground: colourMap.white,
				border: colourMap.green['900'],
			},
			brand: {
				background: {
					standard: colourMap.green['700'],
					mild: colourMap.green['200'],
					strong: colourMap.green['900'],
				},
				foreground: colourMap.white,
				border: colourMap.gray['900'],
			},
			secondary: {
				background: {
					standard: colourMap.white,
					mild: colourMap.white,
					strong: colourMap.gray['200'],
				},
				foreground: secondaryForeground,
				border: colourMap.gray['300'],
			},
			shine: {
				background: {
					standard: colourMap.gray['200'],
					mild: colourMap.gray['100'],
					strong: colourMap.gray['300'],
				},
				foreground: colourMap.yellow['500'],
				border: colourMap.gray['300'],
			},
			danger: {
				background: {
					standard: colourMap.red['600'],
					mild: colourMap.red['100'],
					strong: colourMap.red['800'],
				},
				foreground: colourMap.white,
				border: colourMap.red['800'],
			},
			warning: {
				background: {
					standard: colourMap.yellow['800'],
					mild: colourMap.yellow['100'],
					strong: colourMap.yellow['900'],
				},
				foreground: colourMap.white,
				border: colourMap.yellow['900'],
			},
			neutral: {
				background: {
					standard: colourMap.gray['700'],
					mild: colourMap.gray['200'],
					strong: colourMap.gray['900'],
				},
				foreground: colourMap.white,
				border: colourMap.gray['900'],
			},
			success: {
				background: {
					standard: colourMap.green['700'],
					mild: colourMap.green['200'],
					strong: colourMap.green['900'],
				},
				foreground: colourMap.white,
				border: colourMap.green['900'],
			},
			information: {
				background: {
					standard: colourMap.blue['800'],
					mild: colourMap.blue['200'],
					strong: colourMap.blue['900'],
				},
				foreground: colourMap.white,
				border: colourMap.blue['900'],
			},
		},
	},
	elevation: {
		none: 'none',
		'1': '0 1px 5px 0 rgba(0, 0, 0, 0.03), 0 2px 2px 0 rgba(0, 0, 0, 0.03), 0 3px 1px -2px rgba(0, 0, 0, 0.05)',
		'2': '0 1px 10px 0 rgba(0, 0, 0, 0.03),  0 4px 5px 0 rgba(0, 0, 0, 0.03),  0 2px 4px -1px rgba(0, 0, 0, 0.05)',
		'3': '0 3px 14px 2px rgba(0, 0, 0, 0.03),  0 8px 10px 1px rgba(0, 0, 0, 0.03),  0 5px 5px -3px rgba(0, 0, 0, 0.05)',
		'4': '0 6px 30px 5px rgba(0, 0, 0, 0.03), 0 16px 24px 2px rgba(0, 0, 0, 0.03), 0 8px 10px -5px rgba(0, 0, 0, 0.05)',
		'5': '0 9px 46px 8px rgba(0, 0, 0, 0.03), 0 24px 38px 3px rgba(0, 0, 0, 0.03), 0 11px 15px -7px rgba(0, 0, 0, 0.05)',
	},
	border: {
		width: {
			none: '0',
			'1': '1px',
			'2': '2px',
			'3': '4px',
		},
		colours: {
			light: colourMap.gray['200'],
			gray: colourMap.gray['300'],
			dark: colourMap.gray['900'],
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
		colour: {
			primary: colourMap.green['600'],
			secondary: colourMap.gray['700'],
			brand: colourMap.green['600'],
			shine: colourMap.yellow['500'],
			link: colourMap.blue['500'],
			dark: colourMap.gray['900'],
			white: colourMap.white,
			muted: colourMap.gray['400'],
			neutral: colourMap.gray['700'],
			light: colourMap.gray['600'],
			danger: colourMap.red['600'],
			warning: colourMap.yellow['800'],
			success: colourMap.green['600'],
			information: colourMap.blue['500'],
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
		overlayBg: '0.35',
	},
} satisfies ThemeTokens;
