import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { expect, fn, userEvent, within } from 'storybook/test';

import { FilterChip } from './FilterChip';

const meta = {
	title: 'Components/FilterChip',
	component: FilterChip,
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

type Story = StoryObj<typeof FilterChip>;

const row = (story: () => React.ReactNode) => (
	<div
		style={{
			alignItems: 'center',
			display: 'flex',
			flexWrap: 'wrap',
			gap: '12px',
		}}
	>
		{story()}
	</div>
);

export const Standard: Story = {};

/** All four chip shapes side by side. */
export const Types: Story = {
	decorators: [row],
	render: (args) => (
		<>
			<FilterChip {...args} type="select" />
			<FilterChip
				{...args}
				type="numeric"
				label="Usage (km):"
				operator="over"
				value="100,000 km"
			/>
			<FilterChip {...args} type="simple" label="Truck" value={undefined} />
			<FilterChip {...args} type="add" label="Add Filter" />
		</>
	),
};

/** `selected` inverts the surface to mark an applied filter. */
export const Selected: Story = {
	decorators: [row],
	render: (args) => (
		<>
			<FilterChip {...args} type="select" selected />
			<FilterChip
				{...args}
				type="numeric"
				label="Usage (km):"
				operator="over"
				value="100,000 km"
				selected
			/>
			<FilterChip
				{...args}
				type="simple"
				label="Truck"
				value={undefined}
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
 * A chip that owns a popover reports `aria-expanded` instead of
 * `aria-pressed`, so it is announced as a disclosure.
 */
export const Expanded: Story = {
	args: {
		expanded: true,
	},
};

/** Filter bars wrap rather than scroll or stack. */
export const FilterBar: Story = {
	decorators: [row],
	render: (args) => (
		<>
			<FilterChip {...args} type="select" selected />
			<FilterChip
				{...args}
				type="numeric"
				label="Usage (km):"
				operator="over"
				value="100,000 km"
			/>
			<FilterChip {...args} type="simple" label="Serviced" value={undefined} />
			<FilterChip {...args} label="State:" value="QLD" />
			<FilterChip {...args} type="add" label="Add Filter" />
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

		await step('exposes the unselected state to assistive tech', async () => {
			await expect(body).toHaveAttribute('aria-pressed', 'false');
		});

		await step('activates the chip body on click', async () => {
			await userEvent.click(body);
			await expect(args.onClick).toHaveBeenCalled();
		});

		await step('removes the filter without activating the body', async () => {
			await userEvent.click(remove);
			await expect(args.onRemove).toHaveBeenCalled();
			await expect(args.onClick).toHaveBeenCalledTimes(1);
		});

		await step('renders the close icon at the specified 18px', async () => {
			// Icon's own size class is unlayered, so this guards the override
			// in FilterChip.css.ts rather than the design value itself.
			const svg = remove.querySelector('svg');
			await expect(svg).not.toBeNull();
			await expect(svg?.getBoundingClientRect().width).toBe(18);
		});

		await step('reaches both actions by keyboard', async () => {
			body.focus();
			await expect(body).toHaveFocus();
			await userEvent.tab();
			await expect(remove).toHaveFocus();
		});
	},
};
