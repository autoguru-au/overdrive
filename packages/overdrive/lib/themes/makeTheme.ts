import { createTheme, Style } from 'treat';
import type { StyleWithSelectors } from 'treat/dist/declarations/src/types';

import { Tokens } from './tokens';

export const makeRuntimeTokens = (tokens: Tokens) => ({
	breakpoints: tokens.breakpoints,
	body: {
		colour: tokens.colours.foreground.body,
		backgroundColour: tokens.colours.background.body,
	},
});

export type RuntimeTokens = ReturnType<typeof makeRuntimeTokens>;

const createUtils = (tokens: Tokens) => ({
	responsiveStyle(
		breakpoints: Partial<
			Record<keyof Tokens['breakpoints'], StyleWithSelectors>
		>,
	): Style {
		const styles = {};

		for (const [query, style] of Object.entries(breakpoints)) {
			if (query === 'mobile') {
				Object.assign(styles, style);
				continue;
			}

			Object.assign(styles, {
				'@media': {
					...styles['@media'],
					[`screen and (min-width: ${tokens.breakpoints[query]}px)`]: style,
				},
			});
		}

		return styles;
	},
});

const decorateTokens = (tokens: Tokens) => ({
	...tokens,
	utils: createUtils(tokens),
});

export type OverdriveTheme = ReturnType<typeof decorateTokens>;

export const makeTheme = (tokens: Tokens, debugName) =>
	createTheme(decorateTokens(tokens), debugName);
