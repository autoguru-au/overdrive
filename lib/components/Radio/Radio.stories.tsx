import { StoryObj, Meta } from '@storybook/react-vite';
import clsx from 'clsx';
import React, { useId, type ComponentProps } from 'react';
import { expect, fn, within } from 'storybook/test';

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
import { Box } from '../Box/Box';

import { Radio } from './Radio';
import { storyForceHover } from './Radio.css';
import {
	RadioGroup as RadioGroupComponent,
	type RadioGroupProps,
} from './RadioGroup';

type RadioSize = NonNullable<RadioGroupProps['size']>;

const listData: Array<{ label: string; value: string }> = [
	{ label: 'Avocado', value: 'avocado' },
	{ label: 'Blueberries', value: 'blueberries' },
	{ label: 'Cherries', value: 'cherries' },
	{ label: 'Coconut', value: 'coconut' },
	{ label: 'Disabled option', value: 'disabled' },
	{ label: 'Strawberries', value: 'strawberries' },
];

const meta: Meta<typeof RadioGroupComponent> = {
	title: 'Forms & Input Fields/Radio',
	component: RadioGroupComponent,
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
		name: undefined,
		value: undefined,
		size: 'medium',
		onChange: fn(),
	},
	argTypes: {
		size: {
			control: 'select',
			options: ['medium', 'small'],
			description:
				'Ring size for every radio in the group, per the DS-2026 selection-control spec. An individual `Radio` can override it.',
		},
	},
	/**
	 * Every group gets a name unique to the instance that rendered it.
	 *
	 * Chromatic renders each story once per theme into a single document, and
	 * native radios group by `name` per document — so three copies sharing one
	 * name form one 18-radio group, and the browser lets only the last of them
	 * stay checked. Suffixing the name keeps each copy an independent group.
	 */
	render: (args) => <GroupWithUniqueName {...args} />,
};

const GroupWithUniqueName = ({
	name,
	...args
}: ComponentProps<typeof RadioGroupComponent>) => (
	<RadioGroupComponent {...args} name={`${name}-${useId()}`} />
);

export default meta;
type Story = StoryObj<typeof RadioGroupComponent>;

export const RadioGroup: Story = {
	render: ({ ...args }) => {
		const [selectedValue, setSelectedValue] = React.useState(args.value);
		const uid = useId();

		const handleChange = (value: string) => {
			setSelectedValue(value);
			args.onChange?.(value);
		};

		return (
			<RadioGroupComponent
				{...(args as ComponentProps<typeof RadioGroupComponent>)}
				name={`${args.name}-${uid}`}
				value={selectedValue}
				onChange={handleChange}
			>
				{listData.map((item) => (
					<Radio
						key={item.value}
						value={item.value}
						disabled={item.value === 'disabled'}
					>
						{item.label}
					</Radio>
				))}
			</RadioGroupComponent>
		);
	},
	args: {
		name: 'radio-group-favourite-fruit',
		value: 'avocado',
	},
	play: async ({ canvasElement, userEvent, step }) => {
		// The story is rendered more than once per document — once per theme in
		// Chromatic, twice on the autodocs page — so scope to one group rather
		// than reaching into the canvas and picking up a sibling copy.
		const firstGroup = canvasElement.querySelector(
			'[data-od-component="radio-group"]',
		);
		const group = within(
			firstGroup instanceof HTMLElement ? firstGroup : canvasElement,
		);
		const avocado = group.getByRole('radio', { name: 'Avocado' });
		const blueberries = group.getByRole('radio', { name: 'Blueberries' });

		await step('starts on the value the group was given', async () => {
			await expect(avocado).toBeChecked();
		});

		await step('moves the selection on arrow keys', async () => {
			avocado.focus();
			await userEvent.keyboard('{ArrowDown}');

			await expect(blueberries).toBeChecked();
			await expect(blueberries).toHaveFocus();
		});
	},
};

/* -------------------------------------------------------------------------
 * The DS-2026 state matrix
 * ---------------------------------------------------------------------- */

