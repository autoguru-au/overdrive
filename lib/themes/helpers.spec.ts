import { colord } from 'colord';
import { describe, expect, it } from 'vitest';

import {
	canMeasureContrast,
	getContrastRatio,
	getRGBValues,
	lightenColour,
	lightnessDelta,
	passesAccessibilityContrast,
} from './helpers';

// #ffc001 in five notations. Before colord, only the first two parsed; the rest
// returned null and measured as black, so every contrast check about them was
// answered about a colour nobody supplied.
const amber = { r: 255, g: 192, b: 1 };

describe('getRGBValues', () => {
	it.each([
		['6-digit hex', '#ffc001', amber],
		['3-digit hex', '#fc0', { r: 255, g: 204, b: 0 }],
		['rgb()', 'rgb(255, 192, 1)', amber],
		['hsl()', 'hsl(45, 100%, 50%)', { r: 255, g: 191, b: 0 }],
		['a CSS named colour', 'gold', { r: 255, g: 215, b: 0 }],
	])('reads %s', (_label, input, expected) => {
		expect(getRGBValues(input)).toEqual(expected);
	});

	it('reads 8-digit hex, dropping the alpha it cannot composite', () => {
		expect(getRGBValues('#ffc001aa')).toEqual(amber);
	});

	it.each(['var(--brand)', 'currentColor', 'notacolour', ''])(
		'returns null for %s rather than measuring it as black',
		(input) => {
			expect(getRGBValues(input)).toBeNull();
		},
	);
});

describe('canMeasureContrast', () => {
	it.each([
		'#ffc001',
		'rgb(255,192,1)',
		'hsl(45,100%,50%)',
		'gold',
		'#ffc001aa',
	])('accepts %s', (input) => {
		expect(canMeasureContrast(input)).toBe(true);
	});

	it.each(['var(--brand)', 'currentColor', 'notacolour'])(
		'rejects %s',
		(input) => {
			expect(canMeasureContrast(input)).toBe(false);
		},
	);
});

describe('contrast on notations that used to measure as black', () => {
	// The regression this guards: an unparsed colour has luminance 0, so it
	// looks like black — maximal contrast on white, and every AA check passes.
	it.each(['hsl(45, 100%, 50%)', 'gold', '#ffc001aa'])(
		'%s fails AA on white, as its hex twin does',
		(input) => {
			expect(
				passesAccessibilityContrast({
					colour1: input,
					colour2: '#ffffff',
					level: 'AA',
					textSize: 'SMALL',
				}),
			).toBe(false);
		},
	);

	it('agrees across notations of the same colour', () => {
		const asHex = getContrastRatio('#ffc001', '#ffffff');
		expect(getContrastRatio('rgb(255, 192, 1)', '#ffffff')).toBeCloseTo(
			asHex,
			5,
		);
	});
});

describe('lightnessDelta', () => {
	it('measures the distance lighten() would travel', () => {
		expect(lightnessDelta('#18856f', '#03af83')).toBeCloseTo(0.04, 4);
		expect(lightnessDelta('#18856f', '#36e5aa')).toBeCloseTo(0.24, 4);
	});

	it('is signed, so a darker target reads negative', () => {
		expect(lightnessDelta('#36e5aa', '#18856f')).toBeCloseTo(-0.24, 4);
	});

	it('measures lightness only, leaving hue and saturation alone', () => {
		// base's link ramp also turns the hue (168 -> 165) and saturates
		// (69 -> 97), so stepping by this delta lands on the target's
		// lightness while keeping the source's hue — which is the point when
		// the source is a tenant's brand colour.
		const delta = lightnessDelta('#18856f', '#03af83');
		const stepped = colord(lightenColour('#18856f', delta)).toHsl();

		expect(stepped.l).toBeCloseTo(colord('#03af83').toHsl().l, 0);
		expect(stepped.h).toBeCloseTo(colord('#18856f').toHsl().h, 0);
	});
});
