import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { ComponentProps } from 'react';

import { ProgressBarGroup } from '.';

export default {
	title: 'Components/Progress/ProgressBarGroup',
	component: ProgressBarGroup,
} as ComponentMeta<typeof ProgressBarGroup>;

const Template: ComponentStory<typeof ProgressBarGroup> = (args) => (
	<ProgressBarGroup {...args} />
);
const values = [48, 16, 24, 0, 3];
const standardProps: ComponentProps<typeof ProgressBarGroup> = {
	values,
	prefixLabels: ['5 star', '4 star', '3 star', '2 star', '1 star'],
	suffixLabels: values.map((item) => item.toString()),
};
export const standard = Template.bind(standardProps);
standard.args = standardProps;
