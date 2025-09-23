import { parseDate, type DateValue } from '@internationalized/date';
import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React, { useState } from 'react';
import { describe, it, expect, vi } from 'vitest';

import { DateField } from './DateField/DateField';
import { DateTimeInput } from './DateTimeInput';
import * as stories from './DateTimeInput.stories';
import { TimeField } from './TimeField/TimeField';

const { Standard } = composeStories(stories);

const mockTimeOptions = [
	{ label: '9:00 AM', name: '0900' },
	{ label: '10:00 AM', name: '1000' },
	{ label: '11:00 AM', name: '1100' },
];

describe('DateTimeInput', () => {
	it('renders with default props and expected structure', () => {
		render(<Standard />);

		// Check for date field elements
		const dateButton = screen.getAllByRole('button')[0];
		expect(dateButton).toBeInTheDocument();
		expect(screen.getByText('date')).toBeInTheDocument();

		// Check for time field elements
		const timeSelect = screen.getByRole('combobox');
		expect(timeSelect).toBeInTheDocument();
		expect(screen.getByText('time')).toBeInTheDocument();

		// Check for default "Select" option
		expect(screen.getAllByText('select')).toHaveLength(2); // One in DateField, one in TimeField
	});

	it('handles individual component callbacks', async () => {
		const user = userEvent.setup();
		const mockDateChange = vi.fn();
		const mockTimeChange = vi.fn();

		render(
			<DateTimeInput>
				<DateField
					onChange={mockDateChange}
					defaultValue={parseDate('2024-12-25')}
				/>
				<TimeField
					timeOptions={mockTimeOptions}
					onChange={mockTimeChange}
				/>
			</DateTimeInput>,
		);

		// Select a time option
		const timeSelect = screen.getByRole('combobox');
		await user.selectOptions(timeSelect, '1000');

		expect(mockTimeChange).toHaveBeenCalledWith('1000');
	});

	it('supports form integration with custom names', () => {
		render(
			<DateTimeInput>
				<DateField name="appointment-date" />
				<TimeField
					name="appointment-time"
					timeOptions={mockTimeOptions}
				/>
			</DateTimeInput>,
		);

		const dateInput = screen.getByDisplayValue('');
		const timeSelect = screen.getByRole('combobox');

		expect(dateInput).toHaveAttribute('name', 'appointment-date');
		expect(timeSelect).toHaveAttribute('name', 'appointment-time');
	});

	it('renders with testId attribute', () => {
		render(
			<DateTimeInput testId="datetime">
				<DateField />
				<TimeField timeOptions={mockTimeOptions} />
			</DateTimeInput>,
		);

		expect(screen.getByTestId('datetime')).toBeInTheDocument();
	});

	it('applies disabled state to both child components', () => {
		render(
			<DateTimeInput>
				<DateField disabled />
				<TimeField disabled timeOptions={mockTimeOptions} />
			</DateTimeInput>,
		);

		const dateButton = screen.getAllByRole('button')[0];
		const timeSelect = screen.getByRole('combobox');

		expect(dateButton).toBeDisabled();
		expect(timeSelect).toBeDisabled();
	});

	it('applies loading state to both child components', () => {
		const { container } = render(
			<DateTimeInput>
				<DateField loading />
				<TimeField loading timeOptions={mockTimeOptions} />
			</DateTimeInput>,
		);

		// Loading state shows LoadingBox components instead of inputs
		const loadingBoxes = container.querySelectorAll(
			'[data-od-component="loading-box"]',
		);
		expect(loadingBoxes).toHaveLength(2);
	});

	it('allows individual component configuration with different props', () => {
		const mockDateChange = vi.fn();
		const mockTimeChange = vi.fn();

		render(
			<DateTimeInput>
				<DateField
					name="custom-date"
					disabled={false}
					onChange={mockDateChange}
					min="2025-01-01"
				/>
				<TimeField
					name="booking-time"
					disabled
					timeOptions={mockTimeOptions}
					onChange={mockTimeChange}
				/>
			</DateTimeInput>,
		);

		const dateInput = screen.getByDisplayValue('');
		const timeSelect = screen.getByRole('combobox');

		// DateField is not disabled
		expect(dateInput).not.toBeDisabled();
		// DateField has custom name
		expect(dateInput).toHaveAttribute('name', 'custom-date');

		// TimeField is disabled
		expect(timeSelect).toBeDisabled();
		// TimeField has custom name
		expect(timeSelect).toHaveAttribute('name', 'booking-time');
	});

	it('supports controlled state management pattern', async () => {
		const ControlledExample = () => {
			const [dateValue, setDateValue] = useState<DateValue | null>(null);
			const [timeValue, setTimeValue] = useState('');

			return (
				<DateTimeInput>
					<DateField
						name="controlled-date"
						value={dateValue}
						onChange={setDateValue}
					/>
					<TimeField
						name="controlled-time"
						timeOptions={mockTimeOptions}
						value={timeValue}
						onChange={setTimeValue}
					/>
				</DateTimeInput>
			);
		};

		const user = userEvent.setup();
		render(<ControlledExample />);

		// Select a time option
		const timeSelect = screen.getByRole('combobox');
		await user.selectOptions(timeSelect, '1000');

		expect(timeSelect).toHaveValue('1000');
	});

	it('maintains component data attributes', () => {
		render(
			<DateTimeInput testId="date-time-input">
				<DateField testId="date-field" />
				<TimeField testId="time-field" timeOptions={mockTimeOptions} />
			</DateTimeInput>,
		);

		const container = screen.getByTestId('date-time-input');
		const dateField = container.querySelector(
			'[data-test-id="date-field"]',
		);
		const timeField = container.querySelector(
			'[data-test-id="time-field"]',
		);

		expect(container).toBeInTheDocument();
		expect(dateField).toHaveAttribute('data-od-component', 'date-field');
		expect(timeField).toHaveAttribute('data-od-component', 'time-field');
	});

	it('supports component composition with different configurations', () => {
		render(
			<DateTimeInput>
				<DateField
					allowPastDate
					calendarOptions={{
						isDateUnavailable: (date) => date.day === 0,
					}}
					lang={{ dateLabel: 'Check-in Date' }}
				/>
				<TimeField
					timeOptions={mockTimeOptions}
					lang={{ timeLabel: 'Arrival Time' }}
				/>
			</DateTimeInput>,
		);

		expect(screen.getByText('Check-in Date')).toBeInTheDocument();
		expect(screen.getByText('Arrival Time')).toBeInTheDocument();
	});
});
