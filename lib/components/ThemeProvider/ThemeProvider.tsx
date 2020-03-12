import { invariant } from '@autoguru/utilities';
import * as React from 'react';
import { createContext, FunctionComponent, useContext } from 'react';
import { TreatProvider } from 'react-treat';
import { ThemeRef } from 'treat';

import { RuntimeTokens } from '../../themes/makeTheme';

const tokensContext = createContext<RuntimeTokens | null>(null);

interface Props {
	theme: {
		themeRef: ThemeRef;
		runtimeTokens: RuntimeTokens;
	};
}

export const ThemeProvider: FunctionComponent<Props> = ({
	theme,
	children,
}) => (
	<TreatProvider theme={theme.themeRef}>
		<tokensContext.Provider value={theme.runtimeTokens}>
			{children}
		</tokensContext.Provider>
	</TreatProvider>
);

export const useRuntimeTokens = (): RuntimeTokens => {
	const tokens = useContext(tokensContext);
	invariant(tokens !== null, 'You havn\'t provided a `OverdriveProvider`.');
	return tokens;
};
