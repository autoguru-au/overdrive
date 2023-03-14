import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as React from 'react';
import {
	Context,
	createContext,
	FunctionComponent,
	ReactNode,
	useContext,
	useEffect,
	useMemo,
} from 'react';

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

interface Props
	extends Pick<
			ThemeOverridesValues,
			| 'theme'
			| 'primaryColourBackgroundMild'
			| 'primaryColourBackgroundStrong'
			| 'primaryColourBorder'
		>,
		Partial<
			Pick<
				ThemeOverridesValues,
				'primaryColourBackground' | 'primaryColourForeground'
			>
		> {
	children?: ReactNode | ReactNode[];
}

const themeOverridesCtx: Context<ThemeOverridesValues> =
	createContext<ThemeOverridesValues>({} as ThemeOverridesValues);

export const useThemeOverrides = () => useContext(themeOverridesCtx);

export const ThemeOverrideProvider: FunctionComponent<Props> = ({
	primaryColourBackground,
	primaryColourForeground,
	primaryColourBackgroundMild,
	primaryColourBackgroundStrong,
	primaryColourBorder,
	theme,
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

	useEffect(() => {
		if (
			primaryColourBackground !== overrides.primaryColourBackground ||
			primaryColourForeground !== overrides.primaryColourForeground ||
			primaryColourBackgroundMild !==
			overrides.primaryColourBackgroundMild ||
			primaryColourBackgroundStrong !==
			overrides.primaryColourBackgroundStrong ||
			primaryColourBorder !== overrides.primaryColourBorder
		) {
			overrides.setThemeValues({
				primaryColourBackground,
				primaryColourForeground,
				primaryColourBackgroundMild,
				primaryColourBackgroundStrong,
				primaryColourBorder,
			});
		}
	}, [
		primaryColourBackground,
		primaryColourForeground,
		primaryColourBackgroundMild,
		primaryColourBackgroundStrong,
		primaryColourBorder,
		overrides,
	]);

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
