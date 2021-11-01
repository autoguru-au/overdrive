import { buildColourGamut } from '../makeTheme';
import { BreakPoints, ColourMap, Tokens } from '../tokens';
/*

const colours: ColourMap = {

};

const white = '#fff';
const flatElevation = '0 0 0 0 rgba(0, 0, 0, 0.0)';

export const tokens: Tokens = {
	isDark: false,
	shadeIntensity: {
		slight: 0.05,
		medium: 0.15,
		intense: 0.3,
	},
	transparency: {
		slight: 0.25,
		medium: 0.5,
		intense: 0.9,
	},
	breakpoints: {
		mobile: 0,
		tablet: 768, // IPad mini width (1024 - 25%)
		desktop: 1024, // IPad Pro width (1366 - 25%)
		largeDesktop: 1440, // 1080p width (1920 - 25%)
	},
	contentWidth: {
		small: 592,
		large: 1344,
		medium: 940,
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
			...buildColourGamut(colours),
			white,
		},
		foreground: {
			body: colours.gray['900'],
			link: colours.green['600'],
		},
		background: {
			body: white,
			light: colours.gray['100'],
			neutral: colours.gray['400'],
			neutralDark: colours.gray['800'],
		},
		intent: {
			primary: {
				background: colours.red['800'],
				foreground: white,
			},
			secondary: {
				background: white,
				foreground: colours.blue['800'],
			},
			shine: {
				background: colours.gray['200'],
				foreground: colours.yellow['500'],
			},
			danger: {
				background: colours.red['600'],
				foreground: white,
			},
			warning: {
				background: colours.yellow['800'],
				foreground: colours.yellow['200'],
			},
			neutral: {
				background: colours.gray['700'],
				foreground: white,
			},
			success: {
				background: colours.green['600'],
				foreground: colours.green['200'],
			},
			information: {
				background: colours.blue['900'],
				foreground: colours.blue['200'],
			},
		},
	},
	elevation: {
		none: 'none',
		'1': flatElevation,
		'2': flatElevation,
		'3': flatElevation,
		'4': flatElevation,
		'5': flatElevation,
	},
	border: {
		width: {
			none: '0',
			'1': '1px',
			'2': '2px',
			'3': '4px',
		},
		colours: {
			light: colours.gray['200'],
			gray: colours.gray['300'],
			dark: colours.gray['900'],
		},
		radius: {
			none: 'none',
			pill: `${1e9}px`,
			full: '50%',
			min: 'none',
			'1': 'none',
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
			primary: colours.red['800'],
			secondary: colours.gray['700'],
			shine: colours.yellow['500'],
			link: colours.green['600'],
			dark: colours.gray['900'],
			white,
			muted: colours.gray['500'],
			neutral: colours.gray['700'],
			light: colours.gray['600'],
			danger: colours.red['600'],
			warning: colours.yellow['800'],
			success: colours.green['600'],
			information: colours.blue['500'],
		},
		fontWeight: {
			normal: 400,
			semiBold: 500,
			bold: 700,
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
*/

export const breakpoints: BreakPoints = {
	mobile: '0px',
	tablet: '768px', // IPad mini width (1024 - 25%)
	desktop: '1024px', // IPad Pro width (1366 - 25%)
	largeDesktop: '1440px', // 1080p width (1920 - 25%)
};

const colours: ColourMap = {
	gray: {
		900: '#263238',
		800: '#37474F',
		700: '#455A64',
		600: '#607D8B',
		500: '#78909C',
		400: '#90A4AE',
		300: '#B0BEC5',
		200: '#CFD8DC',
		100: '#ECEFF1',
	},

	green: {
		900: '#007800',
		800: '#009b00',
		700: '#00af00',
		600: '#00c400',
		500: '#00d500',
		400: '#52dc42',
		300: '#7ce36a',
		200: '#a6ec98',
		100: '#cbf4c1',
	},

	blue: {
		900: '#1a259c',
		800: '#3530aa',
		700: '#4336b2',
		600: '#523ebb',
		500: '#5c43c2',
		400: '#765ecb',
		300: '#8f7ad5',
		200: '#b0a1e0',
		100: '#cfc6ec',
	},

	yellow: {
		900: '#cb5300',
		800: '#d56b00',
		700: '#db7903',
		600: '#e18807',
		500: '#e5930b',
		400: '#e8a229',
		300: '#ebb24e',
		200: '#f0c880',
		100: '#f6ddb2',
	},

	red: {
		900: '#d50000',
		800: '#ED0C06',
		700: '#fb1e0d',
		600: '#ff2813',
		500: '#ff3018',
		400: '#ff5a3c',
		300: '#ff7d5f',
		200: '#ffa48d',
		100: '#ffc8ba',
	},
};

