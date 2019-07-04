import React from 'react';
import { shallow, mount } from 'enzyme';
import { EMetaVariant, Meta } from '.';

const TestIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path d="M183.253 353.707L280.96 256l-97.707-97.92 30.08-30.08 128 128-128 128-30.08-30.293z" />
	</svg>
);

describe('<Meta />', () => {
	it('should not throw', () => expect(() => shallow(<Meta />)).not.toThrow());

	it('should match snapshot without label', () => {
		expect(shallow(<Meta />)).toMatchSnapshot();
	});

	it('should match snapshot with label, icon for Primary variant', () => {
		const meta = shallow(
			<Meta
				icon={TestIcon}
				label="Hello World!"
				varian={EMetaVariant.Primary}
			/>,
		);
		expect(meta).toMatchSnapshot();
	});

	it('should match snapshot with label, icon for Secondary variant', () => {
		const meta = shallow(
			<Meta
				icon={TestIcon}
				label="Hello World!"
				varian={EMetaVariant.Secondary}
			/>,
		);
		expect(meta).toMatchSnapshot();
	});

	it('should add the icon passed in props', () => {
		const meta = mount(<Meta icon={TestIcon} label="Hello World!" />);
		expect(meta.find('.icon').exists()).toBeTruthy();
		meta.unmount();
	});

	it('should add a span dom element', () => {
		const meta = shallow(
			<Meta className="meta-class" label="Hello World!" />,
		);
		expect(meta.type()).toEqual(`span`);
	});

	it('should pass on className to dom element', () => {
		const meta = shallow(
			<Meta className="meta-class" label="Hello World!" />,
		);
		expect(meta.find('span').hasClass('meta-class')).toBeTruthy();
	});

	it('should by default apply Primary variant styles', () => {
		const meta = shallow(<Meta />);
		expect(meta.hasClass('variantPrimary')).toBeTruthy();
	});

	it('should apply Primary variant styles', () => {
		const meta = shallow(<Meta variant={EMetaVariant.Primary} />);
		expect(meta.hasClass('variantPrimary')).toBeTruthy();
	});

	it('should apply Secondary variant styles', () => {
		const meta = shallow(<Meta variant={EMetaVariant.Secondary} />);
		expect(meta.hasClass('variantSecondary')).toBeTruthy();
	});
});
