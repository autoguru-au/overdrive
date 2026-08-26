import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useMemo } from 'react';

import {
	darkSurfaceValues,
	lightSurfaceValues,
} from '../../styles/surfaceLinkVars';
import {
	canMeasureContrast,
	darkenColour,
	getContrastRatio,
	lightenColour,
	passesAccessibilityContrast,
	shadedColour,
} from '../../themes/helpers';
import { overdriveTokens, type ThemeTokens } from '../../themes/theme.css';

/** The active theme's own values, so contrast decisions match what it renders. */
interface ThemeContext {
	mode: string;
	pageBackground: string;
	bodyInk: string;
	lightSurface: string;
	darkSurface: string;
}

/** The ends of the luminance scale, not theme colours — the poles a surface is measured against. */
const luminancePole = { light: '#ffffff', dark: '#000000' } as const;

/**
 * The live value behind a `backgroundColor` sprinkle value name. `color.gamut`
 * holds var() references at this point, so the ramp comes off the legacy gamut,
 * which carries literals.
 */
const surfaceValue = (
	name: string,
	tokens: ThemeTokens,
): string | undefined => {
	// eslint-disable-next-line no-restricted-syntax -- RETAINED: color.gamut resolves to var() references; colours.gamut is the only gamut carrying literals, and a literal is what a contrast measurement needs.
	const { gamut } = tokens.colours;
	const byName: Record<string, string> = {
		...tokens.color.surface,
		...tokens.color.background,
		...gamut,
		black900: gamut.gray900,
	};
	return byName[name];
};

/** `getContrastRatio` is `min/max`, so the SMALLER value is the greater contrast. */
const isDarkSurface = (surface: string): boolean =>
	getContrastRatio(surface, luminancePole.light) <
	getContrastRatio(surface, luminancePole.dark);

/**
 * The hardest surface in a bucket to be legible on: the darkest of the pale
 * ones, the lightest of the dark ones. Tuning against the worst case is what
 * lets `surfaceLinkVars` promise 4.5:1 on every surface it declares, rather
 * than only on whichever one the derivation was pointed at.
 */
const worstCaseSurface = (
	names: readonly string[],
	tokens: ThemeTokens,
	pole: 'light' | 'dark',
): string => {
	// Membership is by name, but names can lie: a theme is free to repoint
	// `reverse` at something pale. Measure each member and keep only those
	// actually on the bucket's side of the scale, so the target is never a
	// colour from the wrong half.
	const measurable = names
		.map((name) => surfaceValue(name, tokens))
		.filter((value): value is string => typeof value === 'string')
		.filter((value) => canMeasureContrast(value))
		.filter((value) => isDarkSurface(value) === (pole === 'dark'));

	// A theme so inverted that a bucket has no members on its own side gets
	// the pole itself — the strictest possible target, never a wrong one.
	if (measurable.length === 0) return luminancePole[pole];

	// `getContrastRatio` is min/max, so the SMALLEST value is the greatest
	// contrast. The member furthest from its own pole — the darkest pale
	// surface, the lightest dark one — is the one a link struggles most on.
	return measurable.reduce((worst, value) =>
		getContrastRatio(value, luminancePole[pole]) <
		getContrastRatio(worst, luminancePole[pole])
			? value
			: worst,
	);
};

const themeContext = (tokens: ThemeTokens): ThemeContext => ({
	mode: String(tokens.mode),
	pageBackground: tokens.color.background.default,
	bodyInk: tokens.color.foreground.primary,
	lightSurface: worstCaseSurface(lightSurfaceValues, tokens, 'light'),
	darkSurface: worstCaseSurface(darkSurfaceValues, tokens, 'dark'),
});

/** valid colour override keys */
const colorOverrideKeys = [
	'primaryBackground',
	'primaryBackgroundMild',
	'primaryBackgroundStrong',
	'primaryBorder',
	'primaryForeground',
	'linkColor',
] as const;

