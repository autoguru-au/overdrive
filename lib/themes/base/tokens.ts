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
export const globalTokens = {
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

/**
 * IN TRANSITION. remapped original namespaced tokens for reference. supercended by global theme/tokens
 */
export const tokens = {
	mode: 'light',
	body: {
		backgroundColour: overdriveTokens.body.backgroundColour,
		colour: overdriveTokens.body.colour,
	},
	contentWidth: {
		small: overdriveTokens.contentWidth.small,
		medium: overdriveTokens.contentWidth.medium,
		large: overdriveTokens.contentWidth.large,
	},
	space: {
		none: overdriveTokens.space.none,
		'1': overdriveTokens.space['1'],
		'2': overdriveTokens.space['2'],
		'3': overdriveTokens.space['3'],
		'4': overdriveTokens.space['4'],
		'5': overdriveTokens.space['5'],
		'6': overdriveTokens.space['6'],
		'7': overdriveTokens.space['7'],
		'8': overdriveTokens.space['8'],
		'9': overdriveTokens.space['9'],
	},
	color: {
		gamut: colourMap,
		surface: {
			body: overdriveTokens.color.surface.body,
			accent: overdriveTokens.color.surface.accent,
			hard: overdriveTokens.color.surface.hard,
			soft: overdriveTokens.color.surface.soft,
			success: overdriveTokens.color.surface.success,
			info: overdriveTokens.color.surface.info,
			danger: overdriveTokens.color.surface.danger,
			warning: overdriveTokens.color.surface.warning,
		},
		content: {
			onBody: overdriveTokens.color.content.onBody,
			onSurface: overdriveTokens.color.content.onSurface,
			accent: overdriveTokens.color.content.accent,
			hard: overdriveTokens.color.content.hard,
			soft: overdriveTokens.color.content.soft,
			info: overdriveTokens.color.content.info,
			danger: overdriveTokens.color.content.danger,
			success: overdriveTokens.color.content.success,
			warning: overdriveTokens.color.surface.warning,
		},
		interactive: {
			border: overdriveTokens.color.interactive.border,
			borderDisabled: overdriveTokens.color.interactive.borderDisabled,
			borderMuted: overdriveTokens.color.interactive.borderMuted,
			surfaceDisabled: overdriveTokens.color.interactive.surfaceDisabled,
			contentDisabled: overdriveTokens.color.interactive.contentDisabled,
			link: overdriveTokens.color.interactive.link,
			linkVisited: overdriveTokens.color.interactive.linkVisited,
			overlayBg: overdriveTokens.color.interactive.overlayBg,
			overlayContainer:
				overdriveTokens.color.interactive.overlayContainer,
			placeholder: overdriveTokens.color.interactive.placeholder,
			focusOutline: overdriveTokens.color.interactive.focusOutline,
		},
	},
	colours: {
		gamut: {
			...buildColourGamut(colourMapWithoutWhite),
			white: colourMap.white,
		},
		foreground: {
			body: overdriveTokens.color.gamut.gray['900'],
			link: overdriveTokens.color.gamut.blue['500'],
		},
		background: {
			body: overdriveTokens.color.gamut.white,
			light: overdriveTokens.color.gamut.gray['200'],
			neutral: overdriveTokens.color.gamut.gray['300'],
			neutralDark: overdriveTokens.color.gamut.gray['800'],
		},
		intent: {
			primary: {
				background: {
					standard: overdriveTokens.color.gamut.green['600'],
					mild: overdriveTokens.color.gamut.green['200'],
					strong: overdriveTokens.color.gamut.green['700'],
				},
				foreground: overdriveTokens.color.gamut.white,
				border: overdriveTokens.color.gamut.green['900'],
			},
			brand: {
				background: {
					standard: overdriveTokens.color.gamut.green['700'],
					mild: overdriveTokens.color.gamut.green['200'],
					strong: overdriveTokens.color.gamut.green['900'],
				},
				foreground: overdriveTokens.color.gamut.white,
				border: overdriveTokens.color.gamut.gray['900'],
			},
			secondary: {
				background: {
					standard: overdriveTokens.color.gamut.white,
					mild: overdriveTokens.color.gamut.white,
					strong: overdriveTokens.color.gamut.gray['200'],
				},
				foreground: secondaryForeground,
				border: overdriveTokens.color.gamut.gray['300'],
			},
			shine: {
				background: {
					standard: overdriveTokens.color.gamut.gray['200'],
					mild: overdriveTokens.color.gamut.gray['100'],
					strong: overdriveTokens.color.gamut.gray['300'],
				},
				foreground: overdriveTokens.color.gamut.yellow['500'],
				border: overdriveTokens.color.gamut.gray['300'],
			},
			danger: {
				background: {
					standard: overdriveTokens.color.gamut.red['600'],
					mild: overdriveTokens.color.gamut.red['100'],
					strong: overdriveTokens.color.gamut.red['800'],
				},
				foreground: overdriveTokens.color.gamut.white,
				border: overdriveTokens.color.gamut.red['800'],
			},
			warning: {
				background: {
					standard: overdriveTokens.color.gamut.yellow['800'],
					mild: overdriveTokens.color.gamut.yellow['100'],
					strong: overdriveTokens.color.gamut.yellow['900'],
				},
				foreground: overdriveTokens.color.gamut.white,
				border: overdriveTokens.color.gamut.yellow['900'],
			},
			neutral: {
				background: {
					standard: overdriveTokens.color.gamut.gray['700'],
					mild: overdriveTokens.color.gamut.gray['200'],
					strong: overdriveTokens.color.gamut.gray['900'],
				},
				foreground: overdriveTokens.color.gamut.white,
				border: overdriveTokens.color.gamut.gray['900'],
			},
			success: {
				background: {
					standard: overdriveTokens.color.gamut.green['700'],
					mild: overdriveTokens.color.gamut.green['200'],
					strong: overdriveTokens.color.gamut.green['900'],
				},
				foreground: overdriveTokens.color.gamut.white,
				border: overdriveTokens.color.gamut.green['900'],
			},
			information: {
				background: {
					standard: overdriveTokens.color.gamut.blue['800'],
					mild: overdriveTokens.color.gamut.blue['200'],
					strong: overdriveTokens.color.gamut.blue['900'],
				},
				foreground: overdriveTokens.color.gamut.white,
				border: overdriveTokens.color.gamut.blue['900'],
			},
		},
	},
	elevation: {
		none: overdriveTokens.elevation.none,
		'1': overdriveTokens.elevation['1'],
		'2': overdriveTokens.elevation['2'],
		'3': overdriveTokens.elevation['3'],
		'4': overdriveTokens.elevation['4'],
		'5': overdriveTokens.elevation['5'],
	},
	border: {
		width: {
			none: overdriveTokens.border.width.none,
			'1': overdriveTokens.border.width['1'],
			'2': overdriveTokens.border.width['2'],
			'3': overdriveTokens.border.width['3'],
		},
		colours: {
			light: overdriveTokens.color.gamut.gray['200'],
			gray: overdriveTokens.color.gamut.gray['300'],
			dark: overdriveTokens.color.gamut.gray['900'],
		},
		radius: {
			none: overdriveTokens.border.radius.none,
			min: overdriveTokens.border.radius.min,
			sm: overdriveTokens.border.radius.sm,
			md: overdriveTokens.border.radius.md,
			lg: overdriveTokens.border.radius.lg,
			xl: overdriveTokens.border.radius.xl,
			'2xl': overdriveTokens.border.radius['2xl'],
			'1': overdriveTokens.border.radius['1'],
			pill: overdriveTokens.border.radius.pill,
			full: overdriveTokens.border.radius.full,
		},
	},
	typography: {
		size: {
			'1': {
				fontSize: overdriveTokens.typography.size['1'].fontSize,
				lineHeight: overdriveTokens.typography.size['1'].lineHeight,
			},
			'2': {
				fontSize: overdriveTokens.typography.size['2'].fontSize,
				lineHeight: overdriveTokens.typography.size['2'].lineHeight,
			},
			'3': {
				fontSize: overdriveTokens.typography.size['3'].fontSize,
				lineHeight: overdriveTokens.typography.size['3'].lineHeight,
			},
			'4': {
				fontSize: overdriveTokens.typography.size['4'].fontSize,
				lineHeight: overdriveTokens.typography.size['4'].lineHeight,
			},
			'5': {
				fontSize: overdriveTokens.typography.size['5'].fontSize,
				lineHeight: overdriveTokens.typography.size['5'].lineHeight,
			},
			'6': {
				fontSize: overdriveTokens.typography.size['6'].fontSize,
				lineHeight: overdriveTokens.typography.size['6'].lineHeight,
			},
			'7': {
				fontSize: overdriveTokens.typography.size['7'].fontSize,
				lineHeight: overdriveTokens.typography.size['7'].lineHeight,
			},
			'8': {
				fontSize: overdriveTokens.typography.size['8'].fontSize,
				lineHeight: overdriveTokens.typography.size['8'].lineHeight,
			},
			'9': {
				fontSize: overdriveTokens.typography.size['9'].fontSize,
				lineHeight: overdriveTokens.typography.size['9'].lineHeight,
			},
		},
		colour: {
			primary: overdriveTokens.color.gamut.green['600'],
			secondary: overdriveTokens.color.gamut.gray['700'],
			brand: overdriveTokens.color.gamut.green['600'],
			shine: overdriveTokens.color.gamut.yellow['500'],
			link: overdriveTokens.color.gamut.blue['500'],
			dark: overdriveTokens.color.gamut.gray['900'],
			white: overdriveTokens.color.gamut.white,
			muted: overdriveTokens.color.gamut.gray['400'],
			neutral: overdriveTokens.color.gamut.gray['700'],
			light: overdriveTokens.color.gamut.gray['600'],
			danger: overdriveTokens.color.gamut.red['600'],
			warning: overdriveTokens.color.gamut.yellow['800'],
			success: overdriveTokens.color.gamut.green['600'],
			information: overdriveTokens.color.gamut.blue['500'],
		},
		fontFamily: overdriveTokens.typography.fontFamily,
		fontWeight: {
			normal: overdriveTokens.typography.fontWeight.normal,
			semiBold: overdriveTokens.typography.fontWeight.semiBold,
			bold: overdriveTokens.typography.fontWeight.bold,
		},
	},
	animation: {
		easing: {
			standard: overdriveTokens.animation.easing.standard,
			decelerate: overdriveTokens.animation.easing.decelerate,
			accelerate: overdriveTokens.animation.easing.accelerate,
		},
	},
	icon: {
		size: {
			small: overdriveTokens.icon.size.small,
			medium: overdriveTokens.icon.size.medium,
			large: overdriveTokens.icon.size.large,
		},
	},
	opacity: {
		overlayBg: overdriveTokens.opacity.overlayBg,
	},
} satisfies ThemeTokens;
