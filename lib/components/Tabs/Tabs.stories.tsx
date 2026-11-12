import { WarningIcon, OttoIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import isChromatic from 'chromatic/isChromatic';
import React, { useEffect, useState } from 'react';
import { expect, fn, userEvent, within } from 'storybook/test';

import { Box } from '../Box/Box';
import { FlexInline } from '../Flex/FlexInline';
import { FlexStack } from '../Flex/FlexStack';
import { Icon } from '../Icon/Icon';
import { EAlignment } from '../Positioner/alignment';
import { StarRating } from '../StarRating/StarRating';
import { Tooltip } from '../Tooltip/Tooltip';

import { Tab } from './Tab';
import { TabList } from './TabList';
import { TabPane } from './TabPane';
import { TabPanes } from './TabPanes';
import { Tabs } from './Tabs';

const TestChild = ({ label }) => {
	const [thing, sething] = useState(isChromatic() ? 0.5 : Math.random() * 5);

	useEffect(() => {
		const t = setInterval(() => {
			sething(isChromatic() ? 0.5 : Math.random() * 5);
		}, 1e3);

		return () => {
			clearInterval(t);
		};
	}, []);

	return <StarRating rating={thing} label={label} />;
};

const meta: Meta<typeof Tabs> = {
	title: 'Components/Tabs',
	component: Tabs,
	tags: [],
	decorators: [
		(story, context) => (
			<div
				style={{
					maxWidth: context.parameters.wide ? '100%' : '500px',
					width: '100%',
				}}
			>
				{story()}
			</div>
		),
	],
	args: {
		active: 0,
		appearance: 'underlined',
		onChange: fn(),
	},
	argTypes: {
		children: {
			control: {
				disable: true,
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// Helper: a stateful wrapper so stories can switch tabs interactively
const StatefulTabs = (props: React.ComponentProps<typeof Tabs>) => {
	const [active, setActive] = useState(props.active ?? 0);
	return <Tabs {...props} active={active} onChange={setActive} />;
};

/**
 * Distance from a segment's outer edge to the start of its label. The declared `padding`
 * is the same whatever the layout, so only this reveals whether the slack is being shared
 * out by `justify-content` instead of sizing the segment.
 */
/** The `TabList` root — the element that carries the bar's width and scrolling. */
const tabListRoot = (tablist: HTMLElement) => {
	const root = tablist.closest('[data-od-component="tab-list"]');
	if (!(root instanceof HTMLElement))
		throw new Error('tab list root not found');

	return root;
};

const labelInset = (tab: HTMLElement) => {
	const label = tab.querySelector('span');
	if (!label) throw new Error('tab is missing its label span');

	return Math.round(
		label.getBoundingClientRect().left - tab.getBoundingClientRect().left,
	);
};

const unevenTabs = [
	{ label: 'A deliberately long label', indication: 1 },
	{ label: 'Medium label', indication: 41 },
	{ label: 'Short', indication: 0 },
	{ label: 'Tiny', indication: 17 },
	{ label: 'Ok', indication: 178 },
];

export const Standard: Story = {
	args: {
		children: (
			<>
				<TabList>
					<Tab>Job History</Tab>
					<Tab>Vehicle History</Tab>
					<Tab>Driver</Tab>
					<Tab>Example Rating</Tab>
				</TabList>

				<TabPanes>
					<TabPane>Content A</TabPane>
					<TabPane>Content B</TabPane>
					<TabPane>Content C</TabPane>
					<TabPane>
						<FlexStack>
							<TestChild label="5" />
							<TestChild label="4" />
							<TestChild label="3" />
							<TestChild label="2" />
							<TestChild label="1" />
						</FlexStack>
					</TabPane>
				</TabPanes>
			</>
		),
	},
	render: (args) => <StatefulTabs {...args} />,
};

export const Pill: Story = {
	args: {
		...Standard.args,
		appearance: 'pill',
	},
	render: (args) => <StatefulTabs {...args} />,
};

export const WithIndication: Story = {
	args: {
		children: (
			<>
				<TabList>
					<Tab indication={2}>Tab 1</Tab>
					<Tab indication={0}>Tab 2</Tab>
				</TabList>

				<TabPanes>
					<TabPane>Content A</TabPane>
					<TabPane>Content B</TabPane>
				</TabPanes>
			</>
		),
	},
	render: (args) => <StatefulTabs {...args} />,
};

export const WithComplexTab: Story = {
	args: {
		children: (
			<>
				<TabList>
					<Tab indication={2}>
						<FlexInline justify="center">
							Tab 1
							<Tooltip
								alignment={EAlignment.BOTTOM}
								label="This tab is a winner"
							>
								<Box>
									<Icon icon={OttoIcon} />
								</Box>
							</Tooltip>
						</FlexInline>
					</Tab>
					<Tab>
						<FlexInline justify="center">
							Tab 2
							<Tooltip
								alignment={EAlignment.BOTTOM}
								label="This tab is less awesome"
							>
								<Box>
									<Icon icon={WarningIcon} />
								</Box>
							</Tooltip>
						</FlexInline>
					</Tab>
				</TabList>

				<TabPanes>
					<TabPane>Content A</TabPane>
					<TabPane>Content B</TabPane>
				</TabPanes>
			</>
		),
	},
	render: (args) => <StatefulTabs {...args} />,
};

export const WithStretch: Story = {
	args: {
		children: (
			<>
				<TabList stretch>
					<Tab>Tab 1</Tab>
					<Tab>Tab 2</Tab>
				</TabList>

				<TabPanes>
					<TabPane>Content A</TabPane>
					<TabPane>
						<FlexStack>
							<TestChild label="5" />
							<TestChild label="4" />
							<TestChild label="3" />
							<TestChild label="2" />
							<TestChild label="1" />
						</FlexStack>
					</TabPane>
				</TabPanes>
			</>
		),
	},
	render: (args) => <StatefulTabs {...args} />,
};

export const Minimal: Story = {
	args: {
		...Standard.args,
		appearance: 'minimal',
	},
	render: (args) => <StatefulTabs {...args} />,
};

export const Segmented: Story = {
	args: {
		appearance: 'segmented',
		children: (
			<>
				<TabList>
					<Tab>Registration</Tab>
					<Tab>VIN</Tab>
					<Tab>Serial Number</Tab>
				</TabList>

				<TabPanes>
					<TabPane>Search by registration</TabPane>
					<TabPane>Search by VIN</TabPane>
					<TabPane>Search by serial number</TabPane>
				</TabPanes>
			</>
		),
	},
	render: (args) => <StatefulTabs {...args} />,
};

export const SegmentedWithIndication: Story = {
	args: {
		appearance: 'segmented',
		children: (
			<>
				<TabList>
					<Tab indication={3}>Open</Tab>
					<Tab indication={12}>In Progress</Tab>
					<Tab>Closed</Tab>
				</TabList>

				<TabPanes>
					<TabPane>Content A</TabPane>
					<TabPane>Content B</TabPane>
					<TabPane>Content C</TabPane>
				</TabPanes>
			</>
		),
	},
	render: (args) => <StatefulTabs {...args} />,
};

/**
 * `stretch={false}` sizes each segment to its own label, so every segment keeps the same
 * horizontal padding and the bar hugs its tabs rather than filling the container. Labels
 * of deliberately uneven length show it: no segment is squeezed to fit an equal share,
 * and none is clipped.
 */
export const SegmentedUnevenLabels: Story = {
	args: {
		appearance: 'segmented',
		children: (
			<>
				<TabList stretch={false}>
					{unevenTabs.map(({ label, indication }) => (
						<Tab key={label} indication={indication}>
							{label}
						</Tab>
					))}
				</TabList>

				<TabPanes>
					{unevenTabs.map(({ label }) => (
						<TabPane key={label}>{label}</TabPane>
					))}
				</TabPanes>
			</>
		),
	},
	parameters: { wide: true },
	render: (args) => <StatefulTabs {...args} />,
};

/**
 * The default: the bar fills its container and every segment takes the same width, so the
 * group reads as one control whatever the labels say. No segment shrinks past its own
 * label, so nothing is clipped — a bar too narrow for its labels scrolls instead.
 */
export const SegmentedStretched: Story = {
	...SegmentedUnevenLabels,
	args: {
		appearance: 'segmented',
		children: (
			<>
				<TabList>
					{unevenTabs.map(({ label, indication }) => (
						<Tab key={label} indication={indication}>
							{label}
						</Tab>
					))}
				</TabList>

				<TabPanes>
					{unevenTabs.map(({ label }) => (
						<TabPane key={label}>{label}</TabPane>
					))}
				</TabPanes>
			</>
		),
	},
};

export const SegmentedLayoutTest: Story = {
	...SegmentedUnevenLabels,
	tags: ['test', '!autodocs', 'skip-themes'],
	parameters: { wide: true, chromatic: { disableSnapshot: true } },
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const tabs = canvas.getAllByRole('tab');
		const tablist = canvas.getByRole('tablist');

		await step('every segment insets its label equally', async () => {
			const insets = tabs.map((tab) => labelInset(tab));

			for (const inset of insets) {
				await expect(inset).toBe(insets[0]);
			}
		});

		await step('segments size to their own label', async () => {
			const widths = tabs.map((tab) =>
				Math.round(tab.getBoundingClientRect().width),
			);

			await expect(Math.max(...widths)).toBe(widths[0]);
			await expect(Math.min(...widths)).toBeLessThan(Math.max(...widths));
		});

		await step('the bar hugs its tabs', async () => {
			await expect(tablist.getBoundingClientRect().width).toBeLessThan(
				canvasElement.getBoundingClientRect().width,
			);
		});

		await step('the bar is 40px tall', async () => {
			await expect(
				Math.round(tablist.getBoundingClientRect().height),
			).toBe(40);
		});

		await step('every tab stays reachable when too narrow', async () => {
			const bar = tabListRoot(tablist);
			const outer = bar.parentElement!;
			const restore = outer.style.width;
			outer.style.width = '320px';

			// the bar scrolls rather than hiding its trailing tabs
			await expect(getComputedStyle(bar).overflowX).toBe('auto');
			await expect(bar.scrollWidth).toBeGreaterThan(bar.clientWidth);

			outer.style.width = restore;
		});
	},
};

export const SegmentedStretchedLayoutTest: Story = {
	...SegmentedStretched,
	tags: ['test', '!autodocs', 'skip-themes'],
	parameters: { wide: true, chromatic: { disableSnapshot: true } },
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const tabs = canvas.getAllByRole('tab');
		const tablist = canvas.getByRole('tablist');

		await step('the bar fills its container', async () => {
			await expect(
				Math.round(tablist.getBoundingClientRect().width),
			).toBe(Math.round(canvasElement.getBoundingClientRect().width));
		});

		await step('every segment takes the same width', async () => {
			const widths = tabs.map((tab) =>
				Math.round(tab.getBoundingClientRect().width),
			);

			await expect(
				Math.max(...widths) - Math.min(...widths),
			).toBeLessThanOrEqual(1);
		});

		await step('no segment clips its label', async () => {
			for (const tab of tabs) {
				await expect(tab.scrollWidth).toBeLessThanOrEqual(
					tab.clientWidth + 1,
				);
			}
		});
	},
};

/**
 * Two short labels, stretched as segmented bars are by default: both segments fill the
 * container at the same width rather than shrinking to their text.
 */
export const SegmentedTwoLabels: Story = {
	args: {
		appearance: 'segmented',
		children: (
			<>
				<TabList>
					<Tab>Open</Tab>
					<Tab>Closed</Tab>
				</TabList>

				<TabPanes>
					<TabPane>Open bookings</TabPane>
					<TabPane>Closed bookings</TabPane>
				</TabPanes>
			</>
		),
	},
	render: (args) => <StatefulTabs {...args} />,
};

export const SegmentedInteractionTest: Story = {
	...Segmented,
	tags: ['!autodocs', 'skip-themes'],
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const tabs = canvas.getAllByRole('tab');

		await step('first segment is selected by default', async () => {
			await expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
			await expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
		});

		await step('clicking a segment selects it', async () => {
			await userEvent.click(tabs[2]);
			await expect(
				canvas.getAllByRole('tab', { name: 'Serial Number' })[0],
			).toHaveAttribute('aria-selected', 'true');
		});

		await step('ArrowRight wraps to the first segment', async () => {
			await userEvent.keyboard('{ArrowRight}');
			await expect(
				canvas.getAllByRole('tab', { name: 'Registration' })[0],
			).toHaveAttribute('aria-selected', 'true');
		});

		await step('End jumps to the last segment', async () => {
			await userEvent.keyboard('{End}');
			await expect(
				canvas.getAllByRole('tab', { name: 'Serial Number' })[0],
			).toHaveAttribute('aria-selected', 'true');
		});
	},
};

export const Scrollable: Story = {
	args: {
		children: (
			<TabList scrollable>
				<Tab>Hello</Tab>
				<Tab indication={5}>Why isnt</Tab>
				<Tab>This a terribly</Tab>
				<Tab>Long</Tab>
				<Tab>Tab list</Tab>
				<Tab>Hello</Tab>
				<Tab>Why isnt</Tab>
				<Tab>This a terribly</Tab>
				<Tab>Long</Tab>
				<Tab>Tab list</Tab>
				<Tab>Hello</Tab>
				<Tab>Why isnt</Tab>
				<Tab>This a terribly</Tab>
				<Tab>Long</Tab>
				<Tab>Tab list</Tab>
			</TabList>
		),
	},
	render: (args) => <StatefulTabs {...args} />,
};
