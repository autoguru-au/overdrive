import {
	createThemeContract,
	createGlobalThemeContract,
	style,
} from '@vanilla-extract/css';

import type { TokensFromContract } from './helpers';
import { buildColourGamut } from './makeTheme';

import type { ColourMap } from '.';

const colours = {
	black: {
		'900': 'color-gamut-black-900',
		'800': 'color-gamut-black-800',
		'700': 'color-gamut-black-700',
		'600': 'color-gamut-black-600',
		'500': 'color-gamut-black-500',
		'400': 'color-gamut-black-400',
		'300': 'color-gamut-black-300',
		'200': 'color-gamut-black-200',
		'100': 'color-gamut-black-100',
	},
	gray: {
		'900': 'color-gamut-gray-900',
		'800': 'color-gamut-gray-800',
		'700': 'color-gamut-gray-700',
		'600': 'color-gamut-gray-600',
		'500': 'color-gamut-gray-500',
		'400': 'color-gamut-gray-400',
		'300': 'color-gamut-gray-300',
		'200': 'color-gamut-gray-200',
		'100': 'color-gamut-gray-100',
	},
	green: {
		'900': 'color-gamut-green-900',
		'800': 'color-gamut-green-800',
		'700': 'color-gamut-green-700',
		'600': 'color-gamut-green-600',
		'500': 'color-gamut-green-500',
		'400': 'color-gamut-green-400',
		'300': 'color-gamut-green-300',
		'200': 'color-gamut-green-200',
		'100': 'color-gamut-green-100',
	},
	blue: {
		'900': 'color-gamut-blue-900',
		'800': 'color-gamut-blue-800',
		'700': 'color-gamut-blue-700',
		'600': 'color-gamut-blue-600',
		'500': 'color-gamut-blue-500',
		'400': 'color-gamut-blue-400',
		'300': 'color-gamut-blue-300',
		'200': 'color-gamut-blue-200',
		'100': 'color-gamut-blue-100',
	},
	yellow: {
		'900': 'color-gamut-yellow-900',
		'800': 'color-gamut-yellow-800',
		'700': 'color-gamut-yellow-700',
		'600': 'color-gamut-yellow-600',
		'500': 'color-gamut-yellow-500',
		'400': 'color-gamut-yellow-400',
		'300': 'color-gamut-yellow-300',
		'200': 'color-gamut-yellow-200',
		'100': 'color-gamut-yellow-100',
	},
	red: {
		'900': 'color-gamut-red-900',
		'800': 'color-gamut-red-800',
		'700': 'color-gamut-red-700',
		'600': 'color-gamut-red-600',
		'500': 'color-gamut-red-500',
		'400': 'color-gamut-red-400',
		'300': 'color-gamut-red-300',
		'200': 'color-gamut-red-200',
		'100': 'color-gamut-red-100',
	},
} satisfies ColourMap;

export type Colours = typeof colours;

const coloursWithWhite = {
	...colours,
	white: 'color-gamut-white',
} satisfies ColourMap;

/**
 * Overdrive master theme contract is IN TRANSISTION. Where values are present, they create a global CSS var
 * mapping for the corresponding key. Where values are null, these keys are being phased out and do not exist
 * in global CSS vars.
 */
