import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useMemo } from 'react';

import {
	getContrastRatio,
	passesAccessibilityContrast,
	shadedColour,
} from '../../themes/helpers';
import { overdriveTokens, type ThemeTokens } from '../../themes/theme.css';

/**
 * The active theme's own values, so a theme that changes its page background or
 * body ink gets contrast decisions made against what it actually renders.
 */
interface ThemeContext {
	/** `light` or `dark`, resolved — not the CSS var reference. */
	mode: string;
	/** What a control's contrast glyph sits on when it is off: the page. */
	pageBackground: string;
	/** The theme's darkest content colour. */
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

/**
 * Warn at most once per message. The provider re-renders freely and every caller
 * passes an inline object literal, so an unguarded warning repeats forever.
 */
const warned = new Set<string>();
const warnOnce = (message: string) => {
	if (warned.has(message)) return;
	warned.add(message);
	console.warn(message);
};

/**
 * The contrast-safe content colour for a brand fill — the Switch handle, Radio
 * dot, CheckBox tick. Candidates come from the active theme, being the same two
 * leaves the brand pair is seeded from.
 *
 * `getContrastRatio` returns `min/max`, the reciprocal of the WCAG ratio, so the
 * SMALLER value is the better contrast.
 */
const onBrandColour = (brand: string, theme: ThemeContext): string =>
	getContrastRatio(theme.pageBackground, brand) <
	getContrastRatio(theme.bodyInk, brand)
		? theme.pageBackground
		: theme.bodyInk;

/**
 * Prefer the caller's `primaryForeground`, but only while it stays legible on the
 * fill. It was chosen as a button label colour, so a tenant pairing a light brand
 * with white text would otherwise get a white tick on a light checkbox. 3:1 is
 * the WCAG threshold for graphical objects, which is what these glyphs are.
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

/**
 * Dev-only nudge when a colour will be drawn as text or a border on the page —
 * outlined buttons, links, focus rings.
 */
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
		/** Content on the brand fill for the selection controls. */
		let onBrand: string | null = null;
		/** Content on the brand fill for the primary button's label. */
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

			// The label honours an explicit value even when it is poor — that is
			// the tenant's stated pairing. Only the absent case is derived.
			buttonForeground =
				valid.primaryForeground ??
				onBrandColour(primaryBackground, theme);

			// Stricter: a glyph failing 3:1 on the fill is simply invisible.
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
							// Verbatim: a tenant expects to see their own brand,
							// not an approximation. `warnOnLowContrast` covers
							// the contrast risk that creates.
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
					// read by focusOutline.css.ts, so this also brands every
					// focus ring in the library
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
						// Derived rather than the theme's own foreground, which
						// would leave a white label on a light brand.
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
