import { assignInlineVars } from '@vanilla-extract/dynamic';
import React, { createContext, useContext } from 'react';

import baseTheme from '../../themes/base';
import { themeContractVars } from '../../themes/theme.css';

interface OverdriveProviderProps {
	theme?: typeof baseTheme;
	themeClass?: string;
	primaryColourBackground?: string;
	primaryColourForeground?: string;
	primaryColourBackgroundMild?: string;
	primaryColourBackgroundStrong?: string;
	primaryColourBorder?: string;
	children: React.ReactNode;
}

interface OverdriveContextValue {
	theme: typeof baseTheme;
}

const OverdriveContext = createContext<OverdriveContextValue | null>(null);

export const useTheme = () => {
	const context = useContext(OverdriveContext);
	if (!context) {
		throw new Error('useTheme must be used within an OverdriveProvider');
	}
	return context;
};

export const OverdriveProvider = ({
	theme = baseTheme,
	primaryColourBackground,
	primaryColourForeground,
	primaryColourBackgroundMild,
	primaryColourBackgroundStrong,
	primaryColourBorder,
	children,
}: OverdriveProviderProps) => {
	const styles = React.useMemo(() => {
		return assignInlineVars(themeContractVars, {
			colours: {
				intent: {
					primary: {
						background: {
							// @ts-expect-error no undefined
							standard: primaryColourBackground ?? undefined,
							// @ts-expect-error no undefined
							mild: primaryColourBackgroundMild ?? undefined,
							// @ts-expect-error no undefined
							strong: primaryColourBackgroundStrong ?? undefined,
						},
						// @ts-expect-error no undefined
						foreground: primaryColourForeground ?? undefined,
						// @ts-expect-error no undefined
						border: primaryColourBorder ?? undefined,
					},
				},
			},
			typography: {
				colour: {
					// @ts-expect-error no undefined
					primary: primaryColourBackground ?? undefined,
				},
			},
		});
	}, [
		primaryColourBackground,
		primaryColourForeground,
		primaryColourBackgroundMild,
		primaryColourBackgroundStrong,
		primaryColourBorder,
	]);

	const value = React.useMemo(
		() => ({
			theme,
			themeClass: theme.themeRef,
			vars: theme.vars,
		}),
		[theme],
	);

	return (
		<OverdriveContext.Provider value={value}>
			<div className={theme.themeRef} style={styles}>
				{children}
			</div>
		</OverdriveContext.Provider>
	);
};
