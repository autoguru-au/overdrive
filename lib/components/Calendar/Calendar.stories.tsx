import { isWeekend, type DateValue } from '@internationalized/date';
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
		calendarOptions: {
			control: false,
			description: 'React-aria calendar configuration object',
		},
		lang: {
			control: false,
			description: 'Language overrides for navigation labels',
		},
		onChange: {
			control: false,
			description: 'Callback fired when date selection changes',
		},
	},
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof Calendar>;

/**
 * Calendar component built with react-aria. Supports comprehensive date restrictions, localization, and custom validation rules.
 * Past dates are disabled by default unless `allowPastDate` is set to true.
 *
 * ## Key Features
 * - **Accessibility**: Full keyboard navigation, screen reader support, ARIA attributes
 * - **Localization**: Supports multiple locales and custom language labels
 * - **Date Restrictions**: Disable past dates, specific dates, weekends, or date ranges
 * - **Custom Validation**: Implement complex business logic for date availability
 * - **Flexible Configuration**: Controlled or uncontrolled, with extensive customization options
 *
 * ## Date Restriction Patterns
 * - **Past Dates**: Use \`allowPastDate\` prop
 * - **Date Ranges**: Use \`minValue\` and \`maxValue\` in calendar config
 * - **Specific Dates**: Use \`isDateUnavailable\` function for custom logic
 */
export const Standard: Story = {
	args: {
		allowPastDate: false,
	},
	parameters: {
		docs: {
			description: {
				story: 'Basic calendar with default settings. Past dates are disabled by default.',
			},
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
