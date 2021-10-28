import { CheckIcon } from '@autoguru/icons';
import { render } from '@testing-library/react';
import * as React from 'react';

import { Icon } from '../Icon';

import { BulletText } from './BulletText';

const CustomBullet = () => (
	<span>
		<Icon size={14} icon={CheckIcon} />
	</span>
);

describe('<BulletText />', () => {
	it('should not throw', () =>
		expect(() => render(<BulletText />)).not.toThrow());

	it.skip('should pass on className to dom element', () => {
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
				<BulletText variant="primary" bullet="?">
					Hello World!
				</BulletText>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot for secondary bullet text with custom bullet character', () => {
		expect(
			render(
				<BulletText variant="secondary" bullet="?">
					Hello World!
				</BulletText>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot for ordered bullet text', () => {
		expect(
			render(
				<BulletText ordered variant="primary" bullet="?">
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

	it('should pass the children a Text element', () => {
		expect(
			render(<BulletText>Hello World!</BulletText>).container,
		).toHaveTextContent('Hello World!');
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
