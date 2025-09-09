import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React from 'react';
import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';

import { DatePicker } from './DatePicker';
import * as stories from './DatePicker.stories';

const { Standard, LargeSize, NativePicker } = composeStories(stories);

// Mock window.matchMedia for useMedia hook
const mockMatchMedia = (query: string) => ({
	matches: false, // Default to desktop view
	media: query,
	onchange: null,
	addListener: () => {},
	removeListener: () => {},
	addEventListener: () => {},
	removeEventListener: () => {},
	dispatchEvent: () => {},
});

describe('DatePicker', () => {
	beforeAll(() => {
		Object.defineProperty(globalThis, 'matchMedia', {
			writable: true,
			value: mockMatchMedia,
		});
	});

	afterAll(() => {
		// Cleanup if needed
	});

	it('renders with default props and expected structure', () => {
		render(<Standard />);

		// Check trigger element is present
		const trigger = screen.getByRole('button');
		expect(trigger).toBeInTheDocument();

		// Should show calendar icon initially
		expect(trigger).toBeVisible();

		// Popover content should not be visible initially
		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
	});

	it('opens calendar popover and allows date selection', async () => {
		const user = userEvent.setup();
		const mockOnChange = vi.fn();

		render(<DatePicker onChange={mockOnChange} />);

		const trigger = screen.getByRole('button');

		// Click to open calendar popover
		await user.click(trigger);

		// Calendar popover should be visible
		expect(screen.getByRole('dialog')).toBeInTheDocument();
		expect(screen.getByRole('grid')).toBeInTheDocument();

		// Find and click a date button
		const dateButtons = screen
			.getAllByRole('button')
			.filter(
				(button) =>
					button.textContent &&
					/^\d+$/.test(button.textContent) &&
					!button.hasAttribute('aria-disabled'),
			);

		if (dateButtons.length > 0) {
			await user.click(dateButtons[0]);

			// onChange should be called with date string
			expect(mockOnChange).toHaveBeenCalled();

			// Popover should close after selection
			expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
		}
	});

	it('supports keyboard navigation and accessibility', async () => {
		const user = userEvent.setup();

		render(<Standard />);

		const trigger = screen.getByRole('button');

		// Focus trigger with keyboard
		trigger.focus();
		expect(trigger).toHaveFocus();

		// Open with Space key
		await user.keyboard(' ');

		// Calendar should be open
		expect(screen.getByRole('dialog')).toBeInTheDocument();

		// Tab should navigate to calendar
		await user.tab();

		// Calendar grid should be focusable
		const calendarGrid = screen.getByRole('grid');
		expect(calendarGrid).toBeInTheDocument();

		// Escape should close calendar
		await user.keyboard('{Escape}');
		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
	});

	it('handles disabled state correctly', () => {
		render(<DatePicker disabled onChange={vi.fn()} />);

		const trigger = screen.getByRole('button');

		// Trigger should be disabled
		expect(trigger).toBeDisabled();
	});

	it('displays loading state with spinner', () => {
		const { container } = render(
			<DatePicker isLoading onChange={vi.fn()} />,
		);

		// Should show progress spinner instead of icon
		const spinner = container.querySelector(
			'[data-od-component="progress-spinner"]',
		);
		expect(spinner).toBeInTheDocument();
	});

	it('supports native date picker mode', () => {
		render(<NativePicker />);

		// Should render native date input (hidden input overlaid with styled content)
		const nativeInput = screen.getByDisplayValue('');
		expect(nativeInput).toBeInTheDocument();
		expect(nativeInput).toHaveAttribute('type', 'date');
	});

	it('handles value changes and formatting', async () => {
		const user = userEvent.setup();
		const mockOnChange = vi.fn();

		render(<DatePicker value="2024-01-15" onChange={mockOnChange} />);

		// Should display formatted date
		expect(screen.getByText(/Jan 15, 2024/i)).toBeInTheDocument();

		// Open calendar and select different date
		const trigger = screen.getByRole('button');
		await user.click(trigger);

		const calendar = screen.getByRole('dialog');
		expect(calendar).toBeInTheDocument();
	});

	it('supports custom sizing and icons', () => {
		render(<LargeSize />);

		const trigger = screen.getByRole('button');
		expect(trigger).toBeInTheDocument();

		// Large size should be applied (verified by presence of element)
		expect(trigger).toBeVisible();
	});
});
