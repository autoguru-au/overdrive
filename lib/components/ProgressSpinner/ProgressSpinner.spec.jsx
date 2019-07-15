import React from 'react';
import { render } from '@testing-library/react';
import {
	EProgressSpinnerSize,
	EProgressSpinnerVariant,
	ProgressSpinner,
} from '.';

describe('<ProgressSpinner />', () => {
	it('should not throw', () =>
		expect(() => render(<ProgressSpinner />)).not.toThrow());

	it('should match snapshot', () => {
		expect(
			render(<ProgressSpinner />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should pass on className to dom element', () => {
		expect(
			render(<ProgressSpinner className="progressSpinner-class" />)
				.container.firstChild,
		).toHaveClass('progressSpinner-class');
	});

	it('should add an svg element div inside root div element', () => {
		expect(
			render(<ProgressSpinner />).container.querySelector('svg'),
		).toBeInTheDocument();
	});

	it('should apply Primary variant styles by default', () => {
		expect(render(<ProgressSpinner />).container.firstChild).toHaveClass(
			'variantPrimary',
		);
	});

	it('should apply Primary variant styles', () => {
		expect(
			render(
				<ProgressSpinner variant={EProgressSpinnerVariant.Primary} />,
			).container.firstChild,
		).toHaveClass('variantPrimary');
	});

	it('should apply Secondary variant styles', () => {
		expect(
			render(
				<ProgressSpinner variant={EProgressSpinnerVariant.Secondary} />,
			).container.firstChild,
		).toHaveClass('variantSecondary');
	});

	it('should apply Medium size styles by default', () => {
		expect(render(<ProgressSpinner />).container.firstChild).toHaveClass(
			'sizeMedium',
		);
	});

	it('should apply Small size styles', () => {
		expect(
			render(<ProgressSpinner size={EProgressSpinnerSize.Small} />)
				.container.firstChild,
		).toHaveClass('sizeSmall');
	});

	it('should apply Medium size styles', () => {
		expect(
			render(<ProgressSpinner size={EProgressSpinnerSize.Medium} />)
				.container.firstChild,
		).toHaveClass('sizeMedium');
	});

	it('should apply Large size styles', () => {
		expect(
			render(<ProgressSpinner size={EProgressSpinnerSize.Large} />)
				.container.firstChild,
		).toHaveClass('sizeLarge');
	});
});
