import { invariant } from '@autoguru/utilities';
import React, {
	ContextType,
	createContext,
	FunctionComponent,
	useContext,
} from 'react';

import { Tokens } from '../../themes/tokens';

const themeContext = createContext<Tokens>(null);

// TODO: Eventually this will be replaced with treat
export const ThemeProvider: FunctionComponent<{
	theme: { tokens: Tokens };
}> = ({ theme, children }) => (
	<themeContext.Provider value={theme.tokens}>
		{children}
	</themeContext.Provider>
);

export const useTheme = (): ContextType<typeof themeContext> => {
	const ctx = useContext(themeContext);

	invariant(ctx, 'There is no theme provided!');

	return ctx;
};
