import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useMemo } from 'react';

import { colourMap } from '../../themes/base/colours';
import {
	getContrastRatio,
	passesAccessibilityContrast,
	shadedColour,
} from '../../themes/helpers';
import { overdriveTokens } from '../../themes/theme.css';

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
	try {
		const s = new Option();
		s.style.color = color ?? '';
		return s.style.color !== '';
	} catch {
		return false;
	}
};

/**
 * The contrast-safe content colour to sit on top of a brand fill — the Switch
 * handle, the Radio dot, the CheckBox tick — picked as whichever end of the
 * neutral ramp reads better against the supplied brand.
 *
 * `getContrastRatio` returns `min/max` luminance, the reciprocal of the
 * conventional WCAG ratio, so the SMALLER value is the better contrast.
 */
const onBrandColour = (brand: string): string =>
	getContrastRatio(colourMap.white, brand) <
	getContrastRatio(colourMap.gray['900'], brand)
		? colourMap.white
		: colourMap.gray['900'];

/**
 * Dev-only nudge when a supplied colour will be drawn as text or a border on
 * the page background — outlined buttons, links, focus rings. Silent in
 * production, and silent for the many consumers that pass no overrides at all.
 */
const warnOnLowContrast = (colour: string | undefined, key: string) => {
	if (
		colour &&
		!passesAccessibilityContrast({
			colour1: colour,
			colour2: colourMap.white,
			level: 'AA',
			textSize: 'SMALL',
		})
	) {
		console.warn(
			`Overdrive Provider: ${key} (${colour}) does not meet WCAG AA (4.5:1) against the page background. Anything drawn in it as text or a border — outlined buttons, links, focus rings — may be hard to read.`,
		);
	}
};

export const useColorOverrides = (
	overrides: Partial<ColorOverrides> | undefined,
	themeMode: string,
) => {
	return useMemo(() => {
		if (!overrides) return {};

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
		const isDarkTheme = themeMode !== 'light';

		let mildPrimary: string | null = null;
		let strongPrimary: string | null = null;
		let onBrand: string | null = null;
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

			onBrand =
				valid.primaryForeground ?? onBrandColour(primaryBackground);

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
			warnOnLowContrast(primaryBackground, 'primaryBackground');
			warnOnLowContrast(linkColor, 'linkColor');
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
						//@ts-expect-error no undefined
						foreground: valid.primaryForeground ?? undefined,
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
	}, [overrides, themeMode]);
};