export type ColorOverrides = Record<(typeof colorOverrideKeys)[number], string>;

const isValidColor = (color: string): boolean => {
	// `Option` is a DOM global, so this throws during SSR. Failing closed there
	// stripped every override, leaving the brand to appear only on hydration.
	if (typeof Option === 'undefined') return true;

	try {
		const s = new Option();
		s.style.color = color ?? '';
		return s.style.color !== '';
	} catch {
		return true;
	}
};

/** Warn once per message — the provider re-renders on every child change. */
const warned = new Set<string>();
const warnOnce = (message: string) => {
	if (warned.has(message)) return;
	warned.add(message);
	console.warn(message);
};

/**
 * Contrast-safe content for a brand fill, chosen from the active theme's own
 * page background and body ink.
 *
 * `getContrastRatio` returns `min/max` — the reciprocal of the WCAG ratio — so
 * the SMALLER value wins.
 */
const onBrandColour = (brand: string, theme: ThemeContext): string =>
	getContrastRatio(theme.pageBackground, brand) <
	getContrastRatio(theme.bodyInk, brand)
		? theme.pageBackground
		: theme.bodyInk;

/**
 * Prefer `primaryForeground`, but only while it clears 3:1 on the fill — it was
 * chosen as a button label colour, and a light brand paired with white text
 * would otherwise leave an invisible tick.
 */
const resolveOnBrand = (
	brand: string,
	theme: ThemeContext,
	suppliedForeground?: string,
): string => {
	if (!suppliedForeground) return onBrandColour(brand, theme);

	const legible = passesAccessibilityContrast({
		colour1: suppliedForeground,
		colour2: brand,
		level: 'AA',
		textSize: 'LARGE',
	});

	if (legible) return suppliedForeground;

	const derived = onBrandColour(brand, theme);
	warnOnce(
		`Overdrive Provider: primaryForeground (${suppliedForeground}) does not meet 3:1 against primaryBackground (${brand}), so selection controls would be illegible. Using ${derived} for their tick/dot/knob instead.`,
	);
	return derived;
};

/** Dev-only nudge for a colour drawn as text or a border on the page. */
const warnOnLowContrast = (
	colour: string | undefined,
	key: string,
	theme: ThemeContext,
) => {
	if (
		colour &&
		!passesAccessibilityContrast({
			colour1: colour,
			colour2: theme.pageBackground,
			level: 'AA',
			textSize: 'SMALL',
		})
	) {
		warnOnce(
			`Overdrive Provider: ${key} (${colour}) does not meet WCAG AA (4.5:1) against the page background. Anything drawn in it as text or a border — outlined buttons, links, focus rings — may be hard to read.`,
		);
	}
};

/**
 * Past this, a brand has been shaded so far it is no longer the brand; fall back
 * to the theme's own link colour rather than ship an unrecognisable one.
 *
 * Counted in whole steps rather than accumulated as a float: `intensity += 0.01`
 * from 0.01 drifts, and stopped at 0.59 — one step short of the cap the constant
 * advertised.
 */
const maxShadeSteps = 60;
const shadeStep = 0.01;

const shade = (
	colour: string,
	towards: 'darker' | 'lighter',
	intensity: number,
): string =>
	towards === 'darker'
		? darkenColour(colour, intensity)
		: lightenColour(colour, intensity);

const clearsAA = (colour: string, surface: string): boolean =>
	passesAccessibilityContrast({
		colour1: colour,
		colour2: surface,
		level: 'AA',
		textSize: 'SMALL',
	});

/**
 * The supplied colour if it is already legible on `surface`, otherwise the same
 * hue shaded away from that surface until it clears 4.5:1. `null` when the hue
 * cannot get there inside `maxShadeIntensity`.
 */
