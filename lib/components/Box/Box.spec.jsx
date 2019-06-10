import React from 'react';
import { mount, shallow } from 'enzyme';
import { Box } from './Box';
import { EBoxVariant } from '.';

describe('<Box />', () => {
	it('should not throw', () => expect(() => shallow(<Box />)).not.toThrow());

	it('should pass on className to dom element', () => {
		const box = mount(<Box className="box-class" />);
		expect(box.hasClass('box-class')).toBeTruthy();
	});

	it('should match snapshot for default Box', () => {
		expect(shallow(<Box />)).toMatchSnapshot();
	});

	it('should match snapshot for distance 1 with rounder corners', () => {
		expect(shallow(<Box variant={EBoxVariant.four} />)).toMatchSnapshot();
	});

	it('should match snapshot for distance 2', () => {
		expect(shallow(<Box distance={2} />)).toMatchSnapshot();
	});

	it('should match snapshot for distance 3', () => {
		expect(shallow(<Box distance={3} />)).toMatchSnapshot();
	});

	it('should apply distance 0 styles', () => {
		const box = shallow(<Box distance={0} />);
		expect(box.hasClass('distance--0')).toBeTruthy();
	});

	it('should apply distance 1 styles', () => {
		const box = shallow(<Box distance={1} />);
		expect(box.hasClass('distance--1')).toBeTruthy();
	});

	it('should apply distance 2 styles', () => {
		const box = shallow(<Box distance={2} />);
		expect(box.hasClass('distance--2')).toBeTruthy();
	});

	it('should apply distance 3 styles', () => {
		const box = shallow(<Box distance={3} />);
		expect(box.hasClass('distance--3')).toBeTruthy();
	});

	it('should apply passed stroke width styles', () => {
		const box = shallow(<Box strokeWidth={4} />);
		expect(box.hasClass('strokeWidth--4')).toBeTruthy();
	});
});
