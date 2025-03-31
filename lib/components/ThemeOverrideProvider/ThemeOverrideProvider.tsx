import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as React from 'react';
import { createContext, useContext } from 'react';

import { default as defaultTheme } from '../../themes/base';

import {
	OverrideValues,
	useBuildThemeOverrides,
} from './useBuildThemeOverrides';

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

type Props = Partial<
	Omit<ThemeOverridesValues, 'overrideStyles' | 'setThemeValues' | 'theme'>
> & {
	theme: Theme;
	children?: React.ReactNode;
};

const themeOverridesCtx = createContext<ThemeOverridesValues>(
	{} as ThemeOverridesValues,
);

export const useThemeOverrides = () => useContext(themeOverridesCtx);

export const ThemeOverrideProvider = ({
	primaryColourBackground,
	primaryColourForeground,
	primaryColourBackgroundMild,
	primaryColourBackgroundStrong,
	primaryColourBorder,
	theme,
	children,
}: Props) => {
	const overrides = useBuildThemeOverrides({
		primaryColourBackground,
		primaryColourForeground,
		primaryColourBackgroundMild,
		primaryColourBackgroundStrong,
		primaryColourBorder,
		mode: theme?.vars.mode,
	});

	React.useEffect(() => {
		overrides.setThemeValues({
			primaryColourBackground,
			primaryColourForeground,
			primaryColourBackgroundMild,
			primaryColourBackgroundStrong,
			primaryColourBorder,
		});
	}, [
		primaryColourBackground,
		primaryColourForeground,
		primaryColourBackgroundMild,
		primaryColourBackgroundStrong,
		primaryColourBorder,
		overrides.setThemeValues,
		overrides,
	]);

	const value = React.useMemo(
		() => ({
			theme,
			...overrides,
		}),
		[theme, overrides],
	);

	return (
		<themeOverridesCtx.Provider value={value}>
			{children}
		</themeOverridesCtx.Provider>
	);
};
