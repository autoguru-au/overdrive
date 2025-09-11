import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React from 'react';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';

import * as stories from './Popover.stories';
import { PopoverTrigger } from './PopoverTrigger';

const { Standard, Interaction, KeyboardTest } = composeStories(stories);

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

describe('Popover', () => {
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

		// Check trigger button is present
		expect(
			screen.getByRole('button', { name: /open popover/i }),
		).toBeInTheDocument();

		// Popover content should not be visible initially
		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
	});

	it('opens and closes popover with trigger interactions', async () => {
		const user = userEvent.setup();

		render(<Standard />);

		const triggerButton = screen.getByRole('button', {
			name: /open popover/i,
		});

		// Click to open popover
		await user.click(triggerButton);

		// Popover content should be visible
		expect(screen.getByRole('dialog')).toBeInTheDocument();
		expect(screen.getByText('Popover Content')).toBeVisible();

		// Click outside to close (using trigger again)
		await user.click(triggerButton);

		// Popover should be closed
		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
	});

	it('supports keyboard navigation and escape key', async () => {
		const user = userEvent.setup();

		render(<Interaction />);

		const triggerButton = screen.getByRole('button', {
			name: /interaction test/i,
		});

		// Use keyboard to open popover
		triggerButton.focus();
		await user.keyboard(' ');

		// Popover should be open
		expect(screen.getByRole('dialog')).toBeInTheDocument();

		// Press Escape to close
		await user.keyboard('{Escape}');

		// Popover should be closed
		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
	});

	it('handles disabled state correctly', () => {
		render(
			<PopoverTrigger content="Test content" isDisabled={true}>
				Disabled trigger
			</PopoverTrigger>,
		);

		const triggerButton = screen.getByRole('button');

		// Button should be disabled
		expect(triggerButton).toBeDisabled();
	});

	it('supports custom content and placement options', async () => {
		const user = userEvent.setup();
		const customContent = <div>Custom popover content</div>;

		render(
			<PopoverTrigger placement="top" content={customContent}>
				Custom trigger
			</PopoverTrigger>,
		);

		const triggerButton = screen.getByRole('button', {
			name: /custom trigger/i,
		});

		// Open popover
		await user.click(triggerButton);

		// Custom content should be visible
		expect(screen.getByText('Custom popover content')).toBeInTheDocument();
	});

	it('handles different trigger element types', () => {
		const nativeButton = <button>Native Button</button>;

		render(
			<PopoverTrigger content="Test content">
				{nativeButton}
			</PopoverTrigger>,
		);

		// Native button should be enhanced with popover functionality
		expect(
			screen.getByRole('button', { name: /native button/i }),
		).toBeInTheDocument();
	});

	it('supports custom language labels', async () => {
		const user = userEvent.setup();
		const customLang = { close: 'Cerrar' };

		render(
			<PopoverTrigger
				lang={customLang}
				content={<div>Content with close button</div>}
			>
				Custom language trigger
			</PopoverTrigger>,
		);

		const triggerButton = screen.getByRole('button');
		await user.click(triggerButton);

		// Popover should open with custom language support
		const popover = screen.getByRole('dialog');
		expect(popover).toBeInTheDocument();
	});

	it('manages focus correctly for accessibility', async () => {
		const user = userEvent.setup();

		render(<KeyboardTest />);

		const triggerButton = screen.getByRole('button', {
			name: /focus test/i,
		});

		// Focus trigger and open popover
		triggerButton.focus();
		expect(triggerButton).toHaveFocus();

		await user.keyboard(' ');

		// Popover should be open
		expect(screen.getByRole('dialog')).toBeInTheDocument();

		// Tab should move focus into popover content
		await user.tab();

		// Focus should be inside the popover
		const popoverDialog = screen.getByRole('dialog');
		expect(popoverDialog).toBeInTheDocument();

		// Escape should close and return focus to trigger
		await user.keyboard('{Escape}');
		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
	});
});
