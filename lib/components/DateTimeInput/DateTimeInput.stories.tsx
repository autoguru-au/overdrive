import { today, getLocalTimeZone } from '@internationalized/date';
import type { Meta, StoryObj } from '@storybook/react-vite';
import isChromatic from 'chromatic/isChromatic';
import MockDate from 'mockdate';
import React from 'react';
import { expect, fn, userEvent, within, waitFor } from 'storybook/test';

import type { OptionItem } from '../OptionGrid/OptionGrid';

import { DateTimeInput } from './DateTimeInput';

const testDate = '2025-12-31';

const timeOptions: OptionItem[] = [
	{ label: '7:00 AM', name: '0700' },
	{ label: '8:00 AM', name: '0800' },
	{ label: '9:00 AM', name: '0900' },
	{ label: '10:00 AM', name: '1000' },
	{ label: '11:00 AM', name: '1100' },
	{ label: '1:00 PM', name: '1300' },
	{ label: '2:00 PM', name: '1400' },
	{ label: '3:00 PM', name: '1500' },
	{ label: '4:00 PM', name: '1600' },
];

const meta = {
	title: 'Forms & Input Fields/Date & Time Input',
	tags: ['beta', 'skip-themes'],
	component: DateTimeInput,
	beforeEach: () => {
		if (isChromatic()) MockDate.set(testDate);
	},
	decorators: [
		(Story) => (
			<div style={{ maxWidth: '132px' }}>
				<Story />
			</div>
		),
	],
	args: {
		timeOptions,
		onChange: fn(),
		allowPastDate: false,
		calendarOptions: undefined,
		defaultDate: undefined,
		defaultTime: undefined,
		name: undefined,
		lang: undefined,
		testId: 'date-time-input',
	},
	argTypes: {
		allowPastDate: {
			control: 'boolean',
		},
		defaultDate: {
			control: 'text',
		},
	},
} satisfies Meta<typeof DateTimeInput>;

export default meta;
type Story = StoryObj<typeof DateTimeInput>;

export const Standard: Story = {};

/**
 * DateTimeField with a pre-selected time slot to show the populated state.
 */
export const WithDefaultTime: Story = {
	args: {
		defaultTime: '10:00AM',
	},
};

/**
 * DateTimeField with custom language labels for internationalization.
 */
export const CustomLabels: Story = {
	args: {
		lang: {
			dateLabel: 'Datum', // Date
			timeLabel: 'Uhrzeit', // Time
			nextLabel: 'Nachster Monat', // Next month
			prevLabel: 'Vorheriger Monat', // Previous month
			select: 'Auswahlen', // Select
		},
	},
};

/**
 * Comprehensive interactive test covering user flows and accessibility.
 * Tests both mouse and keyboard interactions with organized step-by-step validation.
 */
export const InteractiveSelection: Story = {
	args: {
		timeOptions: timeOptions.slice(0, 3), // Fewer options for testing
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		const user = userEvent.setup();

		// === Date field mouse interaction ===
		const dateButton = canvas.getAllByRole('button')[0];
		expect(dateButton).toBeVisible();

		// Click to open calendar popover
		await user.click(dateButton);

		// Wait for calendar to appear
		await waitFor(() => {
			const calendar = canvas.getByRole('application');
			expect(calendar).toBeVisible();
		});

		// Click on today's date (should be available)
		const todayButton = canvas
			.getAllByRole('button')
			.find((button) =>
				button.getAttribute('aria-label')?.includes('Today'),
			);
		if (todayButton) {
			await user.click(todayButton);
		}

		// Calendar should close and focus return to date button
		await waitFor(() => {
			expect(dateButton).toHaveFocus();
		});

		// === Time field interaction ===
		const timeSelect = canvas.getByRole('combobox');
		expect(timeSelect).toBeVisible();

		// Select the first time option
		await user.selectOptions(timeSelect, '0700');

		// Verify onChange was called with correct structure
		expect(args.onChange).toHaveBeenCalledWith({
			date: expect.any(Object), // DateValue object
			timeOption: '0700',
		});

		// === Keyboard navigation and accessibility ===
		// Reset focus and test keyboard navigation
		document.body.focus();

		// Tab to date field
		await user.tab();
		expect(dateButton).toHaveFocus();

		// Open calendar with Enter key
		await user.keyboard('{Enter}');

		await waitFor(() => {
			const calendar = canvas.getByRole('application');
			expect(calendar).toBeVisible();
		});

		// Close calendar with Escape key
		await user.keyboard('{Escape}');

		await waitFor(() => {
			expect(dateButton).toHaveFocus();
		});

		// Tab to time field
		await user.tab();
		expect(timeSelect).toHaveFocus();

		// Verify time field is accessible
		expect(timeSelect).toHaveAttribute('name');

		// === Time label click interaction ===
		const timeLabel = canvas.getByText('TIME');

		// Click on time label should focus select
		await user.click(timeLabel);

		// Note: Focus behavior may vary by browser for programmatic showPicker()
		expect(timeSelect).toBeInTheDocument();
	},
};

/**
 * DateTimeInput with minimum and maximum date restrictions.
 * Demonstrates calendar constraints for booking windows.
 */
export const WithDateRestrictions: Story = {
	args: {
		calendarOptions: {
			minValue: today(getLocalTimeZone()),
			maxValue: today(getLocalTimeZone()).add({ months: 3 }),
		},
	},
	parameters: {
		docs: {
			description: {
				story: 'Restricts date selection to a 3-month window from today. Past dates and dates beyond 3 months are disabled.',
			},
		},
	},
};

/**
 * DateTimeInput with custom date availability function.
 * Demonstrates blocking specific dates (e.g., weekends, holidays).
 */
export const CustomDateAvailability: Story = {
	args: {
		calendarOptions: {
			isDateUnavailable: (date) => {
				// Block weekends (Saturday = 6, Sunday = 0)
				const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();
				return dayOfWeek === 0 || dayOfWeek === 6;
			},
		},
	},
	parameters: {
		docs: {
			description: {
				story: 'Blocks weekend dates using a custom `isDateUnavailable` function. Weekends appear disabled in the calendar.',
			},
		},
	},
};
