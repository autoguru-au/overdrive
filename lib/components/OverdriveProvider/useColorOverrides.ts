import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useMemo } from 'react';

import { shadedColour } from '../../themes/helpers';
import { themeContractVars } from '../../themes/theme.css';

/** valid colour override keys */
const colorOverrideKeys = [
	'primaryBackground',
	'primaryBackgroundMild',
	'primaryBackgroundStrong',
	'primaryBorder',
	'primaryForeground',
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

export const useColorOverrides = (
	overrides: Partial<ColorOverrides> | undefined,
	themeMode: string,
) => {
	return useMemo(() => {
		if (!overrides) return {};

		colorOverrideKeys.forEach((key) => {
			if (overrides[key] && !isValidColor(overrides[key]!)) {
				console.warn(
					`Overdrive Provider: Invalid override color value for ${key}: ${overrides[key]}`,
				);
				delete overrides[key];
			}
		});

		let mildPrimary: string | null = null;
		let strongPrimary: string | null = null;

		if (overrides.primaryBackground) {
			mildPrimary =
				overrides.primaryBackgroundMild ||
				shadedColour({
					colour: overrides.primaryBackground,
					isDarkTheme: false,
					direction: themeMode === 'light' ? 'forward' : 'backward',
					intensity: 0.1,
				});
			strongPrimary =
				overrides.primaryBackgroundStrong ||
				shadedColour({
					colour: overrides.primaryBackground,
					isDarkTheme: false,
					direction: themeMode === 'light' ? 'forward' : 'backward',
					intensity: 0.1,
				});
		}
		// slightly messy use of ts-expect-error but assignInlineVars only generates css vars to apply to a container
		// any property that is undefined will not have an inline css var generated
		return assignInlineVars(themeContractVars, {
			colours: {
				intent: {
					primary: {
						background: {
							//@ts-expect-error no undefined
							standard: overrides.primaryBackground ?? undefined,
							//@ts-expect-error no undefined
							mild: mildPrimary ?? undefined,
							//@ts-expect-error no undefined
							strong: strongPrimary ?? undefined,
						},
						//@ts-expect-error no undefined
						foreground: overrides.primaryForeground ?? undefined,
						//@ts-expect-error no undefined
						border: overrides.primaryBorder ?? undefined,
					},
				},
			},
			typography: {
				colour: {
					//@ts-expect-error no undefined
					primary: overrides.primaryBackground ?? undefined,
				},
			},
		});
	}, [overrides, themeMode]);
};
