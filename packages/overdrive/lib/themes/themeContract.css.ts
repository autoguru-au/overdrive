import { createThemeContract } from '@vanilla-extract/css';
import { ColourMap, Tokens } from './tokens';
import { buildColourGamut } from './makeTheme';

/* tslint:disable */
// @ts-nocheck
const contractColours: ColourMap = {
	gray: {
		'900': null,
		'800': null,
		'700': null,
		'600': null,
		'500': null,
		'400': null,
		'300': null,
		'200': null,
		'100': null,
	},

	green: {
		'900': null,
		'800': null,
		'700': null,
		'600': null,
		'500': null,
		'400': null,
		'300': null,
		'200': null,
		'100': null,
	},

	blue: {
		'900': null,
		'800': null,
		'700': null,
		'600': null,
		'500': null,
		'400': null,
		'300': null,
		'200': null,
		'100': null,
	},

	yellow: {
		'900': null,
		'800': null,
		'700': null,
		'600': null,
		'500': null,
		'400': null,
		'300': null,
		'200': null,
		'100': null,
	},

	red: {
		'900': null,
		'800': null,
		'700': null,
		'600': null,
		'500': null,
		'400': null,
		'300': null,
		'200': null,
		'100': null,
	},
};

export const contractVars = createThemeContract<Tokens>({
	mode: null,
	body: {
		backgroundColour: null,
		colour: null,
	},
	contentWidth: {
		small: null,
		large: null,
		medium: null,
	},
	space: {
		'1': null,
		'2': null,
		'3': null,
		'4': null,
		'5': null,
		'6': null,
		'7': null,
		'8': null,
		'9': null,
		none: null,
	},
	colours: {
		gamut: {
			...buildColourGamut(contractColours),
			// @ts-ignore
			white: null,
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
			},
			secondary: {
				background: {
					standard: null,
					mild: null,
					strong: null,
				},
				foreground: null,
			},
			shine: {
				background: {
					standard: null,
					mild: null,
					strong: null,
				},
				foreground: null,
			},
			danger: {
				background: {
					standard: null,
					mild: null,
					strong: null,
				},
				foreground: null,
			},
			warning: {
				background: {
					standard: null,
					mild: null,
					strong: null,
				},
				foreground: null,
			},
			neutral: {
				background: {
					standard: null,
					mild: null,
					strong: null,
				},
				foreground: null,
			},
			success: {
				background: {
					standard: null,
					mild: null,
					strong: null,
				},
				foreground: null,
			},
			information: {
				background: {
					standard: null,
					mild: null,
					strong: null,
				},
				foreground: null,
			},
		},
	},
	elevation: {
		none: null,
		'1':
			null,
		'2':
			null,
		'3':
			null,
		'4':
			null,
		'5':
			null,
	},
	border: {
		width: {
			none: null,
			'1': null,
			'2': null,
			'3': null,
		},
		colours: {
			light: null,
			gray: null,
			dark: null,
		},
		radius: {
			none: null,
			pill: null,
			full: null,
			'1': null,
			min: null,
		},
	},
	typography: {
		size: {
			'1': {
				fontSize: null,
				lineHeight: null,
			},
			'2': {
				fontSize: null,
				lineHeight: null,
			},
			'3': {
				fontSize: null,
				lineHeight: null,
			},
			'4': {
				fontSize: null,
				lineHeight: null,
			},
			'5': {
				fontSize: null,
				lineHeight: null,
			},
			'6': {
				fontSize: null,
				lineHeight: null,
			},
			'7': {
				fontSize: null,
				lineHeight: null,
			},
			'8': {
				fontSize: null,
				lineHeight: null,
			},
			'9': {
				fontSize: null,
				lineHeight: null,
			},
		},
		colour: {
			primary: null,
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
		fontWeight: {
			normal: null,
			semiBold: null,
			bold: null,
		},
	},
	animation: {
		easing: {
			standard: null,
			decelerate: null,
			accelerate: null,
		},
	},
	icon: {
		size: {
			small: null,
			medium: null,
			large: null,
		},
	},
});
