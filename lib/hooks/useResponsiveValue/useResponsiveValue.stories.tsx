import * as React from 'react';

import { Stack } from '../../components';
import { Text } from '../../components/Text/Text';

import { useResponsiveValue } from './';

export default {
	title: 'Utility/Hooks/useResponsiveValue',
	parameters: {
		chromatic: { disable: true },
	},
};

export const Standard = () => {
	const Impl = () => {
		const allValues = [2, 3, , 4];
		const value = useResponsiveValue(allValues);

		return (
			<Stack>
				<Text is="p">
					All values:{' '}
					<Text strong>{JSON.stringify(allValues)}</Text>{' '}
				</Text>
				<Text is="p">
					Responsive value: <Text strong>{value}</Text>{' '}
				</Text>
			</Stack>
		);
	};

	return <Impl />;
};
