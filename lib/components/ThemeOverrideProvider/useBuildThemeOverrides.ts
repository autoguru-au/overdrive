import { assignInlineVars } from '@vanilla-extract/dynamic';
import { ComponentProps, Reducer, useEffect, useMemo, useReducer } from 'react';

import { tokens } from '../../themes/base/tokens';
import { shadedColour } from '../../themes/helpers';
import { themeContractVars } from '../../themes/theme.css';
import { Tokens } from '../../themes/tokens';

import {
	ThemeOverrideProvider,
	ThemeOverridesValues,
} from './ThemeOverrideProvider';

interface Props
	extends Omit<
		ComponentProps<typeof ThemeOverrideProvider>,
		'theme' | 'children'
	> {
	mode: Tokens['mode'];
}

type Returns = Pick<
	ThemeOverridesValues,
	| 'overrideStyles'
	| 'primaryColourBackground'
	| 'primaryColourForeground'
	| 'primaryColourBorder'
	| 'primaryColourBackgroundMild'
	| 'primaryColourBackgroundStrong'
	| 'setThemeValues'
>;

type Action = {
	type: 'SET_THEME_VALUES';
	payload: Partial<OverrideValues>;
};

export interface OverrideValues {
	primaryColourBackground: string;
	primaryColourForeground: string;
	primaryColourBackgroundMild?: string;
	primaryColourBackgroundStrong?: string;
	primaryColourBorder?: string;
}

const reducer: Reducer<OverrideValues, Action> = (prevState, action) => {
	switch (action.type) {
		case 'SET_THEME_VALUES': {
			return {
				...prevState,
				...action.payload,
			};
		}

		default: {
			return prevState;
		}
	}
};
export const useBuildThemeOverrides = ({
	mode,
	primaryColourBackground: incomingPrimaryColourBackground = tokens.colours
		.intent.primary.background.standard,
	primaryColourForeground: incomingPrimaryColourForeground = tokens.colours
		.intent.primary.foreground,
	primaryColourBackgroundStrong: incomingPrimaryColourBackgroundStrong,
	primaryColourBackgroundMild: incomingPrimaryColourBackgroundMild,
	primaryColourBorder: incomingPrimaryColourBorder,
}: Props): Returns => {
	const [
		{
			primaryColourBorder,
			primaryColourForeground,
			primaryColourBackgroundStrong,
			primaryColourBackgroundMild,
			primaryColourBackground,
			...extraColours
		},
		dispatch,
	] = useReducer(reducer, {
		primaryColourBackground: incomingPrimaryColourBackground,
		primaryColourForeground: incomingPrimaryColourForeground,
		primaryColourBorder: incomingPrimaryColourBorder,
		primaryColourBackgroundMild: incomingPrimaryColourBackgroundMild,
		primaryColourBackgroundStrong: incomingPrimaryColourBackgroundStrong,
	});

	useEffect(() => {
		dispatch({
			type: 'SET_THEME_VALUES',
			payload: {
				primaryColourBackground: incomingPrimaryColourBackground,
				primaryColourForeground: incomingPrimaryColourForeground,
				primaryColourBorder: incomingPrimaryColourBorder,
				primaryColourBackgroundMild:
					incomingPrimaryColourBackgroundMild,
				primaryColourBackgroundStrong:
					incomingPrimaryColourBackgroundStrong,
			},
		});
	}, [
		mode,
		incomingPrimaryColourBackground,
		incomingPrimaryColourForeground,
		incomingPrimaryColourBackgroundStrong,
		incomingPrimaryColourBackgroundMild,
		incomingPrimaryColourBorder,
	]);

	const overrideStyles = useMemo<ReturnType<typeof assignInlineVars>>(() => {
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
			...extraColours,
			colours: {
				intent: {
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
				colour: {
					primary: primaryColourBackground,
				},
			},
		} as Tokens);
	}, [
		primaryColourBackground,
		primaryColourBackgroundMild,
		primaryColourBackgroundStrong,
		primaryColourBorder,
		primaryColourForeground,
		mode,
		incomingPrimaryColourBackground,
		incomingPrimaryColourForeground,
		incomingPrimaryColourBackgroundStrong,
		incomingPrimaryColourBackgroundMild,
		incomingPrimaryColourBorder,
		extraColours,
	]);

	return useMemo(
		() => ({
			overrideStyles,
			primaryColourBackground,
			primaryColourForeground,
			primaryColourBorder,
			primaryColourBackgroundStrong,
			primaryColourBackgroundMild,
			setThemeValues: (values: Partial<OverrideValues>) =>
				dispatch({
					type: 'SET_THEME_VALUES',
					payload: values,
				}),
		}),
		[overrideStyles],
	);
};
