import { CalendarIcon, IconType } from '@autoguru/icons';
import {
	getLocalTimeZone,
	parseDate,
	today,
	type DateValue,
} from '@internationalized/date';
import clsx from 'clsx';
import React, { type ChangeEvent, useMemo, useState } from 'react';
import { useDateFormatter } from 'react-aria';

import { elementStyles } from '../../styles/elementStyles';
import { Calendar, type CalendarProps } from '../Calendar';
import { Icon } from '../Icon/Icon';
import { PopoverTrigger } from '../Popover';
import { ProgressSpinner } from '../ProgressSpinner/ProgressSpinner';
import { Text, TextProps } from '../Text/Text';

import * as styles from './DatePicker.css';

type SizeScale = 'small' | 'medium' | 'large';

export interface DatePickerProps
	extends Partial<Pick<HTMLInputElement, 'min' | 'max' | 'value'>>,
		Omit<CalendarProps, 'onChange'> {
	className?: string;
	/** Whether the picker is disabled and non-interactive. */
	disabled?: boolean;
	/** Icon to render inside the picker (defaults to calendar icon). */
	icon?: IconType;
	/** Show a loading state spinner instead of the icon. */
	isLoading?: boolean;
	onChange(date: string): void;
	/** Visual size of the picker control (small, medium, large). */
	size?: SizeScale;
	/** Fallback label to display when no date value is selected. */
	valueLabel?: string;
	/**
	 * Use native browser date picker instead of Calendar popover
	 */
	useNativePicker?: boolean;
}

const textSizeMap: Record<SizeScale, TextProps['size']> = {
	small: '2',
	medium: '3',
	large: '5',
};

const formatDateToString = (date: DateValue): string => {
	return date.toString(); // ISO format: YYYY-MM-DD
};

const parseDateString = (dateString: string): DateValue | null => {
	try {
		return parseDate(dateString);
	} catch {
		return null;
	}
};

export const DatePicker = ({
	className = '',
	icon = CalendarIcon,
	size = 'medium',
	disabled = false,
	isLoading = false,
	valueLabel,
	useNativePicker = false,
	calendar,
	allowPastDate = false,
	lang,
	onChange,
	testId,
	...inputProps
}: DatePickerProps) => {
	const [selectedDate, setSelectedDate] = useState<DateValue | null>(() => {
		if (inputProps.value) {
			return parseDateString(inputProps.value);
		}
		return null;
	});

	const [popoverState, setPopoverState] = useState<{
		close: () => void;
	} | null>(null);

	const formatter = useDateFormatter({ dateStyle: 'medium' });

	const onChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
		const dateString = event.currentTarget.value;
		if (dateString) {
			const parsedDate = parseDateString(dateString);
			setSelectedDate(parsedDate);
		} else {
			setSelectedDate(null);
		}
		if (typeof onChange === 'function') {
			onChange(dateString);
		}
	};

	const displayValue = selectedDate
		? formatter.format(selectedDate.toDate(getLocalTimeZone()))
		: valueLabel;

	// Common container styles
	const containerClassName = elementStyles({
		className: [
			className,
			{
				[styles.disabled.default]: disabled,
				[styles.disabled.root]: disabled,
			},
		],
	});

	const contentDisplay = (
		<div
			className={clsx(styles.contents.default, {
				[styles.contents.withLabel]: Boolean(displayValue),
				[styles.disabled.default]: disabled && !useNativePicker,
			})}
		>
			{isLoading ? (
				<ProgressSpinner size={size} />
			) : (
				<Icon icon={icon} size={size} />
			)}
			{displayValue && (
				<Text size={textSizeMap[size]}>{displayValue}</Text>
			)}
		</div>
	);

	const calendarProps: CalendarProps = useMemo(
		() => ({
			allowPastDate,
			calendar: {
				defaultValue: selectedDate || today(getLocalTimeZone()),
				...calendar,
			},
			onChange: (date: DateValue) => {
				setSelectedDate(date);
				if (typeof onChange === 'function') {
					onChange(formatDateToString(date));
				}
				// Close the popover after date selection
				if (popoverState) {
					popoverState.close();
				}
			},
			lang,
		}),
		[allowPastDate, selectedDate, calendar, lang, onChange, popoverState],
	);

	const contentCalendar = useMemo(
		() => <Calendar {...calendarProps} />,
		[calendarProps],
	);

	// Use native picker only if explicitly requested
	if (useNativePicker) {
		return (
			<div className={clsx(containerClassName, styles.inputContainer)}>
				<input
					className={elementStyles({
						className: [
							styles.input,
							{
								[styles.disabled.default]: disabled,
							},
						],
					})}
					type="date"
					disabled={disabled}
					onChange={onChangeEvent}
					{...inputProps}
				/>
				<div className={styles.inputOverlay}>{contentDisplay}</div>
			</div>
		);
	}

	return (
		<PopoverTrigger
			content={contentCalendar}
			placement="bottom left"
			testId={testId}
			isDisabled={disabled}
			onStateReady={setPopoverState}
		>
			<div className={containerClassName}>{contentDisplay}</div>
		</PopoverTrigger>
	);
};

DatePicker.displayName = 'DatePicker';
