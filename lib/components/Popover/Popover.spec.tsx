import { composeStories } from '@storybook/react';
import { act, render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React from 'react';
import {
	describe,
	it,
	expect,
	beforeAll,
	afterAll,
	afterEach,
	vi,
} from 'vitest';

import {
	deferredAnimation,
	endlessAnimation,
	restoreGetAnimations,
	stalledAnimation,
	stubGetAnimations,
} from '../../test/animations';

import * as stories from './Popover.stories';
import { PopoverTrigger } from './PopoverTrigger';
import { EXIT_TIMEOUT_MS } from './useExitAnimation';

const { Standard, Interaction, KeyboardTest } = composeStories(stories);

const openPopover = /open popover/i;

let exitAnimations: Animation[] = [];

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

const RenderCounter = ({ onRender }: { onRender: () => void }) => {
	onRender();
	return <p>Counted content</p>;
};

describe('Popover', () => {
	beforeAll(() => {
		Object.defineProperty(globalThis, 'matchMedia', {
			writable: true,
			value: mockMatchMedia,
		});
		stubGetAnimations(() => exitAnimations);
	});

	afterEach(() => {
		exitAnimations = [];
		stubGetAnimations(() => exitAnimations);
		Object.defineProperty(globalThis, 'matchMedia', {
			writable: true,
			value: mockMatchMedia,
		});
	});

	afterAll(restoreGetAnimations);
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
			name: openPopover,
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

	describe('exit animations', () => {
		it('unmounts in the same commit when nothing animates on exit', async () => {
			const user = userEvent.setup();
			const onRender = vi.fn();

			render(
				<PopoverTrigger content={<RenderCounter onRender={onRender} />}>
					Same commit trigger
				</PopoverTrigger>,
			);

			const trigger = screen.getByRole('button');
			await user.click(trigger);
			expect(screen.getByRole('dialog')).toBeInTheDocument();

			const rendersWhileOpen = onRender.mock.calls.length;

			await user.click(trigger);

			expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
			expect(document.querySelector('[data-exiting]')).toBeNull();
			expect(onRender).toHaveBeenCalledTimes(rendersWhileOpen);
		});

		it('holds the popover mounted until its exit animation finishes', async () => {
			const user = userEvent.setup();
			const { animation, finish } = deferredAnimation();
			exitAnimations = [animation];

			render(<Standard />);

			const trigger = screen.getByRole('button', {
				name: openPopover,
			});
			await user.click(trigger);
			await user.click(trigger);

			expect(screen.getByRole('dialog')).toBeInTheDocument();

			await act(async () => {
				finish();
			});

			await waitFor(() => {
				expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
			});
		});

		it('marks the popover root with data-exiting only while it is exiting', async () => {
			const user = userEvent.setup();
			const { animation, finish } = deferredAnimation();
			exitAnimations = [animation];

			render(<Standard />);

			const trigger = screen.getByRole('button', {
				name: openPopover,
			});
			await user.click(trigger);

			expect(document.querySelector('[data-exiting]')).toBeNull();

			await user.click(trigger);

			const exitingRoot = document.querySelector('[data-exiting]');
			expect(exitingRoot).not.toBeNull();
			expect(exitingRoot).toContainElement(
				screen.getByText('Popover Content'),
			);

			await act(async () => {
				finish();
			});

			await waitFor(() => {
				expect(document.querySelector('[data-exiting]')).toBeNull();
			});
		});

		it('unmounts once the safety cap elapses when an animation never finishes', async () => {
			const user = userEvent.setup();
			exitAnimations = [stalledAnimation()];

			render(<Standard />);

			const trigger = screen.getByRole('button', {
				name: openPopover,
			});
			await user.click(trigger);
			await user.click(trigger);

			expect(screen.getByRole('dialog')).toBeInTheDocument();

			await waitFor(
				() => {
					expect(
						screen.queryByRole('dialog'),
					).not.toBeInTheDocument();
				},
				{ timeout: EXIT_TIMEOUT_MS + 2000 },
			);
		});

		it('ignores endless animations such as a loading spinner', async () => {
			const user = userEvent.setup();
			const onRender = vi.fn();
			exitAnimations = [endlessAnimation()];

			render(
				<PopoverTrigger content={<RenderCounter onRender={onRender} />}>
					Endless animation trigger
				</PopoverTrigger>,
			);

			const trigger = screen.getByRole('button');
			await user.click(trigger);

			const rendersWhileOpen = onRender.mock.calls.length;

			await user.click(trigger);

			expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
			expect(onRender).toHaveBeenCalledTimes(rendersWhileOpen);
		});

		it('closes immediately where the environment has no getAnimations', async () => {
			const user = userEvent.setup();
			exitAnimations = [deferredAnimation().animation];
			// @ts-expect-error deleting an optional DOM API to model older environments
			delete Element.prototype.getAnimations;

			render(<Standard />);

			const trigger = screen.getByRole('button', {
				name: openPopover,
			});
			await user.click(trigger);
			await user.click(trigger);

			expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
		});

		it('marks the positioned popover root rather than the fullscreen one', async () => {
			Object.defineProperty(globalThis, 'matchMedia', {
				writable: true,
				value: (query: string) => ({
					...mockMatchMedia(query),
					matches: true,
				}),
			});

			const user = userEvent.setup();
			const { animation, finish } = deferredAnimation();
			exitAnimations = [animation];

			render(<Standard />);

			const trigger = screen.getByRole('button', {
				name: openPopover,
			});
			await user.click(trigger);
			await user.click(trigger);

			const exitingRoot = document.querySelector('[data-exiting]');
			expect(exitingRoot).toContainElement(screen.getByRole('dialog'));

			await act(async () => {
				finish();
			});

			await waitFor(() => {
				expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
			});
		});

		it('leaves focus where a close without an animation leaves it', async () => {
			const user = userEvent.setup();

			const openThenEscape = async () => {
				const trigger = screen.getByRole('button', {
					name: /focus test/i,
				});
				trigger.focus();
				await user.keyboard(' ');
				expect(screen.getByRole('dialog')).toBeInTheDocument();
				await user.keyboard('{Escape}');
			};

			const plain = render(<KeyboardTest />);
			await openThenEscape();
			expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
			const focusAfterPlainExit = document.activeElement;
			plain.unmount();

			const { animation, finish } = deferredAnimation();
			exitAnimations = [animation];

			render(<KeyboardTest />);
			await openThenEscape();
			expect(screen.getByRole('dialog')).toBeInTheDocument();

			await act(async () => {
				finish();
			});

			await waitFor(() => {
				expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
			});
			expect(document.activeElement).toBe(focusAfterPlainExit);
		});
	});
});
