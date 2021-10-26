import { invariant } from '@autoguru/utilities';
import * as React from 'react';
import { createContext, FunctionComponent, useContext } from 'react';
import { ThemeVars } from '@vanilla-extract/css/dist/declarations/src/types';
import { Tokens } from '../../themes/tokens';

const themeContext = createContext<ThemeVars<Tokens> | null>(null);

export interface Props {
	theme: ThemeVars<Tokens>;
}

export const ThemeProvider: FunctionComponent<Props> = ({
	theme,
	children,
}) => <themeContext.Provider value={theme}>{children}</themeContext.Provider>;

export const useTheme = () => {
	const themeClass = useContext(themeContext);

	invariant(
		themeClass !== null,
		"You haven't provided an `OverdriveProvider`.",
	);

	return themeClass;
};
