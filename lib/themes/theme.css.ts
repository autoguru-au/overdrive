import {
	createThemeContract,
	createGlobalThemeContract,
	style,
} from '@vanilla-extract/css';

import { buildColourGamut } from './makeTheme';
import { ColourMap } from './tokens';

const colours: ColourMap = {
	black: {
		'900': 'od-color-gamut-black-900',
		'800': 'od-color-gamut-black-800',
		'700': 'od-color-gamut-black-700',
		'600': 'od-color-gamut-black-600',
		'500': 'od-color-gamut-black-500',
		'400': 'od-color-gamut-black-400',
		'300': 'od-color-gamut-black-300',
		'200': 'od-color-gamut-black-200',
		'100': 'od-color-gamut-black-100',
	},

	gray: {
		'900': 'od-color-gamut-gray-900',
		'800': 'od-color-gamut-gray-800',
		'700': 'od-color-gamut-gray-700',
		'600': 'od-color-gamut-gray-600',
		'500': 'od-color-gamut-gray-500',
		'400': 'od-color-gamut-gray-400',
		'300': 'od-color-gamut-gray-300',
		'200': 'od-color-gamut-gray-200',
		'100': 'od-color-gamut-gray-100',
	},

	green: {
		'900': 'od-color-gamut-green-900',
		'800': 'od-color-gamut-green-800',
		'700': 'od-color-gamut-green-700',
		'600': 'od-color-gamut-green-600',
		'500': 'od-color-gamut-green-500',
		'400': 'od-color-gamut-green-400',
		'300': 'od-color-gamut-green-300',
		'200': 'od-color-gamut-green-200',
		'100': 'od-color-gamut-green-100',
	},

	blue: {
		'900': 'od-color-gamut-blue-900',
		'800': 'od-color-gamut-blue-800',
		'700': 'od-color-gamut-blue-700',
		'600': 'od-color-gamut-blue-600',
		'500': 'od-color-gamut-blue-500',
		'400': 'od-color-gamut-blue-400',
		'300': 'od-color-gamut-blue-300',
		'200': 'od-color-gamut-blue-200',
		'100': 'od-color-gamut-blue-100',
	},

	yellow: {
		'900': 'od-color-gamut-yellow-900',
		'800': 'od-color-gamut-yellow-800',
		'700': 'od-color-gamut-yellow-700',
		'600': 'od-color-gamut-yellow-600',
		'500': 'od-color-gamut-yellow-500',
		'400': 'od-color-gamut-yellow-400',
		'300': 'od-color-gamut-yellow-300',
		'200': 'od-color-gamut-yellow-200',
		'100': 'od-color-gamut-yellow-100',
	},

	red: {
		'900': 'od-color-gamut-red-900',
		'800': 'od-color-gamut-red-800',
		'700': 'od-color-gamut-red-700',
		'600': 'od-color-gamut-red-600',
		'500': 'od-color-gamut-red-500',
		'400': 'od-color-gamut-red-400',
		'300': 'od-color-gamut-red-300',
		'200': 'od-color-gamut-red-200',
		'100': 'od-color-gamut-red-100',
	},
};

