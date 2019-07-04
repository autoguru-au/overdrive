import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { Icon } from './Icon';

const TestIcon = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path d="M183.253 353.707L280.96 256l-97.707-97.92 30.08-30.08 128 128-128 128-30.08-30.293z" />
	</svg>
);

describe('<Icon />', () => {
	it('should not throw if SVG icon is passed', () => {
		expect(() => shallow(<Icon icon={TestIcon} />)).not.toThrow();
	});

	it('should pass on className to dom element', () => {
		const icon = mount(<Icon icon={TestIcon} className="icon-class" />);
		expect(icon.hasClass('icon-class')).toBeTruthy();
	});

	it('should match snapshot for same icon', () => {
		const icon = render(<Icon icon={TestIcon} />);
		expect(icon).toMatchSnapshot();
	});

	it('should an i tag for DOM element', () => {
		const icon = shallow(<Icon icon={TestIcon} />);
		expect(icon.type()).toEqual(`i`);
	});

	it('should nest the provided svg inside the i tag', () => {
		const icon = render(<Icon icon={TestIcon} />);
		expect(icon.find('i>svg')).toHaveLength(1);
	});
});
