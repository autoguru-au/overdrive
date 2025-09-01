import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

	it('creates and displays a default toast', async () => {
		const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

		render(
			<ToastProvider>
				<TestComponent />
			</ToastProvider>,
		);

		const button = screen.getByTestId('default-toast');
		await user.click(button);

		// Toast should appear
		expect(screen.getByText('Test message')).toBeInTheDocument();
	});

	it('creates and displays a success toast', async () => {
		const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

		render(
			<ToastProvider>
				<TestComponent />
			</ToastProvider>,
		);

		const button = screen.getByTestId('success-toast');
		await user.click(button);

		// Toast should appear
		expect(screen.getByText('Success message')).toBeInTheDocument();
	});

	it('creates and displays a danger toast', async () => {
		const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

		render(
			<ToastProvider>
				<TestComponent />
			</ToastProvider>,
		);

		const button = screen.getByTestId('danger-toast');
		await user.click(button);

		// Toast should appear
		expect(screen.getByText('Error message')).toBeInTheDocument();
	});

	it('creates and displays a warning toast', async () => {
		const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

		render(
			<ToastProvider>
				<TestComponent />
			</ToastProvider>,
		);

		const button = screen.getByTestId('warning-toast');
		await user.click(button);

		// Toast should appear
		expect(screen.getByText('Warning message')).toBeInTheDocument();
	});

	it('handles custom duration', async () => {
		const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

		render(
			<ToastProvider>
				<TestComponent />
			</ToastProvider>,
		);

		const button = screen.getByTestId('custom-duration-toast');
		await user.click(button);

		// Toast should appear
		expect(screen.getByText('Custom duration')).toBeInTheDocument();
	});

	it('removes toast after default duration', async () => {
		const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

		render(
			<ToastProvider>
				<TestComponent />
			</ToastProvider>,
		);

		const button = screen.getByTestId('default-toast');
		await user.click(button);

		// Toast should appear
		expect(screen.getByText('Test message')).toBeInTheDocument();

		// Fast forward time by default duration (5000ms)
		act(() => {
			vi.advanceTimersByTime(5000);
		});

		// Toast should be removed
		await waitFor(() => {
			expect(screen.queryByText('Test message')).not.toBeInTheDocument();
		});
	});

	it('removes toast after custom duration', async () => {
		const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

		render(
			<ToastProvider>
				<TestComponent />
			</ToastProvider>,
		);

		const button = screen.getByTestId('custom-duration-toast');
		await user.click(button);

		// Toast should appear
		expect(screen.getByText('Custom duration')).toBeInTheDocument();

		// Fast forward time by custom duration (1000ms)
		act(() => {
			vi.advanceTimersByTime(1000);
		});

		// Toast should be removed
		await waitFor(() => {
			expect(
				screen.queryByText('Custom duration'),
			).not.toBeInTheDocument();
		});
	});

	it('handles multiple toasts', async () => {
		const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

		render(
			<ToastProvider>
				<TestComponent />
			</ToastProvider>,
		);

		// Create multiple toasts
		await user.click(screen.getByTestId('default-toast'));
		await user.click(screen.getByTestId('success-toast'));
		await user.click(screen.getByTestId('danger-toast'));

		// All toasts should appear
		expect(screen.getByText('Test message')).toBeInTheDocument();
		expect(screen.getByText('Success message')).toBeInTheDocument();
		expect(screen.getByText('Error message')).toBeInTheDocument();
	});

	it('allows toast dismissal via close button', async () => {
		const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

		render(
			<ToastProvider>
				<TestComponent />
			</ToastProvider>,
		);

		const button = screen.getByTestId('default-toast');
		await user.click(button);

		// Toast should appear
		expect(screen.getByText('Test message')).toBeInTheDocument();

		// Find and click the close button
		const closeButton = screen.getByRole('button', { name: /close/i });
		await user.click(closeButton);

		// Toast should be removed
		await waitFor(() => {
			expect(screen.queryByText('Test message')).not.toBeInTheDocument();
		});
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

	it('renders toast with JSX content', async () => {
		const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

		const ComponentWithJSXToast = () => {
			const toast = useToast();

			return (
				<button
					onClick={() =>
						toast(
							<span>
								JSX <strong>content</strong>
							</span>,
						)
					}
					data-testid="jsx-toast"
				>
					JSX Toast
				</button>
			);
		};

		render(
			<ToastProvider>
				<ComponentWithJSXToast />
			</ToastProvider>,
		);

		const button = screen.getByTestId('jsx-toast');
		await user.click(button);

		// Should render JSX content
		expect(screen.getByText('JSX')).toBeInTheDocument();
		expect(screen.getByText('content')).toBeInTheDocument();
	});
});
