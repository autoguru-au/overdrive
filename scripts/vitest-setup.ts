import '@testing-library/jest-dom';
import type * as TestingLibrary from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';

vi.mock('@testing-library/react', async () => {
	const originalModule = await vi.importActual<typeof TestingLibrary>(
		'@testing-library/react',
	);
	const { OverdriveProvider } = await import(
		'../lib/components/OverdriveProvider/OverdriveProvider'
	);
	const { tokens } = await import('../lib/themes/base/tokens');
	const { themeRef } = await import('../lib/themes/base/vars.css');
	const { themeContractVars } = await import('../lib/themes/theme.css');

	return {
		...originalModule,
		render: vi.fn((ui, options) => {
			return originalModule.render(ui, {
				...options,
				wrapper: ({ children }) => {
					return React.createElement(
						OverdriveProvider,
						{
							themeClass: themeRef,
							// @ts-expect-error tokens is not a prop
							tokens,
							vars: themeContractVars,
						},
						children,
					);
				},
			});
		}),
	};
});
