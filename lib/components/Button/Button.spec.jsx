import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';
import { EButtonSize, EButtonVariant } from '.';
import { Icon } from '../Icon';
import { AccountBoxIcon } from '@autoguru/icons';

describe('<Button />', () => {
	it('should not throw', () =>
		expect(() => render(<Button />)).not.toThrow());

	it('should match snapshot for default button', () => {
		expect(render(<Button />).container.firstChild).toMatchSnapshot();
	});

	it('should pass on className to dom element', () => {
		expect(
			render(<Button className="button-class" />).container.firstChild,
		).toHaveClass('button-class');
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
					.container.firstChild,
			).toHaveAttribute('href', '/abcd');
		});
	});

	describe('when colour variants', () => {
		it('should match snapshot for Primary button', () => {
			expect(
				render(<Button variant={EButtonVariant.Primary} />).container
					.firstChild,
			).toMatchSnapshot();
		});

		it('should apply Primary variant styles', () => {
			expect(
				render(<Button variant={EButtonVariant.Primary} />).container
					.firstChild,
			).toHaveClass('variantPrimary');
		});

		it('should match snapshot for Secondary button', () => {
			expect(
				render(<Button variant={EButtonVariant.Secondary} />).container
					.firstChild,
			).toMatchSnapshot();
		});

		it('should apply Secondary variant styles', () => {
			expect(
				render(<Button variant={EButtonVariant.Secondary} />).container
					.firstChild,
			).toHaveClass('variantSecondary');
		});

		it('should match snapshot for Danger button', () => {
			expect(
				render(<Button variant={EButtonVariant.Danger} />).container
					.firstChild,
			).toMatchSnapshot();
		});

		it('should apply Danger variant styles', () => {
			expect(
				render(<Button variant={EButtonVariant.Danger} />).container
					.firstChild,
			).toHaveClass('variantDanger');
		});
	});

	describe('when size variant', () => {
		it('should match snapshot for small button', () => {
			expect(
				render(<Button size={EButtonSize.Small} />).container
					.firstChild,
			).toMatchSnapshot();
		});

		it('should apply small size styles', () => {
			expect(
				render(<Button size={EButtonSize.Small} />).container
					.firstChild,
			).toHaveClass('small');
		});

		it('should match snapshot for medium button', () => {
			expect(
				render(<Button size={EButtonSize.Medium} />).container
					.firstChild,
			).toMatchSnapshot();
		});

		it('should apply medium size styles', () => {
			expect(
				render(<Button size={EButtonSize.Medium} />).container
					.firstChild,
			).toHaveClass('medium');
		});
	});

	describe('when rounded', () => {
		it('should match snapshot', () => {
			expect(
				render(<Button rounded />).container.firstChild,
			).toMatchSnapshot();
		});

		it('should not apply rounded styles to default button', () => {
			expect(render(<Button />).container.firstChild).not.toHaveClass(
				'rounded',
			);
		});

		it('should apply rounded styles', () => {
			expect(render(<Button rounded />).container.firstChild).toHaveClass(
				'rounded',
			);
		});
	});

	describe('when isFullWidth', () => {
		it('should match snapshot', () => {
			expect(
				render(<Button isFullWidth />).container.firstChild,
			).toMatchSnapshot();
		});

		it('should apply styles', () => {
			expect(
				render(<Button isFullWidth />).container.firstChild,
			).toHaveClass('fullWidth');
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
				render(<Button isLoading size={EButtonSize.Small} />).container
					.firstChild,
			).toMatchSnapshot();
		});

		it('should match snapshot for medium button', () => {
			expect(
				render(<Button isLoading size={EButtonSize.Medium} />).container
					.firstChild,
			).toMatchSnapshot();
		});

		it('should not apply loading styles to default button', () => {
			expect(render(<Button />).container.firstChild).not.toHaveClass(
				'loading',
			);
		});

		it('should apply loading styles', () => {
			expect(
				render(<Button isLoading />).container.firstChild,
			).toHaveClass('loading');
		});
	});

	describe('when icon only', () => {
		it('should size to 20', () => {
			const { container } = render(
				<Button>
					<Icon icon={AccountBoxIcon} />
				</Button>,
			);

			expect(
				container.querySelectorAll('svg').item(0).parentNode.style
					.width,
			).toBe('20px');
		});
	});
});
