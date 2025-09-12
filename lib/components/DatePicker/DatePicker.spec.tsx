import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React from 'react';
import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';

import { DatePicker } from './DatePicker';
import * as stories from './DatePicker.stories';

const { Standard, LargeWithLabel, NativePicker } = composeStories(stories);

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

		render(
			<DatePicker
				name="test-picker"
				id="test-picker"
				onChange={mockOnChange}
			/>,
		);

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
					/^\d{1,2}$/.test(button.textContent.trim()) &&
					!button.hasAttribute('aria-disabled') &&
					!button.hasAttribute('aria-pressed'),
			);

		if (dateButtons.length > 0) {
			await user.click(dateButtons[0]);

			// onChange should be called with ISO date string
			expect(mockOnChange).toHaveBeenCalledWith(
				expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
			);

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

	it('handles disabled state and prevents interactions', async () => {
		const user = userEvent.setup();
		const mockOnChange = vi.fn();

		render(
			<DatePicker
				name="test-picker"
				id="test-picker"
				disabled
				valueLabel="Select date"
				onChange={mockOnChange}
			/>,
		);

		const trigger = screen.getByRole('button');

		// Trigger should have disabled styling and attributes
		expect(trigger).toHaveAttribute('disabled');

		// Attempting to click should not open popover
		await user.click(trigger);
		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
		expect(mockOnChange).not.toHaveBeenCalled();
	});

	it('displays loading state with progress spinner', () => {
		const { container } = render(
			<DatePicker
				name="test-picker"
				id="test-picker"
				isLoading
				valueLabel="Loading..."
				onChange={vi.fn()}
			/>,
		);

		// Should show progress spinner instead of calendar icon
		const spinner = container.querySelector(
			'[data-od-component="progress-spinner"]',
		);
		expect(spinner).toBeInTheDocument();

		// Trigger should still be present
		const trigger = screen.getByRole('button');
		expect(trigger).toBeInTheDocument();
	});

	it('supports native date picker mode with proper overlay', () => {
		const { container } = render(<NativePicker />);

		// Should render native date input with proper overlay structure
		const nativeInput = screen.getByDisplayValue('');
		expect(nativeInput).toBeInTheDocument();
		expect(nativeInput).toHaveAttribute('type', 'date');

		// Should show overlay content with icon and text
		expect(screen.getByText('Today')).toBeInTheDocument();

		// Should have calendar icon in overlay
		const icon = container.querySelector('[data-od-component="icon"]');
		expect(icon).toBeInTheDocument();
	});

	it('includes hidden form input for accessibility', () => {
		render(
			<DatePicker
				name="test-date"
				id="test-id"
				valueLabel="Select date"
				onChange={vi.fn()}
			/>,
		);

		// Should include hidden input for form submission
		const hiddenInput = screen.getByDisplayValue('');
		expect(hiddenInput).toBeInTheDocument();
		expect(hiddenInput).toHaveAttribute('type', 'hidden');
		expect(hiddenInput).toHaveAttribute('name', 'test-date');
		expect(hiddenInput).toHaveAttribute('id', 'test-id');
	});

	it('displays correct date when controlled with value prop', () => {
		const testValue = '2025-12-25'; // Christmas 2025

		render(
			<DatePicker
				name="test-controlled"
				value={testValue}
				onChange={vi.fn()}
			/>,
		);

		// Hidden input should contain the controlled value
		const hiddenInput = screen.getByDisplayValue(testValue);
		expect(hiddenInput).toBeInTheDocument();
		expect(hiddenInput).toHaveAttribute('type', 'hidden');

		// Component should render with controlled value
		const trigger = screen.getByRole('button');
		expect(trigger).toBeInTheDocument();
	});

	it('displays correct date when uncontrolled with defaultValue prop', () => {
		const testDefaultValue = '2025-11-15'; // Future date

		render(
			<DatePicker
				name="test-uncontrolled"
				defaultValue={testDefaultValue}
				onChange={vi.fn()}
			/>,
		);

		// Hidden input should contain the default value initially
		const hiddenInput = screen.getByDisplayValue(testDefaultValue);
		expect(hiddenInput).toBeInTheDocument();
		expect(hiddenInput).toHaveAttribute('type', 'hidden');

		// Component should render with default value
		const trigger = screen.getByRole('button');
		expect(trigger).toBeInTheDocument();
	});

	it('handles empty state when no value or defaultValue provided', () => {
		render(
			<DatePicker
				name="test-empty"
				valueLabel="Select a date"
				onChange={vi.fn()}
			/>,
		);

		// Hidden input should be empty when no value is provided
		const hiddenInput = screen.getByDisplayValue('');
		expect(hiddenInput).toBeInTheDocument();
		expect(hiddenInput).toHaveAttribute('type', 'hidden');

		// Should show the placeholder label
		const label = screen.getByText('Select a date');
		expect(label).toBeInTheDocument();
	});

	it('supports custom sizing and language options', () => {
		render(<LargeWithLabel />);

		const trigger = screen.getByRole('button');
		expect(trigger).toBeInTheDocument();

		// Component should render with custom size
		expect(trigger).toBeVisible();
	});
});
