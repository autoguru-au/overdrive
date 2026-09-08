import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useEffect, useState } from 'react';
import { expect, fn } from 'storybook/test';

import { Badge } from '../Badge/Badge';
import { FlexInline } from '../Flex/FlexInline';
import { Heading } from '../Heading/Heading';
import { Stack } from '../Stack';
import { StarRating } from '../StarRating/StarRating';
import { Text } from '../Text/Text';

import { CheckBox, type CheckBoxSize } from './CheckBox';

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
		(Story) => (
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

		useEffect(() => {
			if (isIndeterminate !== hasIndeterminate) {
				setHasIndeterminate(isIndeterminate);
			}
		}, [isIndeterminate]);

		return (
			<CheckBox
				{...args}
				isIndeterminate={hasIndeterminate}
				checked={checked}
				onClick={() => {
					if (isIndeterminate) setHasIndeterminate(false);
					args.onClick?.(checked);
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
		const box = canvas.getByRole('checkbox');

		await step('starts unchecked and is reachable by keyboard', async () => {
			await expect(box).not.toBeChecked();
			await expect(box).toBeEnabled();
		});

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

/** Every row Figma publishes, less Hover — which only exists under a cursor. */
const STATES = [
	{ label: 'Default', props: {} },
	{ label: 'Selected', props: { checked: true } },
	{ label: 'Disabled', props: { disabled: true } },
	{ label: 'Disabled selected', props: { checked: true, disabled: true } },
] as const;

const SIZE_LABELS: Record<CheckBoxSize, string> = {
	medium: 'Medium — 20px box, 16px tick (default)',
	small: 'Small — 16px box, 12px tick',
};

const StateColumn = ({
	label,
	size,
	...props
}: {
	label: string;
	size: CheckBoxSize;
	checked?: boolean;
	disabled?: boolean;
}) => (
	<Stack space="2" alignItems="center">
		<Text size="2" colour="light">
			{label}
		</Text>
		{/* No children, so the box stands alone — hence the explicit name. */}
		<CheckBox
			{...props}
			size={size}
			value={label}
			name={`matrix-${size}-${label}`}
			aria-label={`${label} ${size}`}
		/>
	</Stack>
);

/**
 * Both sizes across every state in the Figma spec, states down the columns so
 * checked and unchecked sit side by side.
 *
 * **Hover is not shown** — it needs a live cursor, so it renders here only when
 * you hover a box yourself, and Chromatic cannot snapshot it. Unselected hover
 * fills with `color.selection.hoverBg` and borders in `color.selection.active`.
 *
 * Both sizes keep the same 48px row and hit area: only the box shrinks, so a
 * `small` checkbox stays above the WCAG 2.5.8 target minimum.
 */
export const Sizes: Story = {
	parameters: { controls: { disable: true } },
	render: () => (
		<Stack space="6">
			{(Object.keys(SIZE_LABELS) as CheckBoxSize[]).map((size) => (
				<Stack key={size} space="3">
					<Heading as="h4">{SIZE_LABELS[size]}</Heading>
					<FlexInline gap="5">
						{STATES.map((state) => (
							<StateColumn
								key={state.label}
								label={state.label}
								size={size}
								{...state.props}
							/>
						))}
					</FlexInline>
				</Stack>
			))}
		</Stack>
	),
	play: async ({ canvas, step }) => {
		await step('renders every state at both sizes', async () => {
			await expect(canvas.getAllByRole('checkbox')).toHaveLength(
				STATES.length * 2,
			);
		});

		const box = (name: string) =>
			canvas
				.getByRole('checkbox', { name })
				.parentElement?.querySelector('[data-size]');

		await step('sizes the box per the spec', async () => {
			await expect(box('Default medium')).toHaveAttribute(
				'data-size',
				'medium',
			);
			await expect(box('Default small')).toHaveAttribute(
				'data-size',
				'small',
			);
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

export const List = {
	render: ({ disabled, onChange }) => {
		const [selected, setSelected] = useState(() => ({
			avocado: true,
			blueberries: true,
			cherries: false,
			coconut: true,
			strawberries: false,
		}));

		const handleChange = (checked: boolean, value: string) => {
			setSelected((prev) => ({
				...prev,
				[value]: checked,
			}));
			onChange(value, checked);
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

const Item = ({ label, rating }) => (
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
		children: <Item label="Avocados" rating="4.3" />,
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
