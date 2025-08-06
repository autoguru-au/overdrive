import { render } from '@testing-library/react';
import * as React from 'react';

import { Stack } from './Stack';

describe('Stack className issue test', () => {
	it('should properly handle className prop', () => {
		const { container } = render(
			<Stack className="my-custom-class">
				<div>Item 1</div>
				<div>Item 2</div>
			</Stack>,
		);

		// Log the HTML output to see what's actually rendered
		console.log('HTML output:');
		console.log(container.innerHTML);

		// Check if the className prop value appears in the output
		const hasCustomClass = container.innerHTML.includes('my-custom-class');
		const hasLiteralClassName = container.innerHTML.includes('className');

		console.log('Has custom class "my-custom-class":', hasCustomClass);
		console.log('Has literal "className" string:', hasLiteralClassName);

		// The custom class should be present
		expect(hasCustomClass).toBe(true);
		// The literal string "className" should NOT be present 
		expect(hasLiteralClassName).toBe(false);
	});
});