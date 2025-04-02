import React, { FunctionComponent, useMemo } from 'react';

import { passesAccessibilityContrast } from '../../themes/helpers';
// import { ColourInput } from '../ColourInput';
import { Column, Columns } from '../Columns';
import { Stack } from '../Stack';
import { Text } from '../Text';

import { useTheme } from './OverdriveProvider';

export const ThemeOverrideDebugger: FunctionComponent = () => {
	const { overrides, themeName, vars } = useTheme();

	const primaryColourBackground =
		overrides?.primaryColourBackground ||
		vars.colours.intent.primary.background.standard;
	const primaryColourForeground =
		overrides?.primaryColourForeground ||
		vars.colours.intent.primary.foreground;

	const passesAA = useMemo(
		() =>
			passesAccessibilityContrast({
				colour1: primaryColourForeground,
				colour2: primaryColourBackground,
				level: 'AA',
				textSize: 'LARGE',
			}),
		[primaryColourForeground, primaryColourBackground],
	);
	const passesAAA = useMemo(
		() =>
			passesAccessibilityContrast({
				colour1: primaryColourForeground,
				colour2: primaryColourBackground,
				level: 'AAA',
				textSize: 'LARGE',
			}),
		[primaryColourForeground, primaryColourBackground],
	);

	return (
		<Columns
			space="3"
			style={{
				position: 'fixed',
				right: '10px',
				bottom: '20px',
				zIndex: 9,
				backgroundColor: 'white',
				width: '350px',
				padding: '8px',
				boxShadow:
					'0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%)',
				borderRadius: '4px',
			}}
		>
			{/* disabling for now - TODO: make dynamic with local state and assignInlineVars or similar */}
			{/* <Column grow width="auto">
				<Stack space="3" width="full">
					<ColourInput
						name="primaryBackground"
						placeholder="Primary background colour"
						value={primaryColourBackground}
						onChange={(event) =>
							setThemeValues({
								primaryColourBackground: event.target.value,
							})
						}
					/>
					<ColourInput
						name="primaryForeground"
						placeholder="Primary foreground colour"
						value={primaryColourForeground}
						onChange={(event) =>
							setThemeValues({
								primaryColourForeground: event.target.value,
							})
						}
					/>
				</Stack>
			</Column> */}
			<Column>
				<Stack>
					<Text>AA: {passesAA ? 'PASSED' : 'FAILED'}</Text>
					<Text>AAA: {passesAAA ? 'PASSED' : 'FAILED'}</Text>
					<Text colour="primary">{themeName}</Text>
				</Stack>
			</Column>
		</Columns>
	);
};
