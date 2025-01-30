import type { Meta, StoryObj } from '@storybook/react';
// import { expect, fn, getAllByRole, within, userEvent } from '@storybook/test';

import { DateTimePicker } from './DateTimePicker';

const meta: Meta<typeof DateTimePicker> = {
	title: 'Forms & Input Fields/Date & Time Picker',
	component: DateTimePicker,
	args: {},
	tags: ['beta'],
};

export default meta;
type Story = StoryObj<typeof DateTimePicker>;

/** Uncontrolled with custom icons */
export const DropOffSelection: Story = {};
