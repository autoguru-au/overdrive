import { buildColourGamut } from '../makeTheme';
import { ColourMap, Tokens } from '../tokens';

export const baseThemeColours: ColourMap = {
	black: {
		'900': '#222222',
		'800': '#2A2C2A',
		'700': '#444644',
		'600': '#626262',
		'500': '#808080',
		'400': '#ADB1B5',
		'300': '#D4D9DD',
		'200': '#DDE0E3',
		'100': '#E4E4E4',
	},

	gray: {
		'900': '#212338',
		'800': '#34384c',
		'700': '#484c5f',
		'600': '#5c6172',
		'500': '#6c7283',
		'400': '#8f95a1',
		'300': '#d4d9dd',
		'200': '#eef0f2',
		'100': '#fafbfc',
	},

	green: {
		'900': '#078171',
		'800': '#05987a',
		'700': '#03af83',
		'600': '#01c68c',
		'500': '#00dd95',
		'400': '#36e5aa',
		'300': '#71edc2',
		'200': '#e3f8f0',
		'100': '#f2fdf9',
	},

	blue: {
		'900': '#0d47a1',
		'800': '#0d4bb7',
		'700': '#0d50ce',
		'600': '#0d54e5',
		'500': '#0d59fc',
		'400': '#4680fc',
		'300': '#80a7fd',
		'200': '#e1edfe',
		'100': '#f3f8ff',
	},

	yellow: {
		'900': '#f38e29',
		'800': '#f69a1f',
		'700': '#f9a715',
		'600': '#fcb30b',
		'500': '#ffc001',
		'400': '#ffcf3d',
		'300': '#ffde79',
		'200': '#ffedb5',
		'100': '#fffcf2',
	},

	red: {
		'900': '#780502',
		'800': '#96110e',
		'700': '#b51e1a',
		'600': '#d42b26',
		'500': '#e12e28',
		'400': '#e85f5b',
		'300': '#ef918e',
		'200': '#ffd4d4',
		'100': '#fdf4f4',
	},
};

export const defaultGamut = buildColourGamut(baseThemeColours);

const white = '#fff';
const secondaryForeground = baseThemeColours.gray['900'];
export const tokens: Tokens = {
	mode: 'light',
	body: {
		backgroundColour: white,
		colour: baseThemeColours.gray['900'],
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
	colours: {
		gamut: {
			...defaultGamut,
			white,
		},
		foreground: {
			body: baseThemeColours.gray['900'],
			link: baseThemeColours.blue['500'],
		},
		background: {
			body: white,
			light: baseThemeColours.gray['200'],
			neutral: baseThemeColours.gray['300'],
			neutralDark: baseThemeColours.gray['800'],
		},
		intent: {
			primary: {
				background: {
					standard: baseThemeColours.green['600'],
					mild: baseThemeColours.green['200'],
					strong: baseThemeColours.green['700'],
				},
				foreground: white,
				border: baseThemeColours.green['900'],
			},
			brand: {
				background: {
					standard: baseThemeColours.green['700'],
					mild: baseThemeColours.green['200'],
					strong: baseThemeColours.green['900'],
				},
				foreground: white,
				border: baseThemeColours.gray['900'],
			},
			secondary: {
				background: {
					standard: white,
					mild: white,
					strong: baseThemeColours.gray['200'],
				},
				foreground: secondaryForeground,
				border: baseThemeColours.gray['300'],
			},
			shine: {
				background: {
					standard: baseThemeColours.gray['200'],
					mild: baseThemeColours.gray['100'],
					strong: baseThemeColours.gray['300'],
				},
				foreground: baseThemeColours.yellow['500'],
				border: baseThemeColours.gray['300'],
			},
			danger: {
				background: {
					standard: baseThemeColours.red['600'],
					mild: baseThemeColours.red['100'],
					strong: baseThemeColours.red['800'],
				},
				foreground: white,
				border: baseThemeColours.red['800'],
			},
			warning: {
				background: {
					standard: baseThemeColours.yellow['800'],
					mild: baseThemeColours.yellow['100'],
					strong: baseThemeColours.yellow['900'],
				},
				foreground: white,
				border: baseThemeColours.yellow['900'],
			},
			neutral: {
				background: {
					standard: baseThemeColours.gray['700'],
					mild: baseThemeColours.gray['200'],
					strong: baseThemeColours.gray['900'],
				},
				foreground: white,
				border: baseThemeColours.gray['900'],
			},
			success: {
				background: {
					standard: baseThemeColours.green['700'],
					mild: baseThemeColours.green['200'],
					strong: baseThemeColours.green['900'],
				},
				foreground: white,
				border: baseThemeColours.green['900'],
			},
			information: {
				background: {
					standard: baseThemeColours.blue['800'],
					mild: baseThemeColours.blue['200'],
					strong: baseThemeColours.blue['900'],
				},
				foreground: white,
				border: baseThemeColours.blue['900'],
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
			light: baseThemeColours.gray['200'],
			gray: baseThemeColours.gray['300'],
			dark: baseThemeColours.gray['900'],
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
			primary: baseThemeColours.green['600'],
			secondary: baseThemeColours.gray['700'],
			brand: baseThemeColours.green['600'],
			shine: baseThemeColours.yellow['500'],
			link: baseThemeColours.blue['500'],
			dark: baseThemeColours.gray['900'],
			white,
			muted: baseThemeColours.gray['400'],
			neutral: baseThemeColours.gray['700'],
			light: baseThemeColours.gray['600'],
			danger: baseThemeColours.red['600'],
			warning: baseThemeColours.yellow['800'],
			success: baseThemeColours.green['600'],
			information: baseThemeColours.blue['500'],
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
};
