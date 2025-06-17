import { Meta, StoryObj } from '@storybook/react-vite';
import React, { type ComponentProps } from 'react';
import { userEvent, within, expect, waitFor } from 'storybook/test';

import { Inline } from '../Inline/Inline';
import { EAlignment } from '../Positioner/alignment';
import { Text } from '../Text/Text';

import { Tooltip } from './Tooltip';

const sizeScale: ComponentProps<typeof Text>['size'][] = ['3', '4'];

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
		label: "I'm the tooltip body",
		closeAfter: undefined,
	},
};

export const WithAutoClose: Story = {
	args: {
		label: 'I will automatically close after 5 seconds',
		closeAfter: 5e3,
	},
};

export const WithLongText: Story = {
	args: {
		label: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
		alignment: EAlignment.TOP,
	},
};

export const WithLargeTextSize: Story = {
	args: {
		label: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
		alignment: EAlignment.BOTTOM,
		size: 'large',
	},
};

export const WithMultipleChildren: Story = {
	args: {
		label: 'This tooltip works with multiple children!',
		alignment: EAlignment.LEFT,
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
