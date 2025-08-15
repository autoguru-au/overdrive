import { AccountBoxIcon } from '@autoguru/icons';
import { composeStories } from '@storybook/react-vite';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { vi, afterEach } from 'vitest';

import { Icon } from '../Icon';

import { Button } from './Button';
import * as stories from './Button.stories';

const { Standard, ExtraSmall, PrimarySet } = composeStories(stories);

describe('<Button />', () => {
	afterEach(() => {
		cleanup();
		vi.useRealTimers();
		vi.clearAllMocks();
	});

	// Test stories first
	it('renders the standard button story', async () => {
		render(<Standard />);
		const button = screen.getByRole('button', { name: 'Login' });
		expect(button).toBeInTheDocument();
		expect(button).toHaveAttribute('data-testid', 'storybook-button');
	});

	it('renders the extra small button story', async () => {
		render(<ExtraSmall />);
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('Change car');
	});

	it('renders the primary set of buttons story', async () => {
		render(<PrimarySet />);
		const buttons = screen.getAllByRole('button');
		expect(buttons.length).toBeGreaterThan(0);
		// Test that the story renders multiple buttons as expected
		expect(buttons).toMatchSnapshot('primary-button-set');
	});

	// Test core component behavior
	it('renders as button element by default', () => {
		render(<Button>Click me</Button>);
		const button = screen.getByRole('button', { name: 'Click me' });
		expect(button.tagName).toBe('BUTTON');
		expect(button).toHaveAttribute('type', 'button');
	});

	it('renders as custom element when using "as" prop', () => {
		render(<Button as={<a href="/test" />}>Link button</Button>);
		const link = screen.getByRole('link', { name: 'Link button' });
		expect(link.tagName).toBe('A');
		expect(link).toHaveAttribute('href', '/test');
	});

	it('merges custom className with component styles', () => {
		render(<Button className="custom-class">Button</Button>);
		const button = screen.getByRole('button', { name: 'Button' });
		expect(button.className).toContain('custom-class');
	});

	// Test interactive behavior
	it('handles click events', async () => {
		const user = userEvent.setup();
		const handleClick = vi.fn();
		render(<Button onClick={handleClick}>Clickable</Button>);

		const button = screen.getByRole('button', { name: 'Clickable' });
		await user.click(button);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	// Test disabled state
	it('disables button when disabled prop is true', () => {
		render(<Button disabled>Disabled button</Button>);
		const button = screen.getByRole('button', { name: 'Disabled button' });
		expect(button).toBeDisabled();
	});

	it('prevents click events when disabled', async () => {
		const handleClick = vi.fn();
		render(
			<Button disabled onClick={handleClick}>
				Disabled
			</Button>,
		);

		const button = screen.getByRole('button', { name: 'Disabled' });
		await fireEvent.click(button);

		expect(handleClick).not.toHaveBeenCalled();
	});

	// Test loading state
	it('shows loading state and disables button when isLoading is true', () => {
		render(<Button isLoading>Loading button</Button>);
		const button = screen.getByRole('button', { name: 'loading' });
		expect(button).toBeDisabled();
		expect(button).toHaveAttribute('data-loading');
		expect(button).toHaveAttribute('aria-label', 'loading');
	});

	// Test icon-only buttons
	it('handles icon-only buttons correctly', () => {
		render(
			<Button aria-label="Account">
				<Icon icon={AccountBoxIcon} />
			</Button>,
		);
		const button = screen.getByRole('button', { name: 'Account' });
		expect(button).toBeInTheDocument();
		const svg = button.querySelector('svg');
		expect(svg).toBeInTheDocument();
	});

	// Test accessibility
	it('supports custom aria-label', () => {
		render(<Button aria-label="Custom label">Button</Button>);
		const button = screen.getByRole('button', { name: 'Custom label' });
		expect(button).toBeInTheDocument();
	});

	it('is keyboard accessible', async () => {
		const user = userEvent.setup();
		const handleClick = vi.fn();
		render(<Button onClick={handleClick}>Keyboard accessible</Button>);

		const button = screen.getByRole('button', {
			name: 'Keyboard accessible',
		});

		// Test focus
		button.focus();
		expect(button).toHaveFocus();

		// Test Enter key activation
		await user.keyboard('{Enter}');
		expect(handleClick).toHaveBeenCalledTimes(1);

		// Test Space key activation
		await user.keyboard(' ');
		expect(handleClick).toHaveBeenCalledTimes(2);

		// Test that button can lose focus
		button.blur();
		expect(button).not.toHaveFocus();
	});

	// Test ref forwarding
	it('forwards ref to the underlying button element', () => {
		const buttonRef = React.createRef<HTMLButtonElement>();
		render(<Button ref={buttonRef}>Ref Button</Button>);

		const button = screen.getByRole('button', { name: 'Ref Button' });
		expect(buttonRef.current).toBe(button);
		expect(buttonRef.current).toBeInstanceOf(HTMLButtonElement);
	});

	it('forwards ref when using custom "as" element', () => {
		const linkRef = React.createRef<HTMLAnchorElement>();
		render(
			<Button
				ref={linkRef as React.Ref<HTMLButtonElement>}
				as={<a href="/test" />}
			>
				Link Button
			</Button>,
		);

		const link = screen.getByRole('link', { name: 'Link Button' });
		expect(linkRef.current).toBe(link);
		expect(linkRef.current).toBeInstanceOf(HTMLAnchorElement);
	});

	// Test additional props and edge cases
	it('handles different button types', () => {
		render(<Button type="submit">Submit Button</Button>);
		const button = screen.getByRole('button', { name: 'Submit Button' });
		expect(button).toHaveAttribute('type', 'submit');
	});

	it('applies custom id', () => {
		render(<Button id="custom-id">Custom ID Button</Button>);
		const button = screen.getByRole('button', { name: 'Custom ID Button' });
		expect(button).toHaveAttribute('id', 'custom-id');
	});

	it('handles focus and blur events', async () => {
		const handleFocus = vi.fn();
		const handleBlur = vi.fn();
		render(
			<Button onFocus={handleFocus} onBlur={handleBlur}>
				Focus Button
			</Button>,
		);

		const button = screen.getByRole('button', { name: 'Focus Button' });

		button.focus();
		expect(handleFocus).toHaveBeenCalledTimes(1);

		button.blur();
		expect(handleBlur).toHaveBeenCalledTimes(1);
	});

	it('handles mouse events', async () => {
		const user = userEvent.setup();
		const handleMouseEnter = vi.fn();
		const handleMouseLeave = vi.fn();
		render(
			<Button
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				Mouse Button
			</Button>,
		);

		const button = screen.getByRole('button', { name: 'Mouse Button' });

		await user.hover(button);
		expect(handleMouseEnter).toHaveBeenCalledTimes(1);

		await user.unhover(button);
		expect(handleMouseLeave).toHaveBeenCalledTimes(1);
	});
});