const deriveLinkForSurface = (
	brand: string,
	surface: string,
): string | null => {
	// Every branch below is a luminance comparison. On a colour we cannot parse
	// those all resolve against black, so the brand would clear AA on sight and
	// ship unshaded — the feature silently doing nothing.
	if (!canMeasureContrast(brand)) return null;

	if (clearsAA(brand, surface)) return brand;

	const towards = isDarkSurface(surface) ? 'lighter' : 'darker';

	for (let step = 1; step <= maxShadeSteps; step++) {
		const candidate = shade(brand, towards, step * shadeStep);
		if (clearsAA(candidate, surface)) return candidate;
	}

	return null;
};

const changedFrom = (supplied: string, derived: string | null): boolean =>
	derived !== null && derived.toLowerCase() !== supplied.toLowerCase();

/** Dev-only account of what the supplied link colour actually became. */
const warnOnLinkDerivation = (
	supplied: string,
	onLight: string | null,
	onDark: string | null,
	theme: ThemeContext,
) => {
	if (!canMeasureContrast(supplied)) {
		warnOnce(
			`Overdrive Provider: linkColor (${supplied}) is not a colour this can measure — contrast against it cannot be checked, so links and focus rings keep the theme's own colour. Supply a hex, rgb(), hsl() or CSS named colour.`,
		);
		return;
	}

	if (onLight === null)
		warnOnce(
			`Overdrive Provider: linkColor (${supplied}) cannot reach WCAG AA (4.5:1) against ${theme.lightSurface} without losing the brand. Links and focus rings on light surfaces keep the theme's own link colour.`,
		);
	else if (changedFrom(supplied, onLight))
		warnOnce(
			`Overdrive Provider: linkColor (${supplied}) does not meet WCAG AA (4.5:1) on light surfaces. Using ${onLight} for links and focus rings there instead.`,
		);

	if (onDark === null)
		warnOnce(
			`Overdrive Provider: linkColor (${supplied}) cannot reach WCAG AA (4.5:1) against ${theme.darkSurface} without losing the brand. Links on dark surfaces keep the theme's own link colour.`,
		);
	else if (changedFrom(supplied, onDark))
		warnOnce(
			`Overdrive Provider: linkColor (${supplied}) does not meet WCAG AA (4.5:1) on dark surfaces. Using ${onDark} there instead.`,
		);
};

