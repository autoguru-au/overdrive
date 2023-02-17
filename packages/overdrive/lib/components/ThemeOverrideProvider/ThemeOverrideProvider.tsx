import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as React from 'react';
import { Context, createContext, FunctionComponent, ReactNode, useContext, useMemo } from 'react';

import { default as defaultTheme } from '../../themes/base';

import { OverrideValues, useBuildThemeOverrides } from './useBuildThemeOverrides';

type Theme = typeof defaultTheme;

export interface ThemeOverridesValues {
	primaryColourBackground: string;
	primaryColourBackgroundMild?: string;
	primaryColourBackgroundStrong?: string;
	primaryColourBorder?: string;
	primaryColourForeground: string;
	theme: Theme;
	overrideStyles: ReturnType<typeof assignInlineVars>;

	setThemeValues: (values: Partial<OverrideValues>) => void;
}

interface Props
	extends Pick<
		ThemeOverridesValues,
		| 'theme'
		| 'primaryColourBackgroundMild'
		| 'primaryColourBackgroundStrong'
		| 'primaryColourBorder'
	>, Partial<Pick<
		ThemeOverridesValues,
		| 'primaryColourBackground'
		| 'primaryColourForeground'
	>> {
	children?: ReactNode | ReactNode[];
}

const themeOverridesCtx: Context<ThemeOverridesValues> =
	createContext<ThemeOverridesValues>({} as ThemeOverridesValues);

export const useThemeOverrides = () => useContext(themeOverridesCtx);

export const ThemeOverrideProvider: FunctionComponent<Props> = ({
	primaryColourBackground,
	primaryColourForeground,
	theme,
	primaryColourBackgroundMild,
	primaryColourBackgroundStrong,
	primaryColourBorder,
	children,
}) => {
	const overrides = useBuildThemeOverrides({
		primaryColourBackground,
		primaryColourForeground,
		primaryColourBackgroundMild,
		primaryColourBackgroundStrong,
		primaryColourBorder,
		mode: theme?.vars.mode,
	});

	return (
		<themeOverridesCtx.Provider
			value={useMemo(
				() => ({
					theme,
					...overrides,
				}),
				[
					theme,
					overrides,
					primaryColourBackground,
					primaryColourForeground,
					primaryColourBackgroundMild,
					primaryColourBackgroundStrong,
					primaryColourBorder,
				],
			)}
		>
			{children}
		</themeOverridesCtx.Provider>
	);
};
