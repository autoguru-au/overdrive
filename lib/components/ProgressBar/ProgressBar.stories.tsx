import { Meta, StoryFn } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { Stack } from '../Stack';

import { ProgressBar } from '.';

export default {
	title: 'Components/Progress/Progress Bar',
	component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

const Template: StoryFn<typeof ProgressBar> = (args) => (
	<ProgressBar {...args} />
);

const AllColoursTemplate: StoryFn<typeof ProgressBar> = (args) => (
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
export const WithValue = Template.bind(withValueProps);
WithValue.args = withValueProps;

export const AllColours = AllColoursTemplate.bind(standardProps);
AllColours.args = standardProps;
