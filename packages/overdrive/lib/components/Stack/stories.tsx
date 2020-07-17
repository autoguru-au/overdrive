import { select } from '@storybook/addon-knobs';
import * as React from 'react';

import { Text } from '../Text';
import { Stack } from '.';

export default { title: 'Foundation|Layout/Stack', component: Stack };

export const Standard = () => (
	<Stack space={select('Spacing', [1, 2, 3, 4, 5, 6, 7, 8, 9], 4)}>
		<Text>Line 1</Text>
		<Text>Line 2</Text>
		<Text>Line 3</Text>
	</Stack>
);

export const AsSection = () => (
	<Stack
		is="section"
		space={select('Spacing', [1, 2, 3, 4, 5, 6, 7, 8, 9], 4)}
	>
		<Text>Line 1</Text>
		<Text>Line 2</Text>
		<Text>Line 3</Text>
	</Stack>
);

export const WithDividers = () => (
	<Stack
		dividers
		is="section"
		space={select('Spacing', [1, 2, 3, 4, 5, 6, 7, 8, 9], 4)}
	>
		<Text>Line 1</Text>
		<Text>Line 2</Text>
		<Text>Line 3</Text>
	</Stack>
);
