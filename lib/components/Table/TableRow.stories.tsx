import { Meta, type StoryObj } from '@storybook/react-vite';
import React from 'react';
import { expect } from 'storybook/test';

import { DataTable } from '../DataTable/DataTable';

import { Table } from './Table';
import { TableCell } from './TableCell';
import { TableHeadCell } from './TableHeadCell';
import { TableRow } from './TableRow';
import { rowEntering } from './TableRow.css';
import { TableRowGroup } from './TableRowGroup';

const meta: Meta<typeof TableRow> = {
	title: 'Components/Table/TableRow',
	component: TableRow,
	parameters: {
		docs: {
			description: {
				component: [
					'`TableRow` is the row primitive used inside `Table` and `DataTable`.',
					'',
					'It renders as a native `<tr>` with `display: contents`, so the row participates in the parent grid layout without adding a layout box of its own. The row also opts into a staggered entrance animation via the `staggerIndex` prop.',
				].join('\n'),
			},
		},
	},
	argTypes: {
		staggerIndex: {
			control: { type: 'number', min: 0, max: 20, step: 1 },
			description:
				'Opt-in entrance animation. Pass the row index to cascade a slide-up-and-fade across rows (delay = `staggerIndex * 50ms`). Omit to disable.',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: 'undefined (no animation)' },
			},
		},
		hover: {
			control: 'boolean',
			description:
				'Controls whether hovering a cell in this row paints the hover background across the whole row. Defaults to `true`. Cells can override it with their own `hover` prop.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' },
			},
		},
		onClick: {
			action: 'click',
			description: 'Click handler fired when the row is clicked.',
			table: {
				type: { summary: 'MouseEventHandler<HTMLTableRowElement>' },
			},
		},
		className: {
			control: 'text',
			description: 'Custom className applied to the underlying `<tr>`.',
		},
		style: {
			control: 'object',
			description: 'Inline style applied to the underlying `<tr>`.',
		},
		children: { control: false },
	},
};

export default meta;

type Story = StoryObj<typeof TableRow>;

/**
 * Default, non-animated row. The row renders as a native `<tr>` with
 * `display: contents`, so its cells become direct grid children of the
 * `<table>`.
 */
export const Standard: Story = {
	args: {},
	render: (args) => (
		<Table columnTemplate="auto 1fr auto">
			<TableRowGroup>
				<TableRow>
					<TableHeadCell>ID</TableHeadCell>
					<TableHeadCell>Name</TableHeadCell>
					<TableHeadCell align="right">Price</TableHeadCell>
				</TableRow>
			</TableRowGroup>
			<TableRowGroup>
				<TableRow {...args}>
					<TableCell>100001</TableCell>
					<TableCell>My Auto Service</TableCell>
					<TableCell align="right">$99.00</TableCell>
				</TableRow>
			</TableRowGroup>
		</Table>
	),
};

/**
 * Rows and cells have hover enabled by default (`hover={true}`).
 * Pass `hover={false}` to `TableRow` to switch the hover wash off for the
 * whole row, or to an individual `TableCell` to stop that cell from
 * triggering it. A cell always wins over its row: `hover` on a cell inside a
 * `hover={false}` row paints the wash over just that cell.
 */
export const WithoutHover: Story = {
	args: {
		hover: false,
	},
	render: (args) => (
		<Table columnTemplate="auto 1fr auto">
			<TableRowGroup>
				<TableRow>
					<TableHeadCell>ID</TableHeadCell>
					<TableHeadCell>Name</TableHeadCell>
					<TableHeadCell align="right">Price</TableHeadCell>
				</TableRow>
			</TableRowGroup>
			<TableRowGroup>
				<TableRow {...args}>
					<TableCell>100001 (Row hover=false)</TableCell>
					<TableCell>Disabled row hover</TableCell>
					<TableCell align="right">$99.00</TableCell>
				</TableRow>
				<TableRow>
					<TableCell hover={false}>
						100002 (Cell hover=false)
					</TableCell>
					<TableCell>Cell with hover=true</TableCell>
					<TableCell align="right">$120.00</TableCell>
				</TableRow>
				<TableRow hover={false}>
					<TableCell>100003 (Row hover=false)</TableCell>
					<TableCell hover>
						Cell hover=true (cell-only wash)
					</TableCell>
					<TableCell align="right">$150.00</TableCell>
				</TableRow>
			</TableRowGroup>
		</Table>
	),
};

/**
 * When `staggerIndex` is a number, the row's cells animate in with a
 * staggered slide-up-and-fade. Each row waits `staggerIndex * 50ms`
 * before animating, so mapping over a list and passing the array index
 * produces a cascade.
 *
 * Tune the **staggerIndex** control to see individual rows animate with
 * a different delay. Change the value and re-render the story from the
 * toolbar to replay the animation.
 */
