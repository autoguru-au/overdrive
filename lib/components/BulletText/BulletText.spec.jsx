import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { BulletText } from './BulletText';
import { Text } from '../Typography/Text';
import { EBulletTextVariant } from './index';
import { CheckIcon, Icon } from '../Icon';

const CustomBullet = ({}) => (
	<span
		style={{
			width: '17px',
			height: '17px',
			backgroundColor: ' #00dd95',
			fill: 'white',
			borderRadius: '50%',
			flexDirection: 'row',
			display: 'flex',
			alignContent: 'center',
			justifyContent: 'center',
			alignItems: 'center',
		}}>
		<Icon size={14} icon={CheckIcon} />
	</span>
);

describe('<BulletText />', () => {
	it('should not throw', () =>
		expect(() => render(<BulletText />)).not.toThrow());

	it('should pass on className to dom element', () => {
		const bulletText = mount(<BulletText className="bullet-class" />);
		expect(bulletText.hasClass('bullet-class')).toBeTruthy();
		bulletText.unmount();
	});

	it('should match snapshot for default bullet text', () => {
		expect(
			shallow(<BulletText>Hello World!</BulletText>)
		).toMatchSnapshot();
	});

	it('should match snapshot for primary bullet text with custom bullet character', () => {
		expect(
			shallow(
				<BulletText variant={EBulletTextVariant.Primary} bullet={'?'}>
					Hello World!
				</BulletText>
			)
		).toMatchSnapshot();
	});

	it('should match snapshot for secondary bullet text with custom bullet character', () => {
		expect(
			shallow(
				<BulletText variant={EBulletTextVariant.Secondary} bullet={'?'}>
					Hello World!
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
					Hello World!
				</BulletText>
			)
		).toMatchSnapshot();
	});

	it('should match snapshot for custom bullet text', () => {
		expect(
			render(
				<BulletText bullet={<CustomBullet />}>Hello World</BulletText>
			)
		).toMatchSnapshot();
	});

	it('should apply class for primary variant', () => {
		const bulletText = shallow(
			<BulletText variant={EBulletTextVariant.Primary} bullet={'*'}>
				Hello World!
			</BulletText>
		);
		expect(bulletText.hasClass('variantPrimary')).toBeTruthy();
	});

	it('should apply class for secondary variant', () => {
		const bulletText = shallow(
			<BulletText variant={EBulletTextVariant.Secondary} bullet={'*'}>
				Hello World!
			</BulletText>
		);
		expect(bulletText.hasClass('variantSecondary')).toBeTruthy();
	});

	it('should add a Text element', () => {
		const bulletText = shallow(<BulletText />);
		expect(bulletText.find(Text).exists()).toBeTruthy();
	});

	it('should pass the children a Text element', () => {
		const bulletText = shallow(<BulletText>Hello World!</BulletText>);
		expect(
			bulletText
				.find(Text)
				.render()
				.text()
		).toEqual('Hello World!');
	});

	it('should use li element for default bullet text', () => {
		const bulletText = shallow(<BulletText>Hello World!</BulletText>);
		expect(bulletText.type()).toEqual('li');
	});

	it('should use li element for unordered bullet text', () => {
		const bulletText = shallow(
			<BulletText ordered={false}>Hello World!</BulletText>
		);
		expect(bulletText.type()).toEqual('li');
	});

	it('should use ol element for ordered bullet text', () => {
		const bulletText = shallow(
			<BulletText ordered={true}>Hello World!</BulletText>
		);
		expect(bulletText.type()).toEqual('ol');
	});

	it('should use • as default bullet', () => {
		const bulletText = shallow(<BulletText>Hello World!</BulletText>);
		expect(bulletText.find('div>span').text()).toEqual('•');
	});

	it('should use provided bullet character bullet', () => {
		const bulletText = shallow(
			<BulletText bullet="#">Hello World!</BulletText>
		);
		expect(bulletText.find('div>span').text()).toEqual('#');
	});

	it('should use provided custom bullet component', () => {
		const bulletText = shallow(
			<BulletText bullet={<CustomBullet />}>Hello World</BulletText>
		);
		expect(bulletText.find(CustomBullet)).toBeTruthy();
	});
});
