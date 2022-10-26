import { createThemeContract, style } from '@vanilla-extract/css';
import { buildColourGamut } from './makeTheme';
import { ColourMap } from './tokens';

const colourContract: ColourMap = {
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

const themeVars = createThemeContract({
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
	colourContract: {
		gamut: {
			...buildColourGamut(colourContract),
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
		none: null,
		'1': null,
		'2': null,
		'3': null,
		'4': null,
		'5': null,
	},
	border: {
		width: {
			none: null,
			'1': null,
			'2': null,
			'3': null,
		},
		colourContract: {
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
);

export const container = style({
	boxSizing: 'border-box',
	font: '400 16px/22px AvertaStandard, system-ui, sans-serif',
});
