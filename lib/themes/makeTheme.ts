import { mapValues } from 'es-toolkit';

import { cssLayerTheme } from '../styles/layers.css';

import type { BreakPoints, ColourMap, FlattenedColours, ThemeTokens } from '.';

export const breakpoints: BreakPoints = {
	mobile: '0px',
	tablet: '768px', // IPad mini width (1024 - 25%)
	desktop: '1024px', // IPad Pro width (1366 - 25%)
	largeDesktop: '1920px', // 1080p width (1920 - 25%)
};

export const mediaQuery = mapValues(
	breakpoints,
	(breakpoint) => `screen and (min-width: ${breakpoint})`,
);

/**
 * Wraps theme tokens with `theme` CSS layer using the vanilla-extract method
 */
export const themeTokensWithLayer = (tokens: ThemeTokens) => ({
	'@layer': cssLayerTheme,
	...tokens,
});

export const makeRuntimeTokens = (
	runtimeBreakpoints: BreakPoints = breakpoints,
) => ({
	breakpoints: runtimeBreakpoints,
});

export type RuntimeTokens = ReturnType<typeof makeRuntimeTokens>;

export const buildColourGamut = (colours: ColourMap): FlattenedColours =>
	Object.entries(colours).reduce(
		(result, [name, colourGrades]) => ({
			...result,
			...Object.entries(colourGrades).reduce(
				(grades, [colourGradeName, colour]) => {
					return {
						...grades,
						[`${name}${colourGradeName}`]: colour,
					};
				},
				{} as Partial<FlattenedColours>,
			),
		}),
		{} as FlattenedColours,
	);
