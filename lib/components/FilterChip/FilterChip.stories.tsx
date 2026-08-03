import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { expect, fn } from 'storybook/test';

import { Box } from '../Box/Box';
import { FlexInline } from '../Flex/FlexInline';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

import { FilterChip } from './FilterChip';

const CHIP_GAP = '2';

const GUIDE = `
A filter chip shows one filter the user has already applied. Clicking the body
opens an editor for that filter's value, and the trailing \`×\` clears it.

> ⚠️ **A chip is not a label.** If the user cannot change it or clear it, it is
> not a filter. Reach for [Badge](/docs/content-badge--docs) instead.

## Choosing a type

| \`type\` | Shows | Use it for | Example |
| --- | --- | --- | --- |
| \`select\` *(default)* | category and value | A filter with one chosen value | Vehicle type: Truck |
| \`numeric\` | category, operator and value | A comparison the user set up | Usage (km): over 100,000 km |
| \`simple\` | a single label | A filter that is either on or off | Serviced |
| \`add\` | dashed pill with a \`+\` | The button that opens the filter picker | + Add Filter |

An \`add\` chip does not hold a filter, so it takes no value, no state and nothing
to remove. The four types are a discriminated union, so a combination that makes
no sense will not compile.

## Anatomy

A pill with a 1px border and a fully rounded radius. From left to right: a \`+\`
icon on \`add\` chips, the category label in secondary text, an operator if there
is one, the value in primary text, then the \`×\` button. Text is 16px regular,
and nothing is ever bold, including when the chip is selected.

Only the value truncates. The category and operator keep their width so you can
still tell which filter it is, and the full value stays in a \`title\` attribute.
Let it truncate rather than shortening the text yourself.

## What the handlers decide

There is no \`interactive\` prop. What the chip becomes depends on which handlers
you give it:

| \`onClick\` | \`onRemove\` | You get |
| --- | --- | --- |
| yes | yes | The usual chip: a body you can click and a \`×\` that clears it |
| yes | no | Clickable, with nothing to clear |
| no | yes | The body is plain text and only the \`×\` works |
| no | no | Static text, nothing focusable |

Two actions cannot nest inside one button, so a chip with a \`×\` is a container
holding a body button and a remove button side by side.

## States

There are four: default, hover, focus and selected.

Hover follows whichever button the pointer is over rather than the whole pill.
A chip with only a \`×\` therefore lights up over the \`×\` and not over its label,
so it never suggests a click the body cannot handle.

There is no disabled state. Filters are added, edited or removed. If a filter
does not apply right now, leave it out of the bar.

## Do and don't

Let a full bar wrap onto a second line. Do not make it scroll sideways or stack
into a column.

Put a filter count next to the bar if you need one, not on the chip itself.

Use \`selected\` for a filter that is currently applied. Only reach for \`pressed\`
when clicking the chip switches the filter on and off in place. A chip that opens
an editor is not a toggle, and announcing it as one is misleading.

## Accessibility

The \`×\` names itself from the filter and its value, so you get
*"Remove State QLD filter"*. That keeps two chips from the same category apart
when a screen reader lists the buttons. Pass \`removeLabel\` if the generated name
reads badly.

Use \`expanded\` when the chip owns a popover. It sets \`aria-expanded\` and
\`aria-haspopup\`, and you should pair it with \`aria-controls\` and the forwarded
\`ref\`, which is what \`Popover\` anchors to. \`pressed\` is the only prop that sets
\`aria-pressed\`; \`selected\` on its own is purely visual.

Both of these describe the chip body, which is only a button when you pass
\`onClick\`. Without one they are dropped and the component warns you.

The \`×\` is the only way to remove a chip. The WAI-ARIA pattern also clears a
focused chip on Backspace or Delete, which is not built yet.
`;

const meta = {
	title: 'Components/FilterChip',
	component: FilterChip,
	tags: ['new'],
	parameters: {
		docs: {
			description: { component: GUIDE },
		},
	},
	args: {
		label: 'Vehicle type:',
		value: 'Truck',
		onClick: fn(),
		onRemove: fn(),
	},
	argTypes: {
		// Types, defaults and descriptions come from the props' JSDoc via
		// react-docgen. Only what it cannot work out is listed here.
		type: {
			control: 'select',
			options: ['select', 'numeric', 'simple', 'add'],
		},
		operator: { if: { arg: 'type', eq: 'numeric' } },
		selected: { if: { arg: 'type', neq: 'add' } },
		pressed: { if: { arg: 'type', neq: 'add' } },
		expanded: { if: { arg: 'type', neq: 'add' } },
		onRemove: {
			if: { arg: 'type', neq: 'add' },
			table: { category: 'Events' },
		},
		removeLabel: { if: { arg: 'type', neq: 'add' } },
		onClick: { table: { category: 'Events' } },
		// `value` has no condition: select and numeric both use it, and a
		// control condition can only test one value.
		className: { table: { disable: true } },
		testId: { table: { disable: true } },
	},
} satisfies Meta<typeof FilterChip>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Props are a discriminated union, so a story showing several shapes at once
 * cannot spread `args`: the spread is the whole union and will not narrow to the
 * `type` next to it. Pulling out the handlers is all these stories need.
 */
