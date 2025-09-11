import {
	parseDate,
	type DateValue,
	GregorianCalendar,
} from '@internationalized/date';
import React, { type ComponentProps, useEffect, useRef, useState } from 'react';
import { useDateField, useDateSegment, useLocale } from 'react-aria';
import {
	useDateFieldState,
	type DateFieldState,
	type DateSegment,
} from 'react-stately';

import { sprinkles } from '../../styles/sprinkles.css';
import { DatePicker, type DatePickerProps } from '../DatePicker/DatePicker';
import { withEnhancedInput } from '../private/InputBase';

import * as styles from './DateInput.css';

type DateInputProps = ComponentProps<typeof DateInput>;

interface DateInputInternalProps
	extends Pick<
			DateInputProps,
			'disabled' | 'id' | 'isLoading' | 'name' | 'size'
		>,
		Pick<DatePickerProps, 'calendarOptions' | 'lang'> {
	onChange?: (date: string) => void;
	label?: string;
	value?: string;
}

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

const DateInputInternal = ({
	disabled = false,
	label,
	name,
	onChange,
	value,
	...datePickerProps
}: DateInputInternalProps) => {
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

	// Use useDateField for accessibility and keyboard navigation
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
			'aria-label': label,
			isDisabled: disabled,
		},
		dateFieldState,
		fieldRef,
	);

	// DatePicker onChange that accepts string (for compatibility)
	const handleDatePickerChange = (dateString: string) => {
		const parsedDate = dateString ? parseDateString(dateString) : null;
		handleDateChange(parsedDate);
	};

	return (
		<div
			className={sprinkles({
				display: 'flex',
				alignItems: 'center',
				gap: '1',
			})}
		>
			<div {...fieldProps} ref={fieldRef}>
				{dateFieldState.segments.map((segment) => (
					<DateSegment
						key={`segment-${segment.type}`}
						segment={segment}
						state={dateFieldState}
					/>
				))}
			</div>
			<DatePicker
				{...datePickerProps}
				name={name}
				onChange={handleDatePickerChange}
				value={formatDateToString(selectedDate)}
			/>
		</div>
	);
};

export const DateInput = withEnhancedInput<
	Partial<Pick<HTMLInputElement, 'min' | 'max'>>
>(
	({ field, eventHandlers, isLoading, size, ...rest }) => {
		const { id, name, disabled, value } = field;
		return (
			<DateInputInternal
				id={id}
				name={name}
				// label={}
				value={value}
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
				disabled={disabled}
				size={size}
				isLoading={isLoading}
				{...rest}
			/>
		);
	},
	{
		primitiveType: 'date',
	},
);

DateInput.displayName = 'DateInput';
