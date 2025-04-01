import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useMemo } from 'react';

import { shadedColour } from '../../themes/helpers';
import { themeContractVars } from '../../themes/theme.css';

/** valid colour override keys */
const colorOverrideKeys = [
	'primaryColourBackground',
	'primaryColourBackgroundMild',
	'primaryColourBackgroundStrong',
	'primaryColourBorder',
	'primaryColourForeground',
] as const;

export type ColorOverrides = Record<(typeof colorOverrideKeys)[number], string>;

const isValidColor = (color: string): boolean => {
	const s = new Option().style;
	s.color = color;
	return s.color !== '';
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
					`Invalid color value for ${key}: ${overrides[key]}`,
				);
				delete overrides[key];
			}
		});

		let mildPrimary: string | null = null;
		let strongPrimary: string | null = null;

		if (overrides.primaryColourBackground) {
			mildPrimary =
				overrides.primaryColourBackgroundMild ||
				shadedColour({
					colour: overrides.primaryColourBackground,
					isDarkTheme: false,
					direction: themeMode === 'light' ? 'forward' : 'backward',
					intensity: 0.1,
				});
			strongPrimary =
				overrides.primaryColourBackgroundStrong ||
				shadedColour({
					colour: overrides.primaryColourBackground,
					isDarkTheme: false,
					direction: themeMode === 'light' ? 'forward' : 'backward',
					intensity: 0.1,
				});
		}
		// although this look scary, assignInlineVars only generates css vars to apply to a container
		// anyproperty that is undefined will not have an inline css var generated
		return assignInlineVars(themeContractVars, {
			colours: {
				intent: {
					primary: {
						background: {
							//@ts-expect-error no undefined
							standard:
								overrides.primaryColourBackground ?? undefined,
							//@ts-expect-error no undefined
							mild: mildPrimary ?? undefined,
							//@ts-expect-error no undefined
							strong: strongPrimary ?? undefined,
						},
						//@ts-expect-error no undefined
						foreground:
							overrides.primaryColourForeground ?? undefined,
						//@ts-expect-error no undefined
						border: overrides.primaryColourBorder ?? undefined,
					},
				},
			},
			typography: {
				colour: {
					//@ts-expect-error no undefined
					primary: overrides.primaryColourBackground ?? undefined,
				},
			},
		});
	}, [overrides, themeMode]);
};
