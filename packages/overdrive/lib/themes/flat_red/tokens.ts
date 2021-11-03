import { buildColourGamut } from '../makeTheme';
import { ColourMap, Tokens } from '../tokens';
import { tokens as baseTokens } from '../base/tokens';

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
const secondaryForeground= colours.blue['800'];
const flatElevation = '0 0 0 0 rgba(0, 0, 0, 0.0)';

export const tokens: Tokens = {
	...baseTokens,
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
					standard: colours.red['600'],
					mild: colours.red['100'],
					strong: colours.red['900'],
				},
				foreground: white,
			},
			secondary: {
				background: {
					standard: white,
					mild: white,
					strong: colours.gray['100'],
				},
				foreground: secondaryForeground,
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
					mild: colours.red['100'],
					strong: colours.red['800'],
				},
				foreground: white,
			},
			warning: {
				background: {
					standard: colours.yellow['800'],
					mild: colours.yellow['100'],
					strong: colours.yellow['900'],
				},
				foreground: colours.yellow['200'],
			},
			neutral: {
				background: {
					standard: colours.gray['700'],
					mild: colours.gray['100'],
					strong: colours.gray['900'],
				},
				foreground: white,
			},
			success: {
				background: {
					standard: colours.green['700'],
					mild: colours.green['100'],
					strong: colours.green['900'],
				},
				foreground: colours.green['200'],
			},
			information: {
				background: {
					standard: colours.blue['800'],
					mild: colours.blue['100'],
					strong: colours.blue['900'],
				},
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
};
