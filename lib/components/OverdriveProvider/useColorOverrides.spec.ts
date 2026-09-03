import { renderHook } from '@testing-library/react';
import { colord } from 'colord';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { colourMap } from '../../themes/base/colours';
import { tokens as baseTokens } from '../../themes/base/tokens';
import {
	getColourLuminance,
	getRGBValues,
	passesAccessibilityContrast,
} from '../../themes/helpers';

import { useColorOverrides } from './useColorOverrides';

const BRAND = '#6d39a8'; // Merchant Finder's purple — dark, wants white on it
const BRIGHT = '#e5bc01'; // a bright yellow — wants dark ink on it
const LIGHT_BRAND = '#ffc001'; // AutoGuru yellow — 1.6:1 on white, 9.4:1 on navy
const PALE_SURFACE = baseTokens.color.background.emphasisInactive; // gray200
const DARK_SURFACE = baseTokens.color.background.reverse; // gray900

const vars = (
	overrides?: Parameters<typeof useColorOverrides>[0],
	tokens: Parameters<typeof useColorOverrides>[1] = baseTokens,
) =>
	renderHook(() => useColorOverrides(overrides, tokens)).result
		.current as Record<string, string>;

const luminance = (colour: string) => getColourLuminance(getRGBValues(colour));

const legibleOn = (colour: string, surface: string) =>
	passesAccessibilityContrast({
		colour1: colour,
		colour2: surface,
		level: 'AA',
		textSize: 'SMALL',
	});

