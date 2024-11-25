import * as React from 'react';
import { FunctionComponent, useMemo } from 'react';

import { passesAccessibilityContrast } from '../../themes/helpers';
import { ColourInput } from '../ColourInput';
import { Column, Columns } from '../Columns';
import { Stack } from '../Stack';
import { Text } from '../Text';

import { useThemeOverrides } from './ThemeOverrideProvider';

export const ThemeOverrideDebugger: FunctionComponent = () => {
	const {
		theme,
		primaryColourForeground,
		primaryColourBackground,
		setThemeValues,
	} = useThemeOverrides();
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
			<Column grow width="auto">
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
			</Column>
			<Column>
				<Stack>
					<Text>AA: {passesAA ? 'PASSED' : 'FAILED'}</Text>
					<Text>AAA: {passesAAA ? 'PASSED' : 'FAILED'}</Text>
					<Text colour="primary">{theme.name}</Text>
				</Stack>
			</Column>
		</Columns>
	);
};
