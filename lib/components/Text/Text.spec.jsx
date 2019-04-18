import React from 'react';
import { mount, render, shallow } from 'enzyme';
import {
	DetailText,
	DetailTextLoader,
	EDetailTextSize,
	ETextVariant,
	Text,
} from './';
import { LoadingBox } from '../LoadingBox';

const testLabel = 'Hello World!';

describe('<Text />', () => {
	it('should not throw', () => expect(() => shallow(<Text />)).not.toThrow());

	it('should match snapshot when empty', () => {
		expect(render(<Text />)).toMatchSnapshot();
	});

	it('should match snapshot with text', () => {
		expect(render(<Text>{testLabel}</Text>)).toMatchSnapshot();
	});

	it('should match snapshot for Desktop variant', () => {
		expect(
			render(<Text variant={ETextVariant.Desktop}>{testLabel}</Text>)
		).toMatchSnapshot();
	});

	it('should match snapshot for Mobile variant', () => {
		expect(
			render(<Text variant={ETextVariant.Mobile}>{testLabel}</Text>)
		).toMatchSnapshot();
	});

	it('should pass on className to dom element', () => {
		const text = mount(<Text className="text-class" label={testLabel} />);
		expect(text.hasClass('text-class')).toBeTruthy();
		text.unmount();
	});

	it('should use a p dom tag', () => {
		const text = shallow(<Text>{testLabel}</Text>);
		expect(text.type()).toEqual('p');
	});
});
