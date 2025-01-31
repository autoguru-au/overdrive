import type { Meta, StoryObj } from '@storybook/react';
// import { expect, fn, getAllByRole, within, userEvent } from '@storybook/test';

import { DateTimePicker } from './DateTimePicker';

// demo times
const times = [
	{
		label: 'Early morning',
		description: '6 to 8 AM',
		name: '6-8',
	},
	{
		label: 'Morning',
		description: '8 to 10 AM',
		name: '8-10',
	},
	{
		label: 'Mid-morning',
		description: '10 AM to 12 PM',
		name: '10-12',
	},
	{
		label: 'Early afteroon',
		description: '12 to 2 PM',
		name: '12-2',
	},
	{
		label: 'Day before',
		description: 'Afternoon of day prior to service',
		name: 'aft-before',
	},
];

const meta: Meta<typeof DateTimePicker> = {
	title: 'Forms & Input Fields/Date & Time Picker',
	component: DateTimePicker,
	args: {
		timeOptionItems: times,
		allowPastDate: false,
		calendar: {
			firstDayOfWeek: 'mon',
		},
		lang: {
			dateLabel: 'Date label',
			timeLabel: 'Time label',
		},
	},
	tags: ['beta'],
};

export default meta;
type Story = StoryObj<typeof DateTimePicker>;

export const DropOffSelection: Story = {};
