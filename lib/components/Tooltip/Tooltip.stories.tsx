import { Meta, StoryObj } from '@storybook/react-vite';
import React, { type ComponentProps } from 'react';
import { userEvent, within, expect, waitFor } from 'storybook/test';

import { Button } from '../Button';
import { Inline } from '../Inline/Inline';
import { EAlignment } from '../Positioner/alignment';
import { Text } from '../Text/Text';
import { TextInput } from '../TextInput';

import { Tooltip } from './Tooltip';

const sizeScale: ComponentProps<typeof Text>['size'][] = ['3', '4'];
const standardTooltipLabel = "I'm the tooltip body";

const meta = {
	title: 'Components/Tooltip',
	tags: ['updated'],
	component: Tooltip,
	decorators: [
		(Story) => (
			<div style={{ marginLeft: 100, marginTop: 100 }}>
				<Story />
			</div>
		),
	],
	parameters: {
		chromatic: { disable: true },
	},
	args: {
		children: (
			<div style={{ display: 'inline' }}>
				I&apos;m the tooltip trigger
			</div>
		),
	},
	argTypes: {
		alignment: {
			options: Object.values(EAlignment),
			defaultValue: EAlignment.RIGHT,
			control: {
				type: 'select',
			},
		},
		size: {
			options: sizeScale,
			defaultValue: void 0,
			control: {
				type: 'select',
			},
		},
		label: {
			defaultValue: '',
		},
		closeAfter: {
			defaultValue: EAlignment.RIGHT,
			control: {
				type: 'number',
			},
		},
	},
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Standard: Story = {
	args: {
		label: standardTooltipLabel,
		closeAfter: undefined,
		wrapper: true,
		testId: 'standard-tooltip',
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByTestId('standard-tooltip');

		await step('Test standard tooltip interactions', async () => {
			// Test hover
			await userEvent.hover(trigger);
			await waitFor(async () => {
				const tooltip = await canvas.findByRole('tooltip');
				await expect(tooltip).toBeVisible();
				await expect(tooltip).toHaveTextContent(standardTooltipLabel);
			});

			// Test unhover
			await userEvent.unhover(trigger);
			await waitFor(async () => {
				await new Promise((resolve) => setTimeout(resolve, 600));
				const tooltipAfterDelay = canvas.queryByRole('tooltip');
				await expect(tooltipAfterDelay).not.toBeInTheDocument();
			});
		});

		await step('Test focus interactions', async () => {
			// Focus to show tooltip
			await userEvent.click(trigger);
			await expect(trigger).toHaveFocus();
			await waitFor(async () => {
				const tooltip = await canvas.findByRole('tooltip');
				await expect(tooltip).toBeVisible();
			});
		});
	},
};

export const LargeWithAutoClose: Story = {
	args: {
		label: 'I will automatically close after 5 seconds',
		closeAfter: 5e3,
		size: 'large',
		wrapper: true,
	},
};

export const WithLongText: Story = {
	args: {
		label: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
		alignment: EAlignment.TOP,
		wrapper: true,
	},
};

export const WithMultipleChildren: Story = {
	args: {
		label: 'This tooltip works with multiple children! Best to use a wrapper',
		alignment: EAlignment.BOTTOM,
		testId: 'trigger',
		children: (
			<>
				<Inline>
					<Text>Inline child</Text>
					<Text>Inline child</Text>
				</Inline>
				<Text>Second child element</Text>
			</>
		),
		wrapper: true,
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const triggerElement = canvas.getByTestId('trigger');

		await step('Test hover and mouse leave', async () => {
			// Hover to show
			await userEvent.hover(triggerElement);
			await waitFor(async () => {
				const tooltip = await canvas.findByRole('tooltip');
				await expect(tooltip).toBeVisible();
			});

			// Mouse leave to hide
			await userEvent.unhover(triggerElement);
			await waitFor(async () => {
				// The tooltip has a 500ms leave delay in the component
				// so we wait a bit longer to ensure it's gone
				await new Promise((resolve) => setTimeout(resolve, 600));
				const tooltipAfterDelay = canvas.queryByRole('tooltip');
				await expect(tooltipAfterDelay).not.toBeInTheDocument();
			});
		});

		// Reset focus to body to ensure Tab focuses the trigger next
		document.body.focus();

		await step('Test keyboard focus (Tab) and blur', async () => {
			// Tab to focus and show
			await userEvent.tab();
			await expect(triggerElement).toHaveFocus();
			await waitFor(async () => {
				const tooltip = await canvas.findByRole('tooltip');
				await expect(tooltip).toBeVisible();
			});
		});
	},
};

export const OnButton: Story = {
	args: {
		label: 'This tooltip appears on an interactive button',
		alignment: EAlignment.TOP,
		children: <Button>Hover or focus me</Button>,
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');

		await step('Test button hover interaction', async () => {
			// Hover to show tooltip
			await userEvent.hover(button);
			await waitFor(async () => {
				const tooltip = await canvas.findByRole('tooltip');
				await expect(tooltip).toBeVisible();
				await expect(tooltip).toHaveTextContent(
					'This tooltip appears on an interactive button',
				);
			});

			// Mouse leave to hide
			await userEvent.unhover(button);
			await waitFor(async () => {
				await new Promise((resolve) => setTimeout(resolve, 600));
				const tooltipAfterDelay = canvas.queryByRole('tooltip');
				await expect(tooltipAfterDelay).not.toBeInTheDocument();
			});
		});

		// Reset focus to body to ensure Tab focuses the trigger next
		document.body.focus();

		await step('Test button focus interaction', async () => {
			// Focus to show tooltip
			await userEvent.tab();
			await expect(button).toHaveFocus();
			await waitFor(async () => {
				const tooltip = await canvas.findByRole('tooltip');
				await expect(tooltip).toBeVisible();
			});

			// Blur to hide (by clicking elsewhere)
			await userEvent.click(canvasElement);
			await waitFor(async () => {
				await new Promise((resolve) => setTimeout(resolve, 600));
				const tooltipAfterDelay = canvas.queryByRole('tooltip');
				await expect(tooltipAfterDelay).not.toBeInTheDocument();
			});
		});
	},
};

export const OnTextInput: Story = {
	args: {
		label: 'This tooltip provides helpful input guidance',
		alignment: EAlignment.TOP,
		children: (
			<TextInput
				name="example-input"
				placeholder="Type something here..."
			/>
		),
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox');

		await step('Test input hover interaction', async () => {
			// Hover to show tooltip
			await userEvent.hover(input);
			await waitFor(async () => {
				const tooltip = await canvas.findByRole('tooltip');
				await expect(tooltip).toBeVisible();
				await expect(tooltip).toHaveTextContent(
					'This tooltip provides helpful input guidance',
				);
			});

			// Mouse leave to hide
			await userEvent.unhover(input);
			await waitFor(async () => {
				await new Promise((resolve) => setTimeout(resolve, 600));
				const tooltipAfterDelay = canvas.queryByRole('tooltip');
				await expect(tooltipAfterDelay).not.toBeInTheDocument();
			});
		});

		await step('Test input focus interaction', async () => {
			// Focus to show tooltip
			await userEvent.click(input);
			await expect(input).toHaveFocus();
			await waitFor(async () => {
				const tooltip = await canvas.findByRole('tooltip');
				await expect(tooltip).toBeVisible();
			});
		});

		await step('Test input functionality is preserved', async () => {
			// Ensure input is still functional
			await userEvent.type(input, 'Test input');
			await expect(input).toHaveValue('Test input');

			// Clear for next test
			await userEvent.clear(input);
			await expect(input).toHaveValue('');
		});

		await step('Test blur to hide tooltip', async () => {
			// Click elsewhere to blur and hide tooltip
			await userEvent.click(canvasElement);
			await waitFor(async () => {
				await new Promise((resolve) => setTimeout(resolve, 600));
				const tooltipAfterDelay = canvas.queryByRole('tooltip');
				await expect(tooltipAfterDelay).not.toBeInTheDocument();
			});
		});
	},
};
