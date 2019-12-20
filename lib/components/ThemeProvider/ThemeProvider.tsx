import { invariant } from '@autoguru/utilities';
import React, {
	ContextType,
	createContext,
	FunctionComponent,
	useContext,
} from 'react';

const themeContext = createContext<Theme>(null);

// TODO: Eventually this will be replaced with treat
export const ThemeProvider: FunctionComponent<{ theme: Theme }> = ({
	theme,
	children,
}) => {
	return (
		<themeContext.Provider value={theme}>{children}</themeContext.Provider>
	);
};

export const useTheme = (): ContextType<typeof themeContext> => {
	const ctx = useContext(themeContext);

	invariant(ctx, 'There is no theme provided!');

	return ctx;
};
