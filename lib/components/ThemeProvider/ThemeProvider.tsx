import { invariant } from '@autoguru/utilities';
import * as React from 'react';
import { createContext, FunctionComponent, useContext } from 'react';
import { TreatProvider } from 'react-treat';
import type { ThemeRef } from 'treat';

import type { RuntimeTokens } from '../../themes/makeTheme';

const tokensContext = createContext<RuntimeTokens | null>(null);

export interface Props {
	// TODO: Make this into a ThemeConfig type
	theme: {
		name: string;
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
	invariant(tokens !== null, "You havn't provided a `OverdriveProvider`.");
	return tokens;
};
