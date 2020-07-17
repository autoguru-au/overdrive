import * as React from 'react';

import { Box } from '.';

export default {
	title: 'Foundation|Box',
	component: Box,
	decorators: [
		(story) => (
			<div style={{ maxWidth: 500, margin: '0 auto' }}>{story()}</div>
		),
	],
};

export const Standard = () => (
	<>
		<Box
			borderColour="dark"
			borderWidth={['none', null, '1', '2']}
			padding={['2', '4']}
			marginBottom={['2', '4', '5', '8']}
			marginX={['none', '3', '5']}
			backgroundColour="green500"
			borderRadius="pill"
			boxShadow={['none', '1', '2', '3']}
		>
			Box 1
		</Box>
		<Box
			borderColour="dark"
			borderWidth={['none', null, '1', '2']}
			padding={['2', '4']}
			marginX={['none', '3', '5']}
			backgroundColour="green500"
			borderRadius={['none', '1']}
			boxShadow="2"
		>
			Box 2
		</Box>
	</>
);
