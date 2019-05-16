import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { DetailText, DetailTextLoader, EDetailTextSize } from './';
import { LoadingBox } from '../LoadingBox';

describe('<DetailTextLoader />', () => {
	it('should not throw', () =>
		expect(() => shallow(<DetailTextLoader />)).not.toThrow());

	it('should all a loding box component', () => {
		const detailTextLoader = mount(<DetailTextLoader />);
		expect(detailTextLoader.find(LoadingBox).exists()).toEqual(true);
		detailTextLoader.unmount();
	});

	it('should match snapshot', () => {
		expect(render(<DetailTextLoader />)).toMatchSnapshot();
	});
});

describe('<DetailText />', () => {
	it('should not throw', () =>
		expect(() => shallow(<DetailText />)).not.toThrow());

	it('should match snapshot without label', () => {
		expect(shallow(<DetailText />)).toMatchSnapshot();
	});

	it('should match snapshot with label for size 1', () => {
		expect(
			render(
				<DetailText size={EDetailTextSize.Detail1}>
					Hello World
				</DetailText>
			)
		).toMatchSnapshot();
	});

	it('should match snapshot with label for size 2', () => {
		expect(
			render(
				<DetailText size={EDetailTextSize.Detail2}>
					Hello World
				</DetailText>
			)
		).toMatchSnapshot();
	});

	it('should match snapshot with label for size 3', () => {
		expect(
			render(
				<DetailText size={EDetailTextSize.Detail3}>
					Hello World
				</DetailText>
			)
		).toMatchSnapshot();
	});

	it('should pass on className to dom element', () => {
		const detailText = mount(
			<DetailText className="detailText-class" label="Hello World" />
		);
		expect(
			detailText.find('span').hasClass('detailText-class')
		).toBeTruthy();
		detailText.unmount();
	});

	it('should use a span dom element ', () => {
		const detailText = shallow(
			<DetailText className="detailText-class">Hello World</DetailText>
		);
		expect(detailText.type()).toEqual('span');
	});

	it('should display the child text', () => {
		const detailText = mount(
			<DetailText className="detailText-class">Hello World</DetailText>
		);
		expect(detailText.text()).toEqual('Hello World');
		detailText.unmount();
	});

	it('should add a detail1 class for detail 1 size', () => {
		const detailText = mount(
			<DetailText size={EDetailTextSize.Detail1}>Hello World</DetailText>
		);
		expect(detailText.find('span').hasClass('detail1')).toBeTruthy();
		detailText.unmount();
	});

	it('should add a detail2 class for detail 2 size', () => {
		const detailText = mount(
			<DetailText size={EDetailTextSize.Detail2}>Hello World</DetailText>
		);
		expect(detailText.find('span').hasClass('detail2')).toBeTruthy();
		detailText.unmount();
	});

	it('should add a detail3 class for detail 3 size', () => {
		const detailText = mount(
			<DetailText size={EDetailTextSize.Detail3}>Hello World</DetailText>
		);
		expect(detailText.find('span').hasClass('detail3')).toBeTruthy();
		detailText.unmount();
	});

	describe('when muted', () => {
		it('should match snapshot', () => {
			expect(
				render(<DetailText muted>Hello World</DetailText>)
			).toMatchSnapshot();
		});
	});
});
