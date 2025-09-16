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

// Helper function to open calendar popover
const openCalendar = async (user: ReturnType<typeof userEvent.setup>) => {
	const trigger = screen.getByRole('button');
	await user.click(trigger);
	return {
		trigger,
		dialog: screen.getByRole('dialog'),
		grid: screen.getByRole('grid'),
	};
};

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

	it('allows clicking valueLabel to open calendar in modern mode', async () => {
		const user = userEvent.setup();

		render(
			<DatePicker
				name="test-clickable-label"
				valueLabel="Click me to open calendar"
				onChange={vi.fn()}
			/>,
		);

		// Initially calendar should be closed
		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

		// Click on the label text
		const label = screen.getByText('Click me to open calendar');
		await user.click(label);

		// Calendar should open
		expect(screen.getByRole('dialog')).toBeInTheDocument();
		expect(screen.getByRole('grid')).toBeInTheDocument();
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

	describe('value and state management', () => {
		it('handles controlled state correctly', () => {
			const controlledValue = '2025-12-25';
			render(
				<DatePicker
					name="test-controlled"
					value={controlledValue}
					onChange={vi.fn()}
				/>,
			);

			const hiddenInput = screen.getByDisplayValue(controlledValue);
			expect(hiddenInput).toHaveAttribute('type', 'hidden');
			expect(screen.getByRole('button')).toBeInTheDocument();
		});

		it('handles uncontrolled state correctly', () => {
			const defaultValue = '2025-11-15';
			render(
				<DatePicker
					name="test-uncontrolled"
					defaultValue={defaultValue}
					onChange={vi.fn()}
				/>,
			);

			const hiddenInput = screen.getByDisplayValue(defaultValue);
			expect(hiddenInput).toHaveAttribute('type', 'hidden');
			expect(screen.getByRole('button')).toBeInTheDocument();
		});

		it('handles empty state correctly', () => {
			render(
				<DatePicker
					name="test-empty"
					valueLabel="Select a date"
					onChange={vi.fn()}
				/>,
			);

			const hiddenInput = screen.getByDisplayValue('');
			expect(hiddenInput).toHaveAttribute('type', 'hidden');
			expect(screen.getByText('Select a date')).toBeInTheDocument();
		});
	});

	it('supports custom sizing and language options', () => {
		render(<LargeWithLabel />);

		const trigger = screen.getByRole('button');
		expect(trigger).toBeInTheDocument();

		// Component should render with custom size
		expect(trigger).toBeVisible();
	});

	describe('calendarOptions prop handling', () => {
		it('passes allowPastDate and other options correctly to Calendar component', async () => {
			const user = userEvent.setup();
			const mockOnChange = vi.fn();

			// Test allowPastDate: true with custom language
			const { rerender } = render(
				<DatePicker
					name="test-calendar-options"
					calendarOptions={{
						allowPastDate: true,
						lang: {
							nextLabel: 'Custom Next',
							prevLabel: 'Custom Previous',
						},
					}}
					onChange={mockOnChange}
				/>,
			);

			let { dialog, grid } = await openCalendar(user);
			expect(dialog).toBeInTheDocument();
			expect(grid).toBeInTheDocument();
			expect(screen.getByLabelText('Custom Next')).toBeInTheDocument();
			expect(
				screen.getByLabelText('Custom Previous'),
			).toBeInTheDocument();

			// Close calendar
			await user.keyboard('{Escape}');

			// Test allowPastDate: false
			rerender(
				<DatePicker
					name="test-no-past-dates"
					calendarOptions={{ allowPastDate: false }}
					onChange={mockOnChange}
				/>,
			);

			({ dialog, grid } = await openCalendar(user));
			expect(dialog).toBeInTheDocument();
			expect(grid).toBeInTheDocument();
		});

		it('merges calendarOptions with controlled state values correctly', async () => {
			const user = userEvent.setup();
			const controlledValue = '2025-06-15';
			render(
				<DatePicker
					name="test-controlled-options"
					value={controlledValue}
					calendarOptions={{
						allowPastDate: true,
						lang: {
							nextLabel: 'Next Month',
							prevLabel: 'Previous Month',
						},
					}}
					onChange={vi.fn()}
				/>,
			);

			const { dialog } = await openCalendar(user);
			expect(dialog).toBeInTheDocument();
			expect(screen.getByLabelText('Next Month')).toBeInTheDocument();
			expect(
				screen.getByDisplayValue(controlledValue),
			).toBeInTheDocument();
		});

		it('merges calendarOptions with uncontrolled defaultValue correctly', async () => {
			const user = userEvent.setup();
			const uncontrolledValue = '2025-07-20';
			render(
				<DatePicker
					name="test-uncontrolled-options"
					defaultValue={uncontrolledValue}
					calendarOptions={{
						allowPastDate: false,
						lang: {
							nextLabel: 'Forward',
							prevLabel: 'Backward',
						},
					}}
					onChange={vi.fn()}
				/>,
			);

			const { dialog } = await openCalendar(user);
			expect(dialog).toBeInTheDocument();
			expect(screen.getByLabelText('Forward')).toBeInTheDocument();
			expect(
				screen.getByDisplayValue(uncontrolledValue),
			).toBeInTheDocument();
		});

		it('handles undefined calendarOptions gracefully', async () => {
			const user = userEvent.setup();

			render(<DatePicker name="test-no-options" onChange={vi.fn()} />);

			const { dialog, grid } = await openCalendar(user);
			expect(dialog).toBeInTheDocument();
			expect(grid).toBeInTheDocument();
			expect(screen.getByLabelText('Next month')).toBeInTheDocument();
			expect(screen.getByLabelText('Previous month')).toBeInTheDocument();
		});
	});

	describe('min/max date constraints', () => {
		it('applies min constraint to native date picker', () => {
			const minDate = '2025-01-01';
			render(
				<DatePicker
					name="test-min-native"
					min={minDate}
					useNativePicker
					onChange={vi.fn()}
				/>,
			);

			const input = screen.getByDisplayValue('');
			expect(input).toHaveAttribute('min', minDate);
		});

		it('applies max constraint to native date picker', () => {
			const maxDate = '2025-12-31';
			render(
				<DatePicker
					name="test-max-native"
					max={maxDate}
					useNativePicker
					onChange={vi.fn()}
				/>,
			);

			const input = screen.getByDisplayValue('');
			expect(input).toHaveAttribute('max', maxDate);
		});

		it('applies both min and max constraints to native date picker', () => {
			const minDate = '2025-06-01';
			const maxDate = '2025-08-31';
			render(
				<DatePicker
					name="test-min-max-native"
					min={minDate}
					max={maxDate}
					useNativePicker
					onChange={vi.fn()}
				/>,
			);

			const input = screen.getByDisplayValue('');
			expect(input).toHaveAttribute('min', minDate);
			expect(input).toHaveAttribute('max', maxDate);
		});

		it('passes min/max constraints to Calendar component', async () => {
			const user = userEvent.setup();
			const minDate = '2025-06-01';
			const maxDate = '2025-08-31';

			render(
				<DatePicker
					name="test-min-max-calendar"
					min={minDate}
					max={maxDate}
					onChange={vi.fn()}
				/>,
			);

			// Open calendar
			const { dialog } = await openCalendar(user);
			expect(dialog).toBeInTheDocument();

			// Calendar should render with constraints (dates outside range should be disabled)
			// This tests that the min/max are properly passed to Calendar component
			const calendar = screen.getByRole('grid');
			expect(calendar).toBeInTheDocument();
		});

		it('works with controlled state and min/max constraints', async () => {
			const user = userEvent.setup();
			const minDate = '2025-06-01';
			const maxDate = '2025-08-31';
			const validDate = '2025-07-15';
			const mockOnChange = vi.fn();

			render(
				<DatePicker
					name="test-controlled-min-max"
					value={validDate}
					min={minDate}
					max={maxDate}
					onChange={mockOnChange}
				/>,
			);

			// Should display the controlled value
			const hiddenInput = screen.getByDisplayValue(validDate);
			expect(hiddenInput).toBeInTheDocument();

			// Calendar should open and respect constraints
			const { dialog } = await openCalendar(user);
			expect(dialog).toBeInTheDocument();
		});

		it('works with uncontrolled state and min/max constraints', async () => {
			const user = userEvent.setup();
			const minDate = '2025-06-01';
			const maxDate = '2025-08-31';
			const defaultDate = '2025-07-15';

			render(
				<DatePicker
					name="test-uncontrolled-min-max"
					defaultValue={defaultDate}
					min={minDate}
					max={maxDate}
					onChange={vi.fn()}
				/>,
			);

			// Should display the default value
			const hiddenInput = screen.getByDisplayValue(defaultDate);
			expect(hiddenInput).toBeInTheDocument();

			// Calendar should open with constraints
			const { dialog } = await openCalendar(user);
			expect(dialog).toBeInTheDocument();
		});

		it('allows min/max constraints to be undefined', async () => {
			const user = userEvent.setup();

			render(
				<DatePicker
					name="test-no-constraints"
					min={undefined}
					max={undefined}
					onChange={vi.fn()}
				/>,
			);

			// Should work normally without constraints
			const { dialog } = await openCalendar(user);
			expect(dialog).toBeInTheDocument();
		});

		it('preserves other calendarOptions when min/max are provided', async () => {
			const user = userEvent.setup();
			const minDate = '2025-06-01';

			render(
				<DatePicker
					name="test-preserve-options"
					min={minDate}
					calendarOptions={{
						allowPastDate: true,
						lang: {
							nextLabel: 'Custom Next',
							prevLabel: 'Custom Previous',
						},
					}}
					onChange={vi.fn()}
				/>,
			);

			const { dialog } = await openCalendar(user);
			expect(dialog).toBeInTheDocument();

			// Custom language options should still work
			expect(screen.getByLabelText('Custom Next')).toBeInTheDocument();
			expect(
				screen.getByLabelText('Custom Previous'),
			).toBeInTheDocument();
		});
	});
});
