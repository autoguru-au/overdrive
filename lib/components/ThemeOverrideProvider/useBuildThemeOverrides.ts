import { assignInlineVars } from '@vanilla-extract/dynamic';
import { ComponentProps, useState, useMemo } from 'react';

import { tokens } from '../../themes/base/tokens';
import { shadedColour } from '../../themes/helpers';
import { themeContractVars } from '../../themes/theme.css';
import { Tokens } from '../../themes/tokens';

import { ThemeOverrideProvider } from './ThemeOverrideProvider';

interface UseBuildThemeOverridesProps
	extends Omit<
		ComponentProps<typeof ThemeOverrideProvider>,
		'theme' | 'children'
	> {
	mode: Tokens['mode'];
}

export interface OverrideValues {
	primaryColourBackground: string;
	primaryColourForeground: string;
	primaryColourBackgroundMild?: string;
	primaryColourBackgroundStrong?: string;
	primaryColourBorder?: string;
}

export const useBuildThemeOverrides = ({
	mode,
	primaryColourBackground: initialBackground = tokens.colours.intent.primary
		.background.standard,
	primaryColourForeground: initialForeground = tokens.colours.intent.primary
		.foreground,
	primaryColourBackgroundStrong: initialStrong,
	primaryColourBackgroundMild: initialMild,
	primaryColourBorder: initialBorder,
}: UseBuildThemeOverridesProps) => {
	const [themeValues, setThemeValues] = useState<OverrideValues>({
		primaryColourBackground: initialBackground,
		primaryColourForeground: initialForeground,
		primaryColourBorder: initialBorder,
		primaryColourBackgroundMild: initialMild,
		primaryColourBackgroundStrong: initialStrong,
	});

	const {
		primaryColourBackground,
		primaryColourForeground,
		primaryColourBorder,
		primaryColourBackgroundMild,
		primaryColourBackgroundStrong,
	} = themeValues;

	const overrideStyles = useMemo(() => {
		const mildPrimary =
			primaryColourBackgroundMild ||
			shadedColour({
				colour: primaryColourBackground,
				isDarkTheme: false,
				direction: mode === 'light' ? 'forward' : 'backward',
				intensity: 0.1,
			});
		const strongPrimary =
			primaryColourBackgroundStrong ||
			shadedColour({
				colour: primaryColourBackground,
				isDarkTheme: false,
				direction: mode === 'light' ? 'forward' : 'backward',
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
	}, [
		mode,
		primaryColourBackground,
		primaryColourBackgroundMild,
		primaryColourBackgroundStrong,
		primaryColourBorder,
		primaryColourForeground,
	]);

	return {
		overrideStyles,
		...themeValues,
		setThemeValues: (values: Partial<OverrideValues>) =>
			setThemeValues((prev) => ({ ...prev, ...values })),
	};
};
