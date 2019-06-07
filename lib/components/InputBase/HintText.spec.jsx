import React from 'react';
import { mount, render } from 'enzyme';
import { HintText } from './HintText';

const testLabel = 'Hello World!';
describe('<HintText />', () => {
	it('should not throw', () => {
		expect(() => mount(<HintText />).unmount()).not.toThrow();
	});

	it('should pass on className to dom element', () => {
		const hint = mount(
			<HintText className="hinted-class">{testLabel}</HintText>,
		);
		expect(hint.hasClass('hinted-class')).toBeTruthy();
	});

	it('should match snapshot for default hint', () => {
		const hint = render(<HintText>{testLabel}</HintText>);
		expect(hint).toMatchSnapshot();
	});

	it('should match snapshot for active hint', () => {
		const hint = render(<HintText isActive={true}>{testLabel}</HintText>);
		expect(hint).toMatchSnapshot();
	});

	it('should display children', () => {
		const hint = render(<HintText>{testLabel}</HintText>);
		expect(hint.text()).toEqual(testLabel);
	});
});
