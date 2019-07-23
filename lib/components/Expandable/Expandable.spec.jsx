import React, { useState } from 'react';
import { mount, shallow } from 'enzyme';
import { Expandable } from './Expandable';
import { act } from 'react-dom/test-utils';
import { ExpandableItem } from './ExpandableItem';

describe.skip('<Expandable />', () => {
	it('should not throw with no items', () =>
		expect(() => shallow(<Expandable />)).not.toThrow());

	it('should not throw with default item', () =>
		expect(() =>
			shallow(
				<Expandable>
					<ExpandableItem />
				</Expandable>,
			),
		).not.toThrow());

	it('should match snapshot for list without items', () => {
		let testComponent;
		act(() => {
			const TestComponent = () => {
				return <Expandable />;
			};

			testComponent = mount(<TestComponent />);
		});

		expect(testComponent.html()).toMatchSnapshot();
	});

	it('should match snapshot for list with a closed item', () => {
		let testComponent;
		act(() => {
			const TestComponent = () => {
				return (
					<Expandable>
						<ExpandableItem
							title={<h1>Title</h1>}
							body={<p>Body</p>}
						/>
					</Expandable>
				);
			};

			testComponent = mount(<TestComponent />);
		});

		expect(testComponent.html()).toMatchSnapshot();
	});

	it('should match snapshot for list with an open item', () => {
		let testComponent;
		act(() => {
			const TestComponent = () => {
				return (
					<Expandable>
						<ExpandableItem
							open
							title={<h1>Title</h1>}
							body={<p>Body</p>}
						/>
					</Expandable>
				);
			};

			testComponent = mount(<TestComponent />);
		});

		expect(testComponent.html()).toMatchSnapshot();
	});

	it('should match snapshot for multi list with open and closed items', () => {
		let testComponent;
		act(() => {
			const TestComponent = () => {
				return (
					<Expandable>
						<ExpandableItem
							open
							title={<h1>Title1</h1>}
							body={<p>Body1</p>}
						/>
						<ExpandableItem
							open={false}
							title={<h1>Title2</h1>}
							body={<p>Body2</p>}
						/>
						<ExpandableItem
							open
							title={<h1>Title3</h1>}
							body={<p>Body3</p>}
						/>
					</Expandable>
				);
			};

			testComponent = mount(<TestComponent />);
		});

		expect(testComponent.html()).toMatchSnapshot();
	});

	it('should match snapshot for none-multi list with open and closed items', () => {
		let testComponent;
		act(() => {
			const TestComponent = () => {
				return (
					<Expandable multi={false}>
						<ExpandableItem
							open
							title={<h1>Title1</h1>}
							body={<p>Body1</p>}
						/>
						<ExpandableItem
							open={false}
							title={<h1>Title2</h1>}
							body={<p>Body2</p>}
						/>
						<ExpandableItem
							open
							title={<h1>Title3</h1>}
							body={<p>Body3</p>}
						/>
					</Expandable>
				);
			};

			testComponent = mount(<TestComponent />);
		});

		expect(testComponent.html()).toMatchSnapshot();
	});

	it('should pass on className to dom element', () => {
		const expandable = shallow(
			<Expandable className="expandable">
				<ExpandableItem className="expandable-item" />
				<ExpandableItem className="expandable-item" />
				<ExpandableItem className="expandable-item" />
				<ExpandableItem className="expandable-item" />
			</Expandable>,
		);
		expect(expandable.find('.expandable').length === 1).toBeTruthy();
		expect(expandable.find('.expandable-item').length === 4).toBeTruthy();
	});

	it('should set correct aria-expanded tag value', () => {
		let expandableItem;
		let spyedCallback;
		act(() => {
			const TestComponent = () => {
				const [open, setOpen] = useState(false);
				if (!spyedCallback)
					spyedCallback = jest.fn(() => setOpen(!open));

				return (
					<ExpandableItem
						open={open}
						className="expandable-item"
						onClick={spyedCallback}
					/>
				);
			};

			expandableItem = mount(<TestComponent />);
		});

		expect(
			expandableItem.find('article[aria-expanded="false"]').length === 1,
		).toBeTruthy();
		expect(
			expandableItem.find('article[aria-expanded="true"]').length === 0,
		).toBeTruthy();

		act(() => {
			expandableItem.find('article>header').simulate('click');
		});

		expandableItem.update();

		expect(
			expandableItem.find('article[aria-expanded="false"]').length === 0,
		).toBeTruthy();

		expect(
			expandableItem.find('article[aria-expanded="true"]').length === 1,
		).toBeTruthy();

		expect(spyedCallback).toHaveBeenCalledTimes(1);
	});

	it('should fire onClick when an item is clicked', () => {
		let expandables;
		let spyedCallback;
		act(() => {
			const TestComponent = () => {
				spyedCallback = jest.fn();

				return (
					<Expandable>
						<ExpandableItem
							className="expandable-item"
							onClick={spyedCallback}
						/>
					</Expandable>
				);
			};

			expandables = mount(<TestComponent />);
		});

		expect(expandables.find('article').hasClass('open')).not.toBeTruthy();

		act(() => {
			expandables.find('article>header').simulate('click');
		});

		expandables.update();

		expect(expandables.find('article').hasClass('open')).toBeTruthy();

		expect(spyedCallback).toHaveBeenCalledTimes(1);
	});

	it('should fire onChange on the list when an item is clicked', () => {
		let expandables;
		let spyedCallback;
		act(() => {
			const TestComponent = () => {
				spyedCallback = jest.fn();

				return (
					<Expandable onChange={spyedCallback}>
						<ExpandableItem className="expandable-item" />
					</Expandable>
				);
			};

			expandables = mount(<TestComponent />);
		});

		expect(expandables.find('article').hasClass('open')).not.toBeTruthy();

		act(() => {
			expandables.find('article>header').simulate('click');
		});

		expandables.update();

		expect(expandables.find('article').hasClass('open')).toBeTruthy();

		expect(spyedCallback).toHaveBeenCalledTimes(1);
	});

	it('should fire onChange on the list item when openStatus changes', () => {
		let expandableItem;
		let spyedCallback;
		act(() => {
			const TestComponent = () => {
				const [open, setOpen] = useState(false);
				if (!spyedCallback) spyedCallback = jest.fn();

				return (
					<ExpandableItem
						open={open}
						className="expandable-item"
						onChange={spyedCallback}
						onClick={() => setOpen(!open)}
					/>
				);
			};

			expandableItem = mount(<TestComponent />);
		});

		expect(spyedCallback).not.toHaveBeenCalled();

		act(() => {
			expandableItem.find('article>header').simulate('click');
		});

		expect(spyedCallback).toHaveBeenCalledTimes(1);
		expect(spyedCallback).toHaveBeenCalledWith(true);
		spyedCallback.mockReset();

		expect(spyedCallback).not.toHaveBeenCalled();

		act(() => {
			expandableItem.find('article>header').simulate('click');
		});

		expect(spyedCallback).toHaveBeenCalledTimes(1);
		expect(spyedCallback).toHaveBeenCalledWith(false);
	});

	it('should add correct gaps to opened list items', () => {
		let expandables;
		act(() => {
			const TestComponent = () => {
				return (
					<Expandable multi>
						<ExpandableItem className="i1" />
						<ExpandableItem className="i2" />
						<ExpandableItem className="i3" />
						<ExpandableItem className="i4" />
						<ExpandableItem className="i5" />
					</Expandable>
				);
			};

			expandables = mount(<TestComponent />);
		});

		expect(expandables.find('article.open').length === 0).toBeTruthy();

		expandables.find('article.i1>header').simulate('click'); // Open first item
		expandables.update();

		expect(expandables.find('article.i1').hasClass('open')).toBeTruthy();
		expect(
			expandables.find('article.i1').hasClass('topGap'),
		).not.toBeTruthy();
		expect(
			expandables.find('article.i1').hasClass('bottomGap'),
		).toBeTruthy();

		expandables.find('article.i2>header').simulate('click'); // Open second item
		expandables.update();

		expect(expandables.find('article.i1').hasClass('open')).toBeTruthy();
		expect(
			expandables.find('article.i1').hasClass('topGap'),
		).not.toBeTruthy();
		expect(
			expandables.find('article.i1').hasClass('bottomGap'),
		).toBeTruthy();

		expect(expandables.find('article.i2').hasClass('open')).toBeTruthy();
		expect(
			expandables.find('article.i2').hasClass('topGap'),
		).not.toBeTruthy();
		expect(
			expandables.find('article.i2').hasClass('bottomGap'),
		).toBeTruthy();

		expandables.find('article.i1>header').simulate('click'); // Close first item
		expandables.update();

		expect(
			expandables.find('article.i1').hasClass('open'),
		).not.toBeTruthy();
		expect(
			expandables.find('article.i1').hasClass('topGap'),
		).not.toBeTruthy();
		expect(
			expandables.find('article.i1').hasClass('bottomGap'),
		).not.toBeTruthy();

		expect(expandables.find('article.i2').hasClass('open')).toBeTruthy();
		expect(expandables.find('article.i2').hasClass('topGap')).toBeTruthy();
		expect(
			expandables.find('article.i2').hasClass('bottomGap'),
		).toBeTruthy();

		expandables.find('article.i5>header').simulate('click'); // Open last item
		expandables.update();

		expect(expandables.find('article.i5').hasClass('open')).toBeTruthy();
		expect(expandables.find('article.i5').hasClass('topGap')).toBeTruthy();
		expect(
			expandables.find('article.i5').hasClass('bottomGap'),
		).not.toBeTruthy();

		expandables.find('article.i4>header').simulate('click'); // Open one before last item
		expandables.update();

		expect(expandables.find('article.i4').hasClass('open')).toBeTruthy();
		expect(expandables.find('article.i4').hasClass('topGap')).toBeTruthy();
		expect(
			expandables.find('article.i4').hasClass('bottomGap'),
		).toBeTruthy();

		expect(expandables.find('article.i5').hasClass('open')).toBeTruthy();
		expect(
			expandables.find('article.i5').hasClass('topGap'),
		).not.toBeTruthy();
		expect(
			expandables.find('article.i5').hasClass('bottomGap'),
		).not.toBeTruthy();
	});
});
