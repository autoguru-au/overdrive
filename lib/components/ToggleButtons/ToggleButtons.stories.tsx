import { MapPinIcon, StorefrontIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { expect, fn, userEvent, within } from 'storybook/test';

import { Box } from '../Box';
import { Heading } from '../Heading/Heading';
import { Icon } from '../Icon/Icon';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';

import { ToggleButtons, ToggleButton } from './ToggleButtons';

const ICON_SIZE = 'medium';
const narrowColumn = { maxWidth: 180, width: '100%' } as const;
const wideContainer = { maxWidth: 720, width: '100%' } as const;

const dataOrientation = 'data-orientation';
const ariaOrientation = 'aria-orientation';

const laysOutAs = (group: HTMLElement) => {
	const buttons = group.querySelectorAll('button');
	const first = buttons[0].getBoundingClientRect();
	const second = buttons[1].getBoundingClientRect();

	return Math.abs(first.top - second.top) < 1 && second.left > first.left
		? 'row'
		: 'column';
};

const meta = {
	title: 'Primitives/Toggle Buttons',
	tags: ['new'],
	component: ToggleButtons,
	parameters: {
		// ToggleButtons accepts every Box style prop through `UseBoxProps`, which
		// buries its own API under ~50 inherited rows in the docs table
		controls: {
			include: [
				'children',
				'defaultSelectedKeys',
				'disallowEmptySelection',
				'iconOnly',
				'isDisabled',
				'onSelectionChange',
				'orientation',
				'selectedKeys',
				'selectionMode',
				'testId',
			],
		},
	},
	args: {
		children: undefined,
		defaultSelectedKeys: undefined,
		disallowEmptySelection: true,
		iconOnly: false,
		isDisabled: false,
		onSelectionChange: fn(),
		orientation: 'auto',
		selectedKeys: undefined,
		testId: 'demo-toggle-buttons',
	},
	argTypes: {
		children: {
			control: false,
		},
		orientation: {
			control: 'inline-radio',
			options: ['auto', 'horizontal', 'vertical'],
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
					<Icon icon={StorefrontIcon} size={ICON_SIZE} />
					<VisuallyHidden>list view</VisuallyHidden>
				</ToggleButton>
				<ToggleButton id="location">
					<Icon icon={MapPinIcon} size={ICON_SIZE} />
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

/**
 * `orientation` defaults to `auto`: a group stacks vertically once its own container is
 * narrower than 640px, and sits in a row above that. Pass `horizontal` or `vertical` to pin
 * the direction at any container width - useful for a compact two-option toggle in a narrow
 * column, where `auto` would otherwise stack it.
 */
export const Orientation: Story = {
	args: {
		testId: undefined,
	},
	argTypes: {
		orientation: {
			control: false,
		},
	},
	render: (args) => {
		return (
			<Stack space="7">
				<div>
					<Heading as="h6" size="5" mb="2" id="orientation-auto">
						auto
					</Heading>
					<Text size="3" colour="light">
						The default. A container narrower than 640px stacks on
						its own, so a column this size needs no prop at all.
					</Text>
					<Box style={narrowColumn} mt="3">
						<ToggleButtons
							{...args}
							aria-labelledby="orientation-auto"
							defaultSelectedKeys={['none']}
							orientation="auto"
						>
							<ToggleButton id="none">None</ToggleButton>
							<ToggleButton id="full">Full</ToggleButton>
						</ToggleButtons>
					</Box>
				</div>

				<div>
					<Heading
						as="h6"
						size="5"
						mb="2"
						id="orientation-horizontal"
					>
						horizontal
					</Heading>
					<Text size="3" colour="light">
						The same 180px column, told to stay a row. This is the
						compact None and Full toggle the prop was added for.
					</Text>
					<Box style={narrowColumn} mt="3">
						<ToggleButtons
							{...args}
							aria-labelledby="orientation-horizontal"
							defaultSelectedKeys={['none']}
							orientation="horizontal"
						>
							<ToggleButton id="none">None</ToggleButton>
							<ToggleButton id="full">Full</ToggleButton>
						</ToggleButtons>
					</Box>
				</div>

				<div>
					<Heading as="h6" size="5" mb="2" id="orientation-vertical">
						vertical
					</Heading>
					<Text size="3" colour="light">
						There is room to spare at 720px, but it stays stacked
						because that is what it was asked to do.
					</Text>
					<Box style={wideContainer} mt="3">
						<ToggleButtons
							{...args}
							aria-labelledby="orientation-vertical"
							defaultSelectedKeys={['weekly']}
							orientation="vertical"
						>
							<ToggleButton id="daily">Daily</ToggleButton>
							<ToggleButton id="weekly">Weekly</ToggleButton>
							<ToggleButton id="monthly">Monthly</ToggleButton>
						</ToggleButtons>
					</Box>
				</div>
			</Stack>
		);
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const groups = canvas.getAllByRole('radiogroup');

		await step('auto stacks in a narrow container', async () => {
			await expect(groups[0]).toHaveAttribute(dataOrientation, 'auto');
			await expect(groups[0]).toHaveAttribute(
				ariaOrientation,
				'vertical',
			);
			await expect(laysOutAs(groups[0])).toBe('column');
		});

		await step('horizontal stays a row at the same width', async () => {
			await expect(groups[1]).toHaveAttribute(
				dataOrientation,
				'horizontal',
			);
			await expect(groups[1]).toHaveAttribute(
				ariaOrientation,
				'horizontal',
			);
			await expect(laysOutAs(groups[1])).toBe('row');
		});

		await step('vertical stays stacked in a wide container', async () => {
			await expect(groups[2]).toHaveAttribute(
				dataOrientation,
				'vertical',
			);
			await expect(groups[2]).toHaveAttribute(
				ariaOrientation,
				'vertical',
			);
			await expect(laysOutAs(groups[2])).toBe('column');
		});
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
		const radiogroup = canvas.getAllByRole('radiogroup')[0];

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

		const isRow = laysOutAs(radiogroup) === 'row';

		await step('Announced axis matches the rendered one', async () => {
			await expect(radiogroup).toHaveAttribute(
				ariaOrientation,
				isRow ? 'horizontal' : 'vertical',
			);
			await expect(radiogroup).toHaveAttribute(
				'aria-label',
				'Navigation',
			);
		});

		await step('Test keyboard navigation', async () => {
			await expect(buttons[1]).toHaveFocus();

			await user.keyboard(isRow ? '{ArrowRight}' : '{ArrowDown}');
			await expect(buttons[2]).toHaveFocus();

			await user.keyboard(
				isRow ? '{ArrowLeft}{ArrowLeft}' : '{ArrowUp}{ArrowUp}',
			);
			await expect(buttons[0]).toHaveFocus();
		});
	},
};
