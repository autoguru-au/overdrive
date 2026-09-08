import type { Meta, StoryObj } from '@storybook/react-vite';
import clsx from 'clsx';
import React from 'react';
import { expect, fn, userEvent, within } from 'storybook/test';

import {
	inlineLabelRow,
	labels,
	ladderGroupStart,
	ladderPreviewCell,
	ladderRow,
	small,
	spaceLadderHeaderCell,
	switchLadderGrid,
	tokenCode,
	tokenDescription,
} from '../../stories/helpers/styles.css';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

import { Switch, type SwitchProps } from './Switch';
import { storyForceHover } from './Switch.css';

const meta = {
	title: 'Forms & Input Fields/Switch',
	component: Switch,
	tags: [],
	args: {
		name: 'switch',
		value: 'yes',
		isSelected: undefined,
		isDisabled: undefined,
		onChange: fn(),
	},
	argTypes: {
		children: { control: false },
		isSelected: {
			control: 'boolean',
		},
		size: {
			control: 'inline-radio',
			options: ['medium', 'small'],
		},
		disabled: {
			control: false,
		},
		toggled: {
			control: false,
		},
	},
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof Switch>;

/** Passes in the text label and styles for the layout */
export const Uncontrolled: Story = {
	args: {
		children: <Text>Text description for the switch</Text>,
		className: inlineLabelRow,
		testId: 'switch',
	},
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);
		const control = canvas.getByRole('switch');

		await step('<Switch /> renders unchecked with its label', async () => {
			await expect(control).not.toBeChecked();
			await expect(canvas.getByText(/Text description/)).toBeVisible();
		});

		await step('<Switch /> turns on when clicked', async () => {
			await userEvent.click(control);
			await expect(control).toBeChecked();
			await expect(args.onChange).toHaveBeenCalledWith(true);
		});

		await step('<Switch /> turns off again', async () => {
			await userEvent.click(control);
			await expect(control).not.toBeChecked();
			await expect(args.onChange).toHaveBeenLastCalledWith(false);
		});

		await step('<Switch /> toggles from the keyboard', async () => {
			control.focus();
			await userEvent.keyboard(' ');
			await expect(control).toBeChecked();
		});
	},
};

export const DisabledIsInert: Story = {
	args: {
		isDisabled: true,
		children: <Text>Text description for the switch</Text>,
		className: inlineLabelRow,
	},
	play: async ({ args, canvasElement, step }) => {
		const control = within(canvasElement).getByRole('switch');

		await step('<Switch /> does not respond to a click', async () => {
			await expect(control).toBeDisabled();
			await userEvent.click(control, { pointerEventsCheck: 0 });
			await expect(control).not.toBeChecked();
			await expect(args.onChange).not.toHaveBeenCalled();
		});
	},
};

/** Custom label using `id` and `htmlFor` */
export const WithLabel: Story = {
	render: (args) => (
		<Box display="flex" alignItems="center" style={{ gap: '0.75rem' }}>
			<Box as="label" htmlFor={args['id']}>
				Text description for the switch
			</Box>
			<Switch {...args} />
		</Box>
	),
	args: {
		id: 'test-switch-id',
	},
};

export const Disabled: Story = {
	args: {
		isDisabled: true,
	},
};

const STATES: Array<{
	label: string;
	props: Partial<SwitchProps>;
	code(size: NonNullable<SwitchProps['size']>): string;
}> = [
	{ label: 'Default', props: {}, code: (size) => `size="${size}"` },
	{ label: 'Hover', props: {}, code: () => ':hover' },
	{
		label: 'Selected',
		props: { isSelected: true },
		code: () => 'isSelected',
	},
	{
		label: 'Disabled',
		props: { isDisabled: true },
		code: () => 'isDisabled',
	},
];

const SIZES: Array<{
	size: NonNullable<SwitchProps['size']>;
	dimensions: string;
	tag?: string;
}> = [
	{ size: 'medium', dimensions: '38 × 20', tag: 'default' },
	{ size: 'small', dimensions: '30 × 16' },
];

const COL = ['Size', 'Px', 'State', 'Preview', 'Props', 'Tag'];

const EmptyCell = () => <span className={small} aria-hidden="true" />;

export const AllStates: Story = {
	render: (args) => (
		<div className={switchLadderGrid}>
			<div className={ladderRow}>
				{COL.map((heading) => (
					<span
						className={clsx(labels, small, spaceLadderHeaderCell)}
						key={heading}
					>
						{heading}
					</span>
				))}
			</div>
			{SIZES.flatMap(({ size, dimensions, tag }, group) =>
				STATES.map(({ label, props, code }, index) => (
					<div
						className={clsx(
							ladderRow,
							group > 0 && index === 0 && ladderGroupStart,
						)}
						key={`${size}-${label}`}
					>
						{index === 0 ? (
							<span className={clsx(small, labels)}>{size}</span>
						) : (
							<EmptyCell />
						)}
						{index === 0 ? (
							<span className={small}>{dimensions}</span>
						) : (
							<EmptyCell />
						)}
						<span className={small}>{label}</span>
						<Box
							className={clsx(
								ladderPreviewCell,
								label === 'Hover' && storyForceHover,
							)}
						>
							<Switch
								{...args}
								{...props}
								size={size}
								aria-label={`${size} ${label}`}
							/>
						</Box>
						<code className={tokenCode}>{code(size)}</code>
						{index === 0 && tag ? (
							<span className={clsx(small, tokenDescription)}>
								{tag}
							</span>
						) : (
							<EmptyCell />
						)}
					</div>
				)),
			)}
		</div>
	),
	args: {
		children: undefined,
	},
};
