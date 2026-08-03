import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { expect, fn, userEvent, within } from 'storybook/test';

import { Box } from '../Box/Box';
import { FlexInline } from '../Flex/FlexInline';

import { FilterChip } from './FilterChip';

const meta = {
	title: 'Components/FilterChip',
	component: FilterChip,
	tags: ['new'],
	args: {
		label: 'Vehicle type:',
		value: 'Truck',
		onClick: fn(),
		onRemove: fn(),
	},
	argTypes: {
		type: {
			control: 'select',
			options: ['select', 'numeric', 'simple', 'add'],
		},
	},
} satisfies Meta<typeof FilterChip>;

export default meta;

type Story = StoryObj<typeof meta>;

const row = (story: () => React.ReactNode) => (
	<FlexInline align="center" gap="3">
		{story()}
	</FlexInline>
);

/**
 * `FilterChipProps` is a discriminated union, so a story that renders several
 * shapes at once cannot spread `args` — the spread is the whole union and does
 * not narrow to the `type` beside it. These stories take just the handlers from
 * `args`, which is all the interaction assertions need, and state the rest.
 */
const handlers = ({
	onClick,
	onRemove,
}: {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	onRemove?: React.MouseEventHandler<HTMLButtonElement>;
}) => ({ onClick, onRemove });

export const Standard: Story = {};

/** All four chip shapes side by side. */
export const Types: Story = {
	decorators: [row],
	render: (args) => (
		<>
			<FilterChip
				{...handlers(args)}
				type="select"
				label="Vehicle type:"
				value="Truck"
			/>
			<FilterChip
				{...handlers(args)}
				type="numeric"
				label="Usage (km):"
				operator="over"
				value="100,000 km"
			/>
			<FilterChip {...handlers(args)} type="simple" label="Truck" />
			<FilterChip
				onClick={args.onClick ?? (() => {})}
				type="add"
				label="Add Filter"
			/>
		</>
	),
};

/** `selected` inverts the surface to mark an applied filter. */
export const Selected: Story = {
	decorators: [row],
	render: (args) => (
		<>
			<FilterChip
				{...handlers(args)}
				type="select"
				label="Vehicle type:"
				value="Truck"
				selected
			/>
			<FilterChip
				{...handlers(args)}
				type="numeric"
				label="Usage (km):"
				operator="over"
				value="100,000 km"
				selected
			/>
			<FilterChip
				{...handlers(args)}
				type="simple"
				label="Truck"
				selected
			/>
		</>
	),
};

/** Without `onRemove` the trailing `×` is not rendered. */
export const WithoutRemove: Story = {
	args: {
		onRemove: undefined,
	},
};

/** Without `onClick` or `onRemove` the chip renders as static text. */
export const NonInteractive: Story = {
	args: {
		onClick: undefined,
		onRemove: undefined,
	},
};

/**
 * A chip that owns a popover reports `aria-expanded` and `aria-haspopup`, so it
 * is announced as a disclosure. Pair it with `aria-controls` and the forwarded
 * `ref`, which is what `Popover` anchors to.
 */
export const Expanded: Story = {
	args: {
		expanded: true,
	},
};

/**
 * `pressed` is the opt-in for a chip that applies and unapplies its filter in
 * place. It is the only thing that emits `aria-pressed` — `selected` on its own
 * is a visual state, because a chip whose body opens an editor is not a toggle.
 */
export const Pressed: Story = {
	args: {
		onRemove: undefined,
		pressed: true,
		selected: true,
		type: 'simple',
		label: 'Serviced',
		value: undefined,
	},
};

/**
 * A value with nowhere to go truncates rather than widening the chip past its
 * container. The category and operator hold their width so the filter stays
 * identifiable.
 */
export const LongValue: Story = {
	decorators: [(story) => <Box maxWidth="small">{story()}</Box>],
	args: {
		type: 'numeric',
		label: 'Usage (km):',
		operator: 'over',
		value: '100,000 km since the last major logbook service was carried out',
	},
};

/** Filter bars wrap rather than scroll or stack. */
export const FilterBar: Story = {
	decorators: [row],
	render: (args) => (
		<>
			<FilterChip
				{...handlers(args)}
				type="select"
				label="Vehicle type:"
				value="Truck"
				selected
			/>
			<FilterChip
				{...handlers(args)}
				type="numeric"
				label="Usage (km):"
				operator="over"
				value="100,000 km"
			/>
			<FilterChip {...handlers(args)} type="simple" label="Serviced" />
			<FilterChip
				{...handlers(args)}
				type="select"
				label="State:"
				value="QLD"
			/>
			<FilterChip
				onClick={args.onClick ?? (() => {})}
				type="add"
				label="Add Filter"
			/>
		</>
	),
};

export const InteractionTest: Story = {
	args: {
		removeLabel: 'Remove vehicle type filter',
	},
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);
		const body = canvas.getAllByRole('button', { name: /Vehicle type/ })[0];
		const remove = canvas.getAllByRole('button', {
			name: 'Remove vehicle type filter',
		})[0];

		await step('renders the category and its value', async () => {
			await expect(body).toHaveTextContent('Vehicle type:');
			await expect(body).toHaveTextContent('Truck');
		});

		await step('is announced as a plain button, not a toggle', async () => {
			// The body opens an editor, so it is neither pressed nor unpressed.
			// Only an explicit `pressed` prop makes it a toggle.
			await expect(body).not.toHaveAttribute('aria-pressed');
		});

		await step('activates the chip body on click', async () => {
			await userEvent.click(body);
			await expect(args.onClick).toHaveBeenCalled();
		});

		await step(
			'removes the filter without activating the body',
			async () => {
				await userEvent.click(remove);
				await expect(args.onRemove).toHaveBeenCalled();
				await expect(args.onClick).toHaveBeenCalledTimes(1);
			},
		);

		await step('reaches both actions by keyboard', async () => {
			body.focus();
			await expect(body).toHaveFocus();
			await userEvent.tab();
			await expect(remove).toHaveFocus();
		});
	},
};
