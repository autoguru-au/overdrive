import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxButton } from './CheckboxButton';

const meta: Meta<typeof CheckboxButton> = {
	title: 'Components/Checkbox Button',
	component: CheckboxButton,
	args: {
		label: 'Checkbox label',
		labelColInfo: '+ $200.00',
	},
};

export default meta;
type Story = StoryObj<typeof CheckboxButton>;

export const Simple: Story = {};
