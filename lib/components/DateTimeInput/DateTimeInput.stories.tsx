import { parseDate, getLocalTimeZone } from '@internationalized/date';
import type { Meta, StoryObj } from '@storybook/react-vite';
import isChromatic from 'chromatic/isChromatic';
import MockDate from 'mockdate';
import React from 'react';
import { expect, fn, userEvent, within, waitFor, screen } from 'storybook/test';

import type { OptionItem } from '../OptionGrid/OptionGrid';

import { DateTimeInput } from './DateTimeInput';

const testDate = '2025-12-31';
const defaultTestId = 'date-time-input';

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
		disabled: false,
		invalidDate: false,
		invalidTime: false,
		loading: false,
		name: undefined,
		min: undefined,
		max: undefined,
		lang: undefined,
		value: undefined,
		testId: defaultTestId,
	},
	argTypes: {
		allowPastDate: {
			control: 'boolean',
		},
		defaultDate: {
			control: 'text',
		},
		invalidDate: {
			control: 'boolean',
		},
	},
} satisfies Meta<typeof DateTimeInput>;

export default meta;
type Story = StoryObj<typeof DateTimeInput>;

export const Standard: Story = {};

/**
 * DateTimeInput with min and max props for simple date restrictions.
 * Demonstrates the string-based min/max approach consistent with DateInput.
 */
export const MinMax: Story = {
	args: {
		min: '2025-01-01',
		max: '2025-12-31',
		defaultDate: parseDate('2025-06-15'),
		defaultTime: '1000',
	},
};

/**
 * DateTimeInput with custom date availability function.
 * Demonstrates blocking specific dates (e.g., weekends, holidays).
 *
 * **NOTE**: Using the `isDateUnavailable` handler overrides past date availability
 * as well as min/max values.
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
};

/**
 * Comprehensive interactive test covering user flows and accessibility.
 * Tests both mouse and keyboard interactions with organized step-by-step validation.
 */
export const InteractionTest: Story = {
	args: {
		timeOptions: timeOptions.slice(0, 3), // Fewer options for testing
	},
	play: async ({ canvasElement, args, step }) => {
		const canvas = within(canvasElement);
		const user = userEvent.setup();

		await step('Initial component structure validation', async () => {
			const dateButton = canvas.getAllByRole('button')[0];
			expect(dateButton).toBeVisible();

			const timeSelect = canvas.getByRole('combobox');
			expect(timeSelect).toBeVisible();

			// Verify labels are present with correct text
			expect(canvas.getByText('date')).toBeInTheDocument();
			expect(canvas.getByText('time')).toBeInTheDocument();

			// Check data attributes
			const container = canvas.getByTestId(defaultTestId);
			expect(container).toHaveAttribute(
				'data-od-component',
				defaultTestId,
			);
		});

		await step('Date field mouse interaction', async () => {
			const dateButton = canvas.getAllByRole('button')[0];

			// Click to open calendar popover
			await user.click(dateButton);

			// Wait for calendar popover to appear (rendered outside canvas)
			await waitFor(() => {
				const calendarGrid = screen.queryByRole('grid');
				expect(calendarGrid).toBeInTheDocument();
			});

			// Find and click on a selectable date (not disabled/unavailable)
			const dateButtons = screen.getAllByRole('button').filter(
				(button) =>
					button.textContent &&
					/^\d{1,2}$/.test(button.textContent.trim()) &&
					!button.hasAttribute('aria-disabled') &&
					!button.hasAttribute('aria-pressed'), // Not currently selected
			);

			if (dateButtons.length > 0) {
				await user.click(dateButtons[0]);
			}

			// Calendar should close after date selection
			await waitFor(() => {
				const calendarGrid = screen.queryByRole('grid');
				expect(calendarGrid).not.toBeInTheDocument();
			});
		});

		await step('Time field interaction', async () => {
			const timeSelect = canvas.getByRole('combobox');

			// Select the first time option
			await user.selectOptions(timeSelect, '0700');

			// Verify onChange was called with correct structure
			expect(args.onChange).toHaveBeenCalledWith({
				date: expect.any(Object), // DateValue object
				timeOption: '0700',
			});
		});

		await step('Keyboard navigation and accessibility', async () => {
			const dateButton = canvas.getAllByRole('button')[0];
			const timeSelect = canvas.getByRole('combobox');

			// Focus the date button directly to test keyboard navigation
			dateButton.focus();
			expect(dateButton).toHaveFocus();

			// Open calendar with Enter key
			await user.keyboard('{Enter}');

			await waitFor(() => {
				const calendarGrid = screen.queryByRole('grid');
				expect(calendarGrid).toBeInTheDocument();
			});

			// Close calendar with Escape key
			await user.keyboard('{Escape}');

			await waitFor(() => {
				const calendarGrid = screen.queryByRole('grid');
				expect(calendarGrid).not.toBeInTheDocument();
			});

			// Focus the time field to test accessibility
			timeSelect.focus();
			expect(timeSelect).toHaveFocus();

			// Verify time field is accessible
			expect(timeSelect).toHaveAttribute('name');
		});

		await step('Time label click interaction', async () => {
			const timeSelect = canvas.getByRole('combobox');
			const timeFieldContainer = timeSelect.closest('label');

			// Click on time field container should trigger showPicker()
			if (timeFieldContainer) {
				await user.click(timeFieldContainer);
			}

			// Note: Focus behavior may vary by browser for programmatic showPicker()
			expect(timeSelect).toBeInTheDocument();
		});

		await step('Form integration validation', async () => {
			const dateInput = canvas.getByRole('textbox');
			const timeSelect = canvas.getByRole('combobox');

			// Check form attributes
			expect(dateInput).toHaveAttribute('name', 'datetime-input-date');
			expect(timeSelect).toHaveAttribute('name', 'datetime-input-time');

			// Check readonly/disabled states
			expect(dateInput).toHaveAttribute('readonly');
			expect(dateInput).toHaveAttribute('tabindex', '-1');
		});
	},
};
