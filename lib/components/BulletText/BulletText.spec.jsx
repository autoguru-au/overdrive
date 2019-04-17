import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { BulletText } from './BulletText';
import { EBulletTextVariant } from './index';
import { GridItem } from '../Grid';

const testLabel = 'Hello World!';
describe('<BulletText />', () => {
	it('should not throw', () =>
		expect(() => shallow(<BulletText />)).not.toThrow());

	it('should pass on className to dom element', () => {
		const bulletText = mount(<BulletText className="bullet-class" />);
		expect(bulletText.hasClass('bullet-class')).toBeTruthy();
		bulletText.unmount();
	});

	it('should match snapshot for default bullet text', () => {
		expect(shallow(<BulletText>{testLabel}</BulletText>)).toMatchSnapshot();
	});

	it('should match snapshot for primary bullet text with custom bullet character', () => {
		expect(
			shallow(
				<BulletText variant={EBulletTextVariant.Primary} bullet={'?'}>
					{testLabel}
				</BulletText>
			)
		).toMatchSnapshot();
	});

	it('should match snapshot for secondary bullet text with custom bullet character', () => {
		expect(
			shallow(
				<BulletText variant={EBulletTextVariant.Secondary} bullet={'?'}>
					{testLabel}
				</BulletText>
			)
		).toMatchSnapshot();
	});

	it('should match snapshot for ordered bullet text', () => {
		expect(
			shallow(
				<BulletText
					ordered={true}
					variant={EBulletTextVariant.Primary}
					bullet={'?'}>
					{testLabel}
				</BulletText>
			)
		).toMatchSnapshot();
	});

	it('should apply class for primary variant', () => {
		const bulletText = shallow(
			<BulletText variant={EBulletTextVariant.Primary} bullet={'*'}>
				{testLabel}
			</BulletText>
		);
		expect(bulletText.hasClass('variantPrimary')).toBeTruthy();
	});

	it('should apply class for secondary variant', () => {
		const bulletText = shallow(
			<BulletText variant={EBulletTextVariant.Secondary} bullet={'*'}>
				{testLabel}
			</BulletText>
		);
		expect(bulletText.hasClass('variantSecondary')).toBeTruthy();
	});

	it('should add a Text element', () => {
		const bulletText = shallow(<BulletText />);
		expect(bulletText.find(GridItem).exists()).toBeTruthy();
	});

	it('should pass the children a Text element', () => {
		const bulletText = render(<BulletText>{testLabel}</BulletText>);
		expect(bulletText.text().includes(testLabel)).toEqual(true);
	});

	it('should use li element for default bullet text', () => {
		const bulletText = render(<BulletText>{testLabel}</BulletText>);
		expect(bulletText[0].name).toEqual('li');
	});

	it('should use li element for unordered bullet text', () => {
		const bulletText = render(
			<BulletText ordered={false}>{testLabel}</BulletText>
		);
		expect(bulletText[0].name).toEqual('li');
	});

	it('should use ol element for ordered bullet text', () => {
		const bulletText = render(
			<BulletText ordered={true}>{testLabel}</BulletText>
		);
		expect(bulletText[0].name).toEqual('ol');
	});

	it('should use • as default bullet', () => {
		const bulletText = render(<BulletText>{testLabel}</BulletText>);
		expect(bulletText.find('div>span').text()).toEqual('•');
	});

	it('should use provided bullet character bullet', () => {
		const bulletText = render(
			<BulletText bullet="#">{testLabel}</BulletText>
		);
		expect(bulletText.find('div>span').text()).toEqual('#');
	});
});
