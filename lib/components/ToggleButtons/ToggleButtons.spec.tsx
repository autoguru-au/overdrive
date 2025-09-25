import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React from 'react';
import { describe, it, expect, vi } from 'vitest';

import { ToggleButtons, ToggleButton } from './ToggleButtons';
import * as stories from './ToggleButtons.stories';

const { Standard, IconOnly, InteractionTest } = composeStories(stories);

describe('ToggleButtons', () => {
	it('renders with default props and expected structure', () => {
		render(<Standard />);

		// Check that toggle button group is rendered
		const buttons = screen.getAllByRole('radio');
		expect(buttons.length).toBeGreaterThan(0);

		// Verify initial selection state from story
		const selectedButtons = buttons.filter(
			(button) => button.getAttribute('aria-checked') === 'true',
		);
		expect(selectedButtons.length).toBe(1);
		expect(selectedButtons[0]).toHaveTextContent('Option 2');
	});

	it('handles user interactions and selection callbacks', async () => {
		const user = userEvent.setup();
		const mockCallback = vi.fn();

		render(
			<ToggleButtons onSelectionChange={mockCallback}>
				<ToggleButton id="option1">Option 1</ToggleButton>
				<ToggleButton id="option2">Option 2</ToggleButton>
			</ToggleButtons>,
		);

		const buttons = screen.getAllByRole('radio');

		// Click first button to select it
		await user.click(buttons[0]);

		// Verify callback was called with correct selection
		expect(mockCallback).toHaveBeenCalled();
		expect(buttons[0]).toHaveAttribute('aria-checked', 'true');
	});

	it('supports keyboard navigation and accessibility features', async () => {
		const user = userEvent.setup();
		render(<InteractionTest />);

		const buttons = screen.getAllByRole('radio');

		// Test tab navigation to focus first button
		await user.tab();
		expect(buttons[0]).toHaveFocus();

		// Test arrow key navigation
		await user.keyboard('{ArrowRight}');
		expect(buttons[1]).toHaveFocus();

		// Test additional arrow navigation
		await user.keyboard('{ArrowRight}');
		expect(buttons[2]).toHaveFocus();

		// Verify ARIA attributes and structure
		expect(buttons[0]).toHaveAttribute('aria-checked');
		expect(screen.getByRole('radiogroup')).toBeInTheDocument();
		expect(screen.getByRole('radiogroup')).toHaveAttribute(
			'aria-orientation',
			'horizontal',
		);
	});

	it('handles edge cases and different configurations', () => {
		// Test iconOnly prop styling
		render(<IconOnly />);
		const iconButtons = screen.getAllByRole('radio');
		expect(iconButtons.length).toBeGreaterThan(0);

		// Test disabled state
		render(
			<ToggleButtons isDisabled>
				<ToggleButton id="disabled1">Disabled 1</ToggleButton>
				<ToggleButton id="disabled2">Disabled 2</ToggleButton>
			</ToggleButtons>,
		);

		const disabledButtons = screen
			.getAllByRole('radio')
			.filter((button) => button.hasAttribute('disabled'));
		expect(disabledButtons.length).toBeGreaterThan(0);
	});

	it('throws error when ToggleButton is used outside ToggleButtons', () => {
		// Suppress console.error for this test
		const consoleSpy = vi
			.spyOn(console, 'error')
			.mockImplementation(() => {});

		expect(() => {
			render(<ToggleButton id="orphaned">Orphaned Button</ToggleButton>);
		}).toThrow('ToggleButton must be used within ToggleButtons');

		consoleSpy.mockRestore();
	});

	it('handles controlled and uncontrolled selection modes', () => {
		const mockCallback = vi.fn();

		// Test uncontrolled mode with defaultSelectedKeys
		const { rerender } = render(
			<ToggleButtons
				defaultSelectedKeys={['option2']}
				onSelectionChange={mockCallback}
			>
				<ToggleButton id="option1">Option 1</ToggleButton>
				<ToggleButton id="option2">Option 2</ToggleButton>
			</ToggleButtons>,
		);

		const buttons = screen.getAllByRole('radio');
		expect(buttons[1]).toHaveAttribute('aria-checked', 'true');

		// Test controlled mode
		const selectedKeys = new Set(['option1']);
		rerender(
			<ToggleButtons
				selectedKeys={selectedKeys}
				onSelectionChange={mockCallback}
			>
				<ToggleButton id="option1">Option 1</ToggleButton>
				<ToggleButton id="option2">Option 2</ToggleButton>
			</ToggleButtons>,
		);

		expect(buttons[0]).toHaveAttribute('aria-checked', 'true');
		expect(buttons[1]).toHaveAttribute('aria-checked', 'false');
	});

	it('supports multiple selection mode', async () => {
		const user = userEvent.setup();
		const mockCallback = vi.fn();

		render(
			<ToggleButtons
				selectionMode="multiple"
				onSelectionChange={mockCallback}
			>
				<ToggleButton id="option1">Option 1</ToggleButton>
				<ToggleButton id="option2">Option 2</ToggleButton>
				<ToggleButton id="option3">Option 3</ToggleButton>
			</ToggleButtons>,
		);

		// In multiple mode, ToggleButtons uses role="button" instead of "radio"
		const buttons = screen.getAllByRole('button');

		// Select multiple buttons
		await user.click(buttons[0]);
		await user.click(buttons[1]);

		// Both should be selected in multiple mode
		expect(buttons[0]).toHaveAttribute('aria-pressed', 'true');
		expect(buttons[1]).toHaveAttribute('aria-pressed', 'true');
		expect(mockCallback).toHaveBeenCalledTimes(2);

		// Verify toolbar role for multiple selection
		expect(screen.getByRole('toolbar')).toBeInTheDocument();
	});

	it('respects disallowEmptySelection prop', async () => {
		const user = userEvent.setup();

		render(
			<ToggleButtons
				defaultSelectedKeys={['option1']}
				disallowEmptySelection={true}
			>
				<ToggleButton id="option1">Option 1</ToggleButton>
				<ToggleButton id="option2">Option 2</ToggleButton>
			</ToggleButtons>,
		);

		const buttons = screen.getAllByRole('radio');
		expect(buttons[0]).toHaveAttribute('aria-checked', 'true');

		// Try to deselect the only selected button
		await user.click(buttons[0]);

		// Should remain selected due to disallowEmptySelection
		expect(buttons[0]).toHaveAttribute('aria-checked', 'true');
	});
});
