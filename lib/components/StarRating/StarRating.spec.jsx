import React from 'react';
import { mount, render, shallow } from 'enzyme';
import { EStarRatingSize, StarRating } from './';

const getFullStarsNum = el => {
	return el.find('.fullStar').length;
};
const getHalfStarsNum = el => {
	return el.find('.halfStar').length;
};
const getEmptyStarsNum = el => {
	return el.find('.emptyStar').length;
};

describe('<StarRating />', () => {
	it('should not throw', () =>
		expect(() => render(<StarRating />)).not.toThrow());

	it('should match snapshot without value', () => {
		expect(render(<StarRating />)).toMatchSnapshot();
	});

	it('should match snapshot with value', () => {
		expect(render(<StarRating rating={2.7} />)).toMatchSnapshot();
	});

	it('should match snapshot with label', () => {
		const rating = render(
			<StarRating rating={3.8} label={'Hello World!'} />,
		);
		expect(rating).toMatchSnapshot();
	});

	it('should match snapshot for small size', () => {
		const rating = render(
			<StarRating
				rating={3.8}
				label={'Hello World!'}
				size={EStarRatingSize.Small}
			/>,
		);
		expect(rating).toMatchSnapshot();
	});

	it('should add a span dom element', () => {
		const rating = shallow(
			<StarRating
				rating={2.6}
				label={'Hello World!'}
				size={EStarRatingSize.Small}
			/>,
		);
		expect(rating.type()).toEqual(`span`);
	});

	it('should pass on className to dom element', () => {
		const rating = shallow(<StarRating className="rating-class" />);
		expect(
			rating
				.find('span')
				.at(0)
				.hasClass('rating-class'),
		).toBeTruthy();
	});

	it('should add a span element inside with the rating value if label is not provided value', () => {
		const rating = mount(<StarRating rating={4.1} />);
		expect(
			rating
				.find('span')
				.at(2)
				.text(),
		).toEqual('4.1');
		rating.unmount();
	});

	it('should add a span element inside with the label text value', () => {
		const rating = mount(<StarRating label={'Hello World!'} />);
		expect(
			rating
				.find('span')
				.at(2)
				.text(),
		).toEqual('Hello World!');
		rating.unmount();
	});

	it('should have correct star combination for rating 0', () => {
		const rating = shallow(<StarRating rating={0} />);

		getFullStarsNum(rating);
		expect(getFullStarsNum(rating)).toEqual(0);
		expect(getHalfStarsNum(rating)).toEqual(0);
		expect(getEmptyStarsNum(rating)).toEqual(5);
	});

	it('should have correct star combination for rating 1', () => {
		const rating = shallow(<StarRating rating={1} />);

		getFullStarsNum(rating);
		expect(getFullStarsNum(rating)).toEqual(1);
		expect(getHalfStarsNum(rating)).toEqual(0);
		expect(getEmptyStarsNum(rating)).toEqual(4);
	});

	it('should have correct star combination for rating 2', () => {
		const rating = shallow(<StarRating rating={2} />);

		getFullStarsNum(rating);
		expect(getFullStarsNum(rating)).toEqual(2);
		expect(getHalfStarsNum(rating)).toEqual(0);
		expect(getEmptyStarsNum(rating)).toEqual(3);
	});

	it('should have correct star combination for rating 3', () => {
		const rating = shallow(<StarRating rating={3} />);

		getFullStarsNum(rating);
		expect(getFullStarsNum(rating)).toEqual(3);
		expect(getHalfStarsNum(rating)).toEqual(0);
		expect(getEmptyStarsNum(rating)).toEqual(2);
	});

	it('should have correct star combination for rating 4', () => {
		const rating = shallow(<StarRating rating={4} />);

		getFullStarsNum(rating);
		expect(getFullStarsNum(rating)).toEqual(4);
		expect(getHalfStarsNum(rating)).toEqual(0);
		expect(getEmptyStarsNum(rating)).toEqual(1);
	});

	it('should have correct star combination for rating 5', () => {
		const rating = shallow(<StarRating rating={5} />);

		getFullStarsNum(rating);
		expect(getFullStarsNum(rating)).toEqual(5);
		expect(getHalfStarsNum(rating)).toEqual(0);
		expect(getEmptyStarsNum(rating)).toEqual(0);
	});

	it('should round down to 0 for decimals lower than 0.2', () => {
		const rating = shallow(<StarRating rating={3.1} />);

		getFullStarsNum(rating);
		expect(getFullStarsNum(rating)).toEqual(3);
		expect(getHalfStarsNum(rating)).toEqual(0);
		expect(getEmptyStarsNum(rating)).toEqual(2);
	});

	it('should round down to 0 for decimals equal to 0.2', () => {
		const rating = shallow(<StarRating rating={4.2} />);

		getFullStarsNum(rating);
		expect(getFullStarsNum(rating)).toEqual(4);
		expect(getHalfStarsNum(rating)).toEqual(0);
		expect(getEmptyStarsNum(rating)).toEqual(1);
	});

	it('should round down to 0.5 for decimals larger than 0.2 and smaller 0.5', () => {
		const rating = shallow(<StarRating rating={2.3} />);

		getFullStarsNum(rating);
		expect(getFullStarsNum(rating)).toEqual(2);
		expect(getHalfStarsNum(rating)).toEqual(1);
		expect(getEmptyStarsNum(rating)).toEqual(2);
	});

	it('should keep 0.5 decimals', () => {
		const rating = shallow(<StarRating rating={1.5} />);

		getFullStarsNum(rating);
		expect(getFullStarsNum(rating)).toEqual(1);
		expect(getHalfStarsNum(rating)).toEqual(1);
		expect(getEmptyStarsNum(rating)).toEqual(3);
	});

	it('should round u to 1 for decimals equal to 0.8', () => {
		const rating = shallow(<StarRating rating={4.8} />);

		getFullStarsNum(rating);
		expect(getFullStarsNum(rating)).toEqual(5);
		expect(getHalfStarsNum(rating)).toEqual(0);
		expect(getEmptyStarsNum(rating)).toEqual(0);
	});

	it('should round up to 1 for decimals larger than 0.8', () => {
		const rating = shallow(<StarRating rating={3.9} />);

		getFullStarsNum(rating);
		expect(getFullStarsNum(rating)).toEqual(4);
		expect(getHalfStarsNum(rating)).toEqual(0);
		expect(getEmptyStarsNum(rating)).toEqual(1);
	});
});
