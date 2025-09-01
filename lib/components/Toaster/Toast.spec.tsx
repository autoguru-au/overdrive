import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';

import { ToastProvider, useToast } from './Toast';

// Mock utils module
vi.mock(
	'../../utils',
	async (importOriginal: () => Promise<typeof import('../../utils')>) => {
		const actual = await importOriginal();
		return {
			...actual,
			isBrowser: true,
		};
	},
);

// Test component that uses the toast hook
const TestComponent = ({ onToastCreated }: { onToastCreated?: () => void }) => {
	const toast = useToast();

	return (
		<div>
			<button
				onClick={() => {
					toast('Test message');
					onToastCreated?.();
				}}
				data-testid="default-toast"
			>
				Default Toast
			</button>
			<button
				onClick={() => {
					toast.success('Success message');
					onToastCreated?.();
				}}
				data-testid="success-toast"
			>
				Success Toast
			</button>
			<button
				onClick={() => {
					toast.danger('Error message');
					onToastCreated?.();
				}}
				data-testid="danger-toast"
			>
				Danger Toast
			</button>
			<button
				onClick={() => {
					toast.warning('Warning message');
					onToastCreated?.();
				}}
				data-testid="warning-toast"
			>
				Warning Toast
			</button>
			<button
				onClick={() => {
					toast('Custom duration', 1000);
					onToastCreated?.();
				}}
				data-testid="custom-duration-toast"
			>
				Custom Duration Toast
			</button>
		</div>
	);
};

describe('Toast', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
		vi.clearAllTimers();
	});

	it('renders ToastProvider without errors', () => {
		render(
			<ToastProvider>
				<div>Test content</div>
			</ToastProvider>,
		);

		expect(screen.getByText('Test content')).toBeInTheDocument();
	});

	it('handles nested ToastProvider correctly', () => {
		render(
			<ToastProvider>
				<ToastProvider>
					<TestComponent />
				</ToastProvider>
			</ToastProvider>,
		);

		// Should render without errors
		expect(screen.getByTestId('default-toast')).toBeInTheDocument();
	});

	it('throws error when useToast is used without ToastProvider', () => {
		// Mock console.error to prevent test output noise
		const consoleSpy = vi
			.spyOn(console, 'error')
			.mockImplementation(() => {});

		expect(() => {
			render(<TestComponent />);
		}).toThrow('No `ToastProvider` setup');

		consoleSpy.mockRestore();
	});
});
