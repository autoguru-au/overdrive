import type { Colours, ThemeTokens } from './theme.css';

export type DeviceSize = 'mobile' | 'tablet' | 'desktop' | 'largeDesktop';
export type BreakPoints = Record<DeviceSize, string>;

export type ColourValue = Record<string, string>;
export type ColourMap = Record<string, ColourValue | string>;
type ColourKeys = keyof Colours;
type ShadeKeys = keyof Colours[ColourKeys];

type FlattenColourKey<
	TColour extends ColourKeys,
	TShade extends ShadeKeys,
> = `${TColour}${TShade}`;

export type FlattenedColours = {
	[TColour in ColourKeys]: {
		[TShade in ShadeKeys]: string;
	};
}[ColourKeys] extends object
	? {
			[K in FlattenColourKey<ColourKeys, ShadeKeys>]: string;
		}
	: never;

export type TextSizeScale = keyof ThemeTokens['typography']['size'];
export type TextFontWeight = keyof ThemeTokens['typography']['fontWeight'];
