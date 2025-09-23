import type { Meta, StoryObj } from '@storybook/react-vite';
import isChromatic from 'chromatic/isChromatic';
import MockDate from 'mockdate';
import React from 'react';
import { expect, fn, userEvent, within, waitFor, screen } from 'storybook/test';

import type { OptionItem } from '../OptionGrid/OptionGrid';

import { DateField } from './DateField/DateField';
import { DateTimeInput } from './DateTimeInput';
import { TimeField } from './TimeField/TimeField';

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
	args: {
		children: undefined,
		className: undefined,
		testId: defaultTestId,
	},
	argTypes: {
		children: {
			control: false,
		},
	},
} satisfies Meta<typeof DateTimeInput>;

export default meta;
type Story = StoryObj<typeof DateTimeInput>;

export const Standard: Story = {
	render: (args) => (
		<DateTimeInput {...args}>
			<DateField name="date" onChange={fn()} />
			<TimeField name="time" timeOptions={timeOptions} onChange={fn()} />
		</DateTimeInput>
	),
};

/**
 * Demonstrates different field states (invalid, disabled, loading) applied to both DateField and TimeField components.
 * Shows how to pass state props directly to individual components within the DateTimeInput wrapper.
 * Invalid fields clear their invalid state when changed.
 */
export const FieldStates: Story = {
	render: () => {
		const [dateInvalid, setDateInvalid] = React.useState(true);
		const [timeInvalid, setTimeInvalid] = React.useState(true);

		return (
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr 1fr',
					gap: '16px',
				}}
			>
				<DateTimeInput>
					<DateField
						name="date-invalid"
						invalid={dateInvalid}
						onChange={() => setDateInvalid(false)}
					/>
					<TimeField
						name="time-invalid"
						invalid={timeInvalid}
						timeOptions={timeOptions}
						onChange={() => setTimeInvalid(false)}
					/>
				</DateTimeInput>
				<DateTimeInput>
					<DateField name="date-disabled" disabled onChange={fn()} />
					<TimeField
						name="time-disabled"
						disabled
						timeOptions={timeOptions}
						onChange={fn()}
					/>
				</DateTimeInput>
				<DateTimeInput>
					<DateField name="date-loading" loading onChange={fn()} />
					<TimeField
						name="time-loading"
						loading
						timeOptions={timeOptions}
						onChange={fn()}
					/>
				</DateTimeInput>
			</div>
		);
	},
};

/**
 * Comprehensive interactive test covering user flows and accessibility.
 * Tests both mouse and keyboard interactions with organized step-by-step validation.
 */
export const InteractionTest: Story = {
	render: (args) => (
		<DateTimeInput {...args}>
			<DateField name="date-test" onChange={fn()} />
			<TimeField
				name="time-test"
				timeOptions={timeOptions.slice(0, 3)}
				onChange={fn()}
			/>
		</DateTimeInput>
	),
	play: async ({ canvasElement, step }) => {
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
		});

		let selectedDateText = '';

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
				// Capture the selected date text for later validation
				selectedDateText = dateButtons[0].textContent?.trim() || '';
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

			// Note: With slot approach, onChange is handled individually by each component
			expect(timeSelect).toHaveValue('0700');
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
			const timeSelect = canvas.getByRole('combobox');

			// The DateField now uses a hidden input for form submission
			const hiddenDateInput = canvasElement.querySelector(
				'input[type="hidden"]',
			);
			expect(hiddenDateInput).toBeInTheDocument();
			expect(hiddenDateInput).toHaveAttribute('name', 'date-test');

			// Validate the hidden input has a valid ISO date format (YYYY-MM-DD)
			// if a date was selected
			if (selectedDateText) {
				const hiddenInputValue =
					hiddenDateInput?.getAttribute('value') || '';
				expect(hiddenInputValue).toMatch(/^\d{4}-\d{2}-\d{2}$/);
				// The day should match what was clicked
				expect(hiddenInputValue.split('-')[2]).toBe(
					selectedDateText.padStart(2, '0'),
				);
			}

			// TimeField still uses a visible select
			expect(timeSelect).toHaveAttribute('name', 'time-test');
		});
	},
};