/** Every row Figma publishes. Green only — the spec has no colour variants. */
const STATES: Array<{
	label: string;
	selected: boolean;
	disabled: boolean;
	code: string;
}> = [
	{ label: 'Default', selected: false, disabled: false, code: 'value' },
	{ label: 'Hover', selected: false, disabled: false, code: ':hover' },
	{ label: 'Selected', selected: true, disabled: false, code: 'selected' },
	{ label: 'Disabled', selected: false, disabled: true, code: 'disabled' },
	{
		label: 'Disabled selected',
		selected: true,
		disabled: true,
		code: 'selected disabled',
	},
];

const SIZES: Array<{
	size: RadioSize;
	dimensions: string;
	tag?: string;
}> = [
	{ size: 'medium', dimensions: '20 × 20', tag: 'default' },
	{ size: 'small', dimensions: '16 × 16' },
];

const COL = ['Size', 'Px', 'State', 'Preview', 'Props', 'Tag'];

const EmptyCell = () => <span className={small} aria-hidden="true" />;

/**
 * One specimen. A `Radio` reads its selection off the group, so each cell owns
 * a single-radio group whose `value` either matches the radio or does not.
 */
const Specimen = ({
	size,
	label,
	selected,
	disabled,
}: {
	size: RadioSize;
	label: string;
	selected: boolean;
	disabled: boolean;
}) => (
	<RadioGroupComponent
		name={`matrix-${size}-${label}-${useId()}`}
		size={size}
		value={selected ? 'on' : ''}
	>
		{/* No children, so the radio stands alone — hence the explicit name. */}
		<Radio value="on" disabled={disabled} aria-label={`${size} ${label}`} />
	</RadioGroupComponent>
);

/**
 * Both sizes across every state in the Figma spec.
 *
 * The Hover row forces its own appearance through `storyForceHover`, so the
 * state Chromatic cannot otherwise reach is still snapshot.
 *
 * Both sizes keep the same 48px row and hit area: only the ring shrinks, so a
 * `small` radio stays above the WCAG 2.5.8 target minimum.
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
				STATES.map(({ label, selected, disabled, code }, index) => (
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
							<Specimen
								size={size}
								label={label}
								selected={selected}
								disabled={disabled}
							/>
						</Box>
						<code className={tokenCode}>{code}</code>
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
	play: async ({ canvasElement, step }) => {
		// Chromatic renders the story once per viewport into the same root, so
		// the canvas holds a grid per capture. Scope to one of them, or an
		// exact count sees every copy at once.
		const firstGrid = canvasElement.querySelector(`.${switchLadderGrid}`);
		const grid = within(
			firstGrid instanceof HTMLElement ? firstGrid : canvasElement,
		);
		const radios = grid.getAllByRole('radio', {
			name: /^(medium|small) /,
		});

		await step('renders every state at both sizes', async () => {
			await expect(radios).toHaveLength(STATES.length * SIZES.length);
		});

		await step('sizes the ring per the spec', async () => {
			const [radio] = radios;

			await expect(
				radio.parentElement?.querySelector('[data-size]'),
			).toHaveAttribute('data-size', 'medium');
		});

		await step('marks the selected states with the accent', async () => {
			const selected = grid.getByRole('radio', {
				name: 'medium Selected',
			});

			await expect(
				selected.parentElement?.querySelector('[data-size]'),
			).toHaveAttribute('data-active');
		});
	},
};

/**
 * `size` is set once on the group, and an individual `Radio` can still opt out
 * of it. Mixing sizes inside one group is not something the spec asks for —
 * this is here to document that the override exists.
 */
export const SizeOverride: Story = {
	args: {
		name: 'radio-group-size-override',
		value: 'small-one',
		size: 'small',
		children: (
			<>
				<Radio value="small-one">Small, from the group</Radio>
				<Radio value="small-two">Also small</Radio>
				<Radio value="medium-one" size="medium">
					Medium, overriding the group
				</Radio>
			</>
		),
	},
};

export const MultipleLines: Story = {
	args: {
		name: 'radio-group-multi-line',
		value: 'multi1',
		children: (
			<>
				<Radio value="multi1">
					There is a very good reason why this thing is a multi-line,
					sometimes we need to show people a lot of things. And thus
					this exists.
				</Radio>
				<Radio value="single" disabled>
					Some options are just a single line, like this one.
				</Radio>
			</>
		),
	},
};
