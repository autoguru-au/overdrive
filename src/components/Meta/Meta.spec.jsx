import React from 'react';
import { mount, shallow } from 'enzyme';
import { EMetaVariant, Meta } from './';
import { DetailText } from '../DetailText';

const testLabel = 'Hello World!';
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
				label={testLabel}
				varian={EMetaVariant.Primary}
			/>
		);
		expect(meta).toMatchSnapshot();
	});

	it('should match snapshot with label, icon for Secondary variant', () => {
		const meta = shallow(
			<Meta
				icon={TestIcon}
				label={testLabel}
				varian={EMetaVariant.Secondary}
			/>
		);
		expect(meta).toMatchSnapshot();
	});

	it('should add the icon passed in props', () => {
		const meta = shallow(<Meta icon={TestIcon} label={testLabel} />);
		expect(meta.find('.icon').exists()).toBeTruthy();
	});

	it('should add a span dom element', () => {
		const meta = shallow(<Meta className="meta-class" label={testLabel} />);
		expect(meta.type()).toEqual(`span`);
	});

	it('should add a DetailText element inside with the label text value', () => {
		const meta = mount(<Meta label={testLabel} />);
		expect(meta.find(DetailText).text()).toEqual(testLabel);
		meta.unmount();
	});

	it('should pass on className to dom element', () => {
		const meta = shallow(<Meta className="meta-class" label={testLabel} />);
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

	it('should apply Primary variant styles', () => {
		const meta = shallow(<Meta variant={EMetaVariant.Secondary} />);
		expect(meta.hasClass('variantSecondary')).toBeTruthy();
	});
});
