import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import type * as TestingLibrary from '@testing-library/react';
import React from 'react';
import { afterEach, vi } from 'vitest';

import theme from '../themes/base';

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
	cleanup();
});

vi.mock('@testing-library/react', async () => {
	const originalModule = await vi.importActual<typeof TestingLibrary>(
		'@testing-library/react',
	);
	const { OverdriveProvider } = await import(
		'../components/OverdriveProvider/OverdriveProvider'
	);

	return {
		...originalModule,
		render: vi.fn((ui, options) => {
			return originalModule.render(ui, {
				...options,
				wrapper: ({ children }) => {
					return React.createElement(
						OverdriveProvider,
						{
							theme,
						},
						children,
					);
				},
			});
		}),
	};
});
