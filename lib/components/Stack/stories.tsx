import { select } from '@storybook/addon-knobs';
import React from 'react';

import { Text } from '../Typography';
import { Stack } from '.';

export default { title: 'Foundation|Layout/Stack' };

export const standard = () => (
	<Stack spacing={select('Spacing', [1, 2, 3, 4, 5, 6, 7, 8, 9], 4)}>
		<Text>Line 1</Text>
		<Text>Line 2</Text>
		<Text>Line 3</Text>
	</Stack>
);
