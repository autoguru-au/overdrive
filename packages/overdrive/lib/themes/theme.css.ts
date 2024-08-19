import { createThemeContract, style } from '@vanilla-extract/css';

import { buildColourGamut } from './makeTheme';
import { ColourMap } from './tokens';

const colours: ColourMap = {
	black: {
		900: '',
		800: '',
		700: '',
		600: '',
		500: '',
		400: '',
		300: '',
		200: '',
		100: '',
	},

	gray: {
		900: '',
		800: '',
		700: '',
		600: '',
		500: '',
		400: '',
		300: '',
		200: '',
		100: '',
	},

	green: {
		900: '',
		800: '',
		700: '',
		600: '',
		500: '',
		400: '',
		300: '',
		200: '',
		100: '',
	},

	blue: {
		900: '',
		800: '',
		700: '',
		600: '',
		500: '',
		400: '',
		300: '',
		200: '',
		100: '',
	},

	yellow: {
		900: '',
		800: '',
		700: '',
		600: '',
		500: '',
		400: '',
		300: '',
		200: '',
		100: '',
	},

	red: {
		900: '',
		800: '',
		700: '',
		600: '',
		500: '',
		400: '',
		300: '',
		200: '',
		100: '',
	},
};

export const themeContractVars = createThemeContract({
	mode: '',
	body: {
		backgroundColour: '',
		colour: '',
	},
	contentWidth: {
		small: '',
		large: '',
		medium: '',
	},
	space: {
		'1': '',
		'2': '',
		'3': '',
		'4': '',
		'5': '',
		'6': '',
		'7': '',
		'8': '',
		'9': '',
		none: '',
	},
	colours: {
		gamut: {
			...buildColourGamut(colours),
			white: '',
		},
		foreground: {
			body: '',
			link: '',
		},
		background: {
			body: '',
			light: '',
			neutral: '',
			neutralDark: '',
		},
		intent: {
			primary: {
				background: {
					standard: '',
					mild: '',
					strong: '',
				},
				foreground: '',
				border: '',
			},
			brand: {
				background: {
					standard: '',
					mild: '',
					strong: '',
				},
				foreground: '',
				border: '',
			},
			secondary: {
				background: {
					standard: '',
					mild: '',
					strong: '',
				},
				foreground: '',
				border: '',
			},
			shine: {
				background: {
					standard: '',
					mild: '',
					strong: '',
				},
				foreground: '',
				border: '',
			},
			danger: {
				background: {
					standard: '',
					mild: '',
					strong: '',
				},
				foreground: '',
				border: '',
			},
			warning: {
				background: {
					standard: '',
					mild: '',
					strong: '',
				},
				foreground: '',
				border: '',
			},
			neutral: {
				background: {
					standard: '',
					mild: '',
					strong: '',
				},
				foreground: '',
				border: '',
			},
			success: {
				background: {
					standard: '',
					mild: '',
					strong: '',
				},
				foreground: '',
				border: '',
			},
			information: {
				background: {
					standard: '',
					mild: '',
					strong: '',
				},
				foreground: '',
				border: '',
			},
		},
	},
	elevation: {
		none: '',
		'1': '',
		'2': '',
		'3': '',
		'4': '',
		'5': '',
	},
	border: {
		width: {
			none: '',
			'1': '',
			'2': '',
			'3': '',
		},
		colours: {
			light: '',
			gray: '',
			dark: '',
		},
		radius: {
			none: '',
			pill: '',
			full: '',
			'1': '',
			min: '',
		},
	},
	typography: {
		size: {
			'1': {
				fontSize: '',
				lineHeight: '',
			},
			'2': {
				fontSize: '',
				lineHeight: '',
			},
			'3': {
				fontSize: '',
				lineHeight: '',
			},
			'4': {
				fontSize: '',
				lineHeight: '',
			},
			'5': {
				fontSize: '',
				lineHeight: '',
			},
			'6': {
				fontSize: '',
				lineHeight: '',
			},
			'7': {
				fontSize: '',
				lineHeight: '',
			},
			'8': {
				fontSize: '',
				lineHeight: '',
			},
			'9': {
				fontSize: '',
				lineHeight: '',
			},
		},
		colour: {
			primary: '',
			brand:'',
			secondary: '',
			shine: '',
			link: '',
			dark: '',
			white: '',
			muted: '',
			neutral: '',
			light: '',
			danger: '',
			warning: '',
			success: '',
			information: '',
		},
		fontWeight: {
			normal: '',
			semiBold: '',
			bold: '',
		},
	},
	animation: {
		easing: {
			standard: '',
			decelerate: '',
			accelerate: '',
		},
	},
	icon: {
		size: {
			small: '',
			medium: '',
			large: '',
		},
	},
});

export const container = style({
	boxSizing: 'border-box',
	font: '400 16px/22px AvertaStandard, system-ui, sans-serif',
});
