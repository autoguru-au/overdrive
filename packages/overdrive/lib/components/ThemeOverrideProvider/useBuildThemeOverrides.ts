import { ComponentProps, useMemo, useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { ThemeOverrideProvider, ThemeOverridesValues } from './ThemeOverrideProvider';
import { Tokens } from '../../themes/tokens';
import { themeContractVars } from '../../themes/theme.css';
import { shadedColour } from '../../themes/helpers';


interface Props extends Omit<ComponentProps<typeof ThemeOverrideProvider>, 'theme' | 'children'> {
	mode: Tokens['mode'];
}

type Returns = Pick<
	ThemeOverridesValues,
	| 'overrideStyles'
	| 'primaryColourBackground'
	| 'primaryColourForeground'
	| 'setPrimaryColourBackground'
	| 'setPrimaryColourForeground'
>;
export const useBuildThemeOverrides = ({
										   primaryColourBackground: incomingPrimaryColourBackground,
										   primaryColourForeground: incomingPrimaryColourForeground,
										   mode,
										   primaryColourBackgroundStrong,
										   primaryColourBackgroundMild,
										   primaryColourBorder,
									   }: Props): Returns => {


	const [primaryColourBackground, setPrimaryColourBackground] = useState(
		incomingPrimaryColourBackground,
	);
	const [primaryColourForeground, setPrimaryColourForeground] = useState(
		incomingPrimaryColourForeground,
	);

	const overrideStyles = useMemo<ReturnType<typeof assignInlineVars>>(() => {
		const mildPrimary = primaryColourBackgroundMild || shadedColour({
			colour: primaryColourBackground,
			isDarkTheme: false,
			direction: mode === 'light' ? 'forward' : 'backward',
			intensity: 0.1,
		});
		const strongPrimary = primaryColourBackgroundStrong || shadedColour({
			colour: primaryColourBackground,
			isDarkTheme: false,
			direction: mode === 'light' ? 'forward' : 'backward',
			intensity: 0.1,
		});
		return assignInlineVars(themeContractVars, {
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
	]);

	return useMemo(
		() => ({
			overrideStyles,
			primaryColourBackground,
			primaryColourForeground,
			setPrimaryColourForeground,
			setPrimaryColourBackground,
		}),
		[
			primaryColourBackground,
			primaryColourForeground,
			overrideStyles,
		],
	);
};
