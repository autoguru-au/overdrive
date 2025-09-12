import { isWeekend, parseDate, type DateValue } from '@internationalized/date';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Calendar } from './Calendar';

const meta = {
	title: 'Components/Calendar',
	tags: ['new'],
	component: Calendar,
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		allowPastDate: {
			control: 'boolean',
			description: 'Allow selecting dates in the past',
		},
	},
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof Calendar>;

/**
 * Calendar component built with react-aria. Supports comprehensive date restrictions, localization, and custom validation rules.
 * Past dates are disabled by default unless `allowPastDate` is set to true.
 */
export const Standard: Story = {
	args: {
		allowPastDate: false,
	},
	render: (args) => (
		<Calendar
			{...args}
			onChange={(date) => console.log('Selected:', date)}
		/>
	),
};

/**
 * Demonstrates controlled vs uncontrolled behavior using `value` and `defaultValue` props.
 *
 * **Controlled usage**: Pass `calendarOptions.value` to control the selected date externally.
 * The parent component manages all state changes via the `onChange` callback.
 *
 * **Uncontrolled usage**: Pass `calendarOptions.defaultValue` to set an initial date.
 * The calendar manages its own state internally after the initial value.
 *
 * **Fallback**: When neither is provided, defaults to today's date.
 */
export const InitialValue: Story = {
	args: {
		allowPastDate: true,
		calendarOptions: {
			defaultValue: parseDate('2025-12-25'), // Christmas 2025 as initial value
		},
	},
	render: (args) => (
		<Calendar
			{...args}
			onChange={(date) => console.log('Selected:', date)}
		/>
	),
};

/**
 * Demonstrates disabling weekends using the `isDateUnavailable` function with the `isWeekend` utility from @internationalized/date.
 */
export const DisabledWeekends: Story = {
	args: {
		calendarOptions: {
			isDateUnavailable: (date: DateValue) => isWeekend(date, 'en-AU'),
		},
	},
};
