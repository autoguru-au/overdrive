import type { Meta, StoryObj } from '@storybook/react-vite';
import isChromatic from 'chromatic/isChromatic';
import MockDate from 'mockdate';
import React from 'react';
import { expect, fn, userEvent, within, waitFor } from 'storybook/test';

import type { OptionItem } from '../OptionGrid/OptionGrid';

import { DateTimeInput } from './DateTimeInput';

const testDate = '2025-12-31';

const timeOptions: OptionItem[] = [
	{
		label: '7:00AM',
		name: '700',
	},
	{
		label: '8:00AM',
		name: '800',
	},
	{
		label: '10:00AM',
		name: '1000',
	},
	{
		label: '12:00PM',
		name: '1200',
	},
	{
		label: '2:00PM',
		name: '1400',
	},
	{
		label: '4:00PM',
		name: '1600',
	},
];

const meta = {
	title: 'Forms & Input Fields/Date & Time Input',
	tags: ['beta'],
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
		allowPastDate: false,
		onChange: fn(),
		testId: 'date-time-input',
	},
	argTypes: {
		allowPastDate: {
			control: 'boolean',
		},
		// defaultDate: {
		// 	control: false,
		// 	description: 'Default selected date value',
		// },
		// defaultTime: {
		// 	control: 'text',
		// 	description: 'Default selected time option',
		// },
		// timeOptions: {
		// 	control: false,
		// 	description: 'Array of available time slot options',
		// },
		// calendar: {
		// 	control: false,
		// 	description: 'React-aria calendar configuration object',
		// },
		// lang: {
		// 	control: false,
		// 	description: 'Language overrides for labels',
		// },
		// onChange: {
		// 	control: false,
		// 	description: 'Callback fired when date or time selection changes',
		// },
	},
} satisfies Meta<typeof DateTimeInput>;

export default meta;
type Story = StoryObj<typeof DateTimeInput>;

/**
 * DateTimeField component for compact date and time selection in forms.
 * The date field opens a Calendar in a Popover, while the time field shows
 * available time slot options.
 *
 * ## Key Features
 * - **Compact Design**: Shows selected values in field format
 * - **Popover Interface**: Date and time selection in overlays
 * - **Accessibility**: Full keyboard navigation and screen reader support
 * - **Flexible Time Options**: Customizable time slots with descriptions
 * - **Date Restrictions**: Support for past date restrictions and custom validation
 */
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
 * DateTimeField configured to allow past date selection, useful for
 * scenarios like appointment history or event logs.
 */
export const AllowsPastDates: Story = {
	args: {
		allowPastDate: true,
	},
};

/**
 * DateTimeField with custom language labels for internationalization.
 */
export const CustomLabels: Story = {
	args: {
		lang: {
			dateLabel: 'FECHA',
			timeLabel: 'HORA',
			chooseDate: 'Elegir fecha',
			chooseTime: 'Elegir hora',
			nextLabel: 'Mes siguiente',
			prevLabel: 'Mes anterior',
		},
	},
};

/**
 * Simplified time options showing common business hours.
 */
export const BusinessHours: Story = {
	args: {
		timeOptions: [
			{ label: '9:00 AM', name: '9:00AM' },
			{ label: '10:00 AM', name: '10:00AM' },
			{ label: '11:00 AM', name: '11:00AM' },
			{ label: '1:00 PM', name: '1:00PM' },
			{ label: '2:00 PM', name: '2:00PM' },
			{ label: '3:00 PM', name: '3:00PM' },
			{ label: '4:00 PM', name: '4:00PM' },
		],
	},
};

/**
 * Interactive test story for date and time selection behavior.
 * Tests the complete user flow of selecting both date and time.
 */
export const InteractiveSelection: Story = {
	args: {
		timeOptions: timeOptions.slice(0, 3), // Fewer options for testing
	},
	play: async ({ canvasElement, args }) => {
		const canvas = within(canvasElement);
		const user = userEvent.setup();

		// Test date field interaction
		const dateButton = canvas.getAllByRole('button')[0];
		expect(dateButton).toBeVisible();

		await user.click(dateButton);

		// Wait for calendar popover to appear
		await waitFor(async () => {
			const calendar = canvas.getByRole('application');
			expect(calendar).toBeVisible();

			// Click on today's date (should be available)
			const todayButton = canvas
				.getAllByRole('button')
				.find((button) =>
					button.getAttribute('aria-label')?.includes('Today'),
				);
			if (todayButton) {
				await user.click(todayButton);
			}
		});

		// Test time field interaction - now a select element
		await waitFor(async () => {
			const timeSelect = canvas.getByRole('combobox');
			expect(timeSelect).toBeVisible();

			// Select the first time option
			await user.selectOptions(timeSelect, '6:00AM');
		});

		// Verify onChange was called
		expect(args.onChange).toHaveBeenCalled();
	},
};

/**
 * Accessibility test story focusing on keyboard navigation
 * and screen reader compatibility.
 */
export const AccessibilityTest: Story = {
	args: {
		timeOptions: timeOptions.slice(0, 3),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const user = userEvent.setup();

		// Test keyboard navigation to date field
		await user.tab();
		const dateButton = canvas.getAllByRole('button')[0];
		expect(dateButton).toHaveFocus();

		// Test Enter key to open date popover
		await user.keyboard('{Enter}');

		await waitFor(() => {
			const calendar = canvas.getByRole('application');
			expect(calendar).toBeVisible();
		});

		// Test Escape to close popover
		await user.keyboard('{Escape}');

		await waitFor(() => {
			expect(dateButton).toHaveFocus();
		});

		// Navigate to time field
		await user.tab();
		const timeSelect = canvas.getByRole('combobox');
		expect(timeSelect).toHaveFocus();
	},
};
