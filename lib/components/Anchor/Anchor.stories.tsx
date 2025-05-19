import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { argTypesExampleIcons } from '../../stories/shared/argTypes';

import { Anchor } from './Anchor';

const meta = {
	title: 'Primatives/Anchor',
	component: Anchor,
	args: {
		href: 'tel:07 5612 5347',
		//@ts-expect-error using custom argType
		icon: 'Phone',
		children: '07 5612 5347',
	},
	argTypes: {
		icon: {
			description: 'Input field Icon',
			...argTypesExampleIcons,
		},
	},
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithIcon: Story = {
	args: {
		id: 'story-anchor',
		testId: 'test-anchor',
	},
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);
		const anchor = canvas.getAllByRole('link')[0];
		const icon = canvasElement.querySelector('svg');

		await step('<Anchor /> renders content, href and ids', async () => {
			await expect(anchor).toHaveTextContent(args.children as string);
			await expect(anchor).toHaveAttribute('href', args.href);
			await expect(anchor).toHaveAttribute('id', args.id);
			await expect(anchor).toHaveAttribute('data-test-id', args.testId);
		});

		await step('<Anchor /> renders the icon', async () => {
			await expect(icon).toBeInTheDocument();
		});
	},
};
