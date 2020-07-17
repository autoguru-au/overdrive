import * as React from 'react';
import { Portal } from '.';

import { Text } from '../Text';

export default {
	title: 'Utility|Portal',
	component: Portal,
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
