import { invariant } from '@autoguru/utilities';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { isEqual } from 'es-toolkit';
import React, { createContext, useContext, useMemo } from 'react';

import baseTheme from '../../themes/base';
import { makeRuntimeTokens, RuntimeTokens } from '../../themes/makeTheme';
import { themeContractVars } from '../../themes/theme.css';
import { BreakPoints } from '../../themes/tokens';

type ThemeContract = typeof themeContractVars;
export interface ThemeOverrides {
	primaryColourBackground: string;
	primaryColourBackgroundMild: string;
	primaryColourBackgroundStrong: string;
	primaryColourBorder: string;
	primaryColourForeground: string;
}

export interface BaseProps {
	theme?: typeof baseTheme;
	breakpoints?: BreakPoints;
	overrides?: Partial<ThemeOverrides>;
	portalMountPoint?: React.RefObject<HTMLElement | null>;
}

export interface ProviderContext extends BaseProps {
	vars: ThemeContract;
	themeClass: string;
}

export type ProviderProps = React.PropsWithChildren<BaseProps>;

const OverdriveContext = createContext<ProviderContext | null>(null);
const RuntimeTokensContext = createContext<RuntimeTokens | null>(null);
const msgInvariantError = "You haven't provided an `OverdriveProvider`.";

export const useTheme = () => {
	const context = useContext(OverdriveContext);
	invariant(context !== null, msgInvariantError);
	return context;
};

export const useRuntimeTokens = (): RuntimeTokens => {
	const tokens = useContext(RuntimeTokensContext);
	invariant(tokens !== null, msgInvariantError);
	return tokens;
};

export const Provider = ({
	breakpoints,
	children,
	overrides,
	portalMountPoint,
	theme = baseTheme,
}: ProviderProps) => {
	const themeValues = useMemo(
		() => ({
			vars: theme.vars,
			themeClass: theme.themeRef,
			portalMountPoint,
		}),
		[portalMountPoint, theme],
	);

	const runtimeTokens = useMemo(
		() => makeRuntimeTokens(breakpoints),
		[breakpoints],
	);

	const styles = useMemo(() => {
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

	return (
		<OverdriveContext.Provider value={themeValues}>
			<RuntimeTokensContext.Provider value={runtimeTokens}>
				<div className={theme.themeRef} style={styles}>
					{children}
				</div>
			</RuntimeTokensContext.Provider>
		</OverdriveContext.Provider>
	);
};

export const OverdriveProvider = React.memo<ProviderProps>(
	(props) => <Provider {...props} />,
	(prevProps, nextProps) => {
		return isEqual(prevProps, nextProps);
	},
);
