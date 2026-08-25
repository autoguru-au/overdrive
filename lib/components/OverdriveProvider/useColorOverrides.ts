import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useMemo } from 'react';

import {
	getContrastRatio,
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

const themeContext = (tokens: ThemeTokens): ThemeContext => ({
	mode: String(tokens.mode),
	pageBackground: tokens.color.background.default,
	bodyInk: tokens.color.foreground.primary,
	// The darkest of the pale surfaces, not the page background — a link tuned
	// against white alone still fails on a gray-200 card.
	lightSurface: tokens.color.background.emphasisInactive,
	darkSurface: tokens.color.background.reverse,
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
 */
const maxShadeIntensity = 0.6;
const shadeStep = 0.01;

const shade = (
	colour: string,
	towards: 'darker' | 'lighter',
	intensity: number,
): string =>
	shadedColour({
		colour,
		isDarkTheme: false,
		direction: towards === 'darker' ? 'backward' : 'forward',
		intensity,
	});

const clearsAA = (colour: string, surface: string): boolean =>
	passesAccessibilityContrast({
		colour1: colour,
		colour2: surface,
		level: 'AA',
		textSize: 'SMALL',
	});

/** `getContrastRatio` is `min/max`, so the SMALLER value is the greater contrast. */
const isDarkSurface = (surface: string): boolean =>
	getContrastRatio(surface, '#ffffff') < getContrastRatio(surface, '#000000');

/**
 * The supplied colour if it is already legible on `surface`, otherwise the same
 * hue shaded away from that surface until it clears 4.5:1. `null` when the hue
 * cannot get there inside `maxShadeIntensity`.
 */
const deriveLinkForSurface = (
	brand: string,
	surface: string,
): string | null => {
	if (clearsAA(brand, surface)) return brand;

	const towards = isDarkSurface(surface) ? 'lighter' : 'darker';

	for (
		let intensity = shadeStep;
		intensity <= maxShadeIntensity;
		intensity += shadeStep
	) {
		const candidate = shade(brand, towards, intensity);
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
			`Overdrive Provider: linkColor (${supplied}) cannot reach WCAG AA (4.5:1) against ${theme.darkSurface} without losing the brand. Links inside a darkSurface scope keep the theme's own link colour.`,
		);
	else if (changedFrom(supplied, onDark))
		warnOnce(
			`Overdrive Provider: linkColor (${supplied}) does not meet WCAG AA (4.5:1) on dark surfaces. Using ${onDark} inside a darkSurface scope instead.`,
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
		// and let a `darkSurface` scope opt into the second.
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
					// read by the `darkSurface` scope, which repoints the link
					// vars to it for its subtree
					//@ts-expect-error no undefined
					linkOnDark: linkOnDark ?? undefined,
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
