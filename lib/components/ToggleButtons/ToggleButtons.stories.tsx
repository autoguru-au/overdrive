import { MapPinOutlineIcon, StoreOutlineIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { expect, fn, userEvent, within } from 'storybook/test';

import { Icon } from '../Icon/Icon';

import { ToggleButtons, ToggleButton } from './ToggleButtons';

const ICON_SIZE = 'medium' as const;

const meta = {
	title: 'Primitives/Toggle Buttons',
	component: ToggleButtons,
	args: {
		defaultSelectedKeys: ['confirm'],
		disallowEmptySelection: true,
		onSelectionChange: fn(),
	},
} satisfies Meta<typeof ToggleButtons>;

export default meta;

type Story = StoryObj<typeof ToggleButtons>;

// Standard text buttons matching the design mockup
export const Standard: Story = {
	render: (args) => {
		return (
			<ToggleButtons {...args}>
				<ToggleButton id="confirm">Confirm</ToggleButton>
				<ToggleButton id="decline">Decline</ToggleButton>
				<ToggleButton id="change-date">Change date</ToggleButton>
			</ToggleButtons>
		);
	},
	// play: async ({ canvasElement }) => {
	// 	const canvas = within(canvasElement);
	// 	const user = userEvent.setup();

	// 	// Initially "Change date" should be selected
	// 	await expect(canvas.getAllByRole('button')[2]).toHaveAttribute(
	// 		'aria-pressed',
	// 		'true',
	// 	);

	// 	// Click "Confirm" to change selection
	// 	await user.click(canvas.getAllByRole('button')[0]);
	// 	await expect(canvas.getAllByRole('button')[0]).toHaveAttribute(
	// 		'aria-pressed',
	// 		'true',
	// 	);
	// 	await expect(canvas.getAllByRole('button')[2]).toHaveAttribute(
	// 		'aria-pressed',
	// 		'false',
	// 	);
	// },
};

// Icon-only buttons matching the design mockup
export const IconOnly: Story = {
	render: (args) => {
		return (
			<ToggleButtons {...args} defaultSelectedKeys={['list']} iconOnly>
				<ToggleButton id="list" aria-label="list view">
					<Icon icon={StoreOutlineIcon} size={ICON_SIZE} />
				</ToggleButton>
				<ToggleButton id="location" aria-label="map view">
					<Icon icon={MapPinOutlineIcon} size={ICON_SIZE} />
				</ToggleButton>
			</ToggleButtons>
		);
	},
};

export const Examples: Story = {
	render: () => {
		return (
			<div>
				<div>
					<h3>Long Content</h3>
					<ToggleButtons
						defaultSelectedKeys={['comprehensive']}
						onSelectionChange={fn()}
					>
						<ToggleButton id="comprehensive">
							Comprehensive Analysis Report
						</ToggleButton>
						<ToggleButton id="summary">
							Executive Summary Only
						</ToggleButton>
						<ToggleButton id="custom">
							Custom Configuration Options
						</ToggleButton>
					</ToggleButtons>
				</div>

				<div>
					<h3>Disabled</h3>
					<ToggleButtons
						isDisabled
						defaultSelectedKeys={['md']}
						onSelectionChange={fn()}
					>
						<ToggleButton id="xs">Extra Small</ToggleButton>
						<ToggleButton id="sm">Small</ToggleButton>
						<ToggleButton id="md">Medium</ToggleButton>
						<ToggleButton id="lg">Large</ToggleButton>
						<ToggleButton id="xl">Extra Large</ToggleButton>
					</ToggleButtons>
				</div>
			</div>
		);
	},
};

export const InteractionTest: Story = {
	args: {},
	render: (args) => {
		return (
			<ToggleButtons
				{...args}
				defaultSelectedKeys={['home']}
				onSelectionChange={fn()}
				aria-label="Navigation"
			>
				<ToggleButton key="home" id="home" aria-label="Home page">
					Home
				</ToggleButton>
				<ToggleButton key="about" id="about" aria-label="About page">
					About
				</ToggleButton>
				<ToggleButton
					key="contact"
					id="contact"
					aria-label="Contact page"
				>
					Contact
				</ToggleButton>
			</ToggleButtons>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const user = userEvent.setup();

		// Test keyboard navigation
		const buttons = canvas.getAllByRole('button');
		await user.tab(); // Focus first button
		await expect(buttons[0]).toHaveFocus();

		// Test arrow key navigation
		await user.keyboard('{ArrowRight}');
		await expect(buttons[1]).toHaveFocus();

		await user.keyboard('{ArrowRight}');
		await expect(buttons[2]).toHaveFocus();

		// Test Home/End keys
		await user.keyboard('{Home}');
		await expect(buttons[0]).toHaveFocus();

		await user.keyboard('{End}');
		await expect(buttons[2]).toHaveFocus();
	},
};
