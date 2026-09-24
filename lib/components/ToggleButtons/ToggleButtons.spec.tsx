import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React, { createRef } from 'react';
import { describe, it, expect, vi } from 'vitest';

import {
	ToggleButtons,
	ToggleButton,
	type ToggleButtonsProps,
} from './ToggleButtons';
import * as stories from './ToggleButtons.stories';

const { Standard, IconOnly, InteractionTest } = composeStories(stories);

const ariaChecked = 'aria-checked';

const mockContainerWidth = (width: number) => {
	const spy = vi
		.spyOn(HTMLElement.prototype, 'getBoundingClientRect')
		.mockReturnValue({ width } as DOMRect);

	return () => spy.mockRestore();
};

describe('ToggleButtons', () => {
	it('renders with default props and expected structure', () => {
		render(<Standard />);

		// Check that toggle button group is rendered
		const buttons = screen.getAllByRole('radio');
		expect(buttons.length).toBeGreaterThan(0);

		// Verify initial selection state from story
		const selectedButtons = buttons.filter(
			(button) => button.getAttribute(ariaChecked) === 'true',
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
		expect(buttons[0]).toHaveAttribute(ariaChecked, 'true');
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
		expect(buttons[0]).toHaveAttribute(ariaChecked);
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
		}).toThrow('ToggleButton: Must be used within ToggleButtons component');

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
		expect(buttons[1]).toHaveAttribute(ariaChecked, 'true');

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

		expect(buttons[0]).toHaveAttribute(ariaChecked, 'true');
		expect(buttons[1]).toHaveAttribute(ariaChecked, 'false');
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
		expect(buttons[0]).toHaveAttribute(ariaChecked, 'true');

		// Try to deselect the only selected button
		await user.click(buttons[0]);

		// Should remain selected due to disallowEmptySelection
		expect(buttons[0]).toHaveAttribute(ariaChecked, 'true');
	});

	describe('orientation', () => {
		const ariaOrientation = 'aria-orientation';
		const dataOrientation = 'data-orientation';

		const renderGroup = (props: Partial<ToggleButtonsProps> = {}) => {
			render(
				<ToggleButtons defaultSelectedKeys={['none']} {...props}>
					<ToggleButton id="none">None</ToggleButton>
					<ToggleButton id="full">Full</ToggleButton>
				</ToggleButtons>,
			);

			return screen.getByRole('radiogroup');
		};

		it('defaults to auto and exposes it as a data attribute', () => {
			const group = renderGroup();

			expect(group).toHaveAttribute(dataOrientation, 'auto');
			expect(group).toHaveAttribute(ariaOrientation, 'horizontal');
		});

		it('honours an explicit horizontal orientation', () => {
			const group = renderGroup({ orientation: 'horizontal' });

			expect(group).toHaveAttribute(dataOrientation, 'horizontal');
			expect(group).toHaveAttribute(ariaOrientation, 'horizontal');
		});

		it('honours an explicit vertical orientation', () => {
			const group = renderGroup({ orientation: 'vertical' });

			expect(group).toHaveAttribute(dataOrientation, 'vertical');
			expect(group).toHaveAttribute(ariaOrientation, 'vertical');
		});

		it('navigates with up and down arrows when vertical', async () => {
			const user = userEvent.setup();
			renderGroup({ orientation: 'vertical' });

			const buttons = screen.getAllByRole('radio');

			await user.tab();
			expect(buttons[0]).toHaveFocus();

			await user.keyboard('{ArrowDown}');
			expect(buttons[1]).toHaveFocus();

			await user.keyboard('{ArrowUp}');
			expect(buttons[0]).toHaveFocus();
		});

		it('stacks under a narrow container when auto', () => {
			const restore = mockContainerWidth(300);

			try {
				expect(renderGroup()).toHaveAttribute(
					ariaOrientation,
					'vertical',
				);
			} finally {
				restore();
			}
		});

		it('stays horizontal under a narrow container when explicitly set', () => {
			const restore = mockContainerWidth(300);

			try {
				const group = renderGroup({ orientation: 'horizontal' });

				expect(group).toHaveAttribute(dataOrientation, 'horizontal');
				expect(group).toHaveAttribute(ariaOrientation, 'horizontal');
			} finally {
				restore();
			}
		});

		it('keeps the axis horizontal for iconOnly, whatever is asked for', () => {
			const group = renderGroup({
				'aria-label': 'view',
				iconOnly: true,
				orientation: 'vertical',
			});

			// iconOnly renders inline, so a vertical axis would contradict it
			expect(group).toHaveAttribute(ariaOrientation, 'horizontal');
		});

		it('ignores the compact breakpoint for iconOnly groups', () => {
			const restore = mockContainerWidth(300);

			try {
				const group = renderGroup({
					'aria-label': 'view',
					iconOnly: true,
				});

				expect(group).toHaveAttribute('data-icon-only', '');
				expect(group).toHaveAttribute(ariaOrientation, 'horizontal');
			} finally {
				restore();
			}
		});
	});

	describe('ToggleButton attributes', () => {
		it('stamps each button with its component attribute', () => {
			render(
				<ToggleButtons defaultSelectedKeys={['none']}>
					<ToggleButton id="none">None</ToggleButton>
					<ToggleButton id="full">Full</ToggleButton>
				</ToggleButtons>,
			);

			for (const button of screen.getAllByRole('radio')) {
				expect(button).toHaveAttribute(
					'data-od-component',
					'toggle-button',
				);
			}
		});

		it('renders testId as a data-testid on the button', () => {
			render(
				<ToggleButtons defaultSelectedKeys={['none']}>
					<ToggleButton id="none" testId="none-toggle">
						None
					</ToggleButton>
					<ToggleButton id="full">Full</ToggleButton>
				</ToggleButtons>,
			);

			expect(screen.getByTestId('none-toggle')).toHaveAttribute(
				'data-od-component',
				'toggle-button',
			);
			expect(screen.getAllByRole('radio')[1]).not.toHaveAttribute(
				'data-testid',
			);
		});
	});

	describe('ref forwarding', () => {
		it('forwards ref correctly for ToggleButtons container', () => {
			const ref = createRef<HTMLDivElement>();

			render(
				<ToggleButtons ref={ref}>
					<ToggleButton id="option1">Option 1</ToggleButton>
					<ToggleButton id="option2">Option 2</ToggleButton>
				</ToggleButtons>,
			);

			// Verify ref is attached to the outer container element
			expect(ref.current).toBeInstanceOf(HTMLDivElement);
			expect(ref.current).toHaveAttribute(
				'data-od-component',
				'toggle-buttons',
			);

			// The radiogroup role is on the inner element
			const radiogroup = ref.current?.querySelector(
				'[role="radiogroup"]',
			);
			expect(radiogroup).toBeInTheDocument();
		});

		it('forwards ref correctly for individual ToggleButton', () => {
			const buttonRef = createRef<HTMLButtonElement>();

			render(
				<ToggleButtons>
					<ToggleButton id="option1" ref={buttonRef}>
						Option 1
					</ToggleButton>
					<ToggleButton id="option2">Option 2</ToggleButton>
				</ToggleButtons>,
			);

			// Verify ref is attached to the button element
			expect(buttonRef.current).toBeInstanceOf(HTMLButtonElement);
			expect(buttonRef.current).toHaveAttribute('role', 'radio');
			expect(buttonRef.current).toHaveTextContent('Option 1');
		});

		it('supports callback refs for ToggleButtons', () => {
			const refCallback = vi.fn();

			render(
				<ToggleButtons ref={refCallback}>
					<ToggleButton id="option1">Option 1</ToggleButton>
				</ToggleButtons>,
			);

			// Verify callback ref was called with the outer container element
			expect(refCallback).toHaveBeenCalledWith(
				expect.any(HTMLDivElement),
			);
			const containerElement = refCallback.mock.calls[0][0];
			expect(containerElement).toHaveAttribute(
				'data-od-component',
				'toggle-buttons',
			);

			// The radiogroup role is on the inner element
			const radiogroup = containerElement.querySelector(
				'[role="radiogroup"]',
			);
			expect(radiogroup).toBeInTheDocument();
		});

		it('supports callback refs for ToggleButton', () => {
			const refCallback = vi.fn();

			render(
				<ToggleButtons>
					<ToggleButton id="option1" ref={refCallback}>
						Option 1
					</ToggleButton>
				</ToggleButtons>,
			);

			// Verify callback ref was called with the button element
			expect(refCallback).toHaveBeenCalledWith(
				expect.any(HTMLButtonElement),
			);
			expect(refCallback.mock.calls[0][0]).toHaveAttribute(
				'role',
				'radio',
			);
			expect(refCallback.mock.calls[0][0]).toHaveTextContent('Option 1');
		});

		it('handles multiple refs (object + callback) through mergeRefs', () => {
			const objectRef = createRef<HTMLDivElement>();
			const callbackRef = vi.fn();

			const bothRefsCallback = (node: HTMLDivElement | null) => {
				if (objectRef.current !== node) {
					objectRef.current = node;
				}
				callbackRef(node);
			};

			// Create a component that passes both refs
			const TestComponent = () => {
				return (
					<ToggleButtons ref={bothRefsCallback}>
						<ToggleButton id="option1">Option 1</ToggleButton>
					</ToggleButtons>
				);
			};

			render(<TestComponent />);

			// Both refs should receive the same element
			expect(objectRef.current).toBeInstanceOf(HTMLDivElement);
			expect(callbackRef).toHaveBeenCalledWith(objectRef.current);
		});
	});
});
