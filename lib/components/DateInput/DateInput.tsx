import {
	parseDate,
	type DateValue,
	GregorianCalendar,
} from '@internationalized/date';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
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

function DateSegment({
	segment,
	state,
}: {
	segment: DateSegment;
	state: DateFieldState;
}) {
	const ref = useRef(null);
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
}

export const DateInput = withEnhancedInput<
	FilteredDatePickerProps & Partial<Pick<HTMLInputElement, 'min' | 'max'>>
>(
	({
		calendarOptions,
		eventHandlers,
		field,
		isLoading,
		lang,
		size,
		...props
	}) => {
		const { disabled, name, onChange, value } = field;

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
			if (typeof onChange === 'function') {
				onChange(formatDateToString(date));
			}
		};

		const dateFieldState = useDateFieldState({
			value: selectedDate,
			onChange: handleDateChange,
			locale,
			createCalendar,
			isDisabled: disabled,
		});

		const fieldRef = useRef<HTMLDivElement>(null);
		const { fieldProps } = useDateField(
			{
				isDisabled: disabled,
			},
			dateFieldState,
			fieldRef,
		);

		// const handleDatePickerChange = (dateString: string) => {
		// 	const parsedDate = dateString ? parseDateString(dateString) : null;
		// 	handleDateChange(parsedDate);
		// };

		return (
			<div className={clsx(field.className, inline({ gap: '2' }))}>
				<div {...fieldProps} ref={fieldRef}>
					{dateFieldState.segments.map((segment, idx) => (
						<DateSegment
							key={`segment-${idx}`}
							segment={segment}
							state={dateFieldState}
						/>
					))}
				</div>
				<DatePicker
					name={name}
					value={formatDateToString(selectedDate)}
					calendarOptions={calendarOptions}
					lang={lang}
					onChange={(date: string) => {
						if (eventHandlers.onChange) {
							// Create a synthetic event for compatibility with withEnhancedInput
							const event = {
								currentTarget: { value: date },
								target: { value: date },
							} as React.ChangeEvent<HTMLInputElement>;
							eventHandlers.onChange(event);
						}
					}}
				/>
			</div>
		);
	},
	{
		primitiveType: 'date',
	},
);

DateInput.displayName = 'DateInput';
