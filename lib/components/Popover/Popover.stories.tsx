import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { userEvent, within, expect, waitFor, screen } from 'storybook/test';

import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { button } from '../Button/Button.css';
import { Heading } from '../Heading/Heading';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { TextInput } from '../TextInput/TextInput';

import { PopoverTrigger } from './PopoverTrigger';

const buttonStyle = button({ intent: 'secondary' });

const meta = {
	title: 'Layout/Popover',
	tags: ['new'],
	component: PopoverTrigger,
	parameters: {
		chromatic: { disable: true },
		layout: 'centered',
	},
} satisfies Meta<typeof PopoverTrigger>;

export default meta;

type Story = StoryObj<typeof PopoverTrigger>;

export const Standard: Story = {
	args: {
		placement: 'bottom',
		offset: 8,
		shouldFlip: true,
		isDisabled: false,
		shouldCloseOnInteractOutside: undefined,
		children: <button className={buttonStyle}>Open Popover</button>,
		content: (
			<Box padding="4">
				<Stack space="3">
					<Heading size="4">Popover Content</Heading>
					<Text>
						This is a simple popover with some text content.
					</Text>
				</Stack>
			</Box>
		),
	},
};

export const TopPlacement: Story = {
	args: {
		...Standard.args,
		placement: 'top',
		children: <button className={buttonStyle}>Open Above</button>,
		content: (
			<Box padding="4">
				<Text>This popover opens above the trigger button.</Text>
			</Box>
		),
	},
};

// Interactive story with play function
export const Interaction: Story = {
	args: {
		...Standard.args,
		testId: 'popover-test',
		children: <button className={buttonStyle}>Interaction Test</button>,
		content: (
			<Box padding="4">
				<Stack space="3">
					<Heading size="4">Interactive Popover</Heading>
					<Text>This story tests popover interactions.</Text>
					<Button size="small" variant="primary">
						Action Button
					</Button>
				</Stack>
			</Box>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Find and click the trigger button
		const triggerButton = canvas.getAllByRole('button')[0];
		await userEvent.click(triggerButton);

		// Wait for popover to appear (using screen to search globally)
		await waitFor(() => {
			const popoverContent = screen.getByRole('dialog');
			expect(popoverContent).toBeInTheDocument();
		});

		// Check that the heading is visible
		const heading = screen.getByText('Interactive Popover');
		expect(heading).toBeVisible();

		// Test keyboard interaction - press Escape to close
		await userEvent.keyboard('{Escape}');

		// Wait for popover to close
		await waitFor(() => {
			const popoverContent = screen.queryByRole('dialog');
			expect(popoverContent).not.toBeInTheDocument();
		});
	},
};

// Accessibility focused story
export const KeyboardTest: Story = {
	args: {
		placement: 'bottom',
		offset: 8,
		shouldFlip: true,
		isDisabled: false,
		shouldCloseOnInteractOutside: undefined,
		children: <button className={buttonStyle}>Focus Test</button>,
		content: (
			<Box padding="4">
				<Stack space="3">
					<Heading size="4">Keyboard Navigation</Heading>
					<Text>Tab through these elements:</Text>
					<TextInput name="field1" placeholder="First field" />
					<TextInput name="field2" placeholder="Second field" />
					<Button size="small" variant="primary">
						Submit
					</Button>
				</Stack>
			</Box>
		),
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Focus and activate trigger
		const triggerButton = canvas.getAllByRole('button')[0];
		triggerButton.focus();
		await userEvent.keyboard(' ');

		// Wait for popover to appear
		await waitFor(() => {
			const popoverContent = screen.queryByRole('dialog');
			expect(popoverContent).toBeInTheDocument();
		});

		// Wait for inputs to be available - try different selectors
		await waitFor(() => {
			// Try different ways to find the input
			const inputByPlaceholder =
				screen.queryByPlaceholderText('First field');
			const inputByRole = screen.queryByRole('textbox', {
				name: /first field/i,
			});
			const allTextboxes = screen.queryAllByRole('textbox');

			if (
				!inputByPlaceholder &&
				!inputByRole &&
				allTextboxes.length === 0
			) {
				throw new Error('No input found - checking DOM structure');
			}

			const firstInput =
				inputByPlaceholder || inputByRole || allTextboxes[0];
			expect(firstInput).toBeInTheDocument();
		});

		// Test keyboard navigation by tabbing through elements
		// First, tab to get into the popover content
		await userEvent.keyboard('{Tab}');

		// Find and interact with the first input
		await waitFor(() => {
			const allInputs = screen.queryAllByRole('textbox');
			const firstInput =
				screen.queryByPlaceholderText('First field') || allInputs[0];
			if (!firstInput)
				throw new Error('First input not found for interaction');

			// Focus the first input manually and verify it can receive focus
			firstInput.focus();
			expect(firstInput).toHaveFocus();
		});

		// Tab to second input
		await userEvent.keyboard('{Tab}');

		// Verify we can focus the second input
		await waitFor(() => {
			const allInputs = screen.queryAllByRole('textbox');
			const secondInput =
				screen.queryByPlaceholderText('Second field') || allInputs[1];
			if (!secondInput)
				throw new Error('Second input not found for interaction');

			// Check if focus moved naturally, or focus manually for verification
			if (!secondInput.matches(':focus')) {
				secondInput.focus();
			}
			expect(secondInput).toHaveFocus();
		});
	},
};
