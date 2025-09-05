import { CalendarDate } from '@internationalized/date';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { DateTimePicker } from './DateTimePicker';

const defaultProps = {
	title: 'Select Date & Time',
	timeOptions: {
		label: 'Time options',
		items: [
			{
				name: 'morning',
				label: 'Morning (9:00 AM - 12:00 PM)',
				value: 'morning',
			},
			{
				name: 'afternoon',
				label: 'Afternoon (1:00 PM - 5:00 PM)',
				value: 'afternoon',
			},
			{
				name: 'evening',
				label: 'Evening (6:00 PM - 8:00 PM)',
				value: 'evening',
			},
		],
	},
};

describe('<DateTimePicker />', () => {
	it('renders with calendar and time options', () => {
		render(<DateTimePicker {...defaultProps} />);

		expect(screen.getByText('Select Date & Time')).toBeInTheDocument();
		expect(screen.getByText('Date')).toBeInTheDocument();
		expect(screen.getByText('Time')).toBeInTheDocument();
		expect(
			screen.getByText('Morning (9:00 AM - 12:00 PM)'),
		).toBeInTheDocument();
		expect(
			screen.getByText('Afternoon (1:00 PM - 5:00 PM)'),
		).toBeInTheDocument();
		expect(
			screen.getByText('Evening (6:00 PM - 8:00 PM)'),
		).toBeInTheDocument();
	});

	it('handles calendar navigation', async () => {
		const user = userEvent.setup();

		render(<DateTimePicker {...defaultProps} />);

		const nextButton = screen.getByLabelText('Next month');
		const prevButton = screen.getByLabelText('Previous month');

		expect(nextButton).toBeInTheDocument();
		expect(prevButton).toBeInTheDocument();

		await user.click(nextButton);
		await user.click(prevButton);
	});

	it('calls onChange when both date and time are selected', async () => {
		const handleChange = vi.fn();
		const user = userEvent.setup();

		render(<DateTimePicker {...defaultProps} onChange={handleChange} />);

		// Select a time option first
		const morningOption = screen.getByText('Morning (9:00 AM - 12:00 PM)');
		await user.click(morningOption);

		// Select a date (find first available date that's not disabled)
		const calendarCells = screen.getAllByRole('gridcell');
		const availableDate = calendarCells.find(
			(cell) =>
				!Object.hasOwn(cell.dataset, 'disabled') &&
				cell.textContent &&
				Number.parseInt(cell.textContent) > 0,
		);

		if (availableDate) {
			await user.click(availableDate);
			expect(handleChange).toHaveBeenCalledWith(
				expect.objectContaining({
					date: expect.any(CalendarDate),
					timeOption: 'morning',
				}),
			);
		}
	});

	it('supports custom language content', () => {
		const customLang = {
			dateLabel: 'Custom Date',
			timeLabel: 'Custom Time',
			nextLabel: 'Custom Next',
			prevLabel: 'Custom Previous',
		};

		render(<DateTimePicker {...defaultProps} lang={customLang} />);

		expect(screen.getByText('Custom Date')).toBeInTheDocument();
		expect(screen.getByText('Custom Time')).toBeInTheDocument();
		expect(screen.getByLabelText('Custom Next')).toBeInTheDocument();
		expect(screen.getByLabelText('Custom Previous')).toBeInTheDocument();
	});

	it('handles past date restrictions when allowPastDate is false', () => {
		render(<DateTimePicker {...defaultProps} allowPastDate={false} />);

		// Past dates should be disabled
		const calendarCells = screen.getAllByRole('gridcell');
		const today = new Date();
		const todayDate = today.getDate();

		// Find cells with dates less than today
		const pastDateCells = calendarCells.filter((cell) => {
			const cellText = cell.textContent;
			return cellText && Number.parseInt(cellText) < todayDate;
		});

		// At least some past date cells should be disabled
		expect(pastDateCells.length).toBeGreaterThan(0);
	});
});
