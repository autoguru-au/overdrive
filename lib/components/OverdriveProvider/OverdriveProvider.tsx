import { invariant } from '@autoguru/utilities';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { isEqual } from 'es-toolkit';
import React, { createContext, useContext, useEffect, useMemo } from 'react';

import baseTheme from '../../themes/base';
import { shadedColour } from '../../themes/helpers';
import { makeRuntimeTokens, RuntimeTokens } from '../../themes/makeTheme';
import { themeContractVars } from '../../themes/theme.css';
import { BreakPoints } from '../../themes/tokens';
import { isBrowser } from '../../utils';

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
	noBodyLevelTheming?: boolean;
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
	noBodyLevelTheming = false,
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

		let mildPrimary: string | null = null;
		let strongPrimary: string | null = null;

		if (overrides.primaryColourBackground) {
			mildPrimary =
				overrides.primaryColourBackgroundMild ||
				shadedColour({
					colour: overrides.primaryColourBackground,
					isDarkTheme: false,
					direction:
						String(theme.vars.mode) === 'light'
							? 'forward'
							: 'backward',
					intensity: 0.1,
				});
			strongPrimary =
				overrides.primaryColourBackgroundStrong ||
				shadedColour({
					colour: overrides.primaryColourBackground,
					isDarkTheme: false,
					direction:
						String(theme.vars.mode) === 'light'
							? 'forward'
							: 'backward',
					intensity: 0.1,
				});
		}

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
							mild: mildPrimary ?? undefined,
							// @ts-expect-error no undefined
							strong: strongPrimary ?? undefined,
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
	}, [overrides, theme.vars.mode]);

	// Body Level Theming
	useEffect(() => {
		if (
			!isBrowser ||
			noBodyLevelTheming ||
			document.body.classList.contains(theme.themeRef)
		)
			return;

		document.body.classList.add(theme.themeRef);
		return () => {
			document.body.classList.remove(theme.themeRef);
		};
	}, [noBodyLevelTheming, theme]);

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
