import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { expect, fn, userEvent, within, waitFor, screen } from 'storybook/test';

import { argTypesExampleIcons } from '../../stories/shared/argTypes';
import { displayFormattedDate, isToday } from '../../utils/dateFormat';
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
		onChange: fn(),
		valueLabel: 'Select date',
		icon: undefined,
		size: 'medium',
		isLoading: false,
		disabled: false,
		useNativePicker: false,
		name: 'demo-date-picker',
		calendarOptions: undefined,
		className: undefined,
		testId: 'test-date-picker',
	},
	argTypes: {
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
	args: {
		valueLabel: '',
	},
	render: (args) => {
		const [selectedDate, setSelectedDate] = useState(args.valueLabel);
		return (
			<DatePicker
				{...args}
				valueLabel={selectedDate}
				onChange={(value) => {
					setSelectedDate(displayFormattedDate(value));
					args.onChange?.(value);
				}}
			/>
		);
	},
};

export const LargeWithLabel: Story = {
	args: {
		size: 'large',
	},
	render: (args) => {
		const [selectedDate, setSelectedDate] = useState(args.valueLabel);
		return (
			<DatePicker
				{...args}
				valueLabel={selectedDate}
				onChange={(value) => {
					setSelectedDate(displayFormattedDate(value));
					args.onChange?.(value);
				}}
			/>
		);
	},
};

/**
 * Forces the use of the native date picker on all screen sizes
 */
export const NativePicker: Story = {
	args: {
		useNativePicker: true,
		valueLabel: 'Today',
	},
	render: (args) => {
		const [selectedDate, setSelectedDate] = useState(args.valueLabel);
		return (
			<DatePicker
				{...args}
				onChange={(value) => {
					if (isToday(value)) {
						setSelectedDate('Today');
					} else {
						setSelectedDate(displayFormattedDate(value));
					}
					args.onChange?.(value);
				}}
				valueLabel={selectedDate}
			/>
		);
	},
};

/**
 * Tests date selection and value display
 */
export const Interaction: Story = {
	args: {
		// value: '2024-01-15',
		valueLabel: 'Select date',
	},
	render: (args) => {
		const [selectedDate, setSelectedDate] = useState(args.valueLabel);
		return (
			<DatePicker
				{...args}
				valueLabel={selectedDate || args.valueLabel}
				onChange={(value) => {
					setSelectedDate(displayFormattedDate(value) || '');
					args.onChange?.(value);
				}}
			/>
		);
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);

		await step('Verify initial state', async () => {
			const trigger = canvas.getAllByRole('button')[0];
			expect(trigger).toBeInTheDocument();
			expect(canvas.getAllByText('Select date')[0]).toBeInTheDocument();
		});

		await step('Open calendar popover', async () => {
			const trigger = canvas.getAllByRole('button')[0];
			await userEvent.click(trigger);

			// Wait for calendar popover to appear (rendered outside canvas)
			await waitFor(() => {
				const calendar = screen.getAllByRole('dialog')[0];
				expect(calendar).toBeInTheDocument();
			});
		});

		await step('Verify calendar components', async () => {
			const calendarGrid = screen.getAllByRole('grid')[0];
			expect(calendarGrid).toBeInTheDocument();
		});

		await step('Select a date', async () => {
			const dateButtons = screen.getAllByRole('button').filter(
				(button) =>
					button.textContent &&
					/^\d{1,2}$/.test(button.textContent.trim()) &&
					!button.hasAttribute('aria-disabled') &&
					!button.hasAttribute('aria-pressed'), // Not currently selected
			);

			if (dateButtons.length > 0) {
				const selectedDateButton = dateButtons[0];
				await userEvent.click(selectedDateButton);

				// Verify calendar closes and date is selected
				await waitFor(() => {
					expect(
						screen.queryByRole('dialog'),
					).not.toBeInTheDocument();
				});

				// Verify the selected date appears in the trigger (formatted)
				const trigger = canvas.getAllByRole('button')[0];
				expect(
					canvas.queryByText('Select date'),
				).not.toBeInTheDocument();
				expect(trigger).toBeInTheDocument();
			}
		});

		await step('Test keyboard interaction', async () => {
			const trigger = canvas.getAllByRole('button')[0];
			await userEvent.click(trigger);

			await waitFor(() => {
				const calendar = screen.getAllByRole('dialog')[0];
				expect(calendar).toBeInTheDocument();
			});

			// Close with escape key
			await userEvent.keyboard('{Escape}');

			// Calendar should close
			await waitFor(() => {
				expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
			});
		});
	},
};
