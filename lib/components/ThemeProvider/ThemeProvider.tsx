import { invariant } from '@autoguru/utilities';
import React, { createContext, useContext, useMemo } from 'react';

import { makeRuntimeTokens, RuntimeTokens } from '../../themes/makeTheme';
import { themeContractVars } from '../../themes/theme.css';
import { BreakPoints } from '../../themes/tokens';

type ThemeVars = typeof themeContractVars;
type ThemeContextType = {
	vars: ThemeVars;
	themeClass: string;
	portalMountPoint?: React.RefObject<HTMLElement | null>;
};
const themeContext = createContext<ThemeContextType | null>(null);
const runtimeTokensContext = createContext<RuntimeTokens | null>(null);

export interface ThemeProviderProps extends ThemeContextType {
	children?: React.ReactNode;
	breakpoints?: BreakPoints;
}

export const ThemeProvider = ({
	vars,
	themeClass,
	children,
	breakpoints,
	portalMountPoint,
}: ThemeProviderProps) => {
	const themeValue = useMemo(
		() => ({ vars, themeClass, portalMountPoint }),
		[vars, themeClass, portalMountPoint],
	);

	const runtimeTokens = useMemo(
		() => makeRuntimeTokens(breakpoints),
		[breakpoints],
	);

	return (
		<themeContext.Provider value={themeValue}>
			<runtimeTokensContext.Provider value={runtimeTokens}>
				{children}
			</runtimeTokensContext.Provider>
		</themeContext.Provider>
	);
};

const msgInvariantError = "You haven't provided an `OverdriveProvider`.";

export const useTheme = () => {
	const theme = useContext(themeContext);
	invariant(theme !== null, msgInvariantError);
	return theme;
};

export const useRuntimeTokens = (): RuntimeTokens => {
	const tokens = useContext(runtimeTokensContext);
	invariant(tokens !== null, msgInvariantError);
	return tokens;
};

export default ThemeProvider;
