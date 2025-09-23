import React from 'react';

import { useBox, type UseBoxProps } from '../Box';

export interface DateTimeFieldProps
	extends Pick<UseBoxProps, 'as' | 'className' | 'testId'> {
	/**
	 * The DateField and TimeField components to render as children.
	 * This allows for maximum flexibility in configuration.
	 *
	 * ```tsx
	 * <DateField
	 *   allowPastDate={false}
	 *   calendarOptions={{
	 *     minValue: today(getLocalTimeZone()),
	 *     isDateUnavailable: (date) => date.day === 0 // Disable Sundays
	 *   }}
	 *   name="booking-1-date"
	 *   onChange={setDateValue}
	 *   disabled={isSubmitting}
	 * />
	 * <TimeField
	 *   timeOptions={timeOptions}
	 *   name="booking-1-time"
	 *   onChange={setTimeValue}
	 *   disabled={isSubmitting}
	 * />
	 * ```
	 */
	children: React.ReactNode;
}

/**
 * DateTimeField is a layout-only wrapper component that provides structure for DateField and TimeField components.
 * It doesn't manage state or provide functionality. This allows for simple direct control and updates to each field.
 *
 * All props (name, disabled, loading, etc.) should be passed directly to the individual DateField and TimeField components.
 *
 * ## Child Components
 * - **DateField**: Handles date selection with calendar popover functionality
 * - **TimeField**: Handles time selection from predefined options
 *
 * ## State
 * - **Uncontrolled** (recommended): Pass `defaultValue` prop
 * - **Controlled**: Pass `value` prop
 *
 * ## Internationalization
 * - Override text values via `lang` props on the DateField and TimeField components
 * - Full Calendar options available via `calendarOptions` prop on the DateField
 * - Date formatting helper available in `...utils/dateFormat.ts` or use `@internationalized/date` utils
 * - Advanced i18n and localization handled by [React Aria I18Provider](https://react-spectrum.adobe.com/react-aria/I18nProvider.html)
 * - Read more about [International calendars](https://react-spectrum.adobe.com/react-aria/useDatePicker.html#international-calendars)
 *
 * @example
 * // Basic usage with separate date and time selectors
 * const timeOptions = [
 *   { label: '9:00 AM', name: '0900' },
 *   { label: '2:00 PM', name: '1400' },
 *   { label: '6:00 PM', name: '1800' }
 * ];
 *
 * <DateTimeField>
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
 * </DateTimeField>
 *
 * @example
 * // With shared state management
 * const [dateValue, setDateValue] = useState(null);
 * const [timeValue, setTimeValue] = useState('');
 *
 * <DateTimeField>
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
 * </DateTimeField>
 *
 * @example
 * // With advanced calendar configuration
 * <DateTimeField>
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
 * </DateTimeField>
 */
export const DateTimeField = ({ children, ...props }: DateTimeFieldProps) => {
	const { Component, componentProps } = useBox(props);

	return <Component {...componentProps}>{children}</Component>;
};

DateTimeField.displayName = 'DateTimeField';
