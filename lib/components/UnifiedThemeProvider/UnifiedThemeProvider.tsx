import { invariant } from '@autoguru/utilities';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import React, { createContext, useContext, useEffect, useMemo } from 'react';

import { default as defaultTheme } from '../../themes/base';
import { tokens } from '../../themes/base/tokens';
import { shadedColour } from '../../themes/helpers';
import { makeRuntimeTokens, RuntimeTokens } from '../../themes/makeTheme';
import { themeContractVars } from '../../themes/theme.css';
import { BreakPoints } from '../../themes/tokens';
import { isBrowser } from '../../utils';

type ThemeVars = typeof themeContractVars;
type Theme = typeof defaultTheme;

// Theme Context Types
type ThemeContextType = {
	theme: Theme;
	portalMountPoint?: React.RefObject<HTMLElement | null>;
};

// Theme Override Types
export interface OverrideColours {
	primaryColourBackground: string;
	primaryColourBackgroundMild?: string;
	primaryColourBackgroundStrong?: string;
	primaryColourBorder?: string;
	primaryColourForeground: string;
}

export interface ThemeOverridesValues {
	theme: Theme;
	overrideStyles: ReturnType<typeof assignInlineVars>;
	setThemeValues: (values: Partial<OverrideColours>) => void;
}

// Contexts
const themeContext = createContext<ThemeContextType | null>(null);
const runtimeTokensContext = createContext<RuntimeTokens | null>(null);
const themeOverridesContext = createContext<ThemeOverridesValues | null>(null);

// Props Type
export interface UnifiedThemeProviderProps extends ThemeContextType {
	children?: React.ReactNode;
	breakpoints?: BreakPoints;
	noBodyLevelTheming?: boolean;
	themeOverride?: OverrideColours;
}

export const UnifiedThemeProvider = ({
	children,
	breakpoints,
	portalMountPoint,
	noBodyLevelTheming = false,
	theme,
	themeOverride,
}: UnifiedThemeProviderProps) => {
	const { themeRef: themeClass } = theme;

	// Runtime Tokens
	const runtimeTokens = useMemo(
		() => makeRuntimeTokens(breakpoints),
		[breakpoints],
	);

	const defaultColourOverrides = useMemo<OverrideColours>(
		() => ({
			primaryColourBackground:
				theme.vars.colours.intent.primary.background.standard,
			primaryColourBackgroundMild:
				theme.vars.colours.intent.primary.background.mild,
			primaryColourBackgroundStrong:
				theme.vars.colours.intent.primary.background.strong,
			primaryColourBorder: theme.vars.border.colours.gray,
			primaryColourForeground:
				theme.vars.colours.intent.primary.foreground,
		}),
		[theme],
	);

	const themeValues = useMemo(
		() => ({
			...defaultColourOverrides,
			...themeOverride,
		}),
		[defaultColourOverrides, themeOverride],
	);

	// Body Level Theming
	useEffect(() => {
		if (
			!isBrowser ||
			noBodyLevelTheming ||
			document.body.classList.contains(themeClass)
		)
			return;

		document.body.classList.add(themeClass);
		return () => {
			document.body.classList.remove(themeClass);
		};
	}, [noBodyLevelTheming, themeClass]);

	// Theme Override Styles
	const overrideStyles = useMemo(() => {
		const {
			primaryColourBackground,
			primaryColourBackgroundMild,
			primaryColourBackgroundStrong,
			primaryColourBorder,
			primaryColourForeground,
		} = themeValues;
		const mildPrimary =
			primaryColourBackgroundMild ||
			shadedColour({
				colour: primaryColourBackground,
				isDarkTheme: false,
				direction:
					String(theme.vars.mode) === 'light'
						? 'forward'
						: 'backward',
				intensity: 0.1,
			});
		const strongPrimary =
			primaryColourBackgroundStrong ||
			shadedColour({
				colour: primaryColourBackground,
				isDarkTheme: false,
				direction:
					String(theme.vars.mode) === 'light'
						? 'forward'
						: 'backward',
				intensity: 0.1,
			});

		return assignInlineVars(themeContractVars, {
			...tokens,
			colours: {
				...tokens.colours,
				intent: {
					...tokens.colours.intent,
					primary: {
						background: {
							standard: primaryColourBackground,
							mild: mildPrimary,
							strong: strongPrimary,
						},
						foreground: primaryColourForeground,
						border: primaryColourBorder || strongPrimary,
					},
				},
			},
			typography: {
				...tokens.typography,
				colour: {
					...tokens.typography.colour,
					primary: primaryColourBackground,
				},
			},
		});
	}, [theme.vars.mode, themeValues]);

	console.info('theme overrides', overrideStyles);

	return (
		<themeContext.Provider value={{ theme, portalMountPoint }}>
			<runtimeTokensContext.Provider value={runtimeTokens}>
				{/* <themeOverridesContext.Provider value={themeOverridesValue}> */}
				{children}
				{/* </themeOverridesContext.Provider> */}
			</runtimeTokensContext.Provider>
		</themeContext.Provider>
	);
};

// Hooks
const msgInvariantError = "You haven't provided a `UnifiedThemeProvider`.";

export const useTheme = () => {
	const theme = useContext(themeContext);
	invariant(theme !== null, msgInvariantError);
	return theme;
};

export const useRuntimeTokens = (): RuntimeTokens => {
	const tokens = useContext(runtimeTokensContext);
	invariant(tokens !== null, msgInvariantError);
	return tokens;
};

export const useThemeOverrides = () => {
	const overrides = useContext(themeOverridesContext);
	invariant(overrides !== null, msgInvariantError);
	return overrides;
};

export default UnifiedThemeProvider;
