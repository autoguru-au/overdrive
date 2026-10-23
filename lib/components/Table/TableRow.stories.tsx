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

const hoverRows = [
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
];

const gridcells = (row: HTMLElement) =>
	Array.from(row.querySelectorAll<HTMLElement>('[role="gridcell"]'));

const cellAtCentreOf = (cell: HTMLElement) => {
	const { left, top, width, height } = cell.getBoundingClientRect();
	return document
		.elementFromPoint(left + width / 2, top + height / 2)
		?.closest('[role="gridcell"]');
};

/**
 * Regression guard for AG-22531: no cell may cover its neighbours.
 *
 * The wash used to be a `z-index: -1` pseudo-element stretched to
 * `left/right: -1000%`, painted unconditionally on every cell of a hover row.
 * A cell that formed a stacking context trapped it, and it then covered the
 * columns beside it — blanking their text and swallowing their pointer events.
 *
 * Hit-testing is the assertion because it catches the bug without needing a
 * real pointer: the covering element was there whether or not anything was
 * hovered. Hover the right-hand cells by hand to check the wash itself.
 */
export const StaggeredWithHover: Story = {
	tags: ['test', '!autodocs', 'skip-themes'],
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
				{hoverRows.map((row, i) => (
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
		const rows = Array.from(
			canvasElement.querySelectorAll<HTMLElement>(`.${rowEntering}`),
		);
		const cells = gridcells(rows[0]);
		const lastCell = cells.at(-1)!;

		await step('the entrance animation settles', async () => {
			await expect(rows.length).toBe(hoverRows.length);
			await Promise.all(
				rows
					.flatMap((row) => gridcells(row))
					.flatMap((cell) => cell.getAnimations())
					.map(({ finished }) => finished),
			);
		});

		await step('every cell owns its own area', async () => {
			for (const cell of cells) {
				await expect(cellAtCentreOf(cell)).toBe(cell);
			}
		});

		await step('a sticky cell does not cover its row', async () => {
			lastCell.style.position = 'sticky';
			lastCell.style.right = '0';
			lastCell.style.zIndex = '1';

			for (const cell of cells) {
				await expect(cellAtCentreOf(cell)).toBe(cell);
			}

			lastCell.removeAttribute('style');
		});
	},
};

/**
 * Regression guard for AG-22531: the wash must stay inside the table.
 *
 * It used to be a pseudo-element stretched to `left/right: -1000%`, which
 * inflated the scroll container's `scrollWidth` by thousands of pixels and
 * produced phantom horizontal scroll.
 */
export const HoverStaysWithinTable: Story = {
	tags: ['test', '!autodocs', 'skip-themes'],
	parameters: { chromatic: { disable: true } },
	render: () => (
		<DataTable columnTemplate="1fr auto auto" aria-label="Containment">
			<TableRowGroup>
				<TableRow>
					<TableHeadCell>Supplier</TableHeadCell>
					<TableHeadCell>Rego</TableHeadCell>
					<TableHeadCell align="right">Price</TableHeadCell>
				</TableRow>
			</TableRowGroup>
			<TableRowGroup>
				{hoverRows.map((row) => (
					<TableRow key={row.id}>
						<TableCell>{row.supplier}</TableCell>
						<TableCell>{row.rego}</TableCell>
						<TableCell align="right">${row.price}</TableCell>
					</TableRow>
				))}
			</TableRowGroup>
		</DataTable>
	),
	play: async ({ canvasElement, step }) => {
		const pane = canvasElement.querySelector<HTMLElement>(
			'[data-od-component="data-table"]',
		)!;

		await step('the wash adds no scrollable overflow', async () => {
			await expect(pane.scrollWidth).toBe(pane.clientWidth);
		});
	},
};

