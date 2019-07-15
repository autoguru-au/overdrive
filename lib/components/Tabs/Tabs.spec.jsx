import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Tab, Tabs } from '.';

describe('<Tabs />', () => {
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

	it('should throw if a tab element is not nested inside a Tabs element', () => {
		jest.spyOn(console, 'error').mockImplementation(() => {});
		expect(() => {
			render(<Tab title="tab">content</Tab>);
		}).toThrow();
		console.error.mockRestore();
	});

	it('should not throw', () => {
		expect(() => {
			render(<Tabs />);
		}).not.toThrow();
	});

	it('should not throw with nested tab items', () => {
		return expect(() => {
			render(
				<Tabs>
					{tabData.map(tabData => (
						<Tab key={tabData} title={tabData.title}>
							{tabData.content}
						</Tab>
					))}
				</Tabs>,
			);
		}).not.toThrow();
	});

	it('should match snapshot with nested tab items', () => {
		const { container } = render(
			<Tabs>
				{tabData.map(tabData => (
					<Tab key={tabData} title={tabData.title}>
						{tabData.content}
					</Tab>
				))}
			</Tabs>,
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	it('should display the first tab pane by default', () => {
		const { container } = render(
			<Tabs>
				{tabData.map(tabData => (
					<Tab key={tabData} title={tabData.title}>
						{tabData.content}
					</Tab>
				))}
			</Tabs>,
		);

		expect(
			container.querySelector('[aria-selected="true"]'),
		).toHaveTextContent('tab 1 title');
	});

	it('should allow the active to be updated outside', () => {
		const { container } = render(
			<Tabs>
				<Tab title="A">A</Tab>
				<Tab title="B">B</Tab>
			</Tabs>,
		);

		fireEvent.click(container.querySelector('[role="tab"]:nth-child(2)'));

		expect(
			container.querySelector('[aria-selected="true"]'),
		).toHaveTextContent('B');
	});

	it('should show content 2 and only content 2 when tab 2 is clicked', () => {
		const { container, getAllByRole } = render(
			<Tabs>
				{tabData.map(tabData => (
					<Tab key={tabData} title={tabData.title}>
						{tabData.content}
					</Tab>
				))}
			</Tabs>,
		);

		fireEvent.click(container.querySelector('[role="tab"]:nth-child(2)'));

		const tabPanels = getAllByRole('tabpanel');

		expect(tabPanels).toHaveLength(1);

		expect(tabPanels[0]).toHaveTextContent('tab 2 content');
	});

	it('should call onChange callback with correct active tab index', () => {
		const spyedCallback = jest.fn();

		const { container } = render(
			<Tabs onChange={spyedCallback}>
				{tabData.map(tabData => (
					<Tab key={tabData} title={tabData.title}>
						{tabData.content}
					</Tab>
				))}
			</Tabs>,
		);

		fireEvent.click(container.querySelector('[role="tab"]:nth-child(2)'));

		expect(spyedCallback).toHaveBeenCalledWith(1);
	});
});
