import { fireEvent, render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import * as React from 'react';

import { useTooltip } from './useTooltip';

describe('useTooltip', () => {
	it('should return initial state', () => {
		const { result } = renderHook(() => useTooltip());

		expect(result.current.isOpen).toBe(false);
		expect(result.current.tooltipId).toBeDefined();
		expect(result.current.triggerRef).toBeDefined();
		expect(result.current.tooltipRef).toBeDefined();
		expect(result.current.triggerProps).toBeDefined();
		expect(result.current.tooltipBoxProps).toBeDefined();
	});

	it('should handle controlled state', () => {
		const { result } = renderHook(() => useTooltip({ isOpen: true }));

		expect(result.current.isOpen).toBe(true);
	});

	it('should handle hover interactions', () => {
		const TestComponent = () => {
			const { isOpen, triggerRef, triggerProps, tooltipBoxProps } =
				useTooltip();
			return (
				<div>
					<div
						ref={triggerRef}
						{...triggerProps}
						data-testid="trigger"
					>
						Trigger
					</div>
					{isOpen && (
						<div {...tooltipBoxProps} data-testid="tooltip">
							<span>Tooltip</span>
						</div>
					)}
				</div>
			);
		};

		const { getByTestId, queryByTestId } = render(<TestComponent />);
		const trigger = getByTestId('trigger');

		// Initially closed
		expect(queryByTestId('tooltip')).toBeNull();

		// Open on mouse enter
		fireEvent.mouseEnter(trigger);
		expect(getByTestId('tooltip')).toBeInTheDocument();

		// Close on mouse leave (after delay)
		act(() => {
			fireEvent.mouseLeave(trigger);
		});

		// Should still be open immediately after mouse leave
		expect(getByTestId('tooltip')).toBeInTheDocument();
	});

	it('should handle focus interactions', () => {
		const TestComponent = () => {
			const { isOpen, triggerRef, triggerProps, tooltipBoxProps } =
				useTooltip();
			return (
				<div>
					<button
						ref={triggerRef}
						{...triggerProps}
						data-testid="trigger"
					>
						Trigger
					</button>
					{isOpen && (
						<div {...tooltipBoxProps} data-testid="tooltip">
							<span>Tooltip</span>
						</div>
					)}
				</div>
			);
		};

		const { getByTestId, queryByTestId } = render(<TestComponent />);
		const trigger = getByTestId('trigger');

		// Initially closed
		expect(queryByTestId('tooltip')).toBeNull();

		// Open on focus
		fireEvent.focus(trigger);
		expect(getByTestId('tooltip')).toBeInTheDocument();

		// Close on blur
		fireEvent.blur(trigger);
		expect(queryByTestId('tooltip')).toBeNull();
	});

	it('should call onOpenChange callback', () => {
		const onOpenChange = vi.fn();
		const { result } = renderHook(() => useTooltip({ onOpenChange }));

		act(() => {
			result.current.triggerProps.onMouseEnter();
		});

		expect(onOpenChange).toHaveBeenCalledWith(true);

		act(() => {
			result.current.triggerProps.onBlur();
		});

		expect(onOpenChange).toHaveBeenCalledWith(false);
	});

	it('should auto-close after specified time', () => {
		vi.useFakeTimers();

		const TestComponent = () => {
			const { isOpen, triggerRef, triggerProps, tooltipBoxProps } =
				useTooltip({ closeAfter: 1000 });
			return (
				<div>
					<div
						ref={triggerRef}
						{...triggerProps}
						data-testid="trigger"
					>
						Trigger
					</div>
					{isOpen && (
						<div {...tooltipBoxProps} data-testid="tooltip">
							<span>Tooltip</span>
						</div>
					)}
				</div>
			);
		};

		const { getByTestId, queryByTestId } = render(<TestComponent />);
		const trigger = getByTestId('trigger');

		// Open tooltip
		fireEvent.mouseEnter(trigger);
		expect(getByTestId('tooltip')).toBeInTheDocument();

		// Fast-forward time
		act(() => {
			vi.advanceTimersByTime(1000);
		});

		// Should be closed
		expect(queryByTestId('tooltip')).toBeNull();

		vi.useRealTimers();
	});
});
