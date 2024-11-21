import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';

import { EChangeDirection, SimplePagination } from './SimplePagination';

describe('<SimplePagination />', () => {
	it('should not throw', () =>
		expect(() => render(<SimplePagination />)).not.toThrow());

	it('should not throw when onChange callback is undefined', () => {
		const { getByLabelText } = render(
			<SimplePagination hasPrevious hasNext />,
		);

		expect(() => {
			fireEvent.click(getByLabelText('previous page'));
		}).not.toThrow();
	});

	it('should match snapshot for hasNext', () => {
		expect(
			render(<SimplePagination hasNext />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot for hasPrevious', () => {
		expect(
			render(<SimplePagination hasPrevious />).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot for hasNext and hasPrevious', () => {
		expect(
			render(<SimplePagination hasPrevious hasNext />).container
				.firstChild,
		).toMatchSnapshot();
	});

	it('should fire change with the correct change direction for next button click', () => {
		const spyedCallback = jest.fn();

		const { getByLabelText } = render(
			<SimplePagination hasPrevious hasNext onChange={spyedCallback} />,
		);

		fireEvent.click(getByLabelText('next page'));

		expect(spyedCallback).toHaveBeenCalledWith(EChangeDirection.Next);
	});

	it('should not fire change for next direction if hasNext is disabled but clicked', () => {
		const spyedCallback = jest.fn();

		const { getByLabelText } = render(
			<SimplePagination hasPrevious onChange={spyedCallback} />,
		);

		fireEvent.click(getByLabelText('next page'));

		expect(spyedCallback).not.toHaveBeenCalledWith(EChangeDirection.Next);
	});

	it('should fire change with the correct change direction for previous button click', () => {
		const spyedCallback = jest.fn();

		const { getByLabelText } = render(
			<SimplePagination hasPrevious hasNext onChange={spyedCallback} />,
		);

		fireEvent.click(getByLabelText('previous page'));

		expect(spyedCallback).toHaveBeenCalledWith(EChangeDirection.Previous);
	});

	it('should not fire change for previous direction if hasPrevious is disabled but clicked', () => {
		const spyedCallback = jest.fn();

		const { getByLabelText } = render(
			<SimplePagination hasNext onChange={spyedCallback} />,
		);

		fireEvent.click(getByLabelText('previous page'));

		expect(spyedCallback).not.toHaveBeenCalledWith(
			EChangeDirection.Previous,
		);
	});
});
