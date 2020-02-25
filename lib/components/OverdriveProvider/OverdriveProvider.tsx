import { invariant } from '@autoguru/utilities';
import React, {
	ComponentProps,
	ContextType,
	createContext,
	FunctionComponent,
	useContext,
	useMemo,
} from 'react';
import { ThemeProvider } from '../ThemeProvider/ThemeProvider';

interface Props
	extends ComponentProps<typeof ThemeProvider>,
		ContextType<typeof overdriveContext> {}

const overdriveContext = createContext<{
	isServer: boolean;
}>(null);

export const OverdriveProvider: FunctionComponent<Props> = ({
	theme,
	isServer,
	children,
}) => (
	<overdriveContext.Provider value={useMemo(() => ({ isServer }), [])}>
		<ThemeProvider theme={theme}>{children}</ThemeProvider>
	</overdriveContext.Provider>
);

export const useOverdriveContext = (): ContextType<typeof overdriveContext> => {
	const ctx = useContext(overdriveContext);

	invariant(
		ctx,
		'Please provide a <OverdriveProvider/> somewhere in the root.',
	);

	return ctx;
};
