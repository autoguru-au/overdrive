import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { Text } from './';

describe('<Text />', () => {
	it('should not throw', () => expect(() => shallow(<Text />)).not.toThrow());

	it('should match snapshot when empty', () => {
		expect(render(<Text />)).toMatchSnapshot();
	});

	it('should match snapshot with text', () => {
		expect(render(<Text>Hello World</Text>)).toMatchSnapshot();
	});

	it('should pass on className to dom element', () => {
		const text = mount(<Text className="text-class" label="Hello World" />);
		expect(text.hasClass('text-class')).toBeTruthy();
		text.unmount();
	});

	it('should use a p dom tag', () => {
		const text = shallow(<Text>"Hello World"</Text>);
		expect(text.type()).toEqual('p');
	});

	describe('when muted', () => {
		it('should match snapshot', () => {
			expect(render(<Text muted>Hello World</Text>)).toMatchSnapshot();
		});
	});
});
