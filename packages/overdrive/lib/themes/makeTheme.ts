import { ColourGamut, ColourMap, Tokens } from './tokens';

export const makeRuntimeTokens = (tokens: Tokens) => ({
	breakpoints: tokens.breakpoints,
	body: {
		colour: tokens.colours.foreground.body,
		backgroundColour: tokens.colours.background.body,
	},
});

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
