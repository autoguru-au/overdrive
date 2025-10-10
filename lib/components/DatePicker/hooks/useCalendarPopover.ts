import { type DateValue } from '@internationalized/date';
import { useCallback, useState } from 'react';

export interface UseCalendarPopoverProps {
	/**
	 * Current value for controlled components
	 */
	value?: DateValue | null;
	/**
	 * Default value for uncontrolled components
	 */
	defaultValue?: DateValue | null;
	/**
	 * Change handler called when a date is selected
	 */
	onChange?: (date: DateValue) => void;
}

export interface UseCalendarPopoverReturn {
	/**
	 * Current selected date value
	 */
	selectedDate: DateValue | null;
	/**
	 * Handler for calendar date selection
	 */
	handleCalendarChange: (date: DateValue) => void;
	/**
	 * Handler for setting popover state
	 */
	setPopoverState: (state: { close: () => void } | null) => void;
}

/**
 * Custom hook for managing calendar popover state and date value logic.
 * Handles both controlled and uncontrolled patterns, and manages popover closing
 * after date selection.
 */
export const useCalendarPopover = ({
	value,
	defaultValue,
	onChange,
}: UseCalendarPopoverProps): UseCalendarPopoverReturn => {
	const isControlled = value !== undefined;

	const [selectedDate, setSelectedDate] = useState<DateValue | null>(() => {
		const initialValue = isControlled ? value : defaultValue;
		return initialValue ?? null;
	});

	const [popoverState, setPopoverState] = useState<{
		close: () => void;
	} | null>(null);

	const handleCalendarChange = useCallback(
		(dateValue: DateValue) => {
			// Update internal state for uncontrolled components
			if (!isControlled) {
				setSelectedDate(dateValue);
			}

			// Call external change handler
			if (typeof onChange === 'function') {
				onChange(dateValue);
			}

			// Close the popover after date selection
			if (popoverState) {
				popoverState.close();
			}
		},
		[isControlled, onChange, popoverState],
	);

	// For controlled components, sync with external value changes
	const currentValue = isControlled ? value : selectedDate;

	return {
		selectedDate: currentValue,
		handleCalendarChange,
		setPopoverState,
	};
};
