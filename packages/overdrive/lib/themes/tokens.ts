type SpaceScale = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'none';
type TextSizeScale = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type BorderWidthScale = '1' | '2' | '3' | 'none';
type IconSizeScale = 'small' | 'medium' | 'large';

type Breakpoints = 'mobile' | 'tablet' | 'desktop' | 'largeDesktop';

type ColourValue = Record<number, string>;
export type ColourMap = Record<any, ColourValue>;

type ColourReds =
	| 'red900'
	| 'red800'
	| 'red700'
	| 'red600'
	| 'red500'
	| 'red400'
	| 'red300'
	| 'red200'
	| 'red100';

type ColourGrays =
	| 'gray900'
	| 'gray800'
	| 'gray700'
	| 'gray600'
	| 'gray500'
	| 'gray400'
	| 'gray300'
	| 'gray200'
	| 'gray100';

type ColourGreens =
	| 'green900'
	| 'green800'
	| 'green700'
	| 'green600'
	| 'green500'
	| 'green400'
	| 'green300'
	| 'green200'
	| 'green100';

type ColourBlues =
	| 'blue900'
	| 'blue800'
	| 'blue700'
	| 'blue600'
	| 'blue500'
	| 'blue400'
	| 'blue300'
	| 'blue200'
	| 'blue100';

type ColourYellows =
	| 'yellow900'
	| 'yellow800'
	| 'yellow700'
	| 'yellow600'
	| 'yellow500'
	| 'yellow400'
	| 'yellow300'
	| 'yellow200'
	| 'yellow100';

export interface Colours {
	colours;
}

export type ColourGamut =
	| ColourGrays
	| ColourBlues
	| ColourGreens
	| ColourReds
	| ColourYellows;

type Intent =
	| 'primary'
	| 'secondary'
	| 'shine'
	| 'neutral'
	| 'danger'
	| 'warning'
	| 'success'
	| 'information';

type ShadeIntensityLevel = 'slight' | 'medium' | 'intense';
type TransparencyLevel = 'slight' | 'medium' | 'intense';

type BaseColours = 'white';

export interface ForegroundColours {
	body: string;
	link: string;
}

export interface Tokens {
	isDark: boolean;
	breakpoints: Record<Breakpoints, number>;
	shadeIntensity: Record<ShadeIntensityLevel, number>;
	transparency: Record<TransparencyLevel, number>;
	contentWidth: {
		small: number;
		medium: number;
		large: number;
	};
	space: Record<SpaceScale, string>;
	elevation: {
		none: string;
		'1': string;
		'2': string;
		'3': string;
		'4': string;
		'5': string;
	};
	colours: {
		gamut: Record<ColourGamut | BaseColours, string>;
		foreground: ForegroundColours;
		background: {
			body: string;
			neutral: string;
			neutralDark: string;
		};
		intent: Record<
			Intent,
			{
				foreground: string;
				background: string;
			}
		>;
	};
	border: {
		width: Record<BorderWidthScale, string>;
		colours: {
			light: string;
			gray: string;
			dark: string;
		};
		radius: {
			none: string;
			'1': string;
			pill: string;
			full: string;
		};
	};
	typography: {
		size: Record<
			TextSizeScale,
			{
				fontSize: string;
				lineHeight: string;
			}
		>;
		// TODO: Deprecate these in favour of foreground colours
		colour: Record<
			| Exclude<keyof ForegroundColours, 'body'>
			| Exclude<Intent, 'neutral'>
			| 'dark'
			| 'light'
			| 'neutral'
			| 'muted' // TODO: Deprecate this colour
			| BaseColours,
			string
		>;
		fontWeight: Record<'normal' | 'semiBold' | 'bold', number>;
	};
	animation: {
		easing: {
			standard: string;
			decelerate: string;
			accelerate: string;
		};
	};
	icon: {
		size: Record<IconSizeScale, string>;
	};
}
