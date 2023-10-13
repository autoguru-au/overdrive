import { render } from '@testing-library/react';
import * as React from 'react';

import { EditableText } from './EditableText';

describe('<EditableText />', () => {
	it('should not throw', () =>
		expect(() => render(<EditableText />)).not.toThrow());

	it('should match snapshot for default bullet text', () => {
		expect(
			render(
				<EditableText
					type="text"
					colour="primary"
					value="Hello World!"
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot with custom size', () => {
		expect(
			render(<EditableText type="text" size="5" value="Hello World!" />)
				.container.firstChild,
		).toMatchSnapshot();
	});

	it('should match snapshot as date input', () => {
		expect(
			render(
				<EditableText
					type="date"
					colour="primary"
					value="Hello World!"
				/>,
			).container.firstChild,
		).toMatchSnapshot();
	});
});
