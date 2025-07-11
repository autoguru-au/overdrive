import * as React from 'react';

import { FlexStack } from '../../components/Flex/FlexStack';
import { Text } from '../../components/Text/Text';
import { breakpoints } from '../../themes/makeTheme';

import { useMedia } from './useMedia';

export default {
	title: 'Utility/Hooks/useMedia',
	parameters: {
		chromatic: { disable: true },
	},
};

export const Standard = () => {
	const Impl = () => {
		const [isMobile, isTable, isDesktop, isLargeDesktop] = useMedia([
			'mobile',
			'tablet',
			'desktop',
			'largeDesktop',
		]);

		return (
			<FlexStack>
				<Text>
					isMobile: <Text strong>{isMobile ? 'true' : 'false'}</Text>{' '}
					- {breakpoints.mobile}
				</Text>
				<Text>
					isTable: <Text strong>{isTable ? 'true' : 'false'}</Text> -{' '}
					{breakpoints.tablet}
				</Text>
				<Text>
					isDesktop:{' '}
					<Text strong>{isDesktop ? 'true' : 'false'}</Text> -{' '}
					{breakpoints.desktop}
				</Text>
				<Text>
					isLargeDesktop:{' '}
					<Text strong>{isLargeDesktop ? 'true' : 'false'}</Text> -{' '}
					{breakpoints.largeDesktop}
				</Text>
			</FlexStack>
		);
	};

	return <Impl />;
};
