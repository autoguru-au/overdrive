import React from 'react';
import { mount, shallow } from 'enzyme';
import { LinearProgressIndicator } from '.';

describe('<LinearProgressIndicator />', () => {
	it('should not throw', () =>
		expect(() => shallow(<LinearProgressIndicator />)).not.toThrow());

	it('should match snapshot', () => {
		expect(shallow(<LinearProgressIndicator />)).toMatchSnapshot();
	});

	it('should add a root div element', () => {
		const linearProgressIndicator = mount(<LinearProgressIndicator />);
		expect(linearProgressIndicator.find('div.root').exists()).toEqual(true);
		linearProgressIndicator.unmount();
	});

	it('should add a linearProgressBar div inside root div element', () => {
		const linearProgressIndicator = mount(<LinearProgressIndicator />);
		expect(
			linearProgressIndicator
				.find('div.root>div.linearProgressBar')
				.exists(),
		).toEqual(true);
		linearProgressIndicator.unmount();
	});

	it('should add a linearProgressBarInner div inside linearProgressBar div element', () => {
		const linearProgressIndicator = mount(<LinearProgressIndicator />);
		expect(
			linearProgressIndicator
				.find(
					'div.root>div.linearProgressBar>span.linearProgressBarInner',
				)
				.exists(),
		).toEqual(true);
		linearProgressIndicator.unmount();
	});

	it('should pass on className to dom element', () => {
		const linearProgressIndicator = shallow(
			<LinearProgressIndicator className="linearProgressIndicator-class" />,
		);
		expect(
			linearProgressIndicator
				.find('div.root')
				.hasClass('linearProgressIndicator-class'),
		).toBeTruthy();
	});
});
