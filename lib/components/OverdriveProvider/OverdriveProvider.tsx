import { assignInlineVars } from '@vanilla-extract/dynamic';
import { isEqual } from 'es-toolkit';
import React, { createContext, useContext } from 'react';

import baseTheme from '../../themes/base';
import { themeContractVars } from '../../themes/theme.css';

export interface ThemeOverrides {
	primaryColourBackground: string;
	primaryColourBackgroundMild: string;
	primaryColourBackgroundStrong: string;
	primaryColourBorder: string;
	primaryColourForeground: string;
}

export interface ProviderContext {
	theme?: typeof baseTheme;
	overrides?: Partial<ThemeOverrides>;
}

export type ProviderProps = React.PropsWithChildren<ProviderContext>;

const OverdriveContext = createContext<ProviderContext | null>(null);

export const useTheme = () => {
	const context = useContext(OverdriveContext);
	if (!context) {
		throw new Error('useTheme must be used within an OverdriveProvider');
	}
	return context;
};

export const Provider = ({
	theme = baseTheme,
	overrides,
	children,
}: ProviderProps) => {
	const styles = React.useMemo(() => {
		if (!overrides) return {};
		// although this look scary, assignInlineVars only generates css vars to apply to a container
		// anyproperty that is undefined will not have an inline css var generated
		return assignInlineVars(themeContractVars, {
			colours: {
				intent: {
					primary: {
						background: {
							// @ts-expect-error no undefined
							standard:
								overrides.primaryColourBackground ?? undefined,
							// @ts-expect-error no undefined
							mild:
								overrides.primaryColourBackgroundMild ??
								undefined,
							// @ts-expect-error no undefined
							strong:
								overrides.primaryColourBackgroundStrong ??
								undefined,
						},
						// @ts-expect-error no undefined
						foreground:
							overrides.primaryColourForeground ?? undefined,
						// @ts-expect-error no undefined
						border: overrides.primaryColourBorder ?? undefined,
					},
				},
			},
			typography: {
				colour: {
					// @ts-expect-error no undefined
					primary: overrides.primaryColourBackground ?? undefined,
				},
			},
		});
	}, [overrides]);

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

export const OverdriveProvider = React.memo<ProviderProps>(
	(props) => <Provider {...props} />,
	(prevProps, nextProps) => {
		return isEqual(prevProps, nextProps);
	},
);