const handlers = ({
	onClick,
	onRemove,
}: {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	onRemove?: React.MouseEventHandler<HTMLButtonElement>;
}) => ({ onClick, onRemove });

const VariantRow = ({
	caption,
	children,
}: {
	caption: string;
	children: React.ReactNode;
}) => (
	<Stack space="2">
		<Text size="2" color="secondary">
			{caption}
		</Text>
		<FlexInline justify="center" gap={CHIP_GAP}>
			{children}
		</FlexInline>
	</Stack>
);

export const Standard: Story = {};

/**
 * The four shapes, first at rest and then selected.
 *
 * `select` and `numeric` grey out the category so it reads apart from the value.
 * `simple` has no category, so its label uses the value colour. `add` is the only
 * dashed chip and the only one without a selected state, since it has no filter
 * to apply.
 */
export const Types: Story = {
	render: (args) => (
		<Stack space="4">
			<VariantRow caption="Default">
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
				<FilterChip {...handlers(args)} type="simple" label="Serviced" />
				<FilterChip
					type="add"
					label="Add Filter"
					onClick={args.onClick ?? (() => {})}
				/>
			</VariantRow>
			<VariantRow caption="Selected (no add chip, it has no selected state)">
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
					label="Serviced"
					selected
				/>
			</VariantRow>
		</Stack>
	),
};

/**
 * The handlers you pass decide what the chip becomes.
 *
 * The body is a `<button>` only when there is an `onClick`, and the `×` only
 * appears when there is an `onRemove`. Pass both and you get a container with two
 * buttons inside it, because two actions cannot nest in one button. Pass neither
 * and the chip is static text.
 *
 * The remove-only chip is the subtle one. Hover follows the button the pointer is
 * over, so it highlights on the `×` and not on the label.
 */
export const Interactivity: Story = {
	render: (args) => (
		<Stack space="4">
			<VariantRow caption="onClick and onRemove: click to edit, × to clear">
				<FilterChip
					{...handlers(args)}
					label="Vehicle type:"
					value="Truck"
				/>
			</VariantRow>
			<VariantRow caption="onClick only: clickable, nothing to clear">
				<FilterChip onClick={args.onClick} label="State:" value="QLD" />
			</VariantRow>
			<VariantRow caption="onRemove only: the body is plain text">
				<FilterChip
					onRemove={args.onRemove}
					label="Usage (km):"
					value="100,000 km"
				/>
			</VariantRow>
			<VariantRow caption="Neither: static text, nothing focusable">
				<FilterChip label="Fuel:" value="Diesel" />
			</VariantRow>
		</Stack>
	),
	play: async ({ canvas, step }) => {
		await step('makes the body a button only with an onClick', async () => {
			await expect(
				canvas.getAllByRole('button', { name: /State/ })[0],
			).toBeInTheDocument();
		});

		await step('leaves a remove-only body outside any button', async () => {
			const label = canvas.getAllByText('Usage (km):')[0];

			await expect(label.closest('button')).toBeNull();
			await expect(
				canvas.getAllByRole('button', { name: /^Remove Usage/ })[0],
			).toBeInTheDocument();
		});

		await step('renders no buttons at all without handlers', async () => {
			await expect(
				canvas.queryAllByRole('button', { name: /Fuel/ }),
			).toHaveLength(0);
		});
	},
};

const INITIAL_FILTERS = [
	{ id: 'vehicle', label: 'Vehicle type:', value: 'Truck' },
	{
		id: 'usage',
		label: 'Usage (km):',
		operator: 'over',
		value: '100,000 km',
	},
	{ id: 'state', label: 'State:', value: 'QLD' },
] as { id: string; label: string; operator?: string; value: string }[];

/**
 * The chip is controlled. `onRemove` only reports that the user asked to drop the
 * filter; the owner is what re-renders without it.
 */
