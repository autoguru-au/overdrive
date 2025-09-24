import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from '@storybook/test';
import React, { useState } from 'react';

import { ToggleButtons, ToggleButton } from './ToggleButtons';

// Mock icons for the stories (replace with actual icons from your icon library)
const ListIcon = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
		<rect x="2" y="3" width="2" height="2" />
		<rect x="6" y="3" width="8" height="2" />
		<rect x="2" y="7" width="2" height="2" />
		<rect x="6" y="7" width="8" height="2" />
		<rect x="2" y="11" width="2" height="2" />
		<rect x="6" y="11" width="8" height="2" />
	</svg>
);

const LocationIcon = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
		<path d="M8 0C5.243 0 3 2.243 3 5c0 3.5 5 11 5 11s5-7.5 5-11c0-2.757-2.243-5-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z" />
	</svg>
);

const meta = {
	title: 'Forms/ToggleButtons',
	component: ToggleButtons,
	args: {},
	argTypes: {
		size: {
			control: { type: 'radio' },
			options: ['small', 'medium', 'large'],
		},
		stretch: {
			control: { type: 'boolean' },
		},
		isDisabled: {
			control: { type: 'boolean' },
		},
	},
	decorators: [
		(Story) => (
			<div style={{ padding: '20px', maxWidth: '600px' }}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof ToggleButtons>;

export default meta;

type Story = StoryObj<typeof ToggleButtons>;

// Standard text buttons matching the design mockup
export const Standard: Story = {
	render: (args) => {
		const [selected, setSelected] = useState<Set<string>>(
			new Set(['change-date']),
		);

		return (
			<ToggleButtons
				{...args}
				selectedKeys={selected}
				onSelectionChange={(keys) =>
					setSelected(new Set(keys as string[]))
				}
			>
				<ToggleButton key="confirm">Confirm</ToggleButton>
				<ToggleButton key="decline">Decline</ToggleButton>
				<ToggleButton key="change-date">Change date</ToggleButton>
			</ToggleButtons>
		);
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const user = userEvent.setup();

		// Initially "Change date" should be selected
		await expect(canvas.getAllByRole('button')[2]).toHaveAttribute(
			'aria-pressed',
			'true',
		);

		// Click "Confirm" to change selection
		await user.click(canvas.getAllByRole('button')[0]);
		await expect(canvas.getAllByRole('button')[0]).toHaveAttribute(
			'aria-pressed',
			'true',
		);
		await expect(canvas.getAllByRole('button')[2]).toHaveAttribute(
			'aria-pressed',
			'false',
		);
	},
};

// Icon-only buttons matching the design mockup
export const IconOnly: Story = {
	render: (args) => {
		const [selected, setSelected] = useState<Set<string>>(
			new Set(['location']),
		);

		return (
			<ToggleButtons
				{...args}
				selectedKeys={selected}
				onSelectionChange={(keys) =>
					setSelected(new Set(keys as string[]))
				}
			>
				<ToggleButton key="list" aria-label="List view">
					<ListIcon />
				</ToggleButton>
				<ToggleButton key="location" aria-label="Location view">
					<LocationIcon />
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

// Size variants
export const Sizes: Story = {
	render: () => {
		const [selectedSmall, setSelectedSmall] = useState<Set<string>>(
			new Set(['small1']),
		);
		const [selectedMedium, setSelectedMedium] = useState<Set<string>>(
			new Set(['medium1']),
		);
		const [selectedLarge, setSelectedLarge] = useState<Set<string>>(
			new Set(['large1']),
		);

		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '24px',
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
						Small
					</h3>
					<ToggleButtons
						size="small"
						selectedKeys={selectedSmall}
						onSelectionChange={(keys) =>
							setSelectedSmall(new Set(keys as string[]))
						}
					>
						<ToggleButton key="small1">First</ToggleButton>
						<ToggleButton key="small2">Second</ToggleButton>
						<ToggleButton key="small3">Third</ToggleButton>
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
						Medium
					</h3>
					<ToggleButtons
						size="medium"
						selectedKeys={selectedMedium}
						onSelectionChange={(keys) =>
							setSelectedMedium(new Set(keys as string[]))
						}
					>
						<ToggleButton key="medium1">First</ToggleButton>
						<ToggleButton key="medium2">Second</ToggleButton>
						<ToggleButton key="medium3">Third</ToggleButton>
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
						Large
					</h3>
					<ToggleButtons
						size="large"
						selectedKeys={selectedLarge}
						onSelectionChange={(keys) =>
							setSelectedLarge(new Set(keys as string[]))
						}
					>
						<ToggleButton key="large1">First</ToggleButton>
						<ToggleButton key="large2">Second</ToggleButton>
						<ToggleButton key="large3">Third</ToggleButton>
					</ToggleButtons>
				</div>
			</div>
		);
	},
};

// Stretch variant
export const Stretch: Story = {
	args: {
		stretch: true,
	},
	render: (args) => {
		const [selected, setSelected] = useState<Set<string>>(
			new Set(['option2']),
		);

		return (
			<ToggleButtons
				{...args}
				selectedKeys={selected}
				onSelectionChange={(keys) =>
					setSelected(new Set(keys as string[]))
				}
			>
				<ToggleButton key="option1">Option 1</ToggleButton>
				<ToggleButton key="option2">Option 2</ToggleButton>
				<ToggleButton key="option3">Option 3</ToggleButton>
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
		const [selected, setSelected] = useState<Set<string>>(
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
						onSelectionChange={(keys) =>
							setSelected(new Set(keys as string[]))
						}
					>
						<ToggleButton key="option1">Option 1</ToggleButton>
						<ToggleButton key="option2">Option 2</ToggleButton>
						<ToggleButton key="option3">Option 3</ToggleButton>
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
						onSelectionChange={(keys) =>
							setSelected(new Set(keys as string[]))
						}
					>
						<ToggleButton key="option1">Option 1</ToggleButton>
						<ToggleButton key="option2" isDisabled>
							Option 2 (Disabled)
						</ToggleButton>
						<ToggleButton key="option3">Option 3</ToggleButton>
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
		const [selected, setSelected] = useState<Set<string>>(
			new Set(['home']),
		);

		return (
			<ToggleButtons
				{...args}
				selectedKeys={selected}
				onSelectionChange={(keys) =>
					setSelected(new Set(keys as string[]))
				}
				aria-label="Navigation"
			>
				<ToggleButton key="home" aria-label="Home page">
					Home
				</ToggleButton>
				<ToggleButton key="about" aria-label="About page">
					About
				</ToggleButton>
				<ToggleButton key="contact" aria-label="Contact page">
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
