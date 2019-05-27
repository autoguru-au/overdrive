import React from 'react';
import { mount, shallow } from 'enzyme';
import { Button } from './Button';
import { EButtonSize, EButtonVariant } from './index';

describe('<Button />', () => {
	it('should not throw', () =>
		expect(() => shallow(<Button />)).not.toThrow());

	it('should match snapshot for default button', () => {
		expect(shallow(<Button />)).toMatchSnapshot();
	});

	it('should pass on className to dom element', () => {
		const button = mount(<Button className="button-class" />);
		expect(button.hasClass('button-class')).toBeTruthy();
	});

	describe('when as button', () => {
		it('should use html button element by default', () => {
			const button = shallow(<Button />);
			expect(button.type()).toEqual('button');
		});
	});

	describe('when custom component', () => {
		it('should use html anchor element if href value exists', () => {
			const button = shallow(<Button is="a" href="abc" />);
			expect(button.type()).toEqual('a');
		});

		it('should pass href value to the DOM element', () => {
			const button = mount(<Button is="a" href="/abcd" />);
			expect(button.html()).toContain(`href="/abcd"`);
		});

		describe('deprecated still work', () => {
			it('should use html anchor element if href value exists', () => {
				const button = shallow(<Button component="a" href="abc" />);
				expect(button.type()).toEqual('a');
			});

			it('should pass href value to the DOM element', () => {
				const button = mount(<Button component="a" href="/abcd" />);
				expect(button.html()).toContain(`href="/abcd"`);
			});
		});
	});

	describe('when colour variants', () => {
		it('should match snapshot for Primary button', () => {
			expect(
				shallow(<Button variant={EButtonVariant.Primary} />)
			).toMatchSnapshot();
		});

		it('should apply Primary variant styles', () => {
			const button = shallow(<Button variant={EButtonVariant.Primary} />);
			expect(button.hasClass('variantPrimary')).toBeTruthy();
		});

		it('should match snapshot for Secondary button', () => {
			expect(
				shallow(<Button variant={EButtonVariant.Secondary} />)
			).toMatchSnapshot();
		});

		it('should apply Secondary variant styles', () => {
			const button = shallow(
				<Button variant={EButtonVariant.Secondary} />
			);
			expect(button.hasClass('variantSecondary')).toBeTruthy();
		});

		it('should match snapshot for Danger button', () => {
			expect(
				shallow(<Button variant={EButtonVariant.Danger} />)
			).toMatchSnapshot();
		});

		it('should apply Danger variant styles', () => {
			const button = shallow(<Button variant={EButtonVariant.Danger} />);
			expect(button.hasClass('variantDanger')).toBeTruthy();
		});
	});

	describe('when size variant', () => {
		it('should match snapshot for small button', () => {
			expect(
				shallow(<Button size={EButtonSize.Small} />)
			).toMatchSnapshot();
		});

		it('should apply small size styles', () => {
			const button = shallow(<Button size={EButtonSize.Small} />);
			expect(button.hasClass('sizeSmall')).toBeTruthy();
		});

		it('should match snapshot for medium button', () => {
			expect(
				shallow(<Button size={EButtonSize.Medium} />)
			).toMatchSnapshot();
		});

		it('should apply medium size styles', () => {
			const button = shallow(<Button size={EButtonSize.Medium} />);
			expect(button.hasClass('sizeMedium')).toBeTruthy();
		});
	});

	describe('when rounded', () => {
		it('should match snapshot', () => {
			expect(shallow(<Button rounded={true} />)).toMatchSnapshot();
		});

		it('should not apply rounded styles to default button', () => {
			const button = shallow(<Button />);
			expect(button.hasClass('rounded')).toBeFalsy();
		});

		it('should apply rounded styles', () => {
			const button = shallow(<Button rounded={true} />);
			expect(button.hasClass('rounded')).toBeTruthy();
		});
	});

	describe('when isFullWidth', () => {
		it('should match snapshot', () => {
			expect(shallow(<Button isFullWidth={true} />)).toMatchSnapshot();
		});

		it('should apply styles', () => {
			const button = shallow(<Button isFullWidth={true} />);
			expect(button.hasClass('fullWidth')).toBeTruthy();
		});
	});

	describe('when loading', () => {
		it('should match snapshot for default button', () => {
			expect(shallow(<Button isLoading={true} />)).toMatchSnapshot();
		});

		it('should match snapshot for small button', () => {
			expect(
				shallow(<Button size={EButtonSize.Small} isLoading={true} />)
			).toMatchSnapshot();
		});

		it('should match snapshot for medium button', () => {
			expect(
				shallow(<Button size={EButtonSize.Medium} isLoading={true} />)
			).toMatchSnapshot();
		});

		it('should not apply loading styles to default button', () => {
			const button = shallow(<Button />);
			expect(button.hasClass('loading')).toBeFalsy();
		});

		it('should apply loading styles', () => {
			const button = shallow(<Button isLoading={true} />);
			expect(button.hasClass('loading')).toBeTruthy();
		});
	});
});
