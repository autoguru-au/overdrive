import * as React from 'react';

import { LinearProgressIndicator } from '.';

export default {
	title: 'Components|Progress/Linear',
	component: LinearProgressIndicator,
	decorators: [
		story => <div style={{ width: '100%', height: '100%' }}>{story()}</div>,
	],
	parameters: {
		chromatic: { disable: true },
	},
};

export const standard = () => <LinearProgressIndicator />;
