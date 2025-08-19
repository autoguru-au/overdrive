import { AlertIcon, OttoIcon } from '@autoguru/icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import isChromatic from 'chromatic/isChromatic';
import React, { useEffect, useState } from 'react';
import { fn } from 'storybook/test';

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
		(story) => (
			<div style={{ maxWidth: '500px', width: '100%' }}>{story()}</div>
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
									<Icon icon={AlertIcon} />
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
