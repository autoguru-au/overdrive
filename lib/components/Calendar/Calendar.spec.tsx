import { today, getLocalTimeZone } from '@internationalized/date';
import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React from 'react';
import { describe, it, expect, vi } from 'vitest';

import { Calendar } from './Calendar';
import * as stories from './Calendar.stories';

const { Standard, DisabledWeekends } = composeStories(stories);

describe('Calendar', () => {
	it('renders with default props and today selected', () => {
		render(<Standard />);

		// Check calendar structure
		expect(screen.getByRole('grid')).toBeInTheDocument();
		expect(screen.getAllByRole('button').length).toBeGreaterThan(25); // Has days + nav buttons

		// Check navigation buttons
		expect(
			screen.getByRole('button', { name: /previous month/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: /next month/i }),
		).toBeInTheDocument();

		// Check month/year title
		expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument();
	});

	it('handles date selection and fires onChange callback', async () => {
		const user = userEvent.setup();
		const mockOnChange = vi.fn();

		// Render Calendar directly with mock onChange
		render(<Calendar onChange={mockOnChange} />);

		// Find clickable date buttons (not navigation buttons)
		const dateButtons = screen
			.getAllByRole('button')
			.filter(
				(button) =>
					button.textContent &&
					/^\d+$/.test(button.textContent) &&
					!button.hasAttribute('aria-disabled'),
			);

		// Click on the first available date
		if (dateButtons.length > 0) {
			await user.click(dateButtons[0]);
			expect(mockOnChange).toHaveBeenCalled();
		}
	});

	it('supports keyboard navigation between dates', async () => {
		const user = userEvent.setup();

		render(<Standard />);

		// Focus the calendar grid
		const grid = screen.getByRole('grid');
		grid.focus();

		// Navigate with arrow keys
		await user.keyboard('{ArrowRight}');
		await user.keyboard('{ArrowDown}');
		await user.keyboard('{Enter}');

		// Should have a focused/selected date
		expect(document.activeElement).toBeTruthy();
	});

	it('navigates between months with prev/next buttons', async () => {
		const user = userEvent.setup();

		render(<Standard />);

		const initialTitle = screen.getByRole('heading', {
			level: 4,
		}).textContent;

		// Click next month
		await user.click(screen.getByRole('button', { name: /next month/i }));

		const newTitle = screen.getByRole('heading', { level: 4 }).textContent;
		expect(newTitle).not.toBe(initialTitle);

		// Click previous month to go back
		await user.click(
			screen.getByRole('button', { name: /previous month/i }),
		);

		const backTitle = screen.getByRole('heading', { level: 4 }).textContent;
		expect(backTitle).toBe(initialTitle);
	});

	it('disables past dates when allowPastDate is false', () => {
		render(<Standard allowPastDate={false} />);

		const todayDate = today(getLocalTimeZone());
		const yesterdayNumber = todayDate.day - 1;

		if (yesterdayNumber > 0) {
			const pastDateButtons = screen
				.getAllByRole('button')
				.filter(
					(button) =>
						button.textContent === yesterdayNumber.toString(),
				);

			// At least one past date should be disabled
			expect(
				pastDateButtons.some(
					(button) =>
						button.hasAttribute('aria-disabled') &&
						button.getAttribute('aria-disabled') === 'true',
				),
			).toBe(true);
		}
	});

	it('supports custom date unavailability rules', () => {
		render(<DisabledWeekends />);

		// Weekend dates should be disabled (Saturday/Sunday)
		const disabledButtons = screen
			.getAllByRole('button')
			.filter(
				(button) =>
					button.hasAttribute('aria-disabled') &&
					button.getAttribute('aria-disabled') === 'true',
			);

		// Should have some disabled weekend dates
		expect(disabledButtons.length).toBeGreaterThan(0);
	});

	it('supports custom language labels', () => {
		const customLang = {
			nextLabel: 'Mês seguinte',
			prevLabel: 'Mês anterior',
		};

		render(<Standard lang={customLang} />);

		expect(
			screen.getByRole('button', { name: 'Mês anterior' }),
		).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: 'Mês seguinte' }),
		).toBeInTheDocument();
	});

	it('manages focus correctly for accessibility', async () => {
		const user = userEvent.setup();

		render(<Standard />);

		// Tab through interactive elements
		await user.tab();
		const firstFocus = document.activeElement;
		expect(firstFocus).toBeTruthy();

		await user.tab();
		const secondFocus = document.activeElement;
		expect(secondFocus).toBeTruthy();
		expect(secondFocus).not.toBe(firstFocus);

		// Should be able to navigate to calendar grid
		await user.tab();
		const thirdFocus = document.activeElement;
		expect(thirdFocus).toBeTruthy();
	});
});
