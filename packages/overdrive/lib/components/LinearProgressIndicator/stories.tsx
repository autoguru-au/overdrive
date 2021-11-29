import { ComponentMeta, ComponentStory } from '@storybook/react';
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
} as ComponentMeta<typeof LinearProgressIndicator>;

const Template: ComponentStory<typeof LinearProgressIndicator> = (args) => (
	<LinearProgressIndicator {...args} />
);

export const standard = Template.bind({});
