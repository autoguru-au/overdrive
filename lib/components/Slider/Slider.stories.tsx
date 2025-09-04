import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { expect, userEvent, within } from 'storybook/test';

import { Slider } from './Slider';

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
		minValue: 5,
		maxValue: 50,
		step: 5,
		defaultValue: 30,
		unitText: 'kms',
	},
	argTypes: {
		orientation: {
			options: ['horizontal', 'vertical'],
			control: { type: 'radio' },
		},
		minValue: {
			control: { type: 'number' },
		},
		maxValue: {
			control: { type: 'number' },
		},
		step: {
			control: { type: 'number' },
		},
		defaultValue: {
			control: { type: 'number' },
		},
		unitText: {
			control: { type: 'text' },
		},
	},
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof Slider>;

/**
 * The basic slider allows users to select a single value from a range.
 * Matches the Figma design with value display above the track and step buttons.
 */
export const Standard: Story = {
	args: {
		label: 'Distance from location',
		defaultValue: 30,
		unitText: 'kms',
	},
};

/**
 * Different slider variants and configurations with various unit types.
 */
export const Variants: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
			<Slider
				label="Distance from location"
				minValue={0}
				maxValue={100}
				defaultValue={30}
				unitText="kms"
				step={5}
			/>
			<Slider
				label="Budget range"
				minValue={0}
				maxValue={5000}
				defaultValue={1500}
				unitText="$"
				step={100}
			/>
			<Slider
				label="Volume level"
				minValue={0}
				maxValue={100}
				defaultValue={75}
				unitText="%"
				step={1}
			/>
			<Slider
				label="Temperature setting"
				minValue={16}
				maxValue={30}
				defaultValue={22}
				unitText="°C"
				step={0.5}
			/>
		</div>
	),
};

/**
 * Interactive states and configuration options.
 */
export const InteractiveStates: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
			<Slider
				label="Normal state"
				minValue={0}
				maxValue={50}
				defaultValue={25}
				unitText="kms"
			/>
			<Slider
				label="Disabled state"
				minValue={0}
				maxValue={50}
				defaultValue={15}
				unitText="kms"
				isDisabled
			/>
		</div>
	),
};

/**
 * Accessibility features including keyboard navigation, screen reader support, and button interaction.
 */
export const Accessibility: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
			<div>
				<p
					style={{
						marginBottom: '8px',
						fontSize: '14px',
						color: '#666',
					}}
				>
					Keyboard navigation: Use Tab to focus, Arrow keys or +/-
					buttons to adjust value, Home/End for min/max
				</p>
				<Slider
					label="Distance from location"
					minValue={0}
					maxValue={50}
					defaultValue={15}
					unitText="kms"
					step={5}
					aria-describedby="distance-description"
				/>
				<p
					id="distance-description"
					style={{
						fontSize: '12px',
						color: '#888',
						marginTop: '4px',
					}}
				>
					Set your preferred search radius from your location
				</p>
			</div>
		</div>
	),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const slider = canvas.getByRole('slider', { name: /distance/i });
		const decrementButton = canvas.getByLabelText(/decrease/i);
		const incrementButton = canvas.getByLabelText(/increase/i);

		// Test keyboard navigation on slider
		await userEvent.click(slider);
		await expect(slider).toHaveFocus();

		// Test arrow key navigation
		await userEvent.keyboard('{ArrowRight}');
		await userEvent.keyboard('{ArrowLeft}');

		// Test increment/decrement buttons
		await userEvent.click(incrementButton);
		await userEvent.click(decrementButton);

		// Test Home/End keys
		await userEvent.click(slider);
		await userEvent.keyboard('{End}');
		await userEvent.keyboard('{Home}');
	},
};

// Import required testing utilities
