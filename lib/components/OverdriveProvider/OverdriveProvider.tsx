import { invariant } from '@autoguru/utilities';
import { I18nProvider as ReactAriaI18nProvider } from '@react-aria/i18n';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { isEqual } from 'es-toolkit';
import React, { createContext, useContext, useEffect, useMemo } from 'react';

import type { BreakPoints } from '../../themes';
import baseTheme from '../../themes/base';
import { makeRuntimeTokens, type RuntimeTokens } from '../../themes/makeTheme';
import { overdriveTokens } from '../../themes/theme.css';
import { isBrowser } from '../../utils';

import { useColorOverrides, type ColorOverrides } from './useColorOverrides';

type ThemeContract = typeof overdriveTokens;
type PortalMountPoint = React.RefObject<HTMLElement | null>;

/**
 * Maps 2-letter language codes to full BCP47 locale codes.
 * English defaults to Australian locale (DD/MM/YYYY format).
 */
const LANGUAGE_TO_LOCALE: Record<string, string> = {
	en: 'en-AU',
	de: 'de-DE',
	fr: 'fr-FR',
	es: 'es-ES',
	it: 'it-IT',
	nl: 'nl-NL',
	pl: 'pl-PL',
	sv: 'sv-SE',
	ja: 'ja-JP',
};

/**
 * Resolves the locale for React Aria components.
 * Priority: explicit prop > i18next language (mapped to full locale) > undefined (React Aria browser default)
 */
function resolveLocale(localeProp?: string): string | undefined {
	if (localeProp) return localeProp;
	if (!isBrowser) return undefined;

	const i18nextLang = (
		window as unknown as { i18next?: { language?: string } }
	).i18next?.language;

	if (i18nextLang) {
		return LANGUAGE_TO_LOCALE[i18nextLang] || i18nextLang;
	}

	return undefined;
}

export interface ProviderProps {
	/** The theme object to be used throughout the application */
	theme?: typeof baseTheme;
	/** Custom breakpoints for responsive design */
	breakpoints?: BreakPoints;
	/** When true, prevents applying theme styles at the body level */
	noBodyLevelTheming?: boolean;
	/** Custom colour overrides for select theme tokens */
	colorOverrides?: Partial<ColorOverrides>;
	/** Reference to an HTML element where portals should be mounted */
	portalMountPoint?: PortalMountPoint;
	/**
	 * BCP47 locale string for React Aria components (DateInput, Calendar, etc.).
	 * Controls date segment ordering, number formatting, and text direction.
	 *
	 * @example "en-AU" for Australian English (DD/MM/YYYY)
	 * @example "de-DE" for German
	 * @default Falls back to browser's navigator.language
	 */
	locale?: string;
	children?: React.ReactNode;
}

export interface ProviderContext
	extends Pick<ProviderProps, 'colorOverrides' | 'portalMountPoint'> {
	themeClass: (typeof baseTheme)['themeRef'];
	themeName: string;
	overrideStyles: ReturnType<typeof assignInlineVars>;
	vars: ThemeContract;
}

const OverdriveContext = createContext<ProviderContext | null>(null);
const RuntimeTokensContext = createContext<RuntimeTokens | null>(null);
const msgInvariantError = "You haven't used an `<OverdriveProvider>`.";

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

const isSafeElement = (element: HTMLElement | null): boolean => {
	return (
		element instanceof HTMLElement &&
		!element.hasAttribute('onclick') &&
		!element.hasAttribute('onerror')
	);
};

export const Provider = ({
	breakpoints,
	children,
	colorOverrides,
	locale,
	noBodyLevelTheming = false,
	portalMountPoint,
	theme = baseTheme,
}: ProviderProps) => {
	const runtimeTokens = useMemo(
		() => makeRuntimeTokens(breakpoints),
		[breakpoints],
	);
	const styles = useColorOverrides(colorOverrides, String(theme.vars.mode));
	const themeValues = useMemo(
		() => ({
			themeClass: theme.themeRef,
			themeName: theme.name,
			colorOverrides,
			overrideStyles: styles,
			portalMountPoint,
			vars: theme.vars,
		}),
		[colorOverrides, portalMountPoint, styles, theme],
	);

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

	// Check portal mount point ref
	useEffect(() => {
		if (
			portalMountPoint?.current &&
			!isSafeElement(portalMountPoint.current)
		) {
			console.error('Unsafe portal mount point detected');
			portalMountPoint.current = null;
		}
	}, [portalMountPoint]);

	const resolvedLocale = resolveLocale(locale);

	return (
		<OverdriveContext.Provider value={themeValues}>
			<RuntimeTokensContext.Provider value={runtimeTokens}>
				<ReactAriaI18nProvider locale={resolvedLocale}>
					<div
						className={theme.themeRef}
						style={styles}
						data-od-component="provider"
					>
						{children}
					</div>
				</ReactAriaI18nProvider>
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
