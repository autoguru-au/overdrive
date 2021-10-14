import * as React from 'react';

import { EAlignment } from '../Positioner/alignment';

import { Tooltip } from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Positioner } from '../Positioner';

export default {
	title: 'Components/Tooltip',
	decorators: [
		(Story) => (
			<div style={{ marginLeft: 100, marginTop: 100 }}>
				<Story />
			</div>
		),
	],
	parameters: {
		chromatic: { disable: true },
	},
	argTypes: {
		alignment: {
			options: EAlignment,
			defaultValue: EAlignment.RIGHT,
			control: {
				type: 'select',
			},
		},
	},
} as ComponentMeta<typeof Positioner>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
	<Tooltip {...args}>
		<div style={{ display: 'inline' }}>Im the tooltip trigger</div>
	</Tooltip>
);

const standardProps = {
	label: 'Im the tooltip body',
};

export const standard: ComponentStory<typeof Tooltip> = Template.bind(
	standardProps,
);
standard.args = standardProps;
