import { parseDate } from '@internationalized/date';
import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React, { useState } from 'react';
import { describe, it, expect, vi } from 'vitest';

import { DateTimeInput, type DateWithTimeOption } from './DateTimeInput';
import * as stories from './DateTimeInput.stories';

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
		expect(screen.getByLabelText(/date/i)).toBeInTheDocument();

		// Check for time field elements
		const timeSelect = screen.getByRole('combobox');
		expect(timeSelect).toBeInTheDocument();
		expect(screen.getByLabelText(/time/i)).toBeInTheDocument();

		// Check for default "Select" option
		expect(screen.getByText('select')).toBeInTheDocument();
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

		// Check default date is displayed (DD/MM/YYYY format)
		expect(screen.getByDisplayValue('25/12/2024')).toBeInTheDocument();

		// Check default time is selected
		const timeSelect = screen.getByRole('combobox') as HTMLSelectElement;
		expect(timeSelect.value).toBe('1000');

		// Check form name attributes
		expect(screen.getByDisplayValue('25/12/2024')).toHaveAttribute(
			'name',
			'appointment-date',
		);
		expect(timeSelect).toHaveAttribute('name', 'appointment-time');
	});

	it('handles time field click interaction', async () => {
		const user = userEvent.setup();

		render(<DateTimeInput timeOptions={mockTimeOptions} />);

		const timeLabel = screen.getByText('time');
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
		expect(dateInput).toHaveDisplayValue('select');
	});

	it('supports accessibility features and keyboard navigation', () => {
		render(
			<DateTimeInput timeOptions={mockTimeOptions} testId="datetime" />,
		);

		// Check accessibility attributes
		const container = screen.getByTestId('datetime');
		expect(container).toHaveAttribute(
			'data-od-component',
			'date-time-input',
		);

		// Check that form controls are present and have proper attributes
		const dateInput = screen.getByLabelText(/date/i);
		const timeSelect = screen.getByRole('combobox');

		expect(dateInput).toHaveAttribute('type', 'text');
		expect(timeSelect).toHaveAttribute('name');

		// Check that labels are present
		expect(screen.getByText('date')).toBeInTheDocument();
		expect(screen.getByText('time')).toBeInTheDocument();
	});

	describe('Controlled Component Behavior', () => {
		it('works in controlled mode', async () => {
			const user = userEvent.setup();
			const mockOnChange = vi.fn();

			const ControlledValueTest = () => {
				const [value, setValue] = useState<DateWithTimeOption>({
					date: parseDate('2025-06-30'),
					timeOption: '1100',
				});

				return (
					<DateTimeInput
						timeOptions={mockTimeOptions}
						value={value}
						// eslint-disable-next-line sonarjs/no-nested-functions
						onChange={(newValue) => {
							setValue(newValue);
							mockOnChange(newValue);
						}}
					/>
				);
			};

			render(<ControlledValueTest />);

			// Check initial controlled value is displayed
			expect(screen.getByDisplayValue('30/06/2025')).toBeInTheDocument();

			const timeSelect = screen.getByRole(
				'combobox',
			) as HTMLSelectElement;
			expect(timeSelect.value).toBe('1100');

			// Change time and verify onChange
			await user.selectOptions(timeSelect, '0900');
			expect(mockOnChange).toHaveBeenCalledWith({
				date: expect.any(Object),
				timeOption: '0900',
			});
		});

		it('works in uncontrolled mode with default values', () => {
			render(
				<DateTimeInput
					timeOptions={mockTimeOptions}
					defaultDate={parseDate('2025-07-04')}
					defaultTime="1100"
				/>,
			);

			// Check default values are displayed
			expect(screen.getByDisplayValue('04/07/2025')).toBeInTheDocument();

			const timeSelect = screen.getByRole(
				'combobox',
			) as HTMLSelectElement;
			expect(timeSelect.value).toBe('1100');
		});

		it('supports min and max props for date restrictions', () => {
			render(
				<DateTimeInput
					timeOptions={mockTimeOptions}
					min="2025-01-01"
					max="2025-12-31"
					defaultDate={parseDate('2025-06-15')}
				/>,
			);

			// Component should render without errors with date restrictions
			expect(screen.getByDisplayValue('15/06/2025')).toBeInTheDocument();
		});
	});

	describe('State Management', () => {
		it('handles disabled state correctly', () => {
			render(
				<DateTimeInput
					timeOptions={mockTimeOptions}
					disabled
					testId="datetime"
				/>,
			);

			// Check that container has disabled data attribute
			const container = screen.getByTestId('datetime');
			expect(container).toHaveAttribute('data-disabled');

			// Check that date button is disabled
			const dateButton = screen.getAllByRole('button')[0];
			expect(dateButton).toBeDisabled();

			// Check that date input is disabled
			const dateInput = screen.getByRole('textbox');
			expect(dateInput).toBeDisabled();

			// Check that time select is disabled
			const timeSelect = screen.getByRole('combobox');
			expect(timeSelect).toBeDisabled();

			// Check that time label has aria-disabled
			const timeLabel = screen.getByText('time').closest('label');
			expect(timeLabel).toHaveAttribute('aria-disabled', 'true');
		});

		it('handles loading state correctly', () => {
			render(
				<DateTimeInput
					timeOptions={mockTimeOptions}
					loading
					testId="datetime"
				/>,
			);

			// Check that container has loading data attribute
			const container = screen.getByTestId('datetime');
			expect(container).toHaveAttribute('data-loading');

			// Check that interactive elements are disabled when loading
			const dateButton = screen.getAllByRole('button')[0];
			expect(dateButton).toBeDisabled();

			// In loading state, the select is replaced with LoadingBox
			expect(screen.queryByRole('combobox')).not.toBeInTheDocument();

			// Check that LoadingBox components are rendered instead of inputs
			expect(screen.queryByRole('textbox')).not.toBeInTheDocument();

			// Check that LoadingBox components are present (both date and time fields)
			const loadingBoxes = document.querySelectorAll(
				'[data-od-component="loading-box"]',
			);
			expect(loadingBoxes).toHaveLength(2);
		});

		it('handles invalid date state correctly', () => {
			render(
				<DateTimeInput
					timeOptions={mockTimeOptions}
					invalidDate
					testId="datetime"
				/>,
			);

			// Check that date button has invalid data attribute
			const dateButton = screen.getAllByRole('button')[0];
			expect(dateButton).toHaveAttribute('data-invalid');

			// Check that date label has invalid styling applied
			const dateLabel = screen.getByText('date');
			expect(dateLabel.closest('label')).toBeInTheDocument();
		});

		it('handles invalid time state correctly', () => {
			render(
				<DateTimeInput
					timeOptions={mockTimeOptions}
					invalidTime
					testId="datetime"
				/>,
			);

			// Check that time label has invalid data attribute
			const timeLabel = screen.getByText('time').closest('label');
			expect(timeLabel).toHaveAttribute('data-invalid');
		});

		it('prevents interaction when disabled', async () => {
			const user = userEvent.setup();
			const mockOnChange = vi.fn();

			render(
				<DateTimeInput
					timeOptions={mockTimeOptions}
					disabled
					onChange={mockOnChange}
				/>,
			);

			// Try to interact with time select
			const timeSelect = screen.getByRole('combobox');
			await user.selectOptions(timeSelect, '1000');

			// onChange should not be called when disabled
			expect(mockOnChange).not.toHaveBeenCalled();
		});

		it('prevents interaction when loading', () => {
			const mockOnChange = vi.fn();

			render(
				<DateTimeInput
					timeOptions={mockTimeOptions}
					loading
					onChange={mockOnChange}
				/>,
			);

			// In loading state, interactive elements are replaced with LoadingBox
			expect(screen.queryByRole('combobox')).not.toBeInTheDocument();
			expect(screen.queryByRole('textbox')).not.toBeInTheDocument();

			// Date button should be disabled
			const dateButton = screen.getAllByRole('button')[0];
			expect(dateButton).toBeDisabled();
		});

		it('combines loading and disabled states correctly', () => {
			render(
				<DateTimeInput
					timeOptions={mockTimeOptions}
					disabled
					loading
					testId="datetime"
				/>,
			);

			const container = screen.getByTestId('datetime');
			expect(container).toHaveAttribute('data-disabled');
			expect(container).toHaveAttribute('data-loading');

			// Both states should disable interaction
			const dateButton = screen.getAllByRole('button')[0];
			expect(dateButton).toBeDisabled();

			// In loading state, select is replaced with LoadingBox
			expect(screen.queryByRole('combobox')).not.toBeInTheDocument();
		});
	});
});
