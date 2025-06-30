import { fireEvent, render, renderHook, act } from '@testing-library/react';
import * as React from 'react';

import { EAlignment } from '../../components/Positioner/alignment';

import { useTooltip } from './useTooltip';

const TRIGGER_TEST_ID = 'trigger';
const ARIA_DESCRIBEDBY = 'aria-describedby';

describe('useTooltip', () => {
	it('should return initial state', () => {
		const { result } = renderHook(() => useTooltip({}));

		expect(result.current.isOpen).toBe(false);
		expect(result.current.triggerRef).toBeDefined();
		expect(result.current.triggerProps).toBeDefined();
		expect(result.current.PositionedTooltip).toBeDefined();
		expect(typeof result.current.PositionedTooltip).toBe('function');
	});

	it('should handle controlled state', () => {
		const { result } = renderHook(() => useTooltip({ isOpen: true }));

		expect(result.current.isOpen).toBe(true);
	});

	it('should handle hover interactions', () => {
		const TestComponent = () => {
			const { isOpen, triggerRef, triggerProps, PositionedTooltip } =
				useTooltip({});
			return (
				<div>
					<div
						ref={triggerRef as React.RefObject<HTMLDivElement>}
						{...triggerProps}
						data-testid={TRIGGER_TEST_ID}
					>
						Trigger
					</div>
					{isOpen && <PositionedTooltip label="Tooltip content" />}
				</div>
			);
		};

		const { getByTestId, queryByRole } = render(<TestComponent />);
		const trigger = getByTestId(TRIGGER_TEST_ID);

		// Initially closed
		expect(queryByRole('tooltip')).toBeNull();

		// Open on mouse enter
		fireEvent.mouseEnter(trigger);
		expect(getByTestId(TRIGGER_TEST_ID)).toHaveAttribute(ARIA_DESCRIBEDBY);

		// Close on mouse leave (after delay)
		act(() => {
			fireEvent.mouseLeave(trigger);
		});

		// Should still be open immediately after mouse leave due to delay
		expect(getByTestId(TRIGGER_TEST_ID)).toHaveAttribute(ARIA_DESCRIBEDBY);
	});

	it('should handle focus interactions', () => {
		const FocusTestComponent = () => {
			const { isOpen, triggerRef, triggerProps, PositionedTooltip } =
				useTooltip({});
			return (
				<div>
					<button
						ref={triggerRef as React.RefObject<HTMLButtonElement>}
						{...triggerProps}
						data-testid={TRIGGER_TEST_ID}
					>
						Trigger
					</button>
					{isOpen && <PositionedTooltip label="Tooltip content" />}
				</div>
			);
		};

		const { getByTestId, queryByRole, getByRole } = render(
			<FocusTestComponent />,
		);
		const trigger = getByTestId(TRIGGER_TEST_ID);

		// Initially closed
		expect(queryByRole('tooltip')).toBeNull();

		// Open on focus
		fireEvent.focus(trigger);
		expect(getByRole('tooltip')).toBeInTheDocument();
		expect(trigger).toHaveAttribute(ARIA_DESCRIBEDBY);

		// Close on blur
		fireEvent.blur(trigger);
		expect(queryByRole('tooltip')).toBeNull();
		expect(trigger).not.toHaveAttribute(ARIA_DESCRIBEDBY);
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

		const AutoCloseTestComponent = () => {
			const { isOpen, triggerRef, triggerProps, PositionedTooltip } =
				useTooltip({ closeAfter: 1000 });
			return (
				<div>
					<div
						ref={triggerRef as React.RefObject<HTMLDivElement>}
						{...triggerProps}
						data-testid={TRIGGER_TEST_ID}
					>
						Trigger
					</div>
					{isOpen && <PositionedTooltip label="Tooltip content" />}
				</div>
			);
		};

		const { getByTestId, queryByRole, getByRole } = render(
			<AutoCloseTestComponent />,
		);
		const trigger = getByTestId(TRIGGER_TEST_ID);

		// Open tooltip
		fireEvent.mouseEnter(trigger);
		expect(getByRole('tooltip')).toBeInTheDocument();

		// Fast-forward time
		act(() => {
			vi.advanceTimersByTime(1000);
		});

		// Should be closed
		expect(queryByRole('tooltip')).toBeNull();

		vi.useRealTimers();
	});

	it('should render PositionedTooltip with correct props', () => {
		const PropsTestComponent = () => {
			const { PositionedTooltip } = useTooltip({ isOpen: true });
			return (
				<div>
					<div data-testid={TRIGGER_TEST_ID}>Trigger</div>
					<PositionedTooltip
						label="Test tooltip"
						size="large"
						alignment={EAlignment.LEFT}
						className="custom-class"
					/>
				</div>
			);
		};

		const { getByRole, getByText } = render(<PropsTestComponent />);

		const tooltip = getByRole('tooltip');
		expect(tooltip).toBeInTheDocument();
		expect(getByText('Test tooltip')).toBeInTheDocument();
		expect(tooltip).toHaveClass('custom-class');
	});

	it('should handle mouse leave with delay', () => {
		vi.useFakeTimers();

		const DelayTestComponent = () => {
			const { isOpen, triggerRef, triggerProps, PositionedTooltip } =
				useTooltip({});
			return (
				<div>
					<div
						ref={triggerRef as React.RefObject<HTMLDivElement>}
						{...triggerProps}
						data-testid={TRIGGER_TEST_ID}
					>
						{/* Delay test trigger */}
						Trigger
					</div>
					{isOpen && <PositionedTooltip label="Tooltip content" />}
				</div>
			);
		};

		const { getByTestId, queryByRole, getByRole } = render(
			<DelayTestComponent />,
		);
		const trigger = getByTestId(TRIGGER_TEST_ID);

		// Open tooltip
		fireEvent.mouseEnter(trigger);
		expect(getByRole('tooltip')).toBeInTheDocument();

		// Mouse leave
		fireEvent.mouseLeave(trigger);

		// Should still be open immediately
		expect(getByRole('tooltip')).toBeInTheDocument();

		// Fast-forward through the delay (500ms)
		act(() => {
			vi.advanceTimersByTime(500);
		});

		// Should now be closed
		expect(queryByRole('tooltip')).toBeNull();

		vi.useRealTimers();
	});

	it('should cancel close timer on mouse re-enter', () => {
		vi.useFakeTimers();

		const TimerTestComponent = () => {
			const { isOpen, triggerRef, triggerProps, PositionedTooltip } =
				useTooltip({});
			return (
				<div>
					<button
						ref={triggerRef as React.RefObject<HTMLButtonElement>}
						{...triggerProps}
						data-testid={TRIGGER_TEST_ID}
					>
						{/* Timer test trigger */}
						Trigger
					</button>
					{isOpen && <PositionedTooltip label="Tooltip content" />}
				</div>
			);
		};

		const { getByTestId, getByRole } = render(<TimerTestComponent />);
		const trigger = getByTestId(TRIGGER_TEST_ID);

		// Open tooltip
		fireEvent.mouseEnter(trigger);
		expect(getByRole('tooltip')).toBeInTheDocument();

		// Mouse leave
		fireEvent.mouseLeave(trigger);

		// Mouse enter again before delay expires
		act(() => {
			vi.advanceTimersByTime(250); // Half the delay
			fireEvent.mouseEnter(trigger);
		});

		// Fast-forward past original delay time
		act(() => {
			vi.advanceTimersByTime(500);
		});

		// Should still be open (timer was cancelled)
		expect(getByRole('tooltip')).toBeInTheDocument();

		vi.useRealTimers();
	});
});
