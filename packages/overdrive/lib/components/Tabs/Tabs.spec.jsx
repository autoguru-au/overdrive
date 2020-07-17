import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';

import { TabList } from './TabList';
import { Tabs } from './Tabs';
import { Tab } from './Tab';
import { TabPanes } from './TabPanes';
import { TabPane } from './TabPane';

const tabData = [
	{
		title: 'tab 1 title',
		content: 'tab 1 content',
	},
	{
		title: 'tab 2 title',
		content: 'tab 2 content',
	},
	{
		title: 'tab 3 title',
		content: 'tab 3 content',
	},
];

const renderTabs = (
	onChange = null,
	custoId = null,
	renderIndication = false,
) =>
	render(
		<Tabs onChange={onChange}>
			<TabList>
				{tabData.map((tabData, idx) => (
					<Tab
						key={tabData.title}
						id={custoId ? custoId(tabData, idx) : null}
						indication={renderIndication ? 5 : null}
					>
						{tabData.title}
					</Tab>
				))}
			</TabList>
			<TabPanes>
				{tabData.map((tabData, idx) => (
					<TabPane
						key={tabData.title}
						id={custoId ? custoId(tabData, idx) : null}
					>
						{tabData.content}
					</TabPane>
				))}
			</TabPanes>
		</Tabs>,
	);

describe('<Tabs />', () => {
	it('should match snapshot (high level)', () => {
		const { container } = renderTabs();
		expect(container.firstChild).toMatchSnapshot();
	});

	it('should display the first tab pane by default', () => {
		const { container } = renderTabs();

		expect(
			container.querySelector('[aria-selected="true"]'),
		).toHaveTextContent('tab 1 title');
	});

	it('should allow the active to be updated outside', () => {
		const { getAllByRole, container } = renderTabs();

		fireEvent.click(getAllByRole('tab')[1]);

		expect(
			container.querySelector('[aria-selected="true"]'),
		).toHaveTextContent('tab 2 title');
	});

	it('should show second content and only second content when second tab is clicked', () => {
		const { getAllByRole } = renderTabs();

		fireEvent.click(getAllByRole('tab')[1]);

		const tabPanels = getAllByRole('tabpanel');

		expect(tabPanels).toHaveLength(1);

		expect(tabPanels[0]).toHaveTextContent('tab 2 content');
	});

	it('should call onChange callback with correct active tab index', () => {
		const spyedCallback = jest.fn();

		const { getAllByRole } = renderTabs(spyedCallback);

		fireEvent.click(getAllByRole('tab')[1]);

		expect(spyedCallback).toHaveBeenCalledWith(1);
	});

	it('should allow id overriding', () => {
		const { container } = renderTabs(
			null,
			(tabData, idx) => `${tabData.title.replace(/\s/g, '-')}-${idx}`,
		);

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should allow rendering indications', () => {
		const { container } = renderTabs(null, null, true);

		expect(container.firstChild).toMatchSnapshot();
	});
});
