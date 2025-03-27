import deepmerge from 'deepmerge';

import { tokens as baseTokens } from '../base/tokens';
import { buildColourGamut } from '../makeTheme';
import { ColourMap, Tokens } from '../tokens';

const colours: ColourMap = {
	black: {
		900: '#222222',
		800: '#2A2C2A',
		700: '#444644',
		600: '#626262',
		500: '#808080',
		400: '#ADB1B5',
		300: '#D4D9DD',
		200: '#DDE0E3',
		100: '#E4E4E4',
	},

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

const flatElevation = '0 0 0 0 rgba(0, 0, 0, 0.0)';

export const tokens = deepmerge<Tokens, any>(baseTokens, {
	colours: {
		gamut: {
			...buildColourGamut(colours),
		},
		foreground: {
			link: colours.green['600'],
		},
		intent: {
			primary: {
				background: {
					standard: colours.red['600'],
					mild: colours.red['100'],
					strong: colours.red['900'],
				},
				border: colours.red['900'],
			},
			brand: {
				background: {
					standard: colours.red['600'],
					mild: colours.red['100'],
					strong: colours.red['900'],
				},
				border: colours.red['900'],
			},
			secondary: {
				background: {
					strong: colours.gray['100'],
				},
				foreground: colours.blue['800'],
				border: colours.blue['300'],
			},
		},
	},
	elevation: {
		'1': flatElevation,
		'2': flatElevation,
		'3': flatElevation,
		'4': flatElevation,
		'5': flatElevation,
	},
	border: {
		radius: {
			min: 'none',
			sm: 'none',
			md: 'none',
			'1': 'none',
		},
	},
	typography: {
		colour: {
			primary: colours.red['600'],
		},
	},
} as unknown as Tokens);
