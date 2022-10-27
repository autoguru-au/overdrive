import { BreakPoints, ColourGamut, ColourMap } from './tokens';

export const breakpoints: BreakPoints = {
	mobile: '0px',
	tablet: '768px', // IPad mini width (1024 - 25%)
	desktop: '1024px', // IPad Pro width (1366 - 25%)
	largeDesktop: '1440px', // 1080p width (1920 - 25%)
};

export const makeRuntimeTokens = (
	runtimeBreakpoints: BreakPoints = breakpoints,
) => ({
	breakpoints: runtimeBreakpoints,
});

export type RuntimeTokens = ReturnType<typeof makeRuntimeTokens>;

export const buildColourGamut = (
	colours: ColourMap,
): Record<ColourGamut, string> =>
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
				{} as Record<Partial<ColourGamut>, string>,
			),
		}),
		{} as Record<ColourGamut, string>,
	);
