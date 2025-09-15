import {
	parseDate,
	type DateValue,
	GregorianCalendar,
} from '@internationalized/date';
import clsx from 'clsx';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDateField, useDateSegment, useLocale } from 'react-aria';
import {
	useDateFieldState,
	type DateFieldState,
	type DateSegment,
} from 'react-stately';

import { useDateInputRef } from '../../hooks/useDateInputRef';
import { sprinkles } from '../../styles/sprinkles.css';
import { DatePicker, type DatePickerProps } from '../DatePicker/DatePicker';
import { inline } from '../Flex/flex';
import { withEnhancedInput } from '../private/InputBase';

import * as styles from './DateInput.css';

type FilteredDatePickerProps = Pick<
	DatePickerProps,
	'calendarOptions' | 'lang'
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

const defaultCalendarOptions: DatePickerProps['calendarOptions'] = {
	allowPastDate: true,
};

const DateSegment: React.FC<{
	className?: string;
	segment: DateSegment;
	state: DateFieldState;
}> = ({ segment, state, className }) => {
	const ref = useRef<HTMLSpanElement>(null);
	const { segmentProps } = useDateSegment(segment, state, ref);

	return (
		<span
			{...segmentProps}
			ref={ref}
			className={className}
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
	({ calendarOptions, eventHandlers, field, lang, size, ...props }) => {
		const { disabled, id, name, onChange, value, ref } = field;

		const datePickerRef = useRef<HTMLInputElement>(null);
		const dateFieldRef = useRef<HTMLDivElement>(null);

		const { locale } = useLocale();
		const [selectedDate, setSelectedDate] = useState<DateValue | null>(
			value ? parseDateString(value) : null,
		);

		useEffect(() => {
			const parsedDate = value ? parseDateString(value) : null;
			setSelectedDate(parsedDate);
		}, [value]);

		const handleDateChange = useCallback(
			(date: DateValue | null) => {
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
			},
			[eventHandlers, onChange],
		);

		const dateFieldState = useDateFieldState({
			value: selectedDate,
			onChange: handleDateChange,
			locale,
			createCalendar,
			isDisabled: disabled,
		});

		const handleFocus = eventHandlers.onFocus
			? useCallback(
					(e: React.FocusEvent<Element>) => {
						const syntheticEvent = {
							...e,
							target: dateFieldRef.current,
							currentTarget: dateFieldRef.current,
						} as unknown as React.FocusEvent<HTMLInputElement>;
						eventHandlers.onFocus?.(syntheticEvent);
					},
					[eventHandlers],
				)
			: undefined;

		const handleBlur = eventHandlers.onBlur
			? useCallback(
					(e: React.FocusEvent<Element>) => {
						const syntheticEvent = {
							...e,
							target: dateFieldRef.current,
							currentTarget: dateFieldRef.current,
						} as unknown as React.FocusEvent<HTMLInputElement>;
						eventHandlers.onBlur?.(syntheticEvent);
					},
					[eventHandlers],
				)
			: undefined;

		const { fieldProps } = useDateField(
			{
				isDisabled: disabled,
				onFocus: handleFocus,
				onBlur: handleBlur,
			},
			dateFieldState,
			dateFieldRef,
		);

		useDateInputRef(ref, datePickerRef, dateFieldRef);

		const handleDatePickerChange = useCallback(
			(dateString: string) => {
				const parsedDate = dateString
					? parseDateString(dateString)
					: null;
				handleDateChange(parsedDate);
			},
			[handleDateChange],
		);

		return (
			<div
				className={clsx(
					field.className,
					inline({ gap: '2', spaceBetween: true }),
					disabled && sprinkles({ colour: 'muted' }),
				)}
			>
				<div
					{...fieldProps}
					className={sprinkles({ alignSelf: 'center' })}
					ref={dateFieldRef}
				>
					{dateFieldState.segments.map((segment, idx) => (
						<DateSegment
							className={styles.segmentStyle}
							segment={segment}
							state={dateFieldState}
							key={`${segment.type}-${segment.minValue || idx}`}
						/>
					))}
				</div>
				<DatePicker
					ref={datePickerRef}
					id={id}
					name={name}
					value={formatDateToString(selectedDate)}
					calendarOptions={{
						...defaultCalendarOptions,
						...calendarOptions,
					}}
					disabled={disabled}
					lang={lang}
					size={size}
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
