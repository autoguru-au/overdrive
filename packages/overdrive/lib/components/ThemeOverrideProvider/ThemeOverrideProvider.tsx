import * as React from 'react';
import { Context, createContext, Dispatch, FunctionComponent, ReactNode, useContext, useMemo } from 'react';
import { default as defaultTheme } from '../../themes/base';

import { useBuildThemeOverrides } from './useBuildThemeOverrides';
import { assignInlineVars } from '@vanilla-extract/dynamic';

type Theme = typeof defaultTheme;

export interface ThemeOverridesValues {
	primaryColourBackground: string;
	primaryColourBackgroundMild?: string;
	primaryColourBackgroundStrong?: string;
	primaryColourBorder?: string;
	primaryColourForeground: string;
	theme: Theme;
	overrideStyles: ReturnType<typeof assignInlineVars>;

	setPrimaryColourBackground: Dispatch<string>;
	setPrimaryColourForeground: Dispatch<string>;
}

interface Props extends Pick<
	ThemeOverridesValues,
	'primaryColourBackground' | 'primaryColourForeground' | 'theme' | 'primaryColourBackgroundMild' | 'primaryColourBackgroundStrong' | 'primaryColourBorder'
> {
	children?: ReactNode | ReactNode[];
}

const themeOverridesCtx: Context<ThemeOverridesValues> = createContext<ThemeOverridesValues>({} as ThemeOverridesValues);

export const useThemeOverrides = () => useContext(themeOverridesCtx);

export const ThemeOverrideProvider: FunctionComponent<Props> = ({
																	primaryColourBackground: incomingPrimaryColourBackground,
																	primaryColourForeground: incomingPrimaryColourForeground,
																	theme,
																	primaryColourBackgroundMild,
																	primaryColourBackgroundStrong,
																	primaryColourBorder,
																	children,
																}) => {
	const {
		overrideStyles,
		primaryColourBackground,
		primaryColourForeground,
		setPrimaryColourBackground,
		setPrimaryColourForeground,
	} = useBuildThemeOverrides({
		primaryColourBackground: incomingPrimaryColourBackground,
		primaryColourForeground: incomingPrimaryColourForeground,
		primaryColourBackgroundMild,
		primaryColourBackgroundStrong,
		primaryColourBorder,
		mode: theme.vars.mode,
	});

	return (
		<themeOverridesCtx.Provider
			value={useMemo(
				() => ({
					theme,
					overrideStyles,
					primaryColourForeground,
					primaryColourBackground,
					setPrimaryColourBackground,
					setPrimaryColourForeground,
				}),
				[
					theme,
					overrideStyles,
					primaryColourForeground,
					primaryColourBackground,
				],
			)}>
			{children}
		</themeOverridesCtx.Provider>
	);
};
