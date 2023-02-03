import { invariant } from '@autoguru/utilities';
import * as React from 'react';
import { createContext, FunctionComponent, ReactNode, useContext, useMemo } from 'react';

import { makeRuntimeTokens, RuntimeTokens } from '../../themes/makeTheme';
import { themeContractVars } from '../../themes/theme.css';
import { BreakPoints } from '../../themes/tokens';

type ThemeVars = typeof themeContractVars;
type ThemeContextType = {
	vars: ThemeVars;
	themeClass: string;
};
const themeContext = createContext<ThemeContextType | null>(null);
const runtimeTokensContext = createContext<RuntimeTokens | null>(null);

export interface Props {
	children?: ReactNode;
	vars: ThemeVars;
	themeClass: string;
	breakpoints?: BreakPoints;
}

export const ThemeProvider: FunctionComponent<Props> = ({
	vars,
	themeClass,
	children,
	breakpoints,
}) => (
	<themeContext.Provider
		value={useMemo(() => ({ vars, themeClass }), [vars])}
	>
		<runtimeTokensContext.Provider
			value={useMemo(() => makeRuntimeTokens(breakpoints), [])}
		>
			{children}
		</runtimeTokensContext.Provider>
	</themeContext.Provider>
);

export const useTheme = () => {
	const theme = useContext(themeContext);

	invariant(theme !== null, "You haven't provided an `OverdriveProvider`.");

	return theme;
};

export const useRuntimeTokens = (): RuntimeTokens => {
	const tokens = useContext(runtimeTokensContext);
	invariant(tokens !== null, "You haven't provided a `OverdriveProvider`.");
	return tokens;
};

export default ThemeProvider;
