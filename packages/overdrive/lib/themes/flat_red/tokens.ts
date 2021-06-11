import { buildColourGamut } from '../makeTheme';
import { ColourMap, Tokens } from '../tokens';
/*

const colours: ColourMap = {
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
			neutral: colours.gray['400'],
			neutralDark: colours.gray['800'],
		},
		intent: {
			primary: {
				background: colours.green['600'],
				foreground: white,
			},
			secondary: {
				background: white,
				foreground: colours.gray['700'],
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
export const tokens: Tokens = JSON.parse('{"isDark":false,"shadeIntensity":{"slight":0.05,"medium":0.15,"intense":0.3},"transparency":{"slight":0.25,"medium":0.5,"intense":0.9},"breakpoints":{"mobile":0,"tablet":768,"desktop":1024,"largeDesktop":1440},"contentWidth":{"small":592,"large":1344,"medium":940},"space":{"1":"4px","2":"8px","3":"12px","4":"16px","5":"20px","6":"24px","7":"32px","8":"48px","9":"96px","none":"0px"},"colours":{"gamut":{"gray100":"#fafbfc","gray200":"#eef0f2","gray300":"#d4d9dd","gray400":"#8f95a1","gray500":"#6c7283","gray600":"#5c6172","gray700":"#484c5f","gray800":"#34384c","gray900":"#212338","green100":"#f2fdf9","green200":"#e3f8f0","green300":"#71edc2","green400":"#36e5aa","green500":"#00dd95","green600":"#01c68c","green700":"#03af83","green800":"#05987a","green900":"#078171","blue100":"#f3f8ff","blue200":"#e1edfe","blue300":"#80a7fd","blue400":"#4680fc","blue500":"#0d59fc","blue600":"#0d54e5","blue700":"#0d50ce","blue800":"#0d4bb7","blue900":"#0d47a1","yellow100":"#fffcf2","yellow200":"#ffedb5","yellow300":"#ffde79","yellow400":"#ffcf3d","yellow500":"#ffc001","yellow600":"#fcb30b","yellow700":"#f9a715","yellow800":"#f69a1f","yellow900":"#f38e29","red100":"#fdf4f4","red200":"#ffd4d4","red300":"#ef918e","red400":"#e85f5b","red500":"#e12e28","red600":"#d42b26","red700":"#b51e1a","red800":"#96110e","red900":"#780502","white":"#fff"},"foreground":{"body":"#212338","link":"#01c68c"},"background":{"body":"#fff","neutral":"#8f95a1","neutralDark":"#34384c"},"intent":{"primary":{"background":"#ED0C06","foreground":"#fff"},"secondary":{"background":"#fff","foreground":"#484c5f"},"shine":{"background":"#eef0f2","foreground":"#ffc001"},"danger":{"background":"#d42b26","foreground":"#fff"},"warning":{"background":"#f69a1f","foreground":"#ffedb5"},"neutral":{"background":"#484c5f","foreground":"#fff"},"success":{"background":"#01c68c","foreground":"#e3f8f0"},"information":{"background":"#0d47a1","foreground":"#e1edfe"}}},"elevation":{"1":"none","2":"none","3":"none","4":"none","5":"none","none":"none"},"border":{"width":{"1":"1px","2":"2px","3":"4px","none":"0"},"colours":{"light":"#eef0f2","gray":"#d4d9dd","dark":"#212338"},"radius":{"1":"none","none":"none","pill":"1000000000px","full":"50%"}},"typography":{"size":{"1":{"fontSize":"10px","lineHeight":"12px"},"2":{"fontSize":"12px","lineHeight":"18px"},"3":{"fontSize":"14px","lineHeight":"20px"},"4":{"fontSize":"16px","lineHeight":"22px"},"5":{"fontSize":"18px","lineHeight":"26px"},"6":{"fontSize":"20px","lineHeight":"28px"},"7":{"fontSize":"24px","lineHeight":"30px"},"8":{"fontSize":"30px","lineHeight":"40px"},"9":{"fontSize":"40px","lineHeight":"48px"}},"colour":{"primary":"#ED0C06","secondary":"#484c5f","link":"#01c68c","dark":"#212338","white":"#fff","muted":"#6c7283","neutral":"#484c5f","light":"#5c6172","danger":"#d42b26","warning":"#f69a1f","success":"#01c68c","information":"#0d59fc"},"fontWeight":{"normal":400,"semiBold":500,"bold":700}},"animation":{"easing":{"standard":"cubic-bezier(0.4, 0.0, 0.2, 1)","decelerate":"cubic-bezier(0.0, 0.0, 0.2, 1)","accelerate":"cubic-bezier(0.4, 0.0, 1, 1)"}},"icon":{"size":{"small":"16px","medium":"20px","large":"32px"}},"gamut":{"gray100":"#cfd3e2","gray200":"#b3b6c9","gray300":"#9599b1","gray400":"#7f849e","gray500":"#6a6f8c","gray600":"#5b627b","gray700":"#4a4f65","gray800":"#393d4f","gray900":"#262938","green100":"#cbf4c1","green200":"#a6ec98","green300":"#7ce36a","green400":"#52dc42","green500":"#00d500","green600":"#00c400","green700":"#00af00","green800":"#009b00","green900":"#007800","blue100":"#cfc6ec","blue200":"#b0a1e0","blue300":"#8f7ad5","blue400":"#765ecb","blue500":"#5c43c2","blue600":"#523ebb","blue700":"#4336b2","blue800":"#3530aa","blue900":"#1a259c","yellow100":"#f6ddb2","yellow200":"#f0c880","yellow300":"#ebb24e","yellow400":"#e8a229","yellow500":"#e5930b","yellow600":"#e18807","yellow700":"#db7903","yellow800":"#d56b00","yellow900":"#cb5300","red100":"#ffc8ba","red200":"#ffa48d","red300":"#ff7d5f","red400":"#ff5a3c","red500":"#ff3018","red600":"#ff2813","red700":"#fb1e0d","red800":"#ED0C06","red900":"#d50000"}}');
