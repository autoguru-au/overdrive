import { render } from '@testing-library/react';
import * as React from 'react';

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

	it.skip('should pass on className to dom element', () => {
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

	it.skip('should apply Primary variant styles by default', () => {
		expect(render(<ProgressSpinner />).container.firstChild).toHaveClass(
			'variantPrimary',
		);
	});

	it.skip('should apply Primary variant styles', () => {
		expect(
			render(
				<ProgressSpinner variant={EProgressSpinnerVariant.Primary} />,
			).container.firstChild,
		).toHaveClass('variantPrimary');
	});

	it.skip('should apply Secondary variant styles', () => {
		expect(
			render(
				<ProgressSpinner variant={EProgressSpinnerVariant.Secondary} />,
			).container.firstChild,
		).toHaveClass('variantSecondary');
	});

	it.skip('should apply Medium size styles by default', () => {
		expect(render(<ProgressSpinner />).container.firstChild).toHaveClass(
			'sizeMedium',
		);
	});

	it.skip('should apply Small size styles', () => {
		expect(
			render(<ProgressSpinner size={EProgressSpinnerSize.Small} />)
				.container.firstChild,
		).toHaveClass('sizeSmall');
	});

	it.skip('should apply Medium size styles', () => {
		expect(
			render(<ProgressSpinner size={EProgressSpinnerSize.Medium} />)
				.container.firstChild,
		).toHaveClass('sizeMedium');
	});

	it.skip('should apply Large size styles', () => {
		expect(
			render(<ProgressSpinner size={EProgressSpinnerSize.Large} />)
				.container.firstChild,
		).toHaveClass('sizeLarge');
	});
});
