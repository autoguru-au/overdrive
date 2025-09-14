import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { expect, userEvent, within } from 'storybook/test';

import { textStyles } from '../../styles/typography';
import { Slider } from '../Slider';
import { Stack } from '../Stack';

const meta = {
	title: 'Forms & Input Fields/Slider',
	tags: ['beta'],
	component: Slider,
	parameters: {
		controls: {
			include: [
				'label',
				'minValue',
				'maxValue',
				'step',
				'unitText',
				'showValue',
				'showStepButtons',
				'isDisabled',
				'orientation',
			],
		},
	},
	args: {
		label: undefined,
		step: 5,
		minValue: 5,
		maxValue: 50,
		unitText: '',
		defaultValue: undefined,
		value: undefined,
		name: 'demo-slider',
		id: undefined,
		onChange: undefined,
		isDisabled: false,
		testId: 'test-slider-component',
	},
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof Slider>;

/**
 * The basic slider allows users to select a single value from a range
 */
export const Standard: Story = {
	args: {
		label: 'Distance',
		defaultValue: 30,
		unitText: 'kms',
	},
};

/**
 * Slider with various unit post-fix examples and disabled state
 */
export const Variants: Story = {
	render: () => (
		<Stack space="8">
			<Slider
				label="Value with units"
				name="demo-distance-slider"
				minValue={5}
				maxValue={50}
				defaultValue={30}
				unitText="kms"
			/>
			<Slider
				label={
					<label
						className={textStyles({
							size: '4',
							weight: 'semiBold',
						})}
					>
						Decimal (custom styled label)
					</label>
				}
				name="demo-decimal-slider"
				minValue={1}
				maxValue={10}
				defaultValue={5.5}
				step={0.5}
			/>
			<div>
				<Slider
					label="Percentage"
					name="demo-percentage-slider"
					minValue={0}
					maxValue={100}
					defaultValue={25}
					unitText="%"
					step={1}
				/>
			</div>
			<Slider
				label="Disabled"
				name="demo-disabled-slider"
				minValue={5}
				maxValue={50}
				defaultValue={5}
				unitText="kms"
				isDisabled
			/>
		</Stack>
	),
};

/**
 * Keyboard and mouse interaction tests
 */
export const Interactions: Story = {
	render: () => (
		<Stack space="8">
			<Stack space="3">
				<Slider
					label="Distance from location"
					minValue={0}
					maxValue={50}
					defaultValue={15}
					unitText="kms"
					step={5}
					aria-describedby="distance-description"
				/>
			</Stack>
		</Stack>
	),
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const slider = canvas.getAllByRole('slider', { name: /distance/i })[0];

		await step('Verify initial state', async () => {
			await expect(slider).toBeInTheDocument();
			await expect(canvas.getAllByText('15kms')[0]).toBeInTheDocument();
			// Test that slider is accessible and focusable
			await expect(slider).toHaveAttribute('type', 'range');
		});

		await step('Focus slider and test keyboard accessibility', async () => {
			await userEvent.click(slider!);
			await expect(slider).toHaveFocus();
		});

		await step('Test arrow key navigation (step increments)', async () => {
			// Test right arrow - should increment by step (5)
			await userEvent.keyboard('{ArrowRight}');
			await expect(canvas.getAllByText('20kms')[0]).toBeInTheDocument();

			// Test left arrow - should decrement by step (5)
			await userEvent.keyboard('{ArrowLeft}');
			await expect(canvas.getAllByText('15kms')[0]).toBeInTheDocument();
		});

		await step('Test boundary keys', async () => {
			// Test Home key - should jump to minimum (0)
			await userEvent.keyboard('{Home}');
			await expect(canvas.getAllByText('0kms')[0]).toBeInTheDocument();

			// Test End key - should jump to maximum (50)
			await userEvent.keyboard('{End}');
			await expect(canvas.getAllByText('50kms')[0]).toBeInTheDocument();
		});
	},
};
