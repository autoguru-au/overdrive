import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useMemo } from 'react';

import {
	getContrastRatio,
	passesAccessibilityContrast,
	shadedColour,
} from '../../themes/helpers';
import { overdriveTokens, type ThemeTokens } from '../../themes/theme.css';

/**
 * The active theme's own values, rather than the base theme's, so a theme that
 * changes its page background or body ink still gets contrast decisions made
 * against what it actually renders.
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
	// `Option` is a DOM global, so this whole check throws during SSR. Failing
	// closed there would strip every override and emit no inline vars into the
	// server HTML — the brand would only appear on hydration. Validation is a
	// developer convenience, so off the browser we accept the value and let the
	// browser ignore it if it really is malformed.
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
 * Emit a warning at most once per message.
 *
 * `OverdriveProvider` is memoised on a deep prop compare that includes
 * `children`, so it re-renders whenever anything below it does, and the callers
 * all pass an inline object literal. Without this the same warning would repeat
 * for the life of the page.
 */
const warned = new Set<string>();
const warnOnce = (message: string) => {
	if (warned.has(message)) return;
	warned.add(message);
	console.warn(message);
};

/**
 * The contrast-safe content colour to sit on top of a brand fill — the Switch
 * handle, the Radio dot, the CheckBox tick.
 *
 * The two candidates come from the ACTIVE theme, not a fixed white/black pair:
 * they are the same two leaves the brand tokens are seeded from, so whatever a
 * theme uses for its page background and its body ink is what gets offered here.
 *
 * `getContrastRatio` returns `min/max` luminance, the reciprocal of the
 * conventional WCAG ratio, so the SMALLER value is the better contrast.
 */
const onBrandColour = (brand: string, theme: ThemeContext): string =>
	getContrastRatio(theme.pageBackground, brand) <
	getContrastRatio(theme.bodyInk, brand)
		? theme.pageBackground
		: theme.bodyInk;

/**
 * Resolve the on-brand glyph colour, preferring the caller's `primaryForeground`
 * but only while it stays legible on the brand fill.
 *
 * `primaryForeground` was chosen as a *button label* colour, and a tenant
 * pairing a light brand with white text is common. Taking it verbatim here would
 * put a white tick on a light checkbox — a contrast regression on controls that
 * were a fixed dark ink before they followed the brand at all. 3:1 is the WCAG
 * threshold for graphical objects, which is what a tick, dot and knob are.
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
 * Dev-only nudge when a supplied colour will be drawn as text or a border on
 * the theme's page background — outlined buttons, links, focus rings. Silent in
 * production, and silent for the many consumers that pass no overrides at all.
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

		// Shallow copy before pruning: the caller's prop object is frequently a
		// stable value held in a GraphQL cache, and deleting keys off it would
		// mutate their state.
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
		// unknown modes fall back to light rather than dark, so a custom theme
		// with a missing or misspelled `mode` degrades to the common case
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
			// mild and strong must move in OPPOSITE directions — in a light
			// theme mild is the paler wash and strong the deeper press state.
			// They were previously derived with identical arguments, so both
			// resolved to the same colour and hover/active looked like resting.
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

			// The button label honours an explicit `primaryForeground` even when
			// it is poor — that is the tenant's stated brand pairing, and it was
			// already the behaviour. Only the *absent* case is derived, which is
			// what the prop docs promise.
			buttonForeground =
				valid.primaryForeground ??
				onBrandColour(primaryBackground, theme);

			// The selection controls are stricter: a tick, dot or knob that
			// fails 3:1 on the fill is simply invisible, so an illegible
			// `primaryForeground` is replaced rather than honoured.
			onBrand = resolveOnBrand(
				primaryBackground,
				theme,
				valid.primaryForeground,
			);

			// The pale tints behind an outlined button. These approximate the
			// base theme's green100/green200 relationship to its green800
			// border: hover is the paler of the two, pressed a touch deeper.
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
							// The border and label take the brand verbatim: a
							// tenant supplying their brand expects to see their
							// brand, not a derived approximation of it. The
							// contrast risk that creates is what
							// `warnOnLowContrast` reports above.
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
						// Falls back to the derived on-brand colour, not to the
						// theme's own foreground: a tenant passing only
						// `primaryBackground` would otherwise keep the theme's
						// white label, which is unreadable on a light brand.
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
