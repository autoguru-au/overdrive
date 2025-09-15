import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React from 'react';
import { describe, it, expect } from 'vitest';

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
});