const THEME_CONTRACT = {
	mode: 'mode',
	body: {
		backgroundColour: 'body-background-colour',
		colour: 'body-colour',
	},
	contentWidth: {
		small: 'content-width-sm',
		medium: 'content-width-md',
		large: 'content-width-lg',
	},
	space: {
		'1': 'space-1',
		'2': 'space-2',
		'3': 'space-3',
		'4': 'space-4',
		'5': 'space-5',
		'6': 'space-6',
		'7': 'space-7',
		'8': 'space-8',
		'9': 'space-9',
		none: 'space-none',
	},
	// new colour token structure 2025
	color: {
		gamut: coloursWithWhite,
		surface: {
			body: 'color-surface-body',
			accent: 'color-surface-accent',
			hard: 'color-surface-hard',
			soft: 'color-surface-soft',
			success: 'color-surface-success',
			info: 'color-surface-info',
			danger: 'color-surface-danger',
			warning: 'color-surface-warning',
		},
		content: {
			onBody: 'color-content-on-body',
			onSurface: 'color-content-on-surface',
			accent: 'color-content-accent',
			hard: 'color-content-hard',
			soft: 'color-content-soft',
			info: 'color-content-info',
			danger: 'color-content-danger',
			success: 'color-content-success',
			warning: 'color-content-warning',
		},
		interactive: {
			border: 'color-interactive-border',
			borderMuted: 'color-interactive-border-muted',
			borderDisabled: 'color-interactive-border-disabed',
			surfaceDisabled: 'color-interactive-surface-disabled',
			contentDisabled: 'color-interactive-content-disabled',
			link: 'color-interactive-link',
			linkVisited: 'color-interactive-link-visited',
			overlayBg: 'color-interactive-overlay-bg',
			overlayContainer: 'color-interactive-overlay-container',
			placeholder: 'color-interactive-placeholder',
			focusOutline: 'color-interactive-focus-outline',
		},
	},
	// existing colours for compatability
	colours: {
		gamut: {
			...buildColourGamut(colours),
			white: 'color-gamut-white',
		},
		foreground: {
			body: null,
			link: null,
		},
		background: {
			body: null,
			light: null,
			neutral: null,
			neutralDark: null,
		},
		intent: {
			primary: {
				background: {
					standard: null,
					mild: null,
					strong: null,
				},
				foreground: null,
				border: null,
			},
			brand: {
				background: {
					standard: null,
					mild: null,
					strong: null,
				},
				foreground: null,
				border: null,
			},
			secondary: {
				background: {
					standard: null,
					mild: null,
					strong: null,
				},
				foreground: null,
				border: null,
			},
			shine: {
				background: {
					standard: null,
					mild: null,
					strong: null,
				},
				foreground: null,
				border: null,
			},
			danger: {
				background: {
					standard: null,
					mild: null,
					strong: null,
				},
				foreground: null,
				border: null,
			},
			warning: {
				background: {
					standard: null,
					mild: null,
					strong: null,
				},
				foreground: null,
				border: null,
			},
			neutral: {
				background: {
					standard: null,
					mild: null,
					strong: null,
				},
				foreground: null,
				border: null,
			},
			success: {
				background: {
					standard: null,
					mild: null,
					strong: null,
				},
				foreground: null,
				border: null,
			},
			information: {
				background: {
					standard: null,
					mild: null,
					strong: null,
				},
				foreground: null,
				border: null,
			},
		},
	},
	elevation: {
		'1': 'elevation-1',
		'2': 'elevation-2',
		'3': 'elevation-3',
		'4': 'elevation-4',
		'5': 'elevation-5',
		none: 'elevation-none',
	},
	border: {
		width: {
			'1': 'border-width-1',
			'2': 'border-width-2',
			'3': 'border-width-3',
			none: 'border-width-none',
		},
		colours: {
			light: null,
			gray: null,
			dark: null,
		},
		radius: {
			none: 'border-radius-none',
			min: 'border-radius-min',
			sm: 'border-radius-sm',
			md: 'border-radius-md',
			lg: 'border-radius-lg',
			xl: 'border-radius-xl',
			'2xl': 'border-radius-2xl',
			'1': 'border-radius-1',
			pill: 'border-radius-pill',
			full: 'border-radius-full',
		},
	},
	typography: {
		size: {
			'1': {
				fontSize: 'typography-size-1-font-size',
				lineHeight: 'typography-size-1-line-height',
			},
			'2': {
				fontSize: 'typography-size-2-font-size',
				lineHeight: 'typography-size-2-line-height',
			},
			'3': {
				fontSize: 'typography-size-3-font-size',
				lineHeight: 'typography-size-3-line-height',
			},
			'4': {
				fontSize: 'typography-size-4-font-size',
				lineHeight: 'typography-size-4-line-height',
			},
			'5': {
				fontSize: 'typography-size-5-font-size',
				lineHeight: 'typography-size-5-line-height',
			},
			'6': {
				fontSize: 'typography-size-6-font-size',
				lineHeight: 'typography-size-6-line-height',
			},
			'7': {
				fontSize: 'typography-size-7-font-size',
				lineHeight: 'typography-size-7-line-height',
			},
			'8': {
				fontSize: 'typography-size-8-font-size',
				lineHeight: 'typography-size-8-line-height',
			},
			'9': {
				fontSize: 'typography-size-9-font-size',
				lineHeight: 'typography-size-9-line-height',
			},
		},
		// phase out: typography specific colours for backwards compatibility
		colour: {
			primary: null,
			brand: null,
			secondary: null,
			shine: null,
			link: null,
			dark: null,
			white: null,
			muted: null,
			neutral: null,
			light: null,
			danger: null,
			warning: null,
			success: null,
			information: null,
		},
		fontFamily: 'font-family',
		fontWeight: {
			normal: 'font-weight-normal',
			semiBold: 'font-weight-semi-bold',
			bold: 'font-weight-bold',
		},
	},
	animation: {
		easing: {
			standard: 'animation-easing-standard',
			decelerate: 'animation-easing-decelerate',
			accelerate: 'animation-easing-accelerate',
		},
	},
	icon: {
		size: {
			small: 'icon-size-sm',
			medium: 'icon-size-md',
			large: 'icon-size-lg',
		},
	},
	opacity: {
		overlayBg: 'opacity-overlay-bg',
	},
};

/**
 * Use theme contract vars for namespaced variables in use by the original themes and components.
 * *Prefer `overdriveTokens` which use global css vars*
 */
export const themeContractVars = createThemeContract(THEME_CONTRACT);
/**
 * Use overdrive tokens for global css variables. This is the preferred approach and themes are in
 * transition to use globals.
 */
export const overdriveTokens = createGlobalThemeContract(
	THEME_CONTRACT,
	(cssVarName, path) =>
		cssVarName === null ? `od-${path.join('-')}` : `od-${cssVarName}`,
);

export type ThemeTokens = TokensFromContract<typeof themeContractVars>;

/** *Reccomend replace usage*: `container` should be impored from `lib/reset/reset.css` */
export const container = style({
	fontFamily: overdriveTokens.typography.fontFamily,
	fontSize: overdriveTokens.typography.size[4].fontSize,
	fontWeight: overdriveTokens.typography.fontWeight.normal,
	lineHeight: overdriveTokens.typography.size[4].lineHeight,
});
