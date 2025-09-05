import {
	today,
	getLocalTimeZone,
	isWeekend,
	type DateValue,
} from '@internationalized/date';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Box } from '../Box/Box';

import { Calendar } from './Calendar';

// Helper function for prime number validation
const isPrime = (n: number): boolean => {
	if (n < 2) return false;
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false;
	}
	return true;
};

const meta = {
	title: 'Components/Calendar',
	tags: ['new'],
	component: Calendar,
	decorators: [
		(Story) => (
			<Box p="4">
				<Story />
			</Box>
		),
	],
	parameters: {
		docs: {
			description: {
				component: `
A fully accessible calendar component built with react-aria. Supports comprehensive date restrictions, localization, and custom validation rules.

## Key Features
- **Accessibility**: Full keyboard navigation, screen reader support, ARIA attributes
- **Localization**: Supports multiple locales and custom language labels  
- **Date Restrictions**: Disable past dates, specific dates, weekends, or date ranges
- **Custom Validation**: Implement complex business logic for date availability
- **Flexible Configuration**: Controlled or uncontrolled, with extensive customization options

## Date Restriction Patterns
- **Past Dates**: Use \`allowPastDate\` prop
- **Date Ranges**: Use \`minValue\` and \`maxValue\` in calendar config
- **Specific Dates**: Use \`isDateUnavailable\` function for custom logic
- **Weekends/Holidays**: Combine built-in utilities with custom functions

## Usage Examples
The stories below demonstrate various common patterns for calendar configuration and date restrictions.
				`,
			},
		},
	},
	argTypes: {
		allowPastDate: {
			control: 'boolean',
			description: 'Allow selecting dates in the past',
		},
		calendar: {
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

export const AllowPastDates: Story = {
	args: {
		allowPastDate: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'Calendar that allows selection of past dates. Useful for birth dates, historical events, etc.',
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

export const CustomDefaultValue: Story = {
	args: {
		calendar: {
			defaultValue: today(getLocalTimeZone()).add({ months: 1 }),
		},
	},
	parameters: {
		docs: {
			description: {
				story: 'Calendar starting with a custom default value (next month). The calendar will initially display and focus on this month.',
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

export const CustomLocale: Story = {
	args: {
		lang: {
			nextLabel: 'Nächster Monat',
			prevLabel: 'Vorheriger Monat',
		},
	},
	parameters: {
		docs: {
			description: {
				story: 'Calendar with German navigation labels. You can customize the prev/next button labels for different languages.',
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

export const DisabledWeekends: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Demonstrates disabling weekends using the `isDateUnavailable` function with the `isWeekend` utility from @internationalized/date.',
			},
		},
	},
	args: {
		calendar: {
			isDateUnavailable: (date: DateValue) => isWeekend(date, 'en-US'),
		},
	},
	render: (args) => (
		<Box>
			<Box mb="4" fontSize="3" color="soft">
				Weekends are disabled and cannot be selected
			</Box>
			<Calendar
				{...args}
				onChange={(date) => console.log('Selected:', date)}
			/>
		</Box>
	),
};

export const DisabledSpecificDates: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Shows how to disable specific dates (15th and 25th) using custom logic in `isDateUnavailable`.',
			},
		},
	},
	args: {
		calendar: {
			isDateUnavailable: (date: DateValue) => {
				// Disable 15th and 25th of every month
				return date.day === 15 || date.day === 25;
			},
		},
	},
	render: (args) => (
		<Box>
			<Box mb="4" fontSize="3" color="soft">
				The 15th and 25th of each month are disabled
			</Box>
			<Calendar
				{...args}
				onChange={(date) => console.log('Selected:', date)}
			/>
		</Box>
	),
};

export const DateRange: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Restricts selection to a specific date range using `minValue` and `maxValue`. Useful for booking systems with limited availability windows.',
			},
		},
	},
	args: {
		calendar: {
			minValue: today(getLocalTimeZone()),
			maxValue: today(getLocalTimeZone()).add({ months: 2 }),
		},
	},
	render: (args) => (
		<Box>
			<Box mb="4" fontSize="3" color="soft">
				Only dates within the next 2 months can be selected
			</Box>
			<Calendar
				{...args}
				onChange={(date) => console.log('Selected:', date)}
			/>
		</Box>
	),
};

export const BusinessDaysOnly: Story = {
	parameters: {
		docs: {
			description: {
				story: 'A realistic example for business applications: only business days are selectable, excluding weekends and common holidays.',
			},
		},
	},
	args: {
		calendar: {
			isDateUnavailable: (date: DateValue) => {
				// Disable weekends
				if (isWeekend(date, 'en-US')) return true;

				// Disable common holidays (simplified example)
				const holidays = [
					'2024-01-01', // New Year's Day
					'2024-07-04', // Independence Day
					'2024-12-25', // Christmas
				];

				return holidays.includes(date.toString());
			},
			minValue: today(getLocalTimeZone()),
		},
	},
	render: (args) => (
		<Box>
			<Box mb="4" fontSize="3" color="soft">
				Only business days (weekdays, excluding holidays) can be
				selected
			</Box>
			<Calendar
				{...args}
				onChange={(date) => console.log('Selected:', date)}
			/>
		</Box>
	),
};

export const CustomValidation: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Demonstrates complex custom validation logic. In this example, dates falling on prime numbers are disabled.',
			},
		},
	},
	args: {
		calendar: {
			isDateUnavailable: (date: DateValue) => {
				// Custom rule: disable dates that fall on prime numbers
				return isPrime(date.day);
			},
		},
	},
	render: (args) => (
		<Box>
			<Box mb="4" fontSize="3" color="soft">
				Dates falling on prime numbers (2, 3, 5, 7, 11, 13, etc.) are
				disabled
			</Box>
			<Calendar
				{...args}
				onChange={(date) => console.log('Selected:', date)}
			/>
		</Box>
	),
};

export const ControlledValue: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Shows a controlled calendar where the selected value is managed by parent component state. Useful when you need to sync with external state or validation.',
			},
		},
	},
	render: () => {
		const [selectedDate, setSelectedDate] = React.useState<DateValue>(
			today(getLocalTimeZone()),
		);

		return (
			<Box>
				<Box mb="4">
					<Box mb="2" fontSize="3" fontWeight="semiBold">
						Controlled Calendar
					</Box>
					<Box mb="4" fontSize="3" color="soft">
						Selected: {selectedDate?.toString() || 'None'}
					</Box>
				</Box>
				<Calendar
					calendar={{
						value: selectedDate,
					}}
					onChange={setSelectedDate}
				/>
			</Box>
		);
	},
};
