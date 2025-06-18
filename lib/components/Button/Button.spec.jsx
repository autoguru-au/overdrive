import { AccountBoxIcon } from '@autoguru/icons';
import { render } from '@testing-library/react';
import * as React from 'react';

import { Icon } from '../Icon';

import { Button } from './Button';
import * as styles from './Button.css';

describe('<Button />', () => {
	it('should not throw', () =>
		expect(() => render(<Button />)).not.toThrow());

	it('should match snapshot for default button', () => {
		expect(render(<Button />).container.firstChild).toMatchSnapshot();
	});

	it('should pass on className to dom element', () => {
		expect(
			render(<Button className="button-class" />).container.firstChild
				.firstChild,
		).toHaveClass('button-class');
	});

	it('should have correct test ID data attribute', () => {
		expect(
			render(<Button testId="test-button" />).container.firstChild
				.firstChild,
		).toHaveAttribute('data-testid', 'test-button');
	});

	describe('when as button', () => {
		it('should use html button element by default', () => {
			expect(render(<Button />).container.firstChild).toMatchSnapshot();
		});
	});

	describe('when custom component', () => {
		it('should use html anchor element if href value exists', () => {
			expect(
				render(<Button is={<a href="abc" />} />).container.firstChild,
			).toMatchSnapshot();
		});

		it('should render passed in component', () => {
			expect(
				render(<Button is={<a href="/abcd" />}>Link button</Button>)
					.container.firstChild.firstChild,
			).toHaveAttribute('href', '/abcd');
		});
	});

	describe('when colour variants', () => {
		it('should match snapshot for Primary button', () => {
			expect(
				render(<Button variant="primary" />).container.firstChild,
			).toMatchSnapshot();
		});

		it('should apply Primary variant styles', () => {
			expect(
				render(<Button variant="primary" />).container.firstChild
					.firstChild,
			).toHaveClass(styles.button({ intent: 'primary' }));
		});

		it('should match snapshot for Secondary button', () => {
			expect(
				render(<Button variant="secondary" />).container.firstChild,
			).toMatchSnapshot();
		});

		it('should apply Secondary variant styles', () => {
			expect(
				render(<Button variant="secondary" />).container.firstChild
					.firstChild,
			).toHaveClass(styles.button({ intent: 'secondary' }));
		});

		it('should match snapshot for Danger button', () => {
			expect(
				render(<Button variant="danger" />).container.firstChild,
			).toMatchSnapshot();
		});

		it('should apply Danger variant styles', () => {
			expect(
				render(<Button variant="danger" />).container.firstChild
					.firstChild,
			).toHaveClass(styles.button({ intent: 'danger' }));
		});
	});

	describe('when size variant', () => {
		it('should match snapshot for small button', () => {
			expect(
				render(<Button size="small" />).container.firstChild,
			).toMatchSnapshot();
		});

		it('should match snapshot for medium button', () => {
			expect(
				render(<Button size="medium" />).container.firstChild,
			).toMatchSnapshot();
		});
	});

	describe('when rounded', () => {
		it('should match snapshot', () => {
			expect(
				render(<Button rounded />).container.firstChild,
			).toMatchSnapshot();
		});
	});

	describe('when isFullWidth', () => {
		it('should match snapshot', () => {
			expect(
				render(<Button isFullWidth />).container.firstChild,
			).toMatchSnapshot();
		});
	});

	describe('when loading', () => {
		it('should match snapshot for default button', () => {
			expect(
				render(<Button isLoading />).container.firstChild,
			).toMatchSnapshot();
		});

		it('should match snapshot for small button', () => {
			expect(
				render(<Button isLoading size="small" />).container.firstChild,
			).toMatchSnapshot();
		});

		it('should match snapshot for medium button', () => {
			expect(
				render(<Button isLoading size="medium" />).container.firstChild,
			).toMatchSnapshot();
		});

		it('should not apply loading styles to default button', () => {
			expect(render(<Button />).container.firstChild).not.toHaveAttribute(
				'data-loading',
			);
		});

		it('should apply loading styles', () => {
			expect(
				render(<Button isLoading />).container.firstChild.firstChild,
			).toHaveAttribute('data-loading');
		});
	});

	describe('when icon only', () => {
		it('should size to 20', () => {
			const { container } = render(
				<Button>
					<Icon icon={AccountBoxIcon} />
				</Button>,
			);

			expect(container.querySelectorAll('svg').length).toBe(1);
		});
	});
});
