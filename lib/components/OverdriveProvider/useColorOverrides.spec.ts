import { renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { colourMap } from '../../themes/base/colours';
import { getColourLuminance, getRGBValues } from '../../themes/helpers';

import { useColorOverrides } from './useColorOverrides';

const BRAND = '#6d39a8'; // Merchant Finder's purple — dark, wants white on it
const BRIGHT = '#e5bc01'; // a bright yellow — wants dark ink on it

const vars = (overrides?: Parameters<typeof useColorOverrides>[0]) =>
	renderHook(() => useColorOverrides(overrides, 'light')).result
		.current as Record<string, string>;

const luminance = (colour: string) => getColourLuminance(getRGBValues(colour));

describe('useColorOverrides', () => {
	beforeEach(() => {
		vi.restoreAllMocks();
	});

	it('generates nothing when no overrides are supplied', () => {
		expect(vars()).toEqual({});
	});

	describe('back-compat with the existing five keys', () => {
		it('writes the legacy primary intent vars it always has', () => {
			const result = vars({
				primaryBackground: BRAND,
				primaryForeground: '#ffffff',
				primaryBorder: '#000000',
			});

			expect(
				result['--od-colours-intent-primary-background-standard'],
			).toBe(BRAND);
			expect(result['--od-colours-intent-primary-foreground']).toBe(
				'#ffffff',
			);
			expect(result['--od-colours-intent-primary-border']).toBe(
				'#000000',
			);
			expect(result['--od-typography-colour-primary']).toBe(BRAND);
		});

		it('honours explicitly supplied mild and strong values', () => {
			const result = vars({
				primaryBackground: BRAND,
				primaryBackgroundMild: '#eeeeee',
				primaryBackgroundStrong: '#111111',
			});

			expect(result['--od-colours-intent-primary-background-mild']).toBe(
				'#eeeeee',
			);
			expect(
				result['--od-colours-intent-primary-background-strong'],
			).toBe('#111111');
		});

		it('derives mild lighter and strong darker than the brand, not identical', () => {
			const result = vars({ primaryBackground: BRAND });
			const mild = result['--od-colours-intent-primary-background-mild'];
			const strong =
				result['--od-colours-intent-primary-background-strong'];

			// regression guard: these were derived with identical arguments and
			// both resolved to the same lightened colour, so a branded button's
			// hover and active states were indistinguishable from resting
			expect(mild).not.toBe(strong);
			expect(luminance(mild)).toBeGreaterThan(luminance(BRAND));
			expect(luminance(strong)).toBeLessThan(luminance(BRAND));
		});
	});

	describe('brand accent', () => {
		it('writes the brand pair from the supplied background', () => {
			const result = vars({ primaryBackground: BRAND });
			expect(result['--od-color-brand-solid']).toBe(BRAND);
		});

		it('picks white as on-brand content for a dark brand', () => {
			const result = vars({ primaryBackground: BRAND });
			expect(result['--od-color-brand-on-solid']).toBe(colourMap.white);
		});

		it('picks dark ink as on-brand content for a bright brand', () => {
			const result = vars({ primaryBackground: BRIGHT });
			expect(result['--od-color-brand-on-solid']).toBe(
				colourMap.gray['900'],
			);
		});

		it('prefers an explicit primaryForeground over the derived value', () => {
			const result = vars({
				primaryBackground: BRIGHT,
				primaryForeground: '#123456',
			});
			expect(result['--od-color-brand-on-solid']).toBe('#123456');
		});
	});

	describe('outlined button', () => {
		it('takes the brand verbatim for border and label', () => {
			const result = vars({ primaryBackground: BRAND });
			expect(result['--od-color-button-primary-outlined-border']).toBe(
				BRAND,
			);
			expect(result['--od-color-button-primary-outlined-text']).toBe(
				BRAND,
			);
		});

		it('derives a hover wash paler than the pressed wash', () => {
			const result = vars({ primaryBackground: BRAND });
			const hover = result['--od-color-button-primary-outlined-hover'];
			const pressed =
				result['--od-color-button-primary-outlined-pressed'];

			expect(luminance(hover)).toBeGreaterThan(luminance(pressed));
			expect(luminance(pressed)).toBeGreaterThan(luminance(BRAND));
		});
	});

	describe('links and focus rings', () => {
		it('leaves them alone when only a brand background is supplied', () => {
			const result = vars({ primaryBackground: BRAND });
			expect(result['--od-colours-foreground-link']).toBeUndefined();
			expect(result['--od-typography-colour-link']).toBeUndefined();
		});

		it('brands them only when linkColor is passed explicitly', () => {
			const result = vars({
				primaryBackground: BRAND,
				linkColor: BRAND,
			});
			expect(result['--od-colours-foreground-link']).toBe(BRAND);
			expect(result['--od-typography-colour-link']).toBe(BRAND);
		});
	});

	describe('invalid values', () => {
		it('warns, drops the key, and does not mutate the caller object', () => {
			const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
			const supplied = {
				primaryBackground: 'not-a-colour',
				primaryForeground: '#ffffff',
			};

			const result = vars(supplied);

			expect(warn).toHaveBeenCalledWith(
				expect.stringContaining('primaryBackground'),
			);
			expect(result['--od-color-brand-solid']).toBeUndefined();
			// the hook used to `delete` off the prop object itself, which
			// mutates state an MFE may be holding in a GraphQL cache
			expect(supplied.primaryBackground).toBe('not-a-colour');
		});
	});

	describe('contrast warning', () => {
		it('warns when the brand is too light to read on the page background', () => {
			const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
			vars({ primaryBackground: BRIGHT });
			expect(warn).toHaveBeenCalledWith(
				expect.stringContaining('does not meet WCAG AA'),
			);
		});

		it('stays quiet for a brand with enough contrast', () => {
			const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
			vars({ primaryBackground: BRAND });
			expect(warn).not.toHaveBeenCalled();
		});
	});
});
