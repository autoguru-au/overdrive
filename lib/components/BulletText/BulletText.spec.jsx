import React from 'react';
import { render } from '@testing-library/react';
import { BulletText } from './BulletText';
import { EBulletTextVariant } from '.';
import { CheckIcon, Icon } from '../Icon';

const CustomBullet = () => (
	<span>
		<Icon size={14} icon={CheckIcon} />
	</span>
);

describe('<BulletText />', () => {
	it('should not throw', () =>
		expect(() => render(<BulletText />)).not.toThrow());

	it('should pass on className to dom element', () => {
		expect(
			render(<BulletText className="bullet-class" />).container
				.firstChild,
		).toHaveClass('bullet-class');
	});

	it('should match snapshot for default bullet text', () => {
		expect(
			render(<BulletText>Hello World!</BulletText>).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot for primary bullet text with custom bullet character', () => {
		expect(
			render(
				<BulletText variant={EBulletTextVariant.Primary} bullet="?">
					Hello World!
				</BulletText>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot for secondary bullet text with custom bullet character', () => {
		expect(
			render(
				<BulletText variant={EBulletTextVariant.Secondary} bullet="?">
					Hello World!
				</BulletText>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot for ordered bullet text', () => {
		expect(
			render(
				<BulletText
					ordered
					variant={EBulletTextVariant.Primary}
					bullet="?">
					Hello World!
				</BulletText>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot for custom bullet text', () => {
		expect(
			render(
				<BulletText bullet={<CustomBullet />}>Hello World</BulletText>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should apply class for primary variant', () => {
		expect(
			render(
				<BulletText variant={EBulletTextVariant.Primary} bullet="*">
					Hello World!
				</BulletText>,
			).container.firstChild,
		).toHaveClass('variantPrimary');
	});

	it('should apply class for secondary variant', () => {
		expect(
			render(
				<BulletText variant={EBulletTextVariant.Secondary} bullet="*">
					Hello World!
				</BulletText>,
			).container.firstChild,
		).toHaveClass('variantSecondary');
	});

	it('should pass the children a Text element', () => {
		expect(
			render(<BulletText>Hello World!</BulletText>).container,
		).toHaveTextContent('Hello World!');
	});

	it('should use li element for default bullet text', () => {
		expect(
			render(
				<BulletText>Hello World!</BulletText>,
			).container.querySelector('li'),
		).toBeInTheDocument();
	});

	it('should use li element for unordered bullet text', () => {
		expect(
			render(
				<BulletText ordered={false}>Hello World!</BulletText>,
			).container.querySelector('li'),
		).toBeInTheDocument();
	});

	it('should use ol element for ordered bullet text', () => {
		expect(
			render(
				<BulletText ordered>Hello World!</BulletText>,
			).container.querySelector('ol'),
		).toBeInTheDocument();
	});

	it('should use • as default bullet', () => {
		expect(
			render(
				<BulletText>Hello World!</BulletText>,
			).container.querySelector('span'),
		).toHaveTextContent('•');
	});

	it('should use provided bullet character bullet', () => {
		expect(
			render(
				<BulletText bullet="#">Hello World!</BulletText>,
			).container.querySelector('span'),
		).toHaveTextContent('#');
	});
});
