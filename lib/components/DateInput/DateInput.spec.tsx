import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React from 'react';
import { describe, it, expect, vi } from 'vitest';

import { DateInput } from './DateInput';
import * as stories from './DateInput.stories';

const { Standard, Disabled } = composeStories(stories);

describe('DateInput', () => {
	it('renders date segments and calendar picker', () => {
		render(<Standard />);

		// Check for segmented date interface
		const segments = screen.getAllByRole('spinbutton');
		expect(segments.length).toBeGreaterThan(0);

		// Check for calendar button
		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('supports keyboard navigation between date segments', async () => {
		const user = userEvent.setup();
		render(<DateInput name="test" placeholder="Select date" />);

		// Focus first segment and navigate
		const segments = screen.getAllByRole('spinbutton');
		await user.click(segments[0]);

		// Verify focus is on a date segment
		expect(document.activeElement).toHaveAttribute('role', 'spinbutton');

		// Test arrow navigation
		await user.keyboard('{ArrowRight}');
		expect(document.activeElement).toBeTruthy();
	});

	it('provides form-compatible ref for validation libraries', () => {
		const dateInputRef = React.createRef<HTMLInputElement>();

		render(
			<DateInput
				ref={dateInputRef}
				name="booking-date"
				placeholder="Select date"
				value="2024-01-15"
			/>,
		);

		const refElement = dateInputRef.current;
		expect(refElement).toBeTruthy();

		if (refElement) {
			// Test form properties that validation libraries need
			expect(refElement.value).toBe('2024-01-15');
			expect(refElement.name).toBe('booking-date');
			expect(refElement.type).toBe('date');

			// Test validation methods
			expect(typeof refElement.checkValidity).toBe('function');
			expect(typeof refElement.setCustomValidity).toBe('function');

			// Test focus targets interactive elements
			expect(typeof refElement.focus).toBe('function');
		}
	});

	it('handles disabled state correctly', () => {
		render(<Disabled />);

		// Check that disabled state is reflected in segments
		const segments = screen.getAllByRole('spinbutton');
		const hasDisabledSegments = segments.some(
			(segment) =>
				segment.hasAttribute('aria-disabled') &&
				segment.getAttribute('aria-disabled') === 'true',
		);

		expect(hasDisabledSegments).toBe(true);
	});

	it('invokes all event handlers (onFocus, onBlur, onChange) correctly', async () => {
		const user = userEvent.setup();
		const mockOnChange = vi.fn();
		const mockOnFocus = vi.fn();
		const mockOnBlur = vi.fn();

		render(
			<DateInput
				name="test-date"
				placeholder="Select date"
				value="2024-01-15"
				onChange={mockOnChange}
				onFocus={mockOnFocus}
				onBlur={mockOnBlur}
			/>,
		);

		// Get date segments and focus on the day segment
		const segments = screen.getAllByRole('spinbutton');
		const daySegment = segments.find((segment) =>
			segment.getAttribute('aria-label')?.includes('day'),
		);

		if (daySegment) {
			// Test onFocus handler
			await user.click(daySegment);
			expect(mockOnFocus).toHaveBeenCalled();

			// Verify focus event structure
			const focusCallArgs = mockOnFocus.mock.calls[0];
			expect(focusCallArgs[0]).toHaveProperty('target');
			expect(focusCallArgs[0]).toHaveProperty('currentTarget');

			// Test onChange handler
			await user.keyboard('{ArrowUp}'); // Increment day
			expect(mockOnChange).toHaveBeenCalled();

			// Verify onChange event structure
			const changeCallArgs = mockOnChange.mock.calls[0];
			expect(changeCallArgs[0]).toHaveProperty('target');
			expect(changeCallArgs[0]).toHaveProperty('currentTarget');
			expect(changeCallArgs[0].target.value).toMatch(
				/^\d{4}-\d{2}-\d{2}$/,
			); // ISO date format

			// Test onBlur handler by clicking outside
			await user.click(document.body);
			expect(mockOnBlur).toHaveBeenCalled();

			// Verify blur event structure
			const blurCallArgs = mockOnBlur.mock.calls[0];
			expect(blurCallArgs[0]).toHaveProperty('target');
			expect(blurCallArgs[0]).toHaveProperty('currentTarget');
		}
	});

	it('marks dates outside min/max constraints as invalid', async () => {
		const ariaInvalidTrue = 'true';

		const { rerender } = render(
			<DateInput
				name="test-date"
				placeholder="Select date"
				value="2025-10-15" // Valid date within range
				min="2025-10-10"
				max="2025-10-20"
				onChange={vi.fn()}
			/>,
		);

		// Initially valid date should not have aria-invalid
		let segments = screen.getAllByRole('spinbutton');
		expect(
			segments.some(
				(segment) =>
					segment.getAttribute('aria-invalid') === ariaInvalidTrue,
			),
		).toBe(false);

		// Test date below minimum
		rerender(
			<DateInput
				name="test-date"
				placeholder="Select date"
				value="2025-10-05" // Below min (2025-10-10)
				min="2025-10-10"
				max="2025-10-20"
				onChange={vi.fn()}
			/>,
		);

		segments = screen.getAllByRole('spinbutton');
		expect(
			segments.some(
				(segment) =>
					segment.getAttribute('aria-invalid') === ariaInvalidTrue,
			),
		).toBe(true);

		// Test date above maximum
		rerender(
			<DateInput
				name="test-date"
				placeholder="Select date"
				value="2025-10-25" // Above max (2025-10-20)
				min="2025-10-10"
				max="2025-10-20"
				onChange={vi.fn()}
			/>,
		);

		segments = screen.getAllByRole('spinbutton');
		expect(
			segments.some(
				(segment) =>
					segment.getAttribute('aria-invalid') === ariaInvalidTrue,
			),
		).toBe(true);

		// Test valid date again should remove invalid state
		rerender(
			<DateInput
				name="test-date"
				placeholder="Select date"
				value="2025-10-18" // Valid date within range
				min="2025-10-10"
				max="2025-10-20"
				onChange={vi.fn()}
			/>,
		);

		segments = screen.getAllByRole('spinbutton');
		expect(
			segments.some(
				(segment) =>
					segment.getAttribute('aria-invalid') === ariaInvalidTrue,
			),
		).toBe(false);
	});
});
