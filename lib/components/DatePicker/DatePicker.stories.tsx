import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { expect, userEvent, within, waitFor, screen } from 'storybook/test';

import { argTypesExampleIcons } from '../../stories/shared/argTypes';
import { FlexInline } from '../Flex';

import { DatePicker } from './DatePicker';

const meta = {
	title: 'Components/Date Picker',
	tags: ['updated'],
	component: DatePicker,
	decorators: [
		(Story) => (
			<FlexInline>
				<Story />
			</FlexInline>
		),
	],
	args: {
		onChange: undefined,
		valueLabel: 'Select date',
		icon: undefined,
		size: 'medium',
		allowPastDate: false,
		isLoading: false,
		disabled: false,
		useNativePicker: false,
	},
	argTypes: {
		allowPastDate: {
			control: { type: 'boolean' },
		},
		icon: {
			defaultValue: null,
			description: 'Input field Icon',
			...argTypesExampleIcons,
		},
	},
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Standard: Story = {
	render: (args) => {
		const [selectedDate, setSelectedDate] = useState('');
		return (
			<DatePicker
				{...args}
				value={selectedDate}
				onChange={setSelectedDate}
			/>
		);
	},
};

export const LargeSize: Story = {
	args: {
		size: 'large',
	},
	render: (args) => {
		const [selectedDate, setSelectedDate] = useState('');
		return (
			<DatePicker
				{...args}
				value={selectedDate}
				onChange={setSelectedDate}
			/>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Find the date picker trigger
		const trigger = canvas.getByRole('button');
		expect(trigger).toBeInTheDocument();

		// Click to open calendar
		await userEvent.click(trigger);

		// Wait for calendar to appear (search globally since popover renders outside canvas)
		await waitFor(() => {
			const calendar = screen.getByRole('dialog');
			expect(calendar).toBeInTheDocument();
		});

		// Verify calendar grid is present
		const calendarGrid = screen.getByRole('grid');
		expect(calendarGrid).toBeInTheDocument();

		// Close with escape key
		await userEvent.keyboard('{Escape}');

		// Calendar should close
		await waitFor(() => {
			expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
		});
	},
};

/**
 * Forces the use of the native date picker on all screen sizes
 */
export const NativePicker: Story = {
	args: {
		useNativePicker: true,
	},
	render: (args) => {
		const [selectedDate, setSelectedDate] = useState('');
		return (
			<DatePicker
				{...args}
				value={selectedDate}
				onChange={setSelectedDate}
			/>
		);
	},
};

/**
 * Tests date selection and value display
 */
export const Interaction: Story = {
	args: {
		value: '2024-01-15',
		valueLabel: 'Select date',
	},
	render: (args) => {
		const [selectedDate, setSelectedDate] = useState(args.value || '');
		return (
			<DatePicker
				{...args}
				value={selectedDate}
				onChange={setSelectedDate}
			/>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Should display formatted date (use flexible text matching)
		expect(
			canvas.getByText(
				(content) =>
					content.includes('Jan') &&
					content.includes('15') &&
					content.includes('2024'),
			),
		).toBeInTheDocument();

		// Open calendar
		const trigger = canvas.getByRole('button');
		await userEvent.click(trigger);

		// Calendar should be open with current date (search globally since popover renders outside canvas)
		await waitFor(() => {
			const calendar = screen.getByRole('dialog');
			expect(calendar).toBeInTheDocument();
		});

		// Find and click a different date
		const dateButtons = screen
			.getAllByRole('button')
			.filter(
				(button) =>
					button.textContent &&
					/^20$/.test(button.textContent) &&
					!button.hasAttribute('aria-disabled'),
			);

		if (dateButtons.length > 0) {
			await userEvent.click(dateButtons[0]);

			// Calendar should close after selection
			await waitFor(() => {
				expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
			});
		}
	},
};
