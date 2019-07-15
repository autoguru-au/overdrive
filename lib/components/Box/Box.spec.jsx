import React from 'react';
import { render } from '@testing-library/react';
import { Box } from './Box';
import { EBoxVariant } from '.';

describe('<Box />', () => {
	it('should not throw', () => expect(() => render(<Box />)).not.toThrow());

	it('should pass on className to dom element', () => {
		expect(
			render(<Box className="box-class" />).container.firstChild,
		).toHaveClass('box-class');
	});

	it('should match snapshot for default Box', () => {
		expect(render(<Box />).container.firstChild).toMatchSnapshot();
	});

	it('should match snapshot for distance 1 with rounder corners', () => {
		expect(
			render(<Box variant={EBoxVariant.four} />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot for distance 2', () => {
		expect(
			render(<Box distance={2} />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot for distance 3', () => {
		expect(
			render(<Box distance={3} />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should apply distance 0 styles', () => {
		expect(render(<Box distance={0} />).container.firstChild).toHaveClass(
			'distance--0',
		);
	});

	it('should apply distance 1 styles', () => {
		expect(render(<Box distance={1} />).container.firstChild).toHaveClass(
			'distance--1',
		);
	});

	it('should apply distance 2 styles', () => {
		expect(render(<Box distance={2} />).container.firstChild).toHaveClass(
			'distance--2',
		);
	});

	it('should apply distance 3 styles', () => {
		expect(render(<Box distance={3} />).container.firstChild).toHaveClass(
			'distance--3',
		);
	});

	it('should apply passed stroke width styles', () => {
		expect(
			render(<Box strokeWidth={4} />).container.firstChild,
		).toHaveClass('strokeWidth--4');
	});
});