const RemovableFilterBar = ({
	onClick,
	onRemove,
}: {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	onRemove?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
	const [filters, setFilters] = React.useState(INITIAL_FILTERS);

	const drop = (id: string) =>
		setFilters((current) => current.filter((filter) => filter.id !== id));

	const remove =
		(id: string): React.MouseEventHandler<HTMLButtonElement> =>
		(event) => {
			drop(id);
			onRemove?.(event);
		};

	return (
		<FlexInline justify="center" gap={CHIP_GAP}>
			{filters.map(({ id, label, operator, value }) =>
				operator ? (
					<FilterChip
						key={id}
						type="numeric"
						label={label}
						operator={operator}
						value={value}
						onClick={onClick}
						onRemove={remove(id)}
					/>
				) : (
					<FilterChip
						key={id}
						label={label}
						value={value}
						onClick={onClick}
						onRemove={remove(id)}
					/>
				),
			)}
			<FilterChip
				type="add"
				label={filters.length > 0 ? 'Add Filter' : 'Restore filters'}
				onClick={() => setFilters(INITIAL_FILTERS)}
			/>
		</FlexInline>
	);
};

/**
 * Removal working end to end. Click a `×` and the chip goes, because the owner
 * drops it from the list. In the other stories `onRemove` is only a spy, so the
 * chip stays put. Clear them all and the add chip offers them back.
 */
export const Removable: Story = {
	render: (args) => (
		<RemovableFilterBar onClick={args.onClick} onRemove={args.onRemove} />
	),
	play: async ({ canvas, userEvent, step }) => {
		const removeButtons = () =>
			canvas.queryAllByRole('button', { name: /^Remove / });

		await step('starts with a remove button per filter', async () => {
			await expect(removeButtons()).toHaveLength(INITIAL_FILTERS.length);
		});

		await step('removing a filter takes its chip away', async () => {
			await userEvent.click(
				canvas.getAllByRole('button', {
					name: 'Remove Vehicle type Truck filter',
				})[0],
			);

			await expect(
				canvas.queryByRole('button', {
					name: 'Remove Vehicle type Truck filter',
				}),
			).not.toBeInTheDocument();
			await expect(removeButtons()).toHaveLength(
				INITIAL_FILTERS.length - 1,
			);
		});
	},
};

/**
 * A bar wraps onto a new line instead of scrolling or stacking. The container
 * here is deliberately narrow so you can see it happen.
 */
export const FilterBar: Story = {
	decorators: [(story) => <Box maxWidth="small">{story()}</Box>],
	render: (args) => (
		<FlexInline justify="center" gap={CHIP_GAP}>
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
				type="add"
				label="Add Filter"
				onClick={args.onClick ?? (() => {})}
			/>
		</FlexInline>
	),
};

/**
 * A value with nowhere to go truncates instead of pushing the chip past its
 * container, and keeps the full text in a `title`. The category and operator hold
 * their width so you can still tell which filter it is.
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

/**
 * Two ARIA states that look the same but mean different things, so choose by
 * behaviour rather than by eye.
 *
 * Use `expanded` when the chip owns a popover. It reports `aria-expanded` and
 * `aria-haspopup`, and pairs with `aria-controls` and the forwarded `ref` that
 * `Popover` anchors to.
 *
 * Use `pressed` when clicking the chip applies and unapplies the filter in place.
 * It is the only prop that sets `aria-pressed`. On its own, `selected` is just a
 * visual state, because a chip that opens an editor is not a toggle.
 *
 * Both describe the chip body, which is only a button when you pass `onClick`.
 */
export const DisclosureAndToggle: Story = {
	render: (args) => (
		<Stack space="4">
			<VariantRow caption="expanded: a chip that owns a popover">
				<FilterChip
					{...handlers(args)}
					label="Vehicle type:"
					value="Truck"
					expanded
				/>
			</VariantRow>
			<VariantRow caption="pressed: a chip that toggles its filter in place">
				<FilterChip
					onClick={args.onClick}
					type="simple"
					label="Serviced"
					pressed
					selected
				/>
			</VariantRow>
		</Stack>
	),
};

/**
 * Behaviour coverage. Kept off the docs page but left in the sidebar, so you can
 * watch the steps run in the Interactions panel.
 */
export const InteractionTest: Story = {
	tags: ['!autodocs'],
	args: {
		removeLabel: 'Remove vehicle type filter',
	},
	play: async ({ args, canvas, userEvent, step }) => {
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

		await step('removes the filter without activating the body', async () => {
			await userEvent.click(remove);
			await expect(args.onRemove).toHaveBeenCalled();
			await expect(args.onClick).toHaveBeenCalledTimes(1);
		});

		await step('reaches both actions by keyboard', async () => {
			body.focus();
			await expect(body).toHaveFocus();
			await userEvent.tab();
			await expect(remove).toHaveFocus();
		});
	},
};
