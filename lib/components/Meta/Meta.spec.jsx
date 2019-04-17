import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { EMetaVariant, Meta } from './';
import { DetailText } from '../DetailText';

const testLabel = 'Hello World!';

const Icon = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path d="M405.333 405.333H106.667V170.667h298.666m-64-149.334V64H170.667V21.333H128V64h-21.333A42.52 42.52 0 0 0 64 106.667v298.666C64 428.8 83.2 448 106.667 448h298.666C428.8 448 448 428.8 448 405.333V106.667C448 82.987 428.8 64 405.333 64H384V21.333M362.667 256H256v106.667h106.667V256z" />
	</svg>
);

const TestIcon = function() {
	return Icon;
};

describe('<Meta />', () => {
	it('should not throw', () => expect(() => render(<Meta />)).not.toThrow());

	it('should match snapshot without label', () => {
		expect(render(<Meta />).html()).toMatchSnapshot();
	});

	it('should match snapshot with label, icon for Primary variant', () => {
		const meta = render(
			<Meta
				icon={TestIcon}
				label={testLabel}
				varian={EMetaVariant.Primary}
			/>
		);
		expect(meta.html()).toMatchSnapshot();
	});

	it('should match snapshot with label, icon for Secondary variant', () => {
		const meta = render(
			<Meta
				icon={TestIcon}
				label={testLabel}
				varian={EMetaVariant.Secondary}
			/>
		);
		expect(meta.html()).toMatchSnapshot();
	});

	it('should add the icon passed in props', () => {
		const meta = shallow(<Meta icon={TestIcon} label={testLabel} />);
		expect(meta.find('.icon').exists()).toBeTruthy();
	});

	it('should add a span dom element', () => {
		const meta = render(<Meta className="meta-class" label={testLabel} />);
		expect(meta[0].name).toEqual(`span`);
	});

	it('should add a DetailText element inside with the label text value', () => {
		const meta = mount(<Meta label={testLabel} />);
		expect(meta.find(DetailText).text()).toEqual(testLabel);
		meta.unmount();
	});

	it('should pass on className to dom element', () => {
		const meta = render(<Meta className="meta-class" label={testLabel} />);
		expect(meta.hasClass('meta-class')).toBeTruthy();
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
