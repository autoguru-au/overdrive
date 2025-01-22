type VanillaTokens = {
	[key: string]: string | VanillaTokens;
};
export type SpaceScale =
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| 'none';
export type TextSizeScale = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export type BorderWidthScale = '1' | '2' | '3' | 'none';
export type IconSizeScale = 'small' | 'medium' | 'large';

export type DeviceSize = 'mobile' | 'tablet' | 'desktop' | 'largeDesktop';

export type ColourValue = Record<string, string>;

interface ColourIntensityMap extends VanillaTokens {
	standard: string;
	mild: string;
	strong: string;
}

export type ColourMap = Record<string, ColourValue>;

type ColourBlacks =
	| 'black900'
	| 'black800'
	| 'black700'
	| 'black600'
	| 'black500'
	| 'black400'
	| 'black300'
	| 'black200'
	| 'black100';

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

export type ColourGamut =
	| ColourBlacks
	| ColourGrays
	| ColourBlues
	| ColourGreens
	| ColourReds
	| ColourYellows;

type Intent =
	| 'primary'
	| 'brand'
	| 'secondary'
	| 'shine'
	| 'neutral'
	| 'danger'
	| 'warning'
	| 'success'
	| 'information';

type BaseColours = 'white';

export type BreakPoints = Record<DeviceSize, string>;

export interface Tokens extends VanillaTokens {
	mode: 'light' | 'dark' | string;
	body: {
		colour: string;
		backgroundColour: string;
	};
	contentWidth: {
		small: string;
		medium: string;
		large: string;
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
		foreground: {
			body: string;
			link: string;
		};
		background: {
			body: string;
			light: string;
			neutral: string;
			neutralDark: string;
		};
		intent: Record<
			Intent,
			{
				foreground: string;
				border: string;
				background: ColourIntensityMap;
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
			min: string;
			'1': string;
			'2': string;
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
			| 'link'
			| Exclude<Intent, 'neutral'>
			| 'dark'
			| 'light'
			| 'neutral'
			| 'muted' // TODO: Deprecate this colour
			| BaseColours,
			string
		>;
		fontWeight: Record<'normal' | 'semiBold' | 'bold', string>;
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
