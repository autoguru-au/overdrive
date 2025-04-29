import { invariant } from '@autoguru/utilities';
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

	return (
		<OverdriveContext.Provider value={themeValues}>
			<RuntimeTokensContext.Provider value={runtimeTokens}>
				<div
					className={theme.themeRef}
					style={styles}
					data-od-component-provider=""
				>
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
