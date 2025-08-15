import * as React from 'react';

import { FlexStack } from '../../components/Flex/FlexStack';
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
		const allValues = [2, 3, null, 4];
		const value = useResponsiveValue(allValues);

		return (
			<FlexStack>
				<Text as="p">
					All values:{' '}
					<Text strong>{JSON.stringify(allValues)}</Text>{' '}
				</Text>
				<Text as="p">
					Responsive value: <Text strong>{value as string}</Text>{' '}
				</Text>
			</FlexStack>
		);
	};

	return <Impl />;
};