export const Animated: Story = {
	args: {
		staggerIndex: 0,
	},
	render: (args) => (
		<DataTable columnTemplate="auto 1fr auto" minWidth="500px">
			<TableRowGroup>
				<TableRow>
					<TableHeadCell>ID</TableHeadCell>
					<TableHeadCell>Name</TableHeadCell>
					<TableHeadCell align="right">Price</TableHeadCell>
				</TableRow>
			</TableRowGroup>
			<TableRowGroup>
				{Array.from({ length: 5 }).map((_, i) => (
					<TableRow
						key={i}
						staggerIndex={
							typeof args.staggerIndex === 'number'
								? args.staggerIndex + i
								: undefined
						}
					>
						<TableCell>{100_001 + i}</TableCell>
						<TableCell>Row {i + 1}</TableCell>
						<TableCell align="right">
							${(99 + i * 10).toFixed(2)}
						</TableCell>
					</TableRow>
				))}
			</TableRowGroup>
		</DataTable>
	),
};

/**
 * Regression guard for AG-22173: `staggerIndex` and the row hover wash in the
 * same table.
 *
 * The wash lives on the hovered cell's `::before` at `z-index: -1`, stretched
 * across the row and resolved against the `<table>`. That only works while no
 * cell forms a stacking context of its own, so the entrance animation has to
 * rest on `transform: none` rather than `translateY(0)` — an identity transform
 * still computes to a matrix, which traps the wash in the cell and paints it
 * over every column to its left.
 *
 * Hover a right-hand cell: every column left of the pointer must stay readable.
 */
export const StaggeredWithHover: Story = {
	tags: ['skip-themes'],
	parameters: { chromatic: { disable: true } },
	render: () => (
		<Table columnTemplate="1.4fr auto auto auto 1.4fr auto">
			<TableRowGroup>
				<TableRow>
					<TableHeadCell>Asset</TableHeadCell>
					<TableHeadCell>Rego</TableHeadCell>
					<TableHeadCell>Year</TableHeadCell>
					<TableHeadCell>Booking ID</TableHeadCell>
					<TableHeadCell>Supplier</TableHeadCell>
					<TableHeadCell align="right">Price</TableHeadCell>
				</TableRow>
			</TableRowGroup>
			<TableRowGroup>
				{[
					{
						asset: 'Mitsubishi Triton',
						rego: 'DB40ZI',
						year: 2021,
						id: 1_523_036,
						supplier: 'Ultra Tune Beenleigh',
						price: '1,284.00',
					},
					{
						asset: 'Mitsubishi Outlander',
						rego: 'CX72RM',
						year: 2019,
						id: 1_522_939,
						supplier: 'Kmart Tyre & Auto Slacks Creek',
						price: '642.50',
					},
					{
						asset: 'Toyota HiLux',
						rego: 'FA18PQ',
						year: 2022,
						id: 1_522_871,
						supplier: 'Midas Underwood',
						price: '918.25',
					},
				].map((row, i) => (
					<TableRow key={row.id} staggerIndex={i}>
						<TableCell>{row.asset}</TableCell>
						<TableCell>{row.rego}</TableCell>
						<TableCell>{row.year}</TableCell>
						<TableCell>#{row.id}</TableCell>
						<TableCell>{row.supplier}</TableCell>
						<TableCell align="right">${row.price}</TableCell>
					</TableRow>
				))}
			</TableRowGroup>
		</Table>
	),
	play: async ({ canvasElement, step }) => {
		const cells = Array.from(
			canvasElement.querySelectorAll<HTMLElement>(
				`.${rowEntering} > [role="gridcell"]`,
			),
		);

		await step(
			'rows stay hidden until their turn, then settle',
			async () => {
				await expect(cells.length).toBe(18);

				const animations = cells.flatMap((cell) =>
					cell.getAnimations(),
				);
				await expect(animations.length).toBe(cells.length);

				// `backwards`, not `both` — see TableRow.css.ts. It holds the
				// `from` frame through the stagger delay without retaining the
				// `to` frame, which is what keeps the cell free of a transform.
				for (const animation of animations) {
					await expect(animation.effect?.getTiming().fill).toBe(
						'backwards',
					);
				}

				await Promise.all(animations.map(({ finished }) => finished));
			},
		);

		await step('cells rest without a stacking context', async () => {
			for (const cell of cells) {
				await expect(getComputedStyle(cell).transform).toBe('none');
			}
		});

		await step('the hover wash can still escape the cell', async () => {
			for (const cell of cells) {
				await expect(getComputedStyle(cell, '::before').zIndex).toBe(
					'-1',
				);
			}
		});
	},
};