const THEME_CONTRACT = {
	mode: 'od-mode',
	body: {
		backgroundColour: 'od-body-background-colour',
		colour: 'od-body-colour',
	},
	contentWidth: {
		small: 'od-content-width-sm',
		medium: 'od-content-width-md',
		large: 'od-content-width-lg',
	},
	space: {
		'1': 'od-space-1',
		'2': 'od-space-2',
		'3': 'od-space-3',
		'4': 'od-space-4',
		'5': 'od-space-5',
		'6': 'od-space-6',
		'7': 'od-space-7',
		'8': 'od-space-8',
		'9': 'od-space-9',
		none: 'od-space-none',
	},
	colours: {
		gamut: {
			...buildColourGamut(colours),
			white: 'od-color-gamut-white',
		},
		foreground: {
			body: 'od-color-foreground-body',
			link: 'od-color-foreground-link',
		},
		background: {
			body: 'od-color-background-body',
			light: 'od-color-background-light',
			neutral: 'od-color-background-neutral',
			neutralDark: 'od-color-background-neutral-dark',
		},
		intent: {
			primary: {
				background: {
					standard: 'od-color-intent-primary-background-standard',
					mild: 'od-color-intent-primary-background-mild',
					strong: 'od-color-intent-primary-background-strong',
				},
				foreground: 'od-color-intent-primary-foreground',
				border: 'od-color-intent-primary-border',
			},
			brand: {
				background: {
					standard: 'od-color-intent-brand-background-standard',
					mild: 'od-color-intent-brand-background-mild',
					strong: 'od-color-intent-brand-background-strong',
				},
				foreground: 'od-color-intent-brand-foreground',
				border: 'od-color-intent-brand-border',
			},
			secondary: {
				background: {
					standard: 'od-color-intent-secondary-background-standard',
					mild: 'od-color-intent-secondary-background-mild',
					strong: 'od-color-intent-secondary-background-strong',
				},
				foreground: 'od-color-intent-secondary-foreground',
				border: 'od-color-intent-secondary-border',
			},
			shine: {
				background: {
					standard: 'od-color-intent-shine-background-standard',
					mild: 'od-color-intent-shine-background-mild',
					strong: 'od-color-intent-shine-background-strong',
				},
				foreground: 'od-color-intent-shine-foreground',
				border: 'od-color-intent-shine-border',
			},
			danger: {
				background: {
					standard: 'od-color-intent-danger-background-standard',
					mild: 'od-color-intent-danger-background-mild',
					strong: 'od-color-intent-danger-background-strong',
				},
				foreground: 'od-color-intent-danger-foreground',
				border: 'od-color-intent-danger-border',
			},
			warning: {
				background: {
					standard: 'od-color-intent-warning-background-standard',
					mild: 'od-color-intent-warning-background-mild',
					strong: 'od-color-intent-warning-background-strong',
				},
				foreground: 'od-color-intent-warning-foreground',
				border: 'od-color-intent-warning-border',
			},
			neutral: {
				background: {
					standard: 'od-color-intent-neutral-background-standard',
					mild: 'od-color-intent-neutral-background-mild',
					strong: 'od-color-intent-neutral-background-strong',
				},
				foreground: 'od-color-intent-neutral-foreground',
				border: 'od-color-intent-neutral-border',
			},
			success: {
				background: {
					standard: 'od-color-intent-success-background-standard',
					mild: 'od-color-intent-success-background-mild',
					strong: 'od-color-intent-success-background-strong',
				},
				foreground: 'od-color-intent-success-foreground',
				border: 'od-color-intent-success-border',
			},
			information: {
				background: {
					standard: 'od-color-intent-information-background-standard',
					mild: 'od-color-intent-information-background-mild',
					strong: 'od-color-intent-information-background-strong',
				},
				foreground: 'od-color-intent-information-foreground',
				border: 'od-color-intent-information-border',
			},
		},
	},
	elevation: {
		'1': 'od-elevation-1',
		'2': 'od-elevation-2',
		'3': 'od-elevation-3',
		'4': 'od-elevation-4',
		'5': 'od-elevation-5',
		none: 'od-elevation-none',
	},
	border: {
		width: {
			'1': 'od-border-width-1',
			'2': 'od-border-width-2',
			'3': 'od-border-width-3',
			none: 'od-border-width-none',
		},
		colours: {
			light: 'od-border-colours-light',
			gray: 'od-border-colours-gray',
			dark: 'od-border-colours-dark',
		},
		radius: {
			none: 'od-border-radius-none',
			min: 'od-border-radius-min',
			sm: 'od-border-radius-sm',
			md: 'od-border-radius-md',
			lg: 'od-border-radius-lg',
			xl: 'od-border-radius-xl',
			'2xl': 'od-border-radius-2xl',
			'1': 'od-border-radius-1',
			pill: 'od-border-radius-pill',
			full: 'od-border-radius-full',
		},
	},
	typography: {
		size: {
			'1': {
				fontSize: 'od-typography-size-1-font-size',
				lineHeight: 'od-typography-size-1-line-height',
			},
			'2': {
				fontSize: 'od-typography-size-2-font-size',
				lineHeight: 'od-typography-size-2-line-height',
			},
			'3': {
				fontSize: 'od-typography-size-3-font-size',
				lineHeight: 'od-typography-size-3-line-height',
			},
			'4': {
				fontSize: 'od-typography-size-4-font-size',
				lineHeight: 'od-typography-size-4-line-height',
			},
			'5': {
				fontSize: 'od-typography-size-5-font-size',
				lineHeight: 'od-typography-size-5-line-height',
			},
			'6': {
				fontSize: 'od-typography-size-6-font-size',
				lineHeight: 'od-typography-size-6-line-height',
			},
			'7': {
				fontSize: 'od-typography-size-7-font-size',
				lineHeight: 'od-typography-size-7-line-height',
			},
			'8': {
				fontSize: 'od-typography-size-8-font-size',
				lineHeight: 'od-typography-size-8-line-height',
			},
			'9': {
				fontSize: 'od-typography-size-9-font-size',
				lineHeight: 'od-typography-size-9-line-height',
			},
		},
		colour: {
			primary: 'od-typography-colour-primary',
			brand: 'od-typography-colour-brand',
			secondary: 'od-typography-colour-secondar',
			shine: 'od-typography-colour-shine',
			link: 'od-typography-colour-link',
			dark: 'od-typography-colour-dark',
			white: 'od-typography-colour-white',
			muted: 'od-typography-colour-muted',
			neutral: 'od-typography-colour-neutral',
			light: 'od-typography-colour-light',
			danger: 'od-typography-colour-danger',
			warning: 'od-typography-colour-warning',
			success: 'od-typography-colour-success',
			information: 'od-typography-colour-information',
		},
		fontFamily: 'od-typography-font-family',
		fontWeight: {
			normal: 'od-typography-font-weight-normal',
			semiBold: 'od-typography-font-weight-semi-bold',
			bold: 'od-typography-font-weight-bold',
		},
	},
	animation: {
		easing: {
			standard: 'od-animation-easing-standard',
			decelerate: 'od-animation-easing-decelerate',
			accelerate: 'od-animation-easing-accelerate',
		},
	},
	icon: {
		size: {
			small: 'od-icon-size-sm',
			medium: 'od-icon-size-md',
			large: 'od-icon-size-lg',
		},
	},
};

export const themeContractVars = createThemeContract(THEME_CONTRACT);
export const globalTokens = createGlobalThemeContract(THEME_CONTRACT);

/** *Reccomend replace usage*: `container` should be impored from `lib/reset/reset.css` */
export const container = style({
	fontFamily: globalTokens.typography.fontFamily,
	fontSize: globalTokens.typography.size[4].fontSize,
	fontWeight: globalTokens.typography.fontWeight.normal,
	lineHeight: globalTokens.typography.size[4].lineHeight,
});
