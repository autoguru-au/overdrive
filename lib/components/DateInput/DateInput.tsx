import {
	parseDate,
	type DateValue,
	GregorianCalendar,
} from '@internationalized/date';
import clsx from 'clsx';
import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';
import { useDateField, useDateSegment, useLocale } from 'react-aria';
import {
	useDateFieldState,
	type DateFieldState,
	type DateSegment,
} from 'react-stately';

import { DatePicker, type DatePickerProps } from '../DatePicker/DatePicker';
import { inline } from '../Flex/flex';
import { withEnhancedInput } from '../private/InputBase';

import * as styles from './DateInput.css';

type FilteredDatePickerProps = Pick<
	DatePickerProps,
	'calendarOptions' | 'lang' | 'valueLabel' | 'useNativePicker' | 'icon'
>;

function createCalendar(identifier: string) {
	if (identifier === 'gregory') {
		return new GregorianCalendar();
	}
	throw new Error(`Unsupported calendar configured ${identifier}`);
}

const formatDateToString = (date: DateValue | null): string => {
	if (!date) return '';
	return date.toString();
};

const parseDateString = (dateString: string): DateValue | null => {
	if (!dateString) return null;
	try {
		return parseDate(dateString);
	} catch {
		return null;
	}
};

const DateSegment: React.FC<{
	segment: DateSegment;
	state: DateFieldState;
}> = ({ segment, state }) => {
	const ref = useRef<HTMLSpanElement>(null);
	const { segmentProps } = useDateSegment(segment, state, ref);

	return (
		<span
			{...segmentProps}
			ref={ref}
			className={styles.segment}
			data-placeholder={segment.isPlaceholder}
		>
			{segment.text}
		</span>
	);
};

DateSegment.displayName = 'DateInput.DateSegment';

export const DateInput = withEnhancedInput<
	FilteredDatePickerProps & Partial<Pick<HTMLInputElement, 'min' | 'max'>>
>(
	({
		calendarOptions,
		eventHandlers,
		field,
		icon,
		isLoading,
		lang,
		size,
		useNativePicker,
		valueLabel,
	}) => {
		const { disabled, id, name, onChange, value, ref } = field;

		// Refs for the composite input interface
		const datePickerRef = useRef<HTMLInputElement>(null);
		const dateFieldRef = useRef<HTMLDivElement>(null);

		const { locale } = useLocale();
		const [selectedDate, setSelectedDate] = useState<DateValue | null>(
			value ? parseDateString(value) : null,
		);

		// Sync external value changes
		useEffect(() => {
			const parsedDate = value ? parseDateString(value) : null;
			setSelectedDate(parsedDate);
		}, [value]);

		// Unified change handler for both date field and picker
		const handleDateChange = (date: DateValue | null) => {
			setSelectedDate(date);
			const dateString = formatDateToString(date);

			// Trigger the withEnhancedInput onChange mechanism
			if (eventHandlers.onChange && typeof onChange === 'function') {
				// Create a synthetic event for compatibility with withEnhancedInput
				const event = {
					currentTarget: { value: dateString },
					target: { value: dateString },
				} as React.ChangeEvent<HTMLInputElement>;
				eventHandlers.onChange(event);
			}
		};

		const dateFieldState = useDateFieldState({
			value: selectedDate,
			onChange: handleDateChange,
			locale,
			createCalendar,
			isDisabled: disabled,
		});

		const { fieldProps } = useDateField(
			{
				isDisabled: disabled,
				onFocus: eventHandlers.onFocus
					? (e) => {
							// Cast the event to match the expected type for withEnhancedInput
							eventHandlers.onFocus?.(
								e as React.FocusEvent<HTMLInputElement>,
							);
						}
					: undefined,
				onBlur: eventHandlers.onBlur
					? (e) => {
							// Cast the event to match the expected type for withEnhancedInput
							eventHandlers.onBlur?.(
								e as React.FocusEvent<HTMLInputElement>,
							);
						}
					: undefined,
			},
			dateFieldState,
			dateFieldRef,
		);

		// Create composite ref that provides form compatibility + proper focus management
		useImperativeHandle(ref, () => {
			const hiddenInput = datePickerRef.current;

			// Create a proxy object that provides essential HTMLInputElement interface
			const compositeRef = {
				// Focus management - targets the first interactive date segment
				focus: (options?: FocusOptions) => {
					const firstSegment = dateFieldRef.current?.querySelector(
						'[role="spinbutton"]',
					) as HTMLElement;
					if (firstSegment) {
						firstSegment.focus(options);
					} else {
						dateFieldRef.current?.focus(options);
					}
				},

				// Click handling - targets the interactive date field
				click: () => {
					const firstSegment = dateFieldRef.current?.querySelector(
						'[role="spinbutton"]',
					) as HTMLElement;
					if (firstSegment) {
						firstSegment.click();
					} else {
						dateFieldRef.current?.click();
					}
				},

				// Form value access
				get value() {
					return hiddenInput?.value || '';
				},
				set value(val: string) {
					if (hiddenInput) hiddenInput.value = val;
				},

				// Form element properties
				get name() {
					return hiddenInput?.name || name || '';
				},
				get id() {
					return hiddenInput?.id || id || '';
				},
				get type() {
					return 'date';
				},
				get disabled() {
					return disabled || false;
				},

				// Form validation
				checkValidity: () => hiddenInput?.checkValidity() || true,
				reportValidity: () => hiddenInput?.reportValidity() || true,
				setCustomValidity: (message: string) =>
					hiddenInput?.setCustomValidity(message),

				// Required HTMLElement properties for form libraries
				tagName: 'INPUT',
				nodeType: 1,
				classList: hiddenInput?.classList,
				getAttribute: (name: string) => hiddenInput?.getAttribute(name),
				setAttribute: (name: string, value: string) =>
					hiddenInput?.setAttribute(name, value),
				removeAttribute: (name: string) =>
					hiddenInput?.removeAttribute(name),
				hasAttribute: (name: string) =>
					hiddenInput?.hasAttribute(name) || false,
			} as unknown as HTMLInputElement;

			return compositeRef;
		});

		// Handle DatePicker changes
		const handleDatePickerChange = (dateString: string) => {
			const parsedDate = dateString ? parseDateString(dateString) : null;
			handleDateChange(parsedDate);
		};

		return (
			<div className={clsx(field.className, inline({ gap: '2' }))}>
				<div {...fieldProps} ref={dateFieldRef}>
					{dateFieldState.segments.map((segment, idx) => (
						<DateSegment
							key={`${segment.type}-${segment.minValue || idx}`}
							segment={segment}
							state={dateFieldState}
						/>
					))}
				</div>
				<DatePicker
					ref={datePickerRef}
					id={id}
					name={name}
					value={formatDateToString(selectedDate)}
					calendarOptions={calendarOptions}
					disabled={disabled}
					icon={icon}
					isLoading={isLoading}
					lang={lang}
					size={size}
					useNativePicker={useNativePicker}
					valueLabel={valueLabel}
					onChange={handleDatePickerChange}
				/>
			</div>
		);
	},
	{
		primitiveType: 'date',
	},
);

DateInput.displayName = 'DateInput';