export const useColorOverrides = (
	overrides: Partial<ColorOverrides> | undefined,
	tokens: ThemeTokens,
) => {
	return useMemo(() => {
		if (!overrides) return {};

		const theme = themeContext(tokens);

		// Copy before pruning — callers commonly hold this object in a cache.
		const valid: Partial<ColorOverrides> = { ...overrides };

		colorOverrideKeys.forEach((key) => {
			if (valid[key] && !isValidColor(valid[key]!)) {
				console.warn(
					`Overdrive Provider: Invalid override color value for ${key}: ${valid[key]}`,
				);
				delete valid[key];
			}
		});

		const { primaryBackground, linkColor } = valid;
		// unknown modes degrade to light, the common case
		const isDarkTheme = theme.mode === 'dark';

		let mildPrimary: string | null = null;
		let strongPrimary: string | null = null;
		let onBrand: string | null = null;
		let buttonForeground: string | null = null;
		let outlinedHover: string | null = null;
		let outlinedPressed: string | null = null;

		if (primaryBackground) {
			// Opposite directions: in a light theme mild is the paler wash and
			// strong the deeper press state. These were once identical.
			mildPrimary =
				valid.primaryBackgroundMild ||
				shadedColour({
					colour: primaryBackground,
					isDarkTheme,
					direction: 'forward',
					intensity: 0.1,
				});
			strongPrimary =
				valid.primaryBackgroundStrong ||
				shadedColour({
					colour: primaryBackground,
					isDarkTheme,
					direction: 'backward',
					intensity: 0.1,
				});

			// Honours an explicit value even when poor; only derives if absent.
			buttonForeground =
				valid.primaryForeground ??
				onBrandColour(primaryBackground, theme);

			// Stricter — a glyph failing 3:1 on the fill is invisible.
			onBrand = resolveOnBrand(
				primaryBackground,
				theme,
				valid.primaryForeground,
			);

			// Pale tints behind an outlined button, hover the paler of the two.
			outlinedHover = shadedColour({
				colour: primaryBackground,
				isDarkTheme,
				direction: 'forward',
				intensity: 0.5,
			});
			outlinedPressed = shadedColour({
				colour: primaryBackground,
				isDarkTheme,
				direction: 'forward',
				intensity: 0.42,
			});
		}

		// One inline var serves every surface, so a single link colour cannot be
		// right on both a white page and a gray-900 header. Derive one for each
		// and let each painted surface point at the one that suits its fill —
		// see `withSurfaceLinkVars` in sprinkles.
		const linkOnLight = linkColor
			? deriveLinkForSurface(linkColor, theme.lightSurface)
			: null;
		const linkOnDark = linkColor
			? deriveLinkForSurface(linkColor, theme.darkSurface)
			: null;

		if (process.env.NODE_ENV !== 'production') {
			warnOnLowContrast(primaryBackground, 'primaryBackground', theme);
			if (linkColor)
				warnOnLinkDerivation(linkColor, linkOnLight, linkOnDark, theme);
		}

		// slightly messy use of ts-expect-error but assignInlineVars only generates css vars to apply to a container
		// any property that is undefined will not have an inline css var generated
		return assignInlineVars(overdriveTokens, {
			color: {
				brand: {
					//@ts-expect-error no undefined
					solid: primaryBackground ?? undefined,
					//@ts-expect-error no undefined
					onSolid: onBrand ?? undefined,
				},
				interactive: {
					// The two surface buckets. Every painted surface points the
					// vars links read at one of these, so the derived pair has
					// to live somewhere a surface can reference.
					//@ts-expect-error no undefined
					linkOnLight: linkOnLight ?? undefined,
					//@ts-expect-error no undefined
					linkOnDark: linkOnDark ?? undefined,
					// The page root is not a painted surface, so it never gets a
					// surface class. Without this, a semantic-link consumer saw
					// the brand only inside a Box and the theme default outside.
					//@ts-expect-error no undefined
					link: linkOnLight ?? undefined,
				},
				button: {
					primary: {
						outlined: {
							// Verbatim — tenants expect their own brand.
							//@ts-expect-error no undefined
							border: primaryBackground ?? undefined,
							//@ts-expect-error no undefined
							text: primaryBackground ?? undefined,
							//@ts-expect-error no undefined
							hover: outlinedHover ?? undefined,
							//@ts-expect-error no undefined
							pressed: outlinedPressed ?? undefined,
						},
					},
				},
			},
			colours: {
				foreground: {
					// also brands every focus ring, via focusOutline.css.ts
					//@ts-expect-error no undefined
					link: linkOnLight ?? undefined,
				},
				intent: {
					primary: {
						background: {
							//@ts-expect-error no undefined
							standard: primaryBackground ?? undefined,
							//@ts-expect-error no undefined
							mild: mildPrimary ?? undefined,
							//@ts-expect-error no undefined
							strong: strongPrimary ?? undefined,
						},
						// Derived — the theme's own value would leave a white
						// label on a light brand.
						//@ts-expect-error no undefined
						foreground: buttonForeground ?? undefined,
						//@ts-expect-error no undefined
						border: valid.primaryBorder ?? undefined,
					},
				},
			},
			typography: {
				colour: {
					//@ts-expect-error no undefined
					primary: primaryBackground ?? undefined,
					// read by TextLink and by the `colour="link"` sprinkle
					//@ts-expect-error no undefined
					link: linkOnLight ?? undefined,
				},
			},
		});
	}, [overrides, tokens]);
};
