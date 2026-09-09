import type { Meta, StoryObj } from '@storybook/react-vite';
import clsx from 'clsx';
import React, { useState } from 'react';
import { expect, fn } from 'storybook/test';

import {
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
import { Badge } from '../Badge/Badge';
import { Box } from '../Box/Box';
import { Heading } from '../Heading/Heading';
import { StarRating } from '../StarRating/StarRating';
import { Text } from '../Text/Text';

import { CheckBox, type CheckboxProps } from './CheckBox';
import { storyForceHover } from './CheckBox.css';

type CheckBoxSize = NonNullable<CheckboxProps['size']>;

const listData: Array<{ label: string; value: string }> = [
	{ label: 'Avocado', value: 'avocado' },
	{ label: 'Blueberries', value: 'blueberries' },
	{ label: 'Cherries', value: 'cherries' },
	{ label: 'Coconut', value: 'coconut' },
	{ label: 'Strawberries', value: 'strawberries' },
];

const meta: Meta<typeof CheckBox> = {
	title: 'Forms & Input Fields/CheckBox',
	component: CheckBox,
	tags: [],
	decorators: [
		// The narrow well is what makes the label-wrapping stories legible; the
		// state matrix is a six-column grid and needs the full canvas.
		(Story, { parameters }) =>
			parameters.fullWidth ? (
				<Story />
			) : (
				<div style={{ maxWidth: '500px', width: '100%' }}>
					<Story />
				</div>
			),
	],
	args: {
		name: 'demo-checkbox',
		children: 'Check me!',
		value: '1',
		isIndeterminate: false,
		disabled: undefined,
		size: 'medium',
		onChange: fn(),
		onClick: fn(),
	},
	// This meta takes its controls from `args` rather than from docgen, so a
	// prop absent from `args` above gets no control at all.
	argTypes: {
		size: {
			control: 'select',
			options: ['medium', 'small'],
			description: 'Box size, per the DS-2026 selection-control spec.',
		},
	},
	render: ({ isIndeterminate, ...args }) => {
		const [checked, setChecked] = useState(false);
		const [hasIndeterminate, setHasIndeterminate] =
			useState(isIndeterminate);
		const [lastArg, setLastArg] = useState(isIndeterminate);

		// Resync when the control changes, without an effect.
		if (lastArg !== isIndeterminate) {
			setLastArg(isIndeterminate);
			setHasIndeterminate(isIndeterminate);
		}

		return (
			<CheckBox
				{...args}
				isIndeterminate={hasIndeterminate}
				checked={checked}
				onClick={(event) => {
					if (isIndeterminate) setHasIndeterminate(false);
					args.onClick?.(event);
				}}
				onChange={(checked) => {
					setChecked(checked);
					args.onChange?.(checked);
				}}
			/>
		);
	},
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
	play: async ({ canvas, userEvent, step }) => {
		// The autodocs page renders the primary story twice, so take the first
		// match rather than asserting there is only one.
		const [box] = canvas.getAllByRole('checkbox', { name: 'Check me!' });

		await step(
			'starts unchecked and is reachable by keyboard',
			async () => {
				await expect(box).not.toBeChecked();
				await expect(box).toBeEnabled();
			},
		);

		await step('takes its accessible name from its children', async () => {
			await expect(box).toHaveAccessibleName('Check me!');
		});

		await step('ticks on click and again on space', async () => {
			await userEvent.click(box);
			await expect(box).toBeChecked();

			box.focus();
			await userEvent.keyboard(' ');
			await expect(box).not.toBeChecked();
		});
	},
};

/* -------------------------------------------------------------------------
 * The DS-2026 state matrix
 * ---------------------------------------------------------------------- */

/**
 * Every row Figma publishes.
 *
 * Indeterminate is included even though the Figma spec has no frame for it: the
 * omission was an oversight rather than a removal, confirmed with design, and
 * the spec is being backfilled. It renders as the selected fill carrying a minus
 * rather than a tick.
 */
const STATES: Array<{
	label: string;
	props: Partial<CheckboxProps>;
	code(size: CheckBoxSize): string;
}> = [
	{ label: 'Default', props: {}, code: (size) => `size="${size}"` },
	{ label: 'Hover', props: {}, code: () => ':hover' },
	{ label: 'Selected', props: { checked: true }, code: () => 'checked' },
	{
		label: 'Indeterminate',
		props: { isIndeterminate: true },
		code: () => 'isIndeterminate',
	},
	{ label: 'Disabled', props: { disabled: true }, code: () => 'disabled' },
	{
		label: 'Disabled selected',
		props: { checked: true, disabled: true },
		code: () => 'checked disabled',
	},
];

const SIZES: Array<{
	size: CheckBoxSize;
	dimensions: string;
	tag?: string;
}> = [
	{ size: 'medium', dimensions: '20 × 20', tag: 'default' },
	{ size: 'small', dimensions: '16 × 16' },
];

const COL = ['Size', 'Px', 'State', 'Preview', 'Props', 'Tag'];

const EmptyCell = () => <span className={small} aria-hidden="true" />;

/**
 * Both sizes across every state in the Figma spec.
 *
 * The Hover row forces its own appearance through `storyForceHover`, so the
 * state Chromatic cannot otherwise reach is still snapshot.
 *
 * Both sizes keep the same 48px row and hit area: only the box shrinks, so a
 * `small` checkbox stays above the WCAG 2.5.8 target minimum.
 */
export const AllStates: Story = {
	parameters: { controls: { disable: true }, fullWidth: true },
	render: () => (
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
							{/* No children, so the box stands alone — hence the explicit name. */}
							<CheckBox
								{...props}
								size={size}
								value={label}
								name={`matrix-${size}-${label}`}
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
	play: async ({ canvas, step }) => {
		// Named `<size> <state>`, which no other story's box is — so these
		// queries still find only the matrix on the combined autodocs page.
		const boxes = canvas.getAllByRole('checkbox', {
			name: /^(medium|small) /,
		});

		await step('renders every state at both sizes', async () => {
			await expect(boxes).toHaveLength(STATES.length * SIZES.length);
		});

		await step('sizes the box per the spec', async () => {
			const [box] = boxes;

			await expect(
				box.parentElement?.querySelector('[data-size]'),
			).toHaveAttribute('data-size', 'medium');
		});

		await step('marks the selected states with the accent', async () => {
			const selected = canvas.getByRole('checkbox', {
				name: 'medium Selected',
			});

			await expect(
				selected.parentElement?.querySelector('[data-size]'),
			).toHaveAttribute('data-active');
		});
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		children: "Can't check me",
	},
};

/**
 * The indeterminate checkbox will typically be set by the parent component in a form with nested checkboxes.
 * The indeterminate prop cannot be set by the component itself. This example uses an `onClick` handler to toggle
 * the checked state when the indeterminate checkbox is clicked, the checkbox does not natively have this behaviour.
 */
export const Indeterminate: Story = {
	args: {
		isIndeterminate: true,
		children: 'Not sure',
	},
};

export const List: Story = {
	render: ({ disabled, onChange }) => {
		const [selected, setSelected] = useState<Record<string, boolean>>(
			() => ({
				avocado: true,
				blueberries: true,
				cherries: false,
				coconut: true,
				strawberries: false,
			}),
		);

		const handleChange = (checked: boolean, value: string) => {
			setSelected((prev) => ({
				...prev,
				[value]: checked,
			}));
			onChange?.(checked);
		};

		return (
			<>
				{listData.map((item) => (
					<CheckBox
						key={item.value}
						disabled={disabled}
						value={item.value}
						name={`checkbox-${item.value}`}
						checked={selected[item.value]}
						onChange={(checked) =>
							handleChange(checked, item.value)
						}
					>
						{item.label}
					</CheckBox>
				))}
			</>
		);
	},
	args: {
		disabled: false,
	},
};

export const MultipleLines: Story = {
	args: {
		checked: false,
		disabled: false,
		children:
			'There is a very good reason why this thing is a multi-line, sometimes we need to show people a lot of things. And thus this exists.',
		value: '1',
	},
};

const Item = ({ label, rating }: { label: string; rating: number }) => (
	<div
		style={{
			display: 'grid',
			gridGap: '8px',
			gridTemplateColumns: '1fr auto',
		}}
	>
		<Text>{label}</Text>
		<StarRating rating={rating} />
	</div>
);

export const WithComponent: Story = {
	args: {
		checked: false,
		disabled: false,
		children: <Item label="Avocados" rating={4.3} />,
		value: '1',
	},
};

export const WithMultiLineComponent: Story = {
	args: {
		checked: false,
		disabled: false,
		children: (
			<div
				style={{
					display: 'grid',
					gridGap: '8px',
					gridTemplateColumns: '1fr auto auto',
				}}
			>
				<Heading as="h5">Your last order</Heading>
				<Badge colour="neutral" label="SUBSCRIBE" />
				<Badge colour="neutral" label="AUTO TOP-UP" />
				<div
					style={{
						gridColumn: '1/4',
						display: 'grid',
						gridGap: '8px',
						gridTemplateColumns: '1fr auto',
					}}
				>
					<Text size="2">Ending in 5678</Text>
					<Text size="2">Updated 12 Dec 2018</Text>
				</div>
			</div>
		),
		value: '1',
	},
};
