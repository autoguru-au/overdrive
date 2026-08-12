import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { useState } from 'react';

import { textStyles } from '../../styles/typography';

import * as styles from './Tab.css';
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
						indication={renderIndication ? 5 : null}
					>
						{tabData.title}
					</Tab>
				))}
			</TabList>
			<TabPanes renderInactivePanes={renderInactivePanes}>
				{tabData.map((tabData, idx) => (
					<TabPane
						key={tabData.title}
						id={custoId ? custoId(tabData, idx) : null}
					>
						<TestPane
							testId={custoId ? custoId(tabData, idx) : null}
						>
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

		fireEvent.click(tab2);

		visiblePanes = getAllByRole('tabpanel');

		expect(tab1.getAttribute('aria-selected')).toBe('false');
		expect(tab2.getAttribute('aria-selected')).toBe('true');
		expect(visiblePanes[0]).toHaveTextContent(tabData[1].content);

		fireEvent.click(tab1);

		visiblePanes = getAllByRole('tabpanel');

		expect(tab1.getAttribute('aria-selected')).toBe('true');
		expect(tab2.getAttribute('aria-selected')).toBe('false');
		expect(visiblePanes[0]).toHaveTextContent(tabData[0].content);
	});

	it('should call onChange callback with correct active tab index', () => {
		const spyedCallback = vi.fn();

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

	it('should apply the gray600 foreground token to idle tabs', () => {
		const { getAllByRole } = renderTabs();

		expect(getAllByRole('tab')[1]).toHaveClass(
			textStyles({
				color: 'gray600',
				noWrap: true,
				size: '3',
				weight: 'bold',
			}),
		);
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

		fireEvent.click(checkbox);

		expect(checkbox).toBeChecked();

		fireEvent.click(tab2);
		fireEvent.click(tab1);

		checkbox = getByTestId('checkbox-testCase-1');

		expect(checkbox).toBeChecked();
	});
});

const renderSegmented = ({ scrollable = false } = {}) =>
	render(
		<Tabs appearance="segmented">
			<TabList scrollable={scrollable}>
				{tabData.map((tab) => (
					<Tab key={tab.title}>{tab.title}</Tab>
				))}
			</TabList>
		</Tabs>,
	);

describe('<Tabs appearance="segmented" />', () => {
	it('should match snapshot', () => {
		const { container } = renderSegmented();

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should render every tab with exactly one selected', () => {
		const { getAllByRole } = renderSegmented();

		const tabs = getAllByRole('tab');

		expect(tabs).toHaveLength(tabData.length);
		expect(
			tabs.filter((tab) => tab.getAttribute('aria-selected') === 'true'),
		).toHaveLength(1);
	});

	it('should apply the segmented active compound style to the selected tab only', () => {
		const { getAllByRole } = renderSegmented();

		const [tab1, tab2] = getAllByRole('tab');
		const activeClass = styles.styledTab({
			appearance: 'segmented',
			active: true,
		});

		expect(tab1).toHaveClass(activeClass);
		expect(tab2).not.toHaveClass(activeClass);

		fireEvent.click(tab2);

		expect(tab1).not.toHaveClass(activeClass);
		expect(tab2).toHaveClass(activeClass);
	});

	it('should imply stretch by laying the tablist out as flex', () => {
		const { getByRole } = renderSegmented();

		expect(getByRole('tablist').className).toEqual(
			expect.stringContaining('display_flex'),
		);
	});

	it('should support keyboard navigation', () => {
		const { getAllByRole, getByRole } = renderSegmented();

		const tablist = getByRole('tablist');
		const tabs = getAllByRole('tab');

		fireEvent.keyDown(tablist, { key: 'ArrowRight' });
		expect(tabs[1].getAttribute('aria-selected')).toBe('true');

		fireEvent.keyDown(tablist, { key: 'End' });
		expect(tabs[tabData.length - 1].getAttribute('aria-selected')).toBe(
			'true',
		);

		fireEvent.keyDown(tablist, { key: 'ArrowRight' });
		expect(tabs[0].getAttribute('aria-selected')).toBe('true');

		fireEvent.keyDown(tablist, { key: 'Home' });
		expect(tabs[0].getAttribute('aria-selected')).toBe('true');
	});

	it('should not allow scrollable together with segmented', () => {
		expect(() => renderSegmented({ scrollable: true })).toThrow(
			/`scrollable={true}` cannot be used with `appearance="segmented"`/,
		);
	});
});
