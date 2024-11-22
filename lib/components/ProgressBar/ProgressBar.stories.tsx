import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Stack } from '../Stack';

import { ProgressBar } from '.';

export default {
	title: 'Components/Progress/ProgressBar',
	component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => (
	<ProgressBar {...args} />
);

const AllColoursTemplate: ComponentStory<typeof ProgressBar> = (args) => (
	<Stack space="2">
		<ProgressBar value={0.5} colour="green" {...args} />
		<ProgressBar value={0.4} colour="blue" {...args} />
		<ProgressBar value={0.1} colour="neutral" {...args} />
		<ProgressBar value={15} colour="red" {...args} />
		<ProgressBar value={0.156} colour="yellow" {...args} />
	</Stack>
);

const standardProps: ComponentProps<typeof ProgressBar> = {};
export const standard = Template.bind(standardProps);
standard.args = standardProps;

const withValueProps: ComponentProps<typeof ProgressBar> = {
	value: 0.3,
};
export const withValue = Template.bind(withValueProps);
withValue.args = withValueProps;

export const allColours = AllColoursTemplate.bind(standardProps);
allColours.args = standardProps;
