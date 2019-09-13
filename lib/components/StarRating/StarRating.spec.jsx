import { render } from '@testing-library/react';
import React from 'react';

import { EStarRatingSize, StarRating } from '.';

const getFullStarsNum = el => {
	return el.querySelectorAll('.fullStar').length;
};

const getHalfStarsNum = el => {
	return el.querySelectorAll('.halfStar').length;
};

const getEmptyStarsNum = el => {
	return el.querySelectorAll('.emptyStar').length;
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
					size={EStarRatingSize.Small}
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should pass on className to dom element', () => {
		expect(
			render(<StarRating className="rating-class" />).container
				.firstChild,
		).toHaveClass('rating-class');
	});

	it('should add a span element inside with the rating value if label is not provided value', () => {
		const { container } = render(<StarRating rating={4.1} />);
		expect(container.querySelector('span:nth-child(2)')).toHaveTextContent(
			'4.1',
		);
	});

	it('should add a span element inside with the label text value', () => {
		const { container } = render(<StarRating label="Hello World!" />);
		expect(container.querySelector('span:nth-child(2)')).toHaveTextContent(
			'Hello World!',
		);
	});

	it('should have correct star combination for rating 0', () => {
		const { container: rating } = render(<StarRating rating={0} />);

		expect(getFullStarsNum(rating)).toEqual(0);
		expect(getHalfStarsNum(rating)).toEqual(0);
		expect(getEmptyStarsNum(rating)).toEqual(5);
	});

	it('should have correct star combination for rating 1', () => {
		const { container: rating } = render(<StarRating rating={1} />);

		expect(getFullStarsNum(rating)).toEqual(1);
		expect(getHalfStarsNum(rating)).toEqual(0);
		expect(getEmptyStarsNum(rating)).toEqual(4);
	});

	it('should have correct star combination for rating 2', () => {
		const { container: rating } = render(<StarRating rating={2} />);

		expect(getFullStarsNum(rating)).toEqual(2);
		expect(getHalfStarsNum(rating)).toEqual(0);
		expect(getEmptyStarsNum(rating)).toEqual(3);
	});

	it('should have correct star combination for rating 3', () => {
		const { container: rating } = render(<StarRating rating={3} />);

		expect(getFullStarsNum(rating)).toEqual(3);
		expect(getHalfStarsNum(rating)).toEqual(0);
		expect(getEmptyStarsNum(rating)).toEqual(2);
	});

	it('should have correct star combination for rating 4', () => {
		const { container: rating } = render(<StarRating rating={4} />);

		expect(getFullStarsNum(rating)).toEqual(4);
		expect(getHalfStarsNum(rating)).toEqual(0);
		expect(getEmptyStarsNum(rating)).toEqual(1);
	});

	it('should have correct star combination for rating 5', () => {
		const { container: rating } = render(<StarRating rating={5} />);

		expect(getFullStarsNum(rating)).toEqual(5);
		expect(getHalfStarsNum(rating)).toEqual(0);
		expect(getEmptyStarsNum(rating)).toEqual(0);
	});

	it('should round down to 0 for decimals lower than 0.2', () => {
		const { container: rating } = render(<StarRating rating={3.1} />);

		expect(getFullStarsNum(rating)).toEqual(3);
		expect(getHalfStarsNum(rating)).toEqual(0);
		expect(getEmptyStarsNum(rating)).toEqual(2);
	});

	it('should round down to 0 for decimals equal to 0.2', () => {
		const { container: rating } = render(<StarRating rating={4.2} />);

		expect(getFullStarsNum(rating)).toEqual(4);
		expect(getHalfStarsNum(rating)).toEqual(0);
		expect(getEmptyStarsNum(rating)).toEqual(1);
	});

	it('should round down to 0.5 for decimals larger than 0.2 and smaller 0.5', () => {
		const { container: rating } = render(<StarRating rating={2.3} />);

		expect(getFullStarsNum(rating)).toEqual(2);
		expect(getHalfStarsNum(rating)).toEqual(1);
		expect(getEmptyStarsNum(rating)).toEqual(2);
	});

	it('should keep 0.5 decimals', () => {
		const { container: rating } = render(<StarRating rating={1.5} />);

		expect(getFullStarsNum(rating)).toEqual(1);
		expect(getHalfStarsNum(rating)).toEqual(1);
		expect(getEmptyStarsNum(rating)).toEqual(3);
	});

	it('should round u to 1 for decimals equal to 0.8', () => {
		const { container: rating } = render(<StarRating rating={4.8} />);

		expect(getFullStarsNum(rating)).toEqual(5);
		expect(getHalfStarsNum(rating)).toEqual(0);
		expect(getEmptyStarsNum(rating)).toEqual(0);
	});

	it('should round up to 1 for decimals larger than 0.8', () => {
		const { container: rating } = render(<StarRating rating={3.9} />);

		expect(getFullStarsNum(rating)).toEqual(4);
		expect(getHalfStarsNum(rating)).toEqual(0);
		expect(getEmptyStarsNum(rating)).toEqual(1);
	});
});
