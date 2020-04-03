import React from 'react';
import { Text } from '../Typography';

import { Portal } from '.';

export default {
	title: 'Components|Portal',
	parameters: {
		chromatic: { disable: true },
	},
};

export const Standard = () => (
	<Portal>
		<Text>Im in a portal at the root.</Text>
	</Portal>
);

export const Nested = () => (
	<Portal>
		<div>
			test child 1
			<Portal>
				<div>test child 2</div>
			</Portal>
		</div>
	</Portal>
);
