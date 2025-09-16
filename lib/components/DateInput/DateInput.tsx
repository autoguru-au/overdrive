import { type DateValue, GregorianCalendar } from '@internationalized/date';
import clsx from 'clsx';
import React, {
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { useDateField, useDateSegment, useLocale } from 'react-aria';
import {
	useDateFieldState,
	type DateFieldState,
	type DateSegment,
} from 'react-stately';

import { useDateInputRef } from '../../hooks/useDateInputRef';
import { sprinkles } from '../../styles/sprinkles.css';
import { formatDateValue, safeParseDateString } from '../../utils/dateFormat';
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

const defaultCalendarOptions: DatePickerProps['calendarOptions'] = {
	allowPastDate: true,
};

const DateSegment = React.memo<{
	className?: string;
	segment: DateSegment;
	state: DateFieldState;
}>(({ segment, state, className }) => {
	const ref = useRef<HTMLSpanElement>(null);
	const { segmentProps } = useDateSegment(segment, state, ref);

	return (
		<span
			{...segmentProps}
			ref={ref}
			className={className}
			data-placeholder={segment.isPlaceholder || undefined}
		>
			{segment.text}
		</span>
	);
});

DateSegment.displayName = 'DateInput.DateSegment';

export const DateInput = withEnhancedInput<
	FilteredDatePickerProps & Partial<Pick<HTMLInputElement, 'min' | 'max'>>
>(
	({ calendarOptions, eventHandlers, field, lang, max, min, size }) => {
		const { defaultValue, id, ref, ...filteredProps } = field;
		const { disabled, name, onChange, value } = field;

		const datePickerRef = useRef<HTMLInputElement>(null);
		const dateFieldRef = useRef<HTMLDivElement>(null);
		const { locale } = useLocale();

		const [selectedDate, setSelectedDate] = useState<DateValue | null>(
			value ? safeParseDateString(value) : null,
		);

		const minMaxValues = {
			minValue: min ? safeParseDateString(min) : undefined,
			maxValue: max ? safeParseDateString(max) : undefined,
		};

		useEffect(() => {
			const parsedDate = value ? safeParseDateString(value) : null;
			setSelectedDate(parsedDate);
		}, [value]);

		const handleDateChange = useCallback(
			(date: DateValue | null) => {
				setSelectedDate(date);
				const dateString = formatDateValue(date);

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

		const createSyntheticHandler = useCallback(
			(handler?: (e: React.FocusEvent<HTMLInputElement>) => void) => {
				if (!handler) return;

				return (e: React.FocusEvent<Element>) => {
					const syntheticEvent = {
						...e,
						target: dateFieldRef.current,
						currentTarget: dateFieldRef.current,
					} as unknown as React.FocusEvent<HTMLInputElement>;
					handler(syntheticEvent);
				};
			},
			[],
		);

		const handleFocus = useMemo(
			() => createSyntheticHandler(eventHandlers.onFocus),
			[createSyntheticHandler, eventHandlers.onFocus],
		);

		const handleBlur = useMemo(
			() => createSyntheticHandler(eventHandlers.onBlur),
			[createSyntheticHandler, eventHandlers.onBlur],
		);

		const hookProps = {
			...filteredProps,
			isDisabled: field.disabled,
			onBlur: handleBlur,
			onChange: handleDateChange,
			onFocus: handleFocus,
			value: selectedDate,
			...minMaxValues,
		};

		const dateFieldState = useDateFieldState({
			...hookProps,
			locale,
			createCalendar,
		});

		const { fieldProps } = useDateField(
			hookProps,
			dateFieldState,
			dateFieldRef,
		);

		useDateInputRef(ref, datePickerRef, dateFieldRef);

		const handleDatePickerChange = useCallback(
			(dateString: string) => {
				const parsedDate = dateString
					? safeParseDateString(dateString)
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
					className={styles.verticalCenterStyle}
					ref={dateFieldRef}
				>
					{dateFieldState.segments.map((segment, idx) => (
						<DateSegment
							className={styles.segmentStyle}
							segment={segment}
							state={dateFieldState}
							key={`${segment.type}-${segment.minValue ?? idx}`}
						/>
					))}
				</div>
				<DatePicker
					className={styles.verticalCenterStyle}
					ref={datePickerRef}
					id={id}
					name={name}
					value={formatDateValue(selectedDate)}
					calendarOptions={{
						...defaultCalendarOptions,
						...calendarOptions,
						...minMaxValues,
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
