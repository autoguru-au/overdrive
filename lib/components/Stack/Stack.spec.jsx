import { render } from '@testing-library/react';
import * as React from 'react';

import { Stack } from './Stack';

describe('<Stack />', () => {
	it('should not throw', () => {
		expect(() => render(<Stack />)).not.toThrow();
	});

	it('should match the snapshot', () => {
		expect(render(<Stack />).container.firstChild).toMatchSnapshot();
	});

	it('should correctly handle fragment nodes', () => {
		const isEnabled = true;

		const { container } = render(
			<Stack>
				<p>line 0</p>
				{isEnabled && (
					<>
						<p>Line 1</p>
						<p>Line 2</p>
						<p>Line 3</p>
					</>
				)}
				<p>line 4</p>
			</Stack>,
		);
		expect(container.firstChild).toMatchSnapshot();
	});

	it('should handle className prop correctly', () => {
		const { container } = render(
			<Stack className="custom-stack-class">
				<div>Item 1</div>
				<div>Item 2</div>
			</Stack>,
		);

		const stackElement = container.querySelector(
			'[data-od-component="stack"]',
		);
		expect(stackElement).toHaveClass('custom-stack-class');
	});

	it('should handle className prop with dividers correctly', () => {
		const { container } = render(
			<Stack className="custom-stack-class" dividers>
				<div>Item 1</div>
				<div>Item 2</div>
			</Stack>,
		);

		const stackElement = container.querySelector(
			'[data-od-component="stack"]',
		);
		expect(stackElement).toHaveClass('custom-stack-class');
		// Verify both the custom class and divider styles are applied
		expect(stackElement.className).toContain('custom-stack-class');
		expect(stackElement.className).toContain('stackWithDividers');
	});
});
