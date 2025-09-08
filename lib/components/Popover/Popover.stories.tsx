import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { userEvent, within, expect, waitFor } from 'storybook/test';

import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { TextInput } from '../TextInput/TextInput';

import { PopoverTrigger } from './PopoverTrigger';

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
		children: <Button>Open Popover</Button>,
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
		children: <Button>Open Above</Button>,
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
		children: <Button>Click Me</Button>,
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

		// Wait for popover to appear
		await waitFor(() => {
			const popoverContent = canvas.getByRole('dialog');
			expect(popoverContent).toBeInTheDocument();
		});

		// Check that the heading is visible
		const heading = canvas.getByText('Interactive Popover');
		expect(heading).toBeVisible();

		// Test keyboard interaction - press Escape to close
		await userEvent.keyboard('{Escape}');

		// Wait for popover to close
		await waitFor(() => {
			const popoverContent = canvas.queryByRole('dialog');
			expect(popoverContent).not.toBeInTheDocument();
		});
	},
};

// Accessibility focused story
export const KeyboardTest: Story = {
	args: {
		...Standard.args,
		children: <Button>Focus Test</Button>,
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
			const popoverContent = canvas.getByRole('dialog');
			expect(popoverContent).toBeInTheDocument();
		});

		// Test that focus moves to first input
		const firstInput = canvas.getByPlaceholderText('First field');
		expect(firstInput).toHaveFocus();

		// Tab to second input
		await userEvent.keyboard('{Tab}');
		const secondInput = canvas.getByPlaceholderText('Second field');
		expect(secondInput).toHaveFocus();
	},
};
