import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';

import { LinearProgressIndicator } from '.';

export default {
	title: 'Components/Progress/Linear',
	component: LinearProgressIndicator,
	decorators: [
		(story) => (
			<div style={{ width: '100%', height: '100%' }}>{story()}</div>
		),
	],
	parameters: {
		chromatic: { disable: true },
	},
} satisfies Meta<typeof LinearProgressIndicator>;

export const standard = {};
