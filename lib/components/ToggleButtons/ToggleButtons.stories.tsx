import { MapPinOutlineIcon, StoreOutlineIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { expect, fn, userEvent, within } from 'storybook/test';

import { Heading } from '../Heading/Heading';
import { Icon } from '../Icon/Icon';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';

import { ToggleButtons, ToggleButton } from './ToggleButtons';

const ICON_SIZE = 'medium';

const meta = {
	title: 'Primitives/Toggle Buttons',
	tags: ['new'],
	component: ToggleButtons,
	args: {
		children: undefined,
		defaultSelectedKeys: undefined,
		disallowEmptySelection: true,
		iconOnly: false,
		isDisabled: false,
		onSelectionChange: fn(),
		selectedKeys: undefined,
		testId: 'demo-toggle-buttons',
	},
	argTypes: {
		children: {
			control: false,
		},
		orientation: {
			control: false,
		},
		selectionMode: {
			control: false,
		},
		selectedKeys: {
			control: false,
		},
	},
} satisfies Meta<typeof ToggleButtons>;

export default meta;

type Story = StoryObj<typeof ToggleButtons>;

/**
 * ToggleButtons default to single selection mode.
 */
export const Standard: Story = {
	args: {
		defaultSelectedKeys: ['option2'],
	},
	render: (args) => {
		return (
			<ToggleButtons {...args}>
				<ToggleButton id="option1">Option 1</ToggleButton>
				<ToggleButton id="option2">Option 2</ToggleButton>
				<ToggleButton id="option3">Option 3</ToggleButton>
				<ToggleButton id="option4">Option 4</ToggleButton>
			</ToggleButtons>
		);
	},
};

export const IconOnly: Story = {
	args: {
		'aria-label': 'change supplier view',
		defaultSelectedKeys: ['list'],
		iconOnly: true,
	},
	render: (args) => {
		return (
			<ToggleButtons {...args}>
				<ToggleButton id="list">
					<Icon icon={StoreOutlineIcon} size={ICON_SIZE} />
					<VisuallyHidden>list view</VisuallyHidden>
				</ToggleButton>
				<ToggleButton id="location">
					<Icon icon={MapPinOutlineIcon} size={ICON_SIZE} />
					<VisuallyHidden>map view</VisuallyHidden>
				</ToggleButton>
			</ToggleButtons>
		);
	},
};

export const ExampleUse: Story = {
	render: (args) => {
		return (
			<div>
				<div>
					<Heading as="h3" size="5" mb="3" id="heading-a">
						No Default Selection
					</Heading>
					<ToggleButtons {...args} aria-labelledby="heading-a">
						<ToggleButton id="confirm">Confirm</ToggleButton>
						<ToggleButton id="decline">Decline</ToggleButton>
						<ToggleButton id="change-date">
							Change date
						</ToggleButton>
					</ToggleButtons>
				</div>

				<div>
					<Heading as="h3" size="5" mt="7" mb="3" id="heading-b">
						Long Content
					</Heading>
					<ToggleButtons
						{...args}
						aria-labelledby="heading-b"
						defaultSelectedKeys={['comprehensive']}
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
					<Heading as="h3" size="5" mt="7" mb="3" id="heading-c">
						Disabled
					</Heading>
					<ToggleButtons
						{...args}
						isDisabled
						aria-labelledby="heading-c"
						defaultSelectedKeys={['md']}
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
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const user = userEvent.setup();
		const buttons = canvas.getAllByRole('radio');

		const ariaChecked = 'aria-checked';

		await step('Verify initial state', async () => {
			// Initially "Home" should be selected
			await expect(buttons[0]).toHaveAttribute(ariaChecked, 'true');
			await expect(buttons[1]).toHaveAttribute(ariaChecked, 'false');
			await expect(buttons[2]).toHaveAttribute(ariaChecked, 'false');
		});

		await step('Test mouse interactions', async () => {
			// Click "About" to change selection
			await user.click(buttons[1]);
			await expect(buttons[1]).toHaveAttribute(ariaChecked, 'true');
			await expect(buttons[0]).toHaveAttribute(ariaChecked, 'false');
		});

		await step('Test keyboard navigation', async () => {
			// Test tab navigation to focus first button
			await expect(buttons[1]).toHaveFocus();

			// Test arrow key navigation
			await user.keyboard('{ArrowRight}');
			await expect(buttons[2]).toHaveFocus();

			await user.keyboard('{ArrowLeft}{ArrowLeft}');
			await expect(buttons[0]).toHaveFocus();
		});

		await step('Verify accessibility attributes', async () => {
			// Verify radiogroup structure
			const radiogroup = canvas.getByRole('radiogroup');
			await expect(radiogroup).toHaveAttribute(
				'aria-orientation',
				'horizontal',
			);
			await expect(radiogroup).toHaveAttribute(
				'aria-label',
				'Navigation',
			);
		});
	},
};
