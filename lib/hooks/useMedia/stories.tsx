import React from 'react';

import { Stack } from '../../components/Stack';
import { useTheme } from '../../components/ThemeProvider';
import { Text } from '../../components/Typography';
import { useMedia } from './useMedia';

export default {
	title: 'Utility|Hooks/useMedia',
	parameters: {
		chromatic: { disable: true },
	},
};

export const Standard = () => {
	const Impl = () => {
		const { breakpoints } = useTheme();
		const [isMobile, isTable, isDesktop, isLargeDesktop] = useMedia([
			'mobile',
			'tablet',
			'desktop',
			'largeDesktop',
		]);

		return (
			<Stack>
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
			</Stack>
		);
	};

	return <Impl />;
};
