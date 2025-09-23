import React from 'react';

import { useBox, type UseBoxProps } from '../Box';

export interface DateTimeInputProps
	extends Pick<UseBoxProps, 'as' | 'className' | 'testId'> {
	/**
	 * The DateField and TimeField components to render as children.
	 * This allows for maximum flexibility in configuration.
	 *
	 * ```tsx
	 * <DateField
	 *   allowPastDate={false}
	 *   name="booking-1-date"
	 *   onChange={setDateValue}
	 *   value={dateValue}
	 *   disabled={isSubmitting}
	 * />
	 * <TimeField
	 *   timeOptions={timeOptions}
	 *   name="booking-1-time"
	 *   onChange={setTimeValue}
	 *   value={timeValue}
	 *   disabled={isSubmitting}
	 * />
	 * ```
	 */
	children: React.ReactNode;
}

/**
 * DateTimeInput is a layout container around DateField and TimeField components.
 *
 * @example
 * // Basic usage with separate date and time selectors
 * const timeOptions = [
 *   { label: '9:00 AM', name: '0900' },
 *   { label: '2:00 PM', name: '1400' },
 *   { label: '6:00 PM', name: '1800' }
 * ];
 *
 * <DateTimeInput>
 *   <DateField
 *     defaultValue={parseDate(tody())}
 *     name="booking-date"
 *     onChange={(date) => console.log('Date selected:', date)}
 *   />
 *   <TimeField
 *     timeOptions={timeOptions}
 *     defaultValue="1400"
 *     name="booking-time"
 *     onChange={(time) => console.log('Time selected:', time)}
 *   />
 * </DateTimeInput>
 *
 * @example
 * // With shared state management
 * const [dateValue, setDateValue] = useState(null);
 * const [timeValue, setTimeValue] = useState('');
 *
 * <DateTimeInput>
 *   <DateField
 *     allowPastDate={false}
 *     name="booking-1-date"
 *     onChange={setDateValue}
 *     value={dateValue}
 *     disabled={isSubmitting}
 *   />
 *   <TimeField
 *     timeOptions={timeOptions}
 *     name="booking-1-time"
 *     onChange={setTimeValue}
 *     value={timeValue}
 *     disabled={isSubmitting}
 *   />
 * </DateTimeInput>
 *
 * @example
 * // With advanced calendar configuration
 * <DateTimeInput>
 *   <DateField
 *     calendarOptions={{
 *       minValue: today(getLocalTimeZone()),
 *       isDateUnavailable: (date) => date.day === 0 // Disable Sundays
 *     }}
 *     lang={{ dateLabel: 'Check-in Date' }}
 *     name="booking-date"
 *   />
 *   <TimeField
 *     timeOptions={businessHours}
 *     lang={{ timeLabel: 'Arrival Time' }}
 *     name="booking-time"
 *   />
 * </DateTimeInput>
 */
export const DateTimeInput = ({ children, ...props }: DateTimeInputProps) => {
	const { Component, componentProps } = useBox(props);

	return <Component {...componentProps}>{children}</Component>;
};

DateTimeInput.displayName = 'DateTimeInput';
