import { act } from '@testing-library/react';

import { toast } from '.';

describe('toast', () => {
	it('should run no problem', () => {
		act(() => {
			toast('test message');
		});

		expect(document.body).toHaveTextContent('message');
	});
});
