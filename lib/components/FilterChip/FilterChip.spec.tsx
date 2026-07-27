import { render } from '@testing-library/react';
import React from 'react';

import { FilterChip } from '.';

describe('<FilterChip />', () => {
	it('should not throw', () => {
		expect(() => render(<FilterChip label="Vehicle type:" />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(
			render(
				<FilterChip
					label="Vehicle type:"
					value="Truck"
					onClick={() => {}}
					onRemove={() => {}}
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should render a static element when given no handlers', () => {
		const { container } = render(<FilterChip label="Truck" type="simple" />);

		expect(container.querySelectorAll('button')).toHaveLength(0);
	});

	it('should render sibling buttons, never nested ones', () => {
		const { container } = render(
			<FilterChip
				label="Vehicle type:"
				value="Truck"
				onClick={() => {}}
				onRemove={() => {}}
			/>,
		);

		expect(container.querySelectorAll('button')).toHaveLength(2);
		expect(container.querySelector('button button')).toBeNull();
	});

	it('should not render a remove button for the add chip', () => {
		const { container } = render(
			<FilterChip
				label="Add Filter"
				type="add"
				onClick={() => {}}
				onRemove={() => {}}
			/>,
		);

		expect(container.querySelectorAll('button')).toHaveLength(1);
	});
});
