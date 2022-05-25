import { render } from '@testing-library/react';
import * as React from 'react';

import { StarRating } from './StarRating';

import * as styles from './StarRating.css';
const getStarsNum = (el) => {
	return el.querySelectorAll(`.${styles.star.default}`).length;
};

const getEmptyStarsNum = (el) => {
	return el.querySelectorAll(`.${styles.star.empty}`).length;
};

describe('<StarRating />', () => {
	it('should not throw', () =>
		expect(() => render(<StarRating />)).not.toThrow());

	it('should match snapshot without value', () => {
		expect(render(<StarRating />).container.firstChild).toMatchSnapshot();
	});

	it('should match snapshot with value', () => {
		expect(
			render(<StarRating rating={2.7} />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot with label', () => {
		expect(
			render(<StarRating rating={3.8} label="Hello World!" />).container
				.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot for small size', () => {
		expect(
			render(
				<StarRating
					rating={3.8}
					label="Hello World!"
					size='small'
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should pass on className to dom element', () => {
		const { container } = render(<StarRating rating={4.1} className="rating-class" />);
		expect(container.firstChild).toHaveClass('rating-class');
	});

	it('should add a span element inside with the rating value if label is not provided value', () => {
		const { container } = render(<StarRating rating={4.1} />);
		expect(container.querySelector('span')).toHaveTextContent(
			'4.1',
		);
	});

	it('should add a span element inside with the label text value', () => {
		const { container } = render(<StarRating label="Hello World!" />);
		expect(container.querySelector('span')).toHaveTextContent(
			'Hello World!',
		);
	});

	it('should have correct star combination for rating 0', () => {
		const { container: rating } = render(<StarRating rating={0} />);

		expect(getStarsNum(rating)).toEqual(5);
		expect(getEmptyStarsNum(rating)).toEqual(5);
	});

	it('should have correct star combination for rating 1', () => {
		const { container: rating } = render(<StarRating rating={1} />);

		expect(getStarsNum(rating)).toEqual(5);
		expect(getEmptyStarsNum(rating)).toEqual(4);
	});

	it('should have correct star combination for rating 2', () => {
		const { container: rating } = render(<StarRating rating={2} />);

		expect(getStarsNum(rating)).toEqual(5);
		expect(getEmptyStarsNum(rating)).toEqual(3);
	});

	it('should have correct star combination for rating 3', () => {
		const { container: rating } = render(<StarRating rating={3} />);

		expect(getStarsNum(rating)).toEqual(5);
		expect(getEmptyStarsNum(rating)).toEqual(2);
	});

	it('should have correct star combination for rating 4', () => {
		const { container: rating } = render(<StarRating rating={4} />);

		expect(getStarsNum(rating)).toEqual(5);
		expect(getEmptyStarsNum(rating)).toEqual(1);
	});

	it('should have correct star combination for rating 5', () => {
		const { container: rating } = render(<StarRating rating={5} />);

		expect(getStarsNum(rating)).toEqual(5);
		expect(getEmptyStarsNum(rating)).toEqual(0);
	});

	it('should round down to 0 for decimals lower than 0.2', () => {
		const { container: rating } = render(<StarRating rating={3.1} />);

		expect(getStarsNum(rating)).toEqual(5);
		expect(getEmptyStarsNum(rating)).toEqual(2);
	});

	it('should round down to 0 for decimals equal to 0.2', () => {
		const { container: rating } = render(<StarRating rating={4.2} />);

		expect(getStarsNum(rating)).toEqual(5);
		expect(getEmptyStarsNum(rating)).toEqual(1);
	});

	it('should round down to 0.5 for decimals larger than 0.2 and smaller 0.5', () => {
		const { container: rating } = render(<StarRating rating={2.3} />);

		expect(getStarsNum(rating)).toEqual(5);
		expect(getEmptyStarsNum(rating)).toEqual(2);
	});

	it('should keep 0.5 decimals', () => {
		const { container: rating } = render(<StarRating rating={1.5} />);

		expect(getStarsNum(rating)).toEqual(5);
		expect(getEmptyStarsNum(rating)).toEqual(3);
	});

	it('should round u to 1 for decimals equal to 0.8', () => {
		const { container: rating } = render(<StarRating rating={4.8} />);

		expect(getStarsNum(rating)).toEqual(5);
		expect(getEmptyStarsNum(rating)).toEqual(0);
	});

	it('should round up to 1 for decimals larger than 0.8', () => {
		const { container: rating } = render(<StarRating rating={3.9} />);

		expect(getStarsNum(rating)).toEqual(5);
		expect(getEmptyStarsNum(rating)).toEqual(1);
	});
});
