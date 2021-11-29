import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { useState } from 'react';

import { Tab } from './Tab';
import { TabList } from './TabList';
import { TabPane } from './TabPane';
import { TabPanes } from './TabPanes';
import { Tabs } from './Tabs';

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
	renderInactivePanes = false,
) =>
	render(
		<Tabs onChange={onChange}>
			<TabList>
				{tabData.map((tabData, idx) => (
					<Tab
						key={tabData.title}
						id={custoId ? custoId(tabData, idx) : null}
						indication={renderIndication ? 5 : null}>
						{tabData.title}
					</Tab>
				))}
			</TabList>
			<TabPanes renderInactivePanes={renderInactivePanes}>
				{tabData.map((tabData, idx) => (
					<TabPane
						key={tabData.title}
						id={custoId ? custoId(tabData, idx) : null}>
						<TestPane
							testId={custoId ? custoId(tabData, idx) : null}>
							{tabData.content}
						</TestPane>
					</TabPane>
				))}
			</TabPanes>
		</Tabs>,
	);

const TestPane = ({ children, testId }) => {
	const [checked, setChecked] = useState(false);

	return (
		<>
			<input
				type="checkbox"
				data-testid={`checkbox-${testId}`}
				checked={checked}
				onChange={() => setChecked((prev) => !prev)}
			/>
			{children}
		</>
	);
};

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

	it('should switch content when tabs change', () => {
		const { getAllByRole } = renderTabs();

		const [tab1, tab2] = getAllByRole('tab');
		let visiblePanes = getAllByRole('tabpanel');

		expect(tab1.getAttribute('aria-selected')).toBe('true');
		expect(visiblePanes[0]).toHaveTextContent(tabData[0].content);

		userEvent.click(tab2);

		visiblePanes = getAllByRole('tabpanel');

		expect(tab1.getAttribute('aria-selected')).toBe('false');
		expect(tab2.getAttribute('aria-selected')).toBe('true');
		expect(visiblePanes[0]).toHaveTextContent(tabData[1].content);

		userEvent.click(tab1);

		visiblePanes = getAllByRole('tabpanel');

		expect(tab1.getAttribute('aria-selected')).toBe('true');
		expect(tab2.getAttribute('aria-selected')).toBe('false');
		expect(visiblePanes[0]).toHaveTextContent(tabData[0].content);
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

	it('should persist state between tab changes', () => {
		const { getAllByRole, getByTestId } = renderTabs(
			null,
			(_, index) => `testCase-${index + 1}`,
			false,
			true,
		);

		const [tab1, tab2] = getAllByRole('tab');

		let checkbox = getByTestId('checkbox-testCase-1');

		userEvent.click(checkbox);

		expect(checkbox).toBeChecked();

		userEvent.click(tab2);
		userEvent.click(tab1);

		checkbox = getByTestId('checkbox-testCase-1');

		expect(checkbox).toBeChecked();
	});
});
