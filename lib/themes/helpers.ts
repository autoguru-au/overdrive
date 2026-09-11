import type { CSSVarFunction } from '@vanilla-extract/private';
import { colord, extend } from 'colord';
import namesPlugin from 'colord/plugins/names';

// CSS named colours ('gold', 'navy') are a form tenants do supply. Without this
// they parse to nothing, and an unparsed colour used to measure as black.
extend([namesPlugin]);

/**
 * Utility type that extracts the raw token type from a vanilla-extract theme contract.
 * This allows you to use the same type structure as the theme contract but with raw values
 * instead of CSS var functions.
 *
 * @example
 * ```ts
 * import { overdriveTokens } from './theme.css';
 *
 * type Tokens = TokensFromContract<typeof overdriveTokens>;
 *
 * // Now you can use this type for your token objects
 * const myTokens: Tokens = {
 *   mode: 'light',
 *   body: {
 *     backgroundColour: '#ffffff',
 *     colour: '#000000'
 *   }
 *   // ... rest of the tokens
 * };
 * ```
 */
export type TokensFromContract<T> = {
	[P in keyof T]: T[P] extends CSSVarFunction
		? string
		: T[P] extends Record<string, unknown>
			? TokensFromContract<T[P]>
			: T[P];
};

interface ShadedColourProps {
	colour: string;
	intensity: number | string | null;
	direction: 'forward' | 'backward';
	isDarkTheme: boolean;
	transparency?: number | string | null;
}

export const shadedColour = ({
	colour,
	intensity,
	direction,
	isDarkTheme,
	transparency = 0,
}: ShadedColourProps): string => {
	const intensityValue =
		typeof intensity === 'string' ? Number(intensity) : intensity;
	const transparencyValue =
		typeof transparency === 'string' ? Number(transparency) : transparency;

	return colord(colour)
		[
			(!isDarkTheme && direction === 'backward') ||
			(isDarkTheme && direction === 'forward')
				? 'darken'
				: 'lighten'
		](intensityValue || void 0)
		.alpha(
			typeof transparencyValue === 'number' ? 1 - transparencyValue : 1,
		)
		.toHex();
};

/**
 * Shade towards black or white, said plainly.
 *
 * `shadedColour` expresses this as `direction` crossed with `isDarkTheme`, so a
 * caller that just wants "darker" has to pass a theme flag it does not care
 * about and rely on the mapping never changing. These say what they do.
 */
export const darkenColour = (colour: string, intensity: number): string =>
	colord(colour).darken(intensity).toHex();

export const lightenColour = (colour: string, intensity: number): string =>
	colord(colour).lighten(intensity).toHex();

type RGBNumbers = { r: number; g: number; b: number } | null;

/**
 * Every CSS colour form, or `null` when the string is not a colour at all —
 * `var(--brand)`, `currentColor`, a typo.
 *
 * This used to be two hand-rolled parsers that understood 3- and 6-digit hex
 * and `rgb()` only. Anything else — `hsl()`, a named colour, 8-digit hex —
 * returned `null`, which `getColourLuminance` reads as luminance 0, i.e. black.
 * Every contrast decision downstream was then made about a colour nobody
 * supplied, and made silently.
 */
export const getRGBValues = (colour: string): RGBNumbers => {
	const parsed = colord(colour);
	if (!parsed.isValid()) return null;
	// Alpha is dropped rather than composited: contrast against a translucent
	// colour depends on what is behind it, which is not knowable here.
	const { r, g, b } = parsed.toRgb();
	return { r, g, b };
};

/**
 * Whether a contrast decision about this colour would be measured or guessed.
 * Callers that shade or pick a colour by luminance should check first, rather
 * than accept the black that an unparseable string silently measures as.
 */
export const canMeasureContrast = (colour: string): boolean =>
	colord(colour).isValid();

export const getColourLuminance = (rgb: RGBNumbers) => {
	if (!rgb) return 0;
	const { r, g, b } = rgb;
	const a = [r, g, b].map((v) => {
		v /= 255;
		return v <= 0.039_28 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
	});
	return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

export const getContrastRatio = (colour1: string, colour2: string): number => {
	const color1luminance = getColourLuminance(getRGBValues(colour1));
	const color2luminance = getColourLuminance(getRGBValues(colour2));
	return color1luminance > color2luminance
		? (color2luminance + 0.05) / (color1luminance + 0.05)
		: (color1luminance + 0.05) / (color2luminance + 0.05);
};

type AccessibilityLevel = 'AA' | 'AAA';
type AccessibilityTextSize = 'SMALL' | 'LARGE';

export const passesAccessibilityContrast = ({
	colour1,
	colour2,
	level,
	textSize,
}: {
	colour1: string;
	colour2: string;
	level: AccessibilityLevel;
	textSize: AccessibilityTextSize;
}): boolean => {
	const contrastRatio = getContrastRatio(colour1, colour2);
	if (textSize === 'LARGE') {
		return level === 'AAA'
			? contrastRatio < 1 / 4.5
			: contrastRatio < 1 / 3;
	}
	return level === 'AAA' ? contrastRatio < 1 / 7 : contrastRatio < 1 / 4.5;
};
