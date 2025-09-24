import { MapPinOutlineIcon, StoreOutlineIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import type { Key } from 'react-stately';
import { expect, fn, userEvent, within } from 'storybook/test';

import { Icon } from '../Icon/Icon';

import { ToggleButtons, ToggleButton } from './ToggleButtons';

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
			<ToggleButtons
				{...args}
			>
				<ToggleButton id="confirm">
					Confirm
				</ToggleButton>
				<ToggleButton id="decline">
					Decline
				</ToggleButton>
				<ToggleButton id="change-date">
					Change date
				</ToggleButton>
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
		const [selected, setSelected] = useState<Set<Key>>(
			new Set(['location']),
		);

		return (
			<ToggleButtons
				{...args}
				selectedKeys={selected}
				onSelectionChange={(keys) => setSelected(new Set(keys))}
			>
				<ToggleButton key="list" id="list" aria-label="List view">
					<Icon icon={StoreOutlineIcon} size="large" />
				</ToggleButton>
				<ToggleButton
					key="location"
					id="location"
					aria-label="Location view"
				>
					<Icon icon={MapPinOutlineIcon} size="large" />
				</ToggleButton>
			</ToggleButtons>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const user = userEvent.setup();

		// Initially "Location" should be selected
		await expect(canvas.getAllByRole('button')[1]).toHaveAttribute(
			'aria-pressed',
			'true',
		);

		// Click "List" to change selection
		await user.click(canvas.getAllByRole('button')[0]);
		await expect(canvas.getAllByRole('button')[0]).toHaveAttribute(
			'aria-pressed',
			'true',
		);
		await expect(canvas.getAllByRole('button')[1]).toHaveAttribute(
			'aria-pressed',
			'false',
		);
	},
};

// Stretch variant (TODO: implement stretch functionality)
export const Stretch: Story = {
	args: {
		// stretch: true,
	},
	render: (args) => {
		const [selected, setSelected] = useState<Set<Key>>(
			new Set(['option2']),
		);

		return (
			<ToggleButtons
				{...args}
				selectedKeys={selected}
				onSelectionChange={(keys) => setSelected(new Set(keys))}
			>
				<ToggleButton key="option1" id="option1">
					Option 1
				</ToggleButton>
				<ToggleButton key="option2" id="option2">
					Option 2
				</ToggleButton>
				<ToggleButton key="option3" id="option3">
					Option 3
				</ToggleButton>
			</ToggleButtons>
		);
	},
};

// Disabled state
export const Disabled: Story = {
	args: {
		isDisabled: true,
	},
	render: (args) => {
		const [selected, setSelected] = useState<Set<Key>>(
			new Set(['option2']),
		);

		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '16px',
				}}
			>
				<div>
					<h3
						style={{
							marginBottom: '8px',
							fontSize: '14px',
							fontWeight: 600,
						}}
					>
						All Disabled
					</h3>
					<ToggleButtons
						{...args}
						selectedKeys={selected}
						onSelectionChange={(keys) => setSelected(new Set(keys))}
					>
						<ToggleButton key="option1" id="option1">
							Option 1
						</ToggleButton>
						<ToggleButton key="option2" id="option2">
							Option 2
						</ToggleButton>
						<ToggleButton key="option3" id="option3">
							Option 3
						</ToggleButton>
					</ToggleButtons>
				</div>

				<div>
					<h3
						style={{
							marginBottom: '8px',
							fontSize: '14px',
							fontWeight: 600,
						}}
					>
						Individual Disabled
					</h3>
					<ToggleButtons
						selectedKeys={selected}
						onSelectionChange={(keys) => setSelected(new Set(keys))}
					>
						<ToggleButton key="option1" id="option1">
							Option 1
						</ToggleButton>
						<ToggleButton key="option2" id="option2" isDisabled>
							Option 2 (Disabled)
						</ToggleButton>
						<ToggleButton key="option3" id="option3">
							Option 3
						</ToggleButton>
					</ToggleButtons>
				</div>
			</div>
		);
	},
};

// Accessibility testing
export const Accessibility: Story = {
	args: {},
	render: (args) => {
		const [selected, setSelected] = useState<Set<Key>>(new Set(['home']));

		return (
			<ToggleButtons
				{...args}
				selectedKeys={selected}
				onSelectionChange={(keys) => setSelected(new Set(keys))}
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
