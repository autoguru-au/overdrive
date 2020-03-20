import { ColourGamut, Tokens } from '../tokens';

const colours = {
	gray: {
		900: '#212338',
		800: '#34384c',
		700: '#484c5f',
		600: '#5c6172',
		500: '#6c7283',
		400: '#8f95a1',
		300: '#d4d9dd',
		200: '#eef0f2',
		100: '#fafbfc',
	},

	green: {
		900: '#078171',
		800: '#05987a',
		700: '#03af83',
		600: '#01c68c',
		500: '#00dd95',
		400: '#36e5aa',
		300: '#71edc2',
		200: '#e3f8f0',
		100: '#f2fdf9',
	},

	blue: {
		900: '#0d47a1',
		800: '#0d4bb7',
		700: '#0d50ce',
		600: '#0d54e5',
		500: '#0d59fc',
		400: '#4680fc',
		300: '#80a7fd',
		200: '#e1edfe',
		100: '#f3f8ff',
	},

	yellow: {
		900: '#f38e29',
		800: '#f69a1f',
		700: '#f9a715',
		600: '#fcb30b',
		500: '#ffc001',
		400: '#ffcf3d',
		300: '#ffde79',
		200: '#ffedb5',
		100: '#fffcf2',
	},

	red: {
		900: '#780502',
		800: '#96110e',
		700: '#b51e1a',
		600: '#d42b26',
		500: '#e12e28',
		400: '#e85f5b',
		300: '#ef918e',
		200: '#ffd4d4',
		100: '#fdf4f4',
	},
};

const white = '#fff';

const makeColourGamut = () =>
	Object.entries(colours).reduce(
		(result, [name, colourGrades]) => ({
			...result,
			...Object.entries(colourGrades).reduce(
				(grades, [colourGradeName, colour]) => {
					return {
						...grades,
						[`${name}${colourGradeName}`]: colour,
					};
				},
				{} as Record<Partial<ColourGamut>, string>,
			),
		}),
		{} as Record<ColourGamut, string>,
	);

export const tokens: Tokens = {
	breakpoints: {
		mobile: 0,
		tablet: 768, // IPad mini width (1024 - 25%)
		desktop: 1024, // IPad Pro width (1366 - 25%)
		largeDesktop: 1440, // 1080p width (1920 - 25%)
	},
	contentWidth: {
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
			...makeColourGamut(),
			white,
		},
		foreground: {
			body: colours.gray['900'],
			link: colours.green['600'],
		},
		background: {
			body: white,
			neutral: colours.gray['400'],
			neutralDark: colours.gray['800'],
		},
		intent: {
			danger: {
				background: colours.red['600'],
				foreground: colours.red['200'],
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
			gray: colours.gray['300'],
			dark: colours.gray['900'],
		},
		radius: {
			none: 'none',
			pill: `${1e9}px`,
			full: '50%',
			'1': '4px',
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