const white = '#fff';

export const tokens: Tokens = {
	mode: 'light',
	body: {
		backgroundColour: white,
		colour: colours.gray['900'],
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
			...buildColourGamut(colours),
			white,
		},
		foreground: {
			body: colours.gray['900'],
			link: colours.green['600'],
		},
		background: {
			body: white,
			light: colours.gray['200'],
			neutral: colours.gray['400'],
			neutralDark: colours.gray['800'],
		},
		intent: {
			primary: {
				background: {
					standard: colours.green['600'],
					mild: colours.green['200'],
					strong: colours.green['900'],
				},
				foreground: white,
			},
			secondary: {
				background: {
					standard: white,
					mild: white,
					strong: colours.gray['200'],
				},
				foreground: colours.gray['700'],
			},
			shine: {
				background: {
					standard: colours.gray['200'],
					mild: colours.gray['100'],
					strong: colours.gray['300'],
				},
				foreground: colours.yellow['500'],
			},
			danger: {
				background: {
					standard: colours.red['600'],
					mild: colours.red['200'],
					strong: colours.red['800'],
				},
				foreground: white,
			},
			warning: {
				background: {
					standard: colours.yellow['800'],
					mild: colours.yellow['200'],
					strong: colours.yellow['900'],
				},
				foreground: colours.yellow['200'],
			},
			neutral: {
				background: {
					standard: colours.gray['700'],
					mild: colours.gray['200'],
					strong: colours.gray['900'],
				},
				foreground: white,
			},
			success: {
				background: {
					standard: colours.green['700'],
					mild: colours.green['200'],
					strong: colours.green['900'],
				},
				foreground: colours.green['200'],
			},
			information: {
				background: {
					standard: colours.blue['800'],
					mild: colours.blue['200'],
					strong: colours.blue['900'],
				},
				foreground: colours.blue['200'],
			},
		},
	},
	elevation: {
		none: 'none',
		'1':
			'0 1px 5px 0 rgba(0, 0, 0, 0.03), 0 2px 2px 0 rgba(0, 0, 0, 0.03), 0 3px 1px -2px rgba(0, 0, 0, 0.05)',
		'2':
			'0 1px 10px 0 rgba(0, 0, 0, 0.03),  0 4px 5px 0 rgba(0, 0, 0, 0.03),  0 2px 4px -1px rgba(0, 0, 0, 0.05)',
		'3':
			'0 3px 14px 2px rgba(0, 0, 0, 0.03),  0 8px 10px 1px rgba(0, 0, 0, 0.03),  0 5px 5px -3px rgba(0, 0, 0, 0.05)',
		'4':
			'0 6px 30px 5px rgba(0, 0, 0, 0.03), 0 16px 24px 2px rgba(0, 0, 0, 0.03), 0 8px 10px -5px rgba(0, 0, 0, 0.05)',
		'5':
			'0 9px 46px 8px rgba(0, 0, 0, 0.03), 0 24px 38px 3px rgba(0, 0, 0, 0.03), 0 11px 15px -7px rgba(0, 0, 0, 0.05)',
	},
	border: {
		width: {
			none: '0',
			'1': '1px',
			'2': '2px',
			'3': '4px',
		},
		colours: {
			light: colours.gray['200'],
			gray: colours.gray['300'],
			dark: colours.gray['900'],
		},
		radius: {
			none: 'none',
			pill: `${1e9}px`,
			full: '50%',
			'1': '4px',
			min: '2px',
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
			primary: colours.green['600'],
			secondary: colours.gray['700'],
			shine: colours.yellow['500'],
			link: colours.green['600'],
			dark: colours.gray['900'],
			white,
			muted: colours.gray['500'],
			neutral: colours.gray['700'],
			light: colours.gray['600'],
			danger: colours.red['600'],
			warning: colours.yellow['800'],
			success: colours.green['600'],
			information: colours.blue['500'],
		},
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
