import { render, screen } from '@testing-library/react';
import React from 'react';

import { RangeMeter, type RangeMeterProps } from '.';

const props: RangeMeterProps = {
	title: 'Historical range',
	value: 171,
	min: 152.5,
	max: 362.5,
	zones: [
		{ intent: 'danger', end: 170 },
		{ intent: 'warning', end: 194.32 },
		{ intent: 'success', end: 300.92 },
		{ intent: 'warning', end: 345 },
		{ intent: 'danger', end: 362.5 },
	],
	valueText: '$171.00, 12% below the historical range',
	footer: '$194.32 – $300.92',
};

describe('<RangeMeter />', () => {
	// The first test, so that the `useId` values in the snapshot do not
	// change with the other tests.
	it('should match the snapshot', () => {
		expect(
			render(<RangeMeter {...props} />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should not throw', () => {
		expect(() => render(<RangeMeter {...props} />)).not.toThrow();
	});

	it('gives the meter a name, a description and the value', () => {
		render(<RangeMeter {...props} />);

		const meter = screen.getByRole('meter', { name: 'Historical range' });
		expect(meter).toHaveAccessibleDescription('$194.32 – $300.92');
		expect(meter).toHaveAttribute('aria-valuenow', '171');
		expect(meter).toHaveAttribute('aria-valuemin', '152.5');
		expect(meter).toHaveAttribute('aria-valuemax', '362.5');
		expect(meter).toHaveAttribute(
			'aria-valuetext',
			'$171.00, 12% below the historical range',
		);
	});

	it('takes the name from aria-label when there is no title', () => {
		render(
			<RangeMeter
				{...props}
				aria-label="Quoted price"
				footer={undefined}
				title={undefined}
			/>,
		);

		const meter = screen.getByRole('meter', { name: 'Quoted price' });
		expect(meter).not.toHaveAttribute('aria-labelledby');
		expect(meter).not.toHaveAttribute('aria-describedby');
	});

	it('draws one zone for each zone in the range', () => {
		const { container } = render(<RangeMeter {...props} />);

		const zones = container.querySelector('[role="meter"]')?.children[0];
		expect(zones?.children).toHaveLength(5);
	});

	it('keeps aria-valuenow in the range when the value is out of it', () => {
		render(<RangeMeter {...props} value={500} />);

		expect(screen.getByRole('meter')).toHaveAttribute(
			'aria-valuenow',
			'362.5',
		);
	});

	it('hides the track and keeps the value text when the value is not a number', () => {
		const { container } = render(
			<RangeMeter {...props} value={Number.NaN} valueText="No quote" />,
		);

		expect(screen.queryByRole('meter')).not.toBeInTheDocument();
		expect(screen.getByText('No quote')).toBeInTheDocument();
		// The track holds the zones only, and no marker.
		expect(
			container.querySelector('[aria-hidden="true"]')?.children,
		).toHaveLength(1);
	});

	it('gives an empty range one value', () => {
		render(<RangeMeter {...props} max={250} min={250} />);

		const meter = screen.getByRole('meter');
		expect(meter).toHaveAttribute('aria-valuemin', '250');
		expect(meter).toHaveAttribute('aria-valuemax', '250');
		expect(meter).toHaveAttribute('aria-valuenow', '250');
	});

	it('passes testId and className to the root', () => {
		const { container } = render(
			<RangeMeter {...props} className="custom" testId="meter" />,
		);

		const root = container.querySelector(
			'[data-od-component="range-meter"]',
		);
		expect(root).toHaveAttribute('data-testid', 'meter');
		expect(root).toHaveClass('custom');
	});
});
