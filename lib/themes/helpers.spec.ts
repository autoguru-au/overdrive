import { describe, expect, it } from 'vitest';

import {
	getColourLuminance,
	getContrastRatio,
	getRGBValues,
	passesAccessibilityContrast,
} from './helpers';

/**
 * The pre-colord parser, kept here so the swap can be proven to leave every hex
 * and `rgb()` result bit-identical. Delete this if the legacy formats are ever
 * dropped.
 */
const legacyGetRGBValues = (hexOrRGB: string) => {
	if (hexOrRGB.startsWith('rgb')) {
		const components = hexOrRGB.replaceAll(/[^\d,]/g, '').split(',');
		return {
			r: Number.parseInt(components[0]),
			g: Number.parseInt(components[1]),
			b: Number.parseInt(components[2]),
		};
	}
	const shorthand = /^#?([\da-f])([\da-f])([\da-f])$/i;
	const expanded = hexOrRGB.replace(
		shorthand,
		(_, r, g, b) => r + r + g + g + b + b,
	);
	const result = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(expanded);
	return result
		? {
				r: Number.parseInt(result[1], 16),
				g: Number.parseInt(result[2], 16),
				b: Number.parseInt(result[3], 16),
			}
		: null;
};

const legacyContrastRatio = (colour1: string, colour2: string) => {
	const l1 = getColourLuminance(legacyGetRGBValues(colour1));
	const l2 = getColourLuminance(legacyGetRGBValues(colour2));
	return l1 > l2 ? (l2 + 0.05) / (l1 + 0.05) : (l1 + 0.05) / (l2 + 0.05);
};

/** WCAG ratio in its normal 1–21 direction; the helper returns the reciprocal. */
const wcag = (colour1: string, colour2: string) =>
	1 / getContrastRatio(colour1, colour2);

const HEX_PAIRS: Array<[string, string]> = [
	['#000000', '#ffffff'],
	['#ffffff', '#000000'],
	['#0e893c', '#ffffff'],
	['#0e893c', '#000000'],
	['#0e893c', '#212338'],
	['#ff6d00', '#ffffff'],
	['#6d39a8', '#ffffff'],
	['#e5bc01', '#ffffff'],
	['#8a6f00', '#ffffff'],
	['#767676', '#ffffff'],
	['#a1f5c0', '#0e893c'],
	['#7cf2a8', '#0e893c'],
	['#fff', '#000'],
	['#abc', '#123'],
	['#212338', '#ffffff'],
	['rgb(14, 137, 60)', '#ffffff'],
	['rgb(255,255,255)', 'rgb(0,0,0)'],
	['#13b750', '#095b28'],
	['#f7f8f7', '#14181a'],
	['#2c6e4b', '#9e2f33'],
];

describe('getRGBValues', () => {
	it.each(HEX_PAIRS.flat())(
		'matches the pre-colord parser for %s',
		(colour) => {
			expect(getRGBValues(colour)).toEqual(legacyGetRGBValues(colour));
		},
	);

	it.each([
		['hsl(140, 82%, 29%)', { r: 13, g: 135, b: 54 }],
		['hsla(140, 82%, 29%, 1)', { r: 13, g: 135, b: 54 }],
		['rebeccapurple', { r: 102, g: 51, b: 153 }],
		['white', { r: 255, g: 255, b: 255 }],
		['#0e893cff', { r: 14, g: 137, b: 60 }],
	])('resolves %s, which the old parser could not', (colour, expected) => {
		expect(getRGBValues(colour)).toEqual(expected);
	});

	it.each(['bogus', '', 'not-a-colour', '#gggggg'])(
		'returns null for invalid input %s',
		(colour) => {
			expect(getRGBValues(colour)).toBeNull();
		},
	);
});

describe('getContrastRatio', () => {
	it.each(HEX_PAIRS)(
		'is bit-identical to the pre-colord result for %s on %s',
		(colour1, colour2) => {
			expect(getContrastRatio(colour1, colour2)).toBe(
				legacyContrastRatio(colour1, colour2),
			);
		},
	);

	it('returns the reciprocal of the WCAG ratio, so smaller means more contrast', () => {
		expect(getContrastRatio('#000000', '#ffffff')).toBeCloseTo(1 / 21, 10);
		expect(wcag('#000000', '#ffffff')).toBeCloseTo(21, 10);
	});

	it('is 1 for a colour against itself', () => {
		expect(getContrastRatio('#0e893c', '#0e893c')).toBe(1);
	});

	it('is symmetric', () => {
		expect(getContrastRatio('#0e893c', '#ffffff')).toBe(
			getContrastRatio('#ffffff', '#0e893c'),
		);
	});

	it('agrees across notations for the same colour', () => {
		const fromHex = wcag('#0e893c', '#ffffff');
		expect(wcag('rgb(14, 137, 60)', '#ffffff')).toBeCloseTo(fromHex, 10);
		expect(wcag('#0e893cff', '#ffffff')).toBeCloseTo(fromHex, 10);
		// hsl() is quantised to whole degrees and percentages, so #0e893c only
		// round-trips to #0f8a3c. Compare each notation to its own hex.
		expect(wcag('hsl(142, 81%, 30%)', '#ffffff')).toBe(
			wcag('#0f8a3c', '#ffffff'),
		);
	});
});

describe('passesAccessibilityContrast', () => {
	it.each([
		['#ffffff', '#000000', 'AA', 'SMALL', true],
		['#767676', '#ffffff', 'AA', 'SMALL', true],
		['#777777', '#ffffff', 'AA', 'SMALL', false],
		['#767676', '#ffffff', 'AAA', 'SMALL', false],
		['#0e893c', '#ffffff', 'AA', 'SMALL', true],
		['#0e893c', '#a1f5c0', 'AA', 'SMALL', false],
		['#0e893c', '#a1f5c0', 'AA', 'LARGE', true],
		['#e5bc01', '#ffffff', 'AA', 'SMALL', false],
		['#e5bc01', '#ffffff', 'AA', 'LARGE', false],
	] as const)(
		'%s on %s at %s/%s is %s',
		(colour1, colour2, level, textSize, expected) => {
			expect(
				passesAccessibilityContrast({
					colour1,
					colour2,
					level,
					textSize,
				}),
			).toBe(expected);
		},
	);

	it('judges a named colour on its real luminance, not as black', () => {
		// Before the parser swap this resolved to null -> luminance 0 -> "black",
		// which passes trivially against white.
		expect(
			passesAccessibilityContrast({
				colour1: 'yellow',
				colour2: '#ffffff',
				level: 'AA',
				textSize: 'SMALL',
			}),
		).toBe(false);
	});
});
