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
});
