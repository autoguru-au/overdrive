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
}

const themeContext = (tokens: ThemeTokens): ThemeContext => ({
	mode: String(tokens.mode),
	pageBackground: tokens.color.background.default,
	bodyInk: tokens.color.foreground.primary,
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
 * Prefer `primaryForeground`, but only while it clears the floor for the role
 * it is drawn in: a button label is text (WCAG 1.4.3, 4.5:1) while a tick, dot
 * or knob is a UI glyph (1.4.11, 3:1). The same supplied colour can legitimately
 * be kept for one and replaced for the other.
 */
const resolveOnBrand = (
	brand: string,
	theme: ThemeContext,
	suppliedForeground: string | undefined,
	textSize: 'SMALL' | 'LARGE',
): string => {
	if (!suppliedForeground) return onBrandColour(brand, theme);

	const legible = passesAccessibilityContrast({
		colour1: suppliedForeground,
		colour2: brand,
		level: 'AA',
		textSize,
	});

	if (legible) return suppliedForeground;

	const derived = onBrandColour(brand, theme);
	const [floor, surface] =
		textSize === 'SMALL'
			? ['4.5:1', 'the primary button label']
			: ['3:1', 'selection control ticks, dots and knobs'];
	warnOnce(
		`Overdrive Provider: primaryForeground (${suppliedForeground}) does not meet ${floor} against primaryBackground (${brand}), so ${surface} would be illegible. Using ${derived} instead.`,
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

			// Label text, so the 4.5:1 floor rather than the glyph's 3:1.
			buttonForeground = resolveOnBrand(
				primaryBackground,
				theme,
				valid.primaryForeground,
				'SMALL',
			);

			// A glyph failing 3:1 on the fill is invisible.
			onBrand = resolveOnBrand(
				primaryBackground,
				theme,
				valid.primaryForeground,
				'LARGE',
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

		if (process.env.NODE_ENV !== 'production') {
			warnOnLowContrast(primaryBackground, 'primaryBackground', theme);
			warnOnLowContrast(linkColor, 'linkColor', theme);
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
					link: linkColor ?? undefined,
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
					link: linkColor ?? undefined,
				},
			},
		});
	}, [overrides, tokens]);
};
