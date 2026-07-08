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
		'0': '2px',
		'1': '4px',
		'2': '8px',
		'3': '12px',
		'4': '16px',
		'5': '20px',
		'6': '24px',
		'7': '32px',
		'8': '48px',
		'9': '96px',
		'40px': '40px',
		'64px': '64px',
		'80px': '80px',
		none: '0px',
	},
	color: {
		/**
		 * TRANSITION BRIDGE — the semantic `color.gamut` aliases the LEGACY
		 * `colours.gamut` CSS vars instead of holding raw hex. Themes and MFE
		 * tenants that override ONLY `colours.gamut` (flat_red, tenant custom
		 * palettes) therefore automatically drive the semantic gamut too. In the
		 * base theme the computed values are byte-identical to the raw hex
		 * (`colours.gamut` resolves to `colourMap`); the only thing that changes
		 * is that the semantic gamut now points at the legacy var rather than
		 * inlining the hex. This alias flips back to raw values at the DS-2026
		 * major (W4-P4), once tenants set the semantic gamut directly.
		 */
		gamut: {
			gray: {
				'900': overdriveTokens.colours.gamut.gray900,
				'800': overdriveTokens.colours.gamut.gray800,
				'700': overdriveTokens.colours.gamut.gray700,
				'600': overdriveTokens.colours.gamut.gray600,
				'500': overdriveTokens.colours.gamut.gray500,
				'400': overdriveTokens.colours.gamut.gray400,
				'300': overdriveTokens.colours.gamut.gray300,
				'200': overdriveTokens.colours.gamut.gray200,
				'100': overdriveTokens.colours.gamut.gray100,
			},
			green: {
				'900': overdriveTokens.colours.gamut.green900,
				'800': overdriveTokens.colours.gamut.green800,
				'700': overdriveTokens.colours.gamut.green700,
				'600': overdriveTokens.colours.gamut.green600,
				'500': overdriveTokens.colours.gamut.green500,
				'400': overdriveTokens.colours.gamut.green400,
				'300': overdriveTokens.colours.gamut.green300,
				'200': overdriveTokens.colours.gamut.green200,
				'100': overdriveTokens.colours.gamut.green100,
			},
			blue: {
				'900': overdriveTokens.colours.gamut.blue900,
				'800': overdriveTokens.colours.gamut.blue800,
				'700': overdriveTokens.colours.gamut.blue700,
				'600': overdriveTokens.colours.gamut.blue600,
				'500': overdriveTokens.colours.gamut.blue500,
				'400': overdriveTokens.colours.gamut.blue400,
				'300': overdriveTokens.colours.gamut.blue300,
				'200': overdriveTokens.colours.gamut.blue200,
				'100': overdriveTokens.colours.gamut.blue100,
			},
			yellow: {
				'900': overdriveTokens.colours.gamut.yellow900,
				'800': overdriveTokens.colours.gamut.yellow800,
				'700': overdriveTokens.colours.gamut.yellow700,
				'600': overdriveTokens.colours.gamut.yellow600,
				'500': overdriveTokens.colours.gamut.yellow500,
				'400': overdriveTokens.colours.gamut.yellow400,
				'300': overdriveTokens.colours.gamut.yellow300,
				'200': overdriveTokens.colours.gamut.yellow200,
				'100': overdriveTokens.colours.gamut.yellow100,
			},
			red: {
				'900': overdriveTokens.colours.gamut.red900,
				'800': overdriveTokens.colours.gamut.red800,
				'700': overdriveTokens.colours.gamut.red700,
				'600': overdriveTokens.colours.gamut.red600,
				'500': overdriveTokens.colours.gamut.red500,
				'400': overdriveTokens.colours.gamut.red400,
				'300': overdriveTokens.colours.gamut.red300,
				'200': overdriveTokens.colours.gamut.red200,
				'100': overdriveTokens.colours.gamut.red100,
			},
			white: overdriveTokens.colours.gamut.white,
		},
		surface: {
			page: colourMap.white,
			hard: colourMap.gray['900'],
			soft: colourMap.gray['700'],
			accent: colourMap.green['400'],
			success: colourMap.green['700'],
			info: colourMap.blue['600'],
			danger: colourMap.red['600'],
			warning: colourMap.yellow['800'],
		},
		content: {
			normal: colourMap.gray['900'],
			soft: colourMap.gray['700'],
			inverse: colourMap.white,
			info: colourMap.blue['900'],
			danger: colourMap.red['800'],
			success: colourMap.green['900'],
			warning: colourMap.yellow['800'],
		},
		interactive: {
			border: colourMap.gray['300'],
			borderMuted: colourMap.gray['200'],
			borderDisabled: colourMap.gray['100'],
			surfaceDisabled: colourMap.gray['400'],
			contentDisabled: colourMap.gray['600'],
			link: colourMap.green['600'],
			linkVisited: colourMap.green['700'],
			overlayBg: colourMap.gray['300'],
			overlayContainer: colourMap.white,
			placeholder: colourMap.gray['700'],
			focusOutline: colourMap.blue['500'],
		},
		foreground: {
			primary: colourMap.gray['900'], // #212338
			secondary: colourMap.gray['700'], // #484c5f
			reverse: colourMap.white, // #ffffff
			tertiaryInactive: colourMap.gray['400'], // #8f95a1
			tertiaryInactiveLight: colourMap.gray['300'], // #d4d9dd
		},
		background: {
			default: colourMap.white, // #ffffff
			reverse: colourMap.gray['900'], // #212338
			inactive: colourMap.gray['300'], // #d4d9dd
			emphasisInactive: colourMap.gray['200'], // #eef0f2
		},
		border: {
			default: colourMap.gray['300'], // #d4d9dd
			emphasis: colourMap.gray['400'], // #8f95a1
			selected: colourMap.gray['600'], // #5c6172
			strong: colourMap.gray['900'], // #212338
		},
		info: {
			text: colourMap.blue['900'], // #0d47a1
			foreground: colourMap.blue['600'], // #0d54e5
			background: '#e1edfe', // Figma info surface — NOT blue-200 (#bad4ff)
		},
		success: {
			text: colourMap.green['900'], // #00574c
			foreground: colourMap.green['600'], // #01c68c
			backgroundDark: colourMap.green['800'], // #18856f
			backgroundLight: colourMap.green['200'], // #e3f8f0
		},
		warning: {
			text: colourMap.red['800'], // #96110e (Figma warning/text is RED, not yellow)
			foreground: colourMap.yellow['800'], // #f69a1f
			backgroundDark: colourMap.yellow['500'], // #ffc001
			backgroundLight: colourMap.yellow['200'], // #ffedb5
		},
		alert: {
			text: colourMap.red['800'], // #96110e
			foreground: colourMap.red['600'], // #d42b26
			background: colourMap.red['200'], // #ffd4d4
		},
		button: {
			primary: {
				solid: {
					default: colourMap.green['300'], // #71edc2
					hover: colourMap.green['400'], // #36e5aa
					pressed: colourMap.green['600'], // #01c68c
					border: colourMap.green['600'], // #01c68c
				},
				outlined: {
					border: colourMap.green['800'], // #18856f
					text: colourMap.green['800'], // #18856f
				},
			},
			critical: {
				solid: {
					default: colourMap.red['500'], // #e12e28
				},
			},
		},
	},
	colours: {
		gamut: {
			...buildColourGamut(colourMapWithoutWhite),
			white: colourMap.white,
		},
		foreground: {
			body: colourMap.gray['900'],
			link: colourMap.green['600'],
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
		z1: '0px 1px 5px 0px rgba(0,0,0,0.03), 0px 2px 2px 0px rgba(0,0,0,0.03), 0px 3px 1px -2px rgba(0,0,0,0.05)',
		z2: '0px 1px 10px 0px rgba(0,0,0,0.03), 0px 4px 5px 0px rgba(0,0,0,0.03), 0px 2px 4px -1px rgba(0,0,0,0.05)',
		z3: '0px 3px 14px 2px rgba(0,0,0,0.03), 0px 8px 10px 1px rgba(0,0,0,0.03), 0px 5px 5px -3px rgba(0,0,0,0.05)',
		z4: '0px 6px 30px 5px rgba(0,0,0,0.03), 0px 16px 24px 2px rgba(0,0,0,0.03), 0px 8px 10px -5px rgba(0,0,0,0.05)',
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
			xsmall: '4px',
			small: '8px',
			medium: '12px',
			large: '16px',
			xlarge: '20px',
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
			// Design System 2026 named text styles (opt-in) — line heights
			// are ratio-derived: 1.25 for headings, 1.4 for paragraphs
			h1: {
				fontSize: '40px',
				lineHeight: '50px',
			},
			h2: {
				fontSize: '32px',
				lineHeight: '40px',
			},
			h3: {
				fontSize: '24px',
				lineHeight: '30px',
			},
			h4: {
				fontSize: '20px',
				lineHeight: '25px',
			},
			p1: {
				fontSize: '16px',
				lineHeight: '22.4px',
			},
			p2: {
				fontSize: '14px',
				lineHeight: '19.6px',
			},
			p3: {
				fontSize: '12px',
				lineHeight: '16.8px',
			},
			p4: {
				fontSize: '10px',
				lineHeight: '14px',
			},
		},
		colour: {
			primary: colourMap.green['600'],
			secondary: colourMap.gray['700'],
			brand: colourMap.green['600'],
			shine: colourMap.yellow['500'],
			link: colourMap.green['600'],
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
		fontFamilyMono: "'Courier New', Courier, monospace",
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
