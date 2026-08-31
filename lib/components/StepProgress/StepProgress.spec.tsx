import { render } from '@testing-library/react';
import * as React from 'react';

import { StepProgress } from './StepProgress';
import { StepProgressItem } from './StepProgressItem';

const STEPS = ['One', 'Two', 'Three'];

describe('<StepProgress />', () => {
	it('should not throw', () =>
		expect(() =>
			render(<StepProgress steps={STEPS} activeStep={1} />),
		).not.toThrow());

	it('should match snapshot', () => {
		expect(
			render(<StepProgress steps={STEPS} activeStep={2} />).container
				.firstChild,
		).toMatchSnapshot();
	});

	it('should mark only the active step as current', () => {
		const { container } = render(
			<StepProgress steps={STEPS} activeStep={2} />,
		);
		const current = container.querySelectorAll('[aria-current="step"]');

		expect(current).toHaveLength(1);
		expect(current[0]).toHaveTextContent('Two');
	});

	it('should draw one connector fewer than it has steps', () => {
		const { container } = render(
			<StepProgress steps={STEPS} activeStep={1} />,
		);

		expect(
			container.querySelectorAll(
				'[data-od-component="step-progress-connector"]',
			),
		).toHaveLength(STEPS.length - 1);
	});

	it('should keep hidden labels in the accessibility tree', () => {
		const { getByText } = render(
			<StepProgress steps={STEPS} activeStep={1} hideLabels />,
		);

		expect(getByText('Two')).toBeInTheDocument();
	});
});

describe('<StepProgressItem />', () => {
	it('should not throw', () =>
		expect(() =>
			render(<StepProgressItem number={1} label="One" />),
		).not.toThrow());

	it('should match snapshot', () => {
		expect(
			render(<StepProgressItem number={1} label="One" selected />)
				.container.firstChild,
		).toMatchSnapshot();
	});
});
