import { invariant } from '@autoguru/utilities';
import { ThemeVars } from '@vanilla-extract/css/dist/declarations/src/types';
import * as React from 'react';
import { createContext, FunctionComponent, useContext, useMemo } from 'react';

import { BreakPoints, Tokens } from '../../themes/tokens';
import { makeRuntimeTokens, RuntimeTokens } from '../../themes/makeTheme';

type ThemeContextType = ThemeVars<Tokens>;
const themeContext = createContext<ThemeContextType | null>(null);
const runtimeTokensContext = createContext<RuntimeTokens | null>(null);

export interface Props {
	theme: ThemeVars<Tokens>;
	tokens: Tokens;
}

export const ThemeProvider: FunctionComponent<Props> = ({
															theme,
															tokens,
															children,
														}) => (
	<themeContext.Provider value={theme}>
		<runtimeTokensContext.Provider
			value={useMemo(() => makeRuntimeTokens(tokens), [tokens])}>
			{children}
		</runtimeTokensContext.Provider>
	</themeContext.Provider>
);

export const useTheme = () => {
	const themeClass = useContext(themeContext);

	invariant(
		themeClass !== null,
		"You haven't provided an `OverdriveProvider`.",
	);

	return themeClass;
};

export const useRuntimeTokens = (): RuntimeTokens => {
	const tokens = useContext(runtimeTokensContext);
	invariant(tokens !== null, "You haven't provided a `OverdriveProvider`.");
	return tokens;
};
