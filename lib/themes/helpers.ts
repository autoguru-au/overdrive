import { colord } from 'colord';

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

type RGBNumbers = { r: number; g: number; b: number } | null;

export const hexToRGB = (hex: string): RGBNumbers => {
	const shorthandRegex = /^#?([\da-f])([\da-f])([\da-f])$/i;
	hex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);

	const result = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(hex);
	return result
		? {
				r: Number.parseInt(result[1], 16),
				g: Number.parseInt(result[2], 16),
				b: Number.parseInt(result[3], 16),
			}
		: null;
};

export const rgbStrToRGB = (rgb: string): RGBNumbers => {
	const components = rgb.replaceAll(/[^\d,]/g, '').split(',');
	return {
		r: Number.parseInt(components[0]),
		g: Number.parseInt(components[1]),
		b: Number.parseInt(components[2]),
	};
};

export const getRGBValues = (hexOrRGB: string): RGBNumbers =>
	hexOrRGB.startsWith('rgb') ? rgbStrToRGB(hexOrRGB) : hexToRGB(hexOrRGB);

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
