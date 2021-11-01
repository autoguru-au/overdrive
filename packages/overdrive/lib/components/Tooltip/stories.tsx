import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';
import { EAlignment } from '../Positioner/alignment';

import { Tooltip } from '.';

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
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
	<Tooltip {...args}>
		<div style={{ display: 'inline' }}>Im the tooltip trigger</div>
	</Tooltip>
);

const standardProps:Omit<ComponentProps<typeof Tooltip>, 'children'> = {
	label: 'Im the tooltip body',
};

export const standard: ComponentStory<typeof Tooltip> = Template.bind(
	standardProps,
);
standard.args = standardProps;

const withLongTextProps:Omit<ComponentProps<typeof Tooltip>, 'children'> = {
	label: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
	alignment: EAlignment.BOTTOM
};

export const withLongText: ComponentStory<typeof Tooltip> = Template.bind(
	withLongTextProps,
);
withLongText.args = withLongTextProps;
