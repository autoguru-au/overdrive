import isChromatic from 'chromatic/isChromatic';
import * as React from 'react';
import { useEffect, useState } from 'react';

import { Stack } from '../Stack';
import { StarRating } from '../StarRating';

import { Tab, TabList, TabPane, TabPanes, Tabs } from '.';

export default { title: 'Components/Tabs' };

export const Standard = () => (
	<Tabs>
		<TabList>
			<Tab>Tab 1</Tab>
			<Tab>Tab 2</Tab>
		</TabList>

		<TabPanes>
			<TabPane>Content A</TabPane>
			<TabPane>
				<Stack>
					<TestChild label='5' />
					<TestChild label='4' />
					<TestChild label='3' />
					<TestChild label='2' />
					<TestChild label='1' />
				</Stack>
			</TabPane>
		</TabPanes>
	</Tabs>
);

export const WithIndication = () => (
	<Tabs>
		<TabList>
			<Tab indication={2}>Tab 1</Tab>
			<Tab indication={0}>Tab 2</Tab>
		</TabList>

		<TabPanes>
			<TabPane>Content A</TabPane>
			<TabPane>Content B</TabPane>
		</TabPanes>
	</Tabs>
);

export const TabsWithoutPanes = () => (
	<>
		<Tabs>
			<TabList>
				<Tab id='tab-1' is={<a href='#tab-1' />}>
					Tab 1
				</Tab>
				<Tab id='tab-2' is={<a href='#tab-2' />}>
					Tab 2
				</Tab>
			</TabList>
		</Tabs>

		<ul>
			<li id='tab-1'>Tab 1 Content</li>
			<li id='tab-2' style={{ marginTop: '120vh' }}>
				Tab 2 Content
			</li>
		</ul>
	</>
);

export const WithStretch = () => (
	<Tabs>
		<TabList stretch>
			<Tab>Tab 1</Tab>
			<Tab>Tab 2</Tab>
		</TabList>

		<TabPanes>
			<TabPane>Content A</TabPane>
			<TabPane>
				<Stack>
					<TestChild label='5' />
					<TestChild label='4' />
					<TestChild label='3' />
					<TestChild label='2' />
					<TestChild label='1' />
				</Stack>
			</TabPane>
		</TabPanes>
	</Tabs>
);

export const Scrollable = () => {
	const [indication, setIndication] = useState(10);

	useEffect(() => {
		const ival = setInterval(() => {
			!isChromatic() && setIndication(Math.floor(Math.random() * 10));
		}, 1e3);

		return () => {
			clearInterval(ival);
		};
	}, []);

	return (
		<Tabs>
			<TabList scrollable>
				<Tab>Hello</Tab>
				<Tab indication={indication}>Why isnt</Tab>
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
		</Tabs>
	);
};

Scrollable.story = {
	decorators: [
		(story) => (
			<div style={{ maxWidth: '500px', width: '100%' }}>{story()}</div>
		),
	],
};

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
