import React from 'react';
import { mount, shallow } from 'enzyme';
import {
	EProgressSpinnerSize,
	EProgressSpinnerVariant,
	ProgressSpinner,
} from '.';

describe('<ProgressSpinner />', () => {
	it('should not throw', () =>
		expect(() => shallow(<ProgressSpinner />)).not.toThrow());

	it('should match snapshot', () => {
		expect(shallow(<ProgressSpinner />)).toMatchSnapshot();
	});

	it('should add a root div element', () => {
		const progressSpinner = mount(<ProgressSpinner />);
		expect(progressSpinner.find('div.root').exists()).toEqual(true);
		progressSpinner.unmount();
	});

	it('should pass on className to dom element', () => {
		const progressSpinner = shallow(
			<ProgressSpinner className="progressSpinner-class" />,
		);
		expect(
			progressSpinner.find('div.root').hasClass('progressSpinner-class'),
		).toBeTruthy();
	});

	it('should add an svg element div inside root div element', () => {
		const progressSpinner = mount(<ProgressSpinner />);
		expect(progressSpinner.find('div.root>svg').exists()).toEqual(true);
		progressSpinner.unmount();
	});

	it('should apply Primary variant styles by default', () => {
		const meta = shallow(<ProgressSpinner />);
		expect(meta.hasClass('variantPrimary')).toBeTruthy();
	});

	it('should apply Primary variant styles', () => {
		const meta = shallow(
			<ProgressSpinner variant={EProgressSpinnerVariant.Primary} />,
		);
		expect(meta.hasClass('variantPrimary')).toBeTruthy();
	});

	it('should apply Secondary variant styles', () => {
		const meta = shallow(
			<ProgressSpinner variant={EProgressSpinnerVariant.Secondary} />,
		);
		expect(meta.hasClass('variantSecondary')).toBeTruthy();
	});

	it('should apply Medium size styles by default', () => {
		const meta = shallow(<ProgressSpinner />);
		expect(meta.hasClass('sizeMedium')).toBeTruthy();
	});

	it('should apply Small size styles', () => {
		const meta = shallow(
			<ProgressSpinner size={EProgressSpinnerSize.Small} />,
		);
		expect(meta.hasClass('sizeSmall')).toBeTruthy();
	});

	it('should apply Medium size styles', () => {
		const meta = shallow(
			<ProgressSpinner size={EProgressSpinnerSize.Medium} />,
		);
		expect(meta.hasClass('sizeMedium')).toBeTruthy();
	});

	it('should apply Large size styles', () => {
		const meta = shallow(
			<ProgressSpinner size={EProgressSpinnerSize.Large} />,
		);
		expect(meta.hasClass('sizeLarge')).toBeTruthy();
	});
});
