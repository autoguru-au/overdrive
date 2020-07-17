import { render } from '@testing-library/react';
import * as React from 'react';

import { Meta } from './Meta';

const TestIcon = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path d="M183.253 353.707L280.96 256l-97.707-97.92 30.08-30.08 128 128-128 128-30.08-30.293z" />
	</svg>
);

describe('<Meta />', () => {
	it('should not throw', () =>
		expect(() => render(<Meta />).container.firstChild).not.toThrow());

	it('should match snapshot with label, icon for Primary variant', () => {
		expect(
			render(
				<Meta icon={TestIcon} label="Hello World!" variant="primary" />,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot with label, icon for Secondary variant', () => {
		expect(
			render(
				<Meta
					icon={TestIcon}
					label="Hello World!"
					variant="secondary"
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});
});