const hue = (colour: string) => colord(colour).toHsl().h;

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
		it('defaults them from the brand when linkColor is absent', () => {
			// A tenant supplying only `primaryBackground` used to get branded
			// buttons beside base-theme green links and focus rings.
			const result = vars({ primaryBackground: BRAND });
			expect(result['--od-colours-foreground-link']).toBe(BRAND);
			expect(result['--od-typography-colour-link']).toBe(BRAND);
			expect(result['--od-color-interactive-link-on-dark']).toBeDefined();
		});

		it('lets an explicit linkColor win over the brand', () => {
			const link = '#0b5cd5';
			const result = vars({
				primaryBackground: BRAND,
				linkColor: link,
			});
			// Derived for the light surface, so not necessarily verbatim — the
			// point is that it tracks `linkColor`, not `primaryBackground`.
			expect(result['--od-colours-foreground-link']).not.toBe(BRAND);
			expect(result['--od-typography-colour-link']).not.toBe(BRAND);
		});

		it('brands them from linkColor alone, with no brand background', () => {
			const result = vars({ linkColor: BRAND });
			expect(result['--od-colours-foreground-link']).toBe(BRAND);
		});

		// One inline var serves every surface, so a brand legible on a white
		// page can still be invisible on a gray-900 header, and vice versa.
		describe('deriving one colour per surface', () => {
			it('darkens a light brand until it clears AA on the palest card', () => {
				const link = vars({ linkColor: LIGHT_BRAND })[
					'--od-colours-foreground-link'
				];

				expect(link).not.toBe(LIGHT_BRAND);
				expect(legibleOn(link, PALE_SURFACE)).toBe(true);
				expect(hue(link)).toBeCloseTo(hue(LIGHT_BRAND), 0);
			});

			it('leaves a light brand untouched for dark surfaces', () => {
				expect(
					vars({ linkColor: LIGHT_BRAND })[
						'--od-color-interactive-link-on-dark'
					],
				).toBe(LIGHT_BRAND);
			});

			it('lightens a dark brand until it clears AA on a dark surface', () => {
				const link = vars({ linkColor: BRAND })[
					'--od-color-interactive-link-on-dark'
				];

				expect(link).not.toBe(BRAND);
				expect(legibleOn(link, DARK_SURFACE)).toBe(true);
				expect(hue(link)).toBeCloseTo(hue(BRAND), 0);
			});

			it('leaves a dark brand untouched on pale surfaces', () => {
				expect(
					vars({ linkColor: BRAND })['--od-colours-foreground-link'],
				).toBe(BRAND);
			});

			// The notations `isValidColor` accepts and the old parser did not.
			// Each used to measure as black: it cleared AA on sight, so the raw
			// brand shipped unshaded and the feature no-opped without a word.
			it.each([
				['hsl()', 'hsl(45, 100%, 50%)'],
				['a named colour', 'gold'],
				['8-digit hex', '#ffc001aa'],
			])(
				'shades a brand supplied as %s, rather than passing it through',
				(_label, supplied) => {
					const link = vars({ linkColor: supplied })[
						'--od-colours-foreground-link'
					];

					expect(link).toBeDefined();
					expect(link).not.toBe(supplied);
					expect(legibleOn(link, PALE_SURFACE)).toBe(true);
				},
			);

			// Each derived value has to clear AA on the *hardest* surface its
			// bucket covers, not merely on the one it was pointed at — otherwise
			// `backgroundColor="gray300"` gets a colour tuned for gray200.
			it('clears AA on every surface its bucket claims, not just one', () => {
				const result = vars({ linkColor: LIGHT_BRAND });
				const onLight = result['--od-colours-foreground-link'];
				const onDark = result['--od-color-interactive-link-on-dark'];

				// worst case of each list: the darkest pale, the lightest dark
				for (const surface of ['#ffffff', '#eef0f2', '#d4d9dd'])
					expect(legibleOn(onLight, surface)).toBe(true);

				for (const surface of ['#212338', '#34384c', '#484c5f'])
					expect(legibleOn(onDark, surface)).toBe(true);
			});

			// The loop used to accumulate `intensity += 0.01` and stop at 0.59,
			// so the last step the cap advertised was never tried.
			it('spends every step the cap advertises before giving up', () => {
				// clears AA on gray300 only at step 60 of 60 — under the old
				// float loop this fell through and lost its brand entirely
				const EDGE = '#fff0f0';

				const link = vars({ linkColor: EDGE })[
					'--od-colours-foreground-link'
				];

				expect(link).toBeDefined();
				expect(legibleOn(link, '#d4d9dd')).toBe(true);
			});

			it('refuses to guess about a colour it cannot measure, and warns', () => {
				const warn = vi
					.spyOn(console, 'warn')
					.mockImplementation(() => {});

				// `isValidColor` accepts this — the DOM does — but no contrast
				// decision about it can be measured.
				const result = vars({ linkColor: 'currentColor' });

				expect(result['--od-colours-foreground-link']).toBeUndefined();
				expect(
					result['--od-color-interactive-link-on-dark'],
				).toBeUndefined();
				expect(warn).toHaveBeenCalledWith(
					expect.stringContaining('not a colour this can measure'),
				);
			});

			it('keeps the theme default on the side a hue cannot reach, and warns', () => {
				const warn = vi
					.spyOn(console, 'warn')
					.mockImplementation(() => {});
				// a pale pastel: no amount of darkening short of abandoning the
				// hue clears 4.5:1 on a gray-200 card, but it is already legible
				// on gray-900 — so only the light side falls back
				const PASTEL = '#affff5';

				const result = vars({ linkColor: PASTEL });

				expect(result['--od-colours-foreground-link']).toBeUndefined();
				expect(result['--od-typography-colour-link']).toBeUndefined();
				expect(result['--od-color-interactive-link-on-dark']).toBe(
					PASTEL,
				);
				expect(warn).toHaveBeenCalledWith(
					expect.stringContaining('without losing the brand'),
				);
			});
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
			// A pale brand can trip more than one warning — low contrast on the
			// page, and the link derivation it now also feeds. What matters is
			// that repeating the call adds nothing, so count the first call's
			// output rather than hard-coding a number.
			vars({ primaryBackground: '#ffe08a' });
			const afterFirst = warn.mock.calls.length;
			expect(afterFirst).toBeGreaterThan(0);
			vars({ primaryBackground: '#ffe08a' });
			vars({ primaryBackground: '#ffe08a' });
			expect(warn).toHaveBeenCalledTimes(afterFirst);
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
