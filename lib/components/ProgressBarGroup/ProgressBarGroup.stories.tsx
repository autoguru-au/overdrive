import { Meta, StoryObj } from '@storybook/react-vite';

import { ProgressBarGroup } from './ProgressBarGroup';

type Story = StoryObj<typeof ProgressBarGroup>;

export default {
	title: 'Components/Progress Bar Group',
	component: ProgressBarGroup,
} satisfies Meta<typeof ProgressBarGroup>;

const values = [48, 16, 24, 0, 3];

export const Standard: Story = {
	args: {
		values: values,
		prefixLabels: ['5 star', '4 star', '3 star', '2 star', '1 star'],
		suffixLabels: values.map((item) => item.toString()),
	},
};
