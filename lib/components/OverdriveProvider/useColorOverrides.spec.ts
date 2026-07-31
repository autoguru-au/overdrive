import { renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { colourMap } from '../../themes/base/colours';
import { tokens as baseTokens } from '../../themes/base/tokens';
import { getColourLuminance, getRGBValues } from '../../themes/helpers';

import { useColorOverrides } from './useColorOverrides';

const BRAND = '#6d39a8'; // Merchant Finder's purple — dark, wants white on it
const BRIGHT = '#e5bc01'; // a bright yellow — wants dark ink on it

const vars = (
	overrides?: Parameters<typeof useColorOverrides>[0],
	tokens: Parameters<typeof useColorOverrides>[1] = baseTokens,
) =>
	renderHook(() => useColorOverrides(overrides, tokens)).result
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

		it('ignores a primaryForeground that would be illegible on the brand', () => {
			// a tenant pairing a light brand with white button text: taken
			// verbatim this puts a white tick on a light checkbox, which is
			// worse than the fixed dark ink these controls had before they
			// followed the brand at all
			const result = vars({
				primaryBackground: '#ff6d00',
				primaryForeground: '#ffffff',
			});

			expect(result['--od-color-brand-on-solid']).toBe(
				colourMap.gray['900'],
			);
			// the button label still honours what the tenant asked for — that
			// is their stated brand pairing, and it was already the behaviour
			expect(result['--od-colours-intent-primary-foreground']).toBe(
				'#ffffff',
			);
		});

		it('derives the button label too when no primaryForeground is given', () => {
			// otherwise a light brand keeps the theme's white label and the
			// solid button is unreadable, which the prop docs promise against
			const result = vars({ primaryBackground: BRIGHT });

			expect(result['--od-colours-intent-primary-foreground']).toBe(
				colourMap.gray['900'],
			);
			expect(result['--od-color-brand-on-solid']).toBe(
				colourMap.gray['900'],
			);
		});

		it('picks its contrast candidates from the active theme, not the base one', () => {
			// the two candidates are the theme's own page background and body
			// ink, so a theme that changes either gets decisions made against
			// what it actually renders
			const recoloured = {
				...baseTokens,
				color: {
					...baseTokens.color,
					background: {
						...baseTokens.color.background,
						default: '#fff8e1',
					},
					foreground: {
						...baseTokens.color.foreground,
						primary: '#1a0033',
					},
				},
			};

			const result = vars({ primaryBackground: BRIGHT }, recoloured);
			expect(result['--od-color-brand-on-solid']).toBe('#1a0033');
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
			// a colour not warned about elsewhere in this file, since the
			// warning is deduplicated for the life of the module
			vars({ primaryBackground: '#ffd54a' });
			expect(warn).toHaveBeenCalledWith(
				expect.stringContaining('does not meet WCAG AA'),
			);
		});

		it('stays quiet for a brand with enough contrast', () => {
			const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
			vars({ primaryBackground: BRAND });
			expect(warn).not.toHaveBeenCalled();
		});

		it('warns only once for a repeated colour, since the provider re-renders freely', () => {
			const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
			vars({ primaryBackground: '#ffe08a' });
			vars({ primaryBackground: '#ffe08a' });
			vars({ primaryBackground: '#ffe08a' });
			expect(warn).toHaveBeenCalledTimes(1);
		});
	});

	describe('server rendering', () => {
		it('keeps overrides when the DOM colour check is unavailable', () => {
			// `isValidColor` uses `Option`, a DOM global. Failing closed on the
			// server stripped every override, so a branded page shipped no
			// inline vars and only picked up the brand on hydration.
			const original = globalThis.Option;
			// @ts-expect-error simulating a non-DOM environment
			delete globalThis.Option;
			try {
				const result = vars({ primaryBackground: BRAND });
				expect(result['--od-color-brand-solid']).toBe(BRAND);
			} finally {
				globalThis.Option = original;
			}
		});
	});
});
