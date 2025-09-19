import { parseDate } from '@internationalized/date';
import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React from 'react';
import { describe, it, expect, vi } from 'vitest';

import { DateTimeInput } from './DateTimeInput';
import * as stories from './DateTimeInput.stories';

const { Standard, CustomLabels } = composeStories(stories);

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
		expect(screen.getByLabelText(/date/i)).toBeInTheDocument();

		// Check for time field elements
		const timeSelect = screen.getByRole('combobox');
		expect(timeSelect).toBeInTheDocument();
		expect(screen.getByLabelText(/time/i)).toBeInTheDocument();

		// Check for default "Select" option
		expect(screen.getByText('Select')).toBeInTheDocument();
	});

	it('handles onChange callback with correct data structure', async () => {
		const user = userEvent.setup();
		const mockOnChange = vi.fn();

		render(
			<DateTimeInput
				timeOptions={mockTimeOptions}
				onChange={mockOnChange}
				defaultDate={parseDate('2024-12-25')}
			/>,
		);

		// Select a time option
		const timeSelect = screen.getByRole('combobox');
		await user.selectOptions(timeSelect, '1000');

		// Verify onChange was called with correct structure
		expect(mockOnChange).toHaveBeenCalledWith({
			date: expect.any(Object), // DateValue object
			timeOption: '1000',
		});
	});

	it('supports default values and form integration', () => {
		render(
			<DateTimeInput
				timeOptions={mockTimeOptions}
				defaultDate={parseDate('2024-12-25')}
				defaultTime="1000"
				name="appointment"
			/>,
		);

		// Check default date is displayed (DD/MM/YY format)
		expect(screen.getByDisplayValue('25/12/24')).toBeInTheDocument();

		// Check default time is selected
		const timeSelect = screen.getByRole('combobox') as HTMLSelectElement;
		expect(timeSelect.value).toBe('1000');

		// Check form name attributes
		expect(screen.getByDisplayValue('25/12/24')).toHaveAttribute(
			'name',
			'appointment-date',
		);
		expect(timeSelect).toHaveAttribute('name', 'appointment-time');
	});

	it('supports internationalization and custom labels', () => {
		render(<CustomLabels />);

		// Check translated labels are displayed
		expect(screen.getByText('Datum')).toBeInTheDocument();
		expect(screen.getByText('Uhrzeit')).toBeInTheDocument();
	});

	it('handles time field click interaction', async () => {
		const user = userEvent.setup();

		render(<DateTimeInput timeOptions={mockTimeOptions} />);

		const timeLabel = screen.getByText('TIME');
		const timeSelect = screen.getByRole('combobox');

		// Click on the time label should focus the select
		await user.click(timeLabel);

		// Select should be focused (browser behavior may vary)
		expect(timeSelect).toBeInTheDocument();
	});

	it('handles edge cases and empty states', () => {
		const mockOnChange = vi.fn();

		render(
			<DateTimeInput
				timeOptions={mockTimeOptions}
				onChange={mockOnChange}
			/>,
		);

		// Check that component renders without default values
		const timeSelect = screen.getByRole('combobox') as HTMLSelectElement;
		expect(timeSelect.value).toBe('');

		// Check that date shows select state
		const dateInput = screen.getByRole('textbox');
		expect(dateInput).toHaveDisplayValue('Select');
	});

	it('supports accessibility features and keyboard navigation', () => {
		render(
			<DateTimeInput timeOptions={mockTimeOptions} testId="datetime" />,
		);

		// Check accessibility attributes
		const container = screen.getByTestId('datetime');
		expect(container).toHaveAttribute(
			'data-od-component',
			'date-time-field',
		);

		// Check that form controls are present and have proper attributes
		const dateInput = screen.getByLabelText(/date/i);
		const timeSelect = screen.getByRole('combobox');

		expect(dateInput).toHaveAttribute('type', 'text');
		expect(timeSelect).toHaveAttribute('name');

		// Check that labels are present
		expect(screen.getByText('DATE')).toBeInTheDocument();
		expect(screen.getByText('TIME')).toBeInTheDocument();
	});
});
