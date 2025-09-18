import { type DateValue } from '@internationalized/date';
import React, { useCallback, useId, useRef, useState } from 'react';
import { type AriaCalendarProps } from 'react-aria';

import type { TestIdProp } from '../../types';
import { displayFormattedDate } from '../../utils/dateFormat';
import { Box } from '../Box/Box';
import { Calendar, type CalendarTextContent } from '../Calendar/Calendar';
import { type OptionItem } from '../OptionGrid/OptionGrid';
import type { PopoverTextContent } from '../Popover/Popover';
import { PopoverTrigger } from '../Popover/PopoverTrigger';

import {
	dateFieldStyle,
	dateInputStyle,
	inputResetStyle,
	labelStyle,
	timeFieldStyle,
	valueStyle,
} from './DateTimeInput.css';

const defaultEnglish = {
	dateLabel: 'DATE',
	timeLabel: 'TIME',
	select: 'Select',
} as const;

export interface DateTimeInputTextContent
	extends Record<keyof typeof defaultEnglish, string>,
		CalendarTextContent,
		PopoverTextContent {}

export type DateWithTimeOption = {
	date: DateValue | null;
	timeOption: string;
};

export interface DateTimeInputProps extends TestIdProp {
	/**
	 * Calendar props passed through to the react-aria hook
	 * ([docs](https://react-spectrum.adobe.com/react-aria/useCalendar.html))
	 *
	 * *Defaults*
	 * - `defaultValue`: Today's date
	 * - `firstDayOfWeek`: Sunday
	 */
	calendarOptions?: Exclude<AriaCalendarProps<DateValue>, 'onChange'>;
	/**
	 * Available time options for selection
	 */
	timeOptions: OptionItem[];
	/**
	 * Allow date in the past
	 */
	allowPastDate?: boolean;
	/**
	 * Default selected date
	 */
	defaultDate?: DateValue;
	/**
	 * Default selected time option
	 */
	defaultTime?: string;
	/**
	 * Input name attribute for forms
	 */
	name?: string;
	/**
	 * Custom event handler when date and time are selected
	 */
	onChange?: (value: DateWithTimeOption) => void;
	/**
	 * Language content override
	 */
	lang?: Partial<DateTimeInputTextContent>;
	// /**
	//  * Input attributes for the date input field
	//  */
	// inputProps?: Omit<
	// 	React.InputHTMLAttributes<HTMLInputElement>,
	// 	'type' | 'value' | 'onChange' | 'id'
	// >;
}

/**
 * DateTimeField component for selecting a date and time in a compact field format.
 * The date selection opens a Calendar in a Popover, while time selector is a
 * standard select input.
 */
export const DateTimeInput = ({
	allowPastDate = false,
	calendarOptions,
	defaultDate,
	defaultTime,
	lang,
	name = 'datetime-input',
	onChange,
	timeOptions,
	testId,
}: DateTimeInputProps) => {
	const dateInputId = useId();
	const [selectedDate, setSelectedDate] = useState<DateValue | null>(
		defaultDate ?? null,
	);
	const [selectedTime, setSelectedTime] = useState<string>(defaultTime ?? '');

	const datePopoverState = useRef<{ close: () => void } | null>(null);
	const selectRef = useRef<HTMLSelectElement>(null);
	const textValues = { ...defaultEnglish, ...lang };

	const langCalendar = {
		nextLabel: textValues.nextLabel,
		prevLabel: textValues.prevLabel,
	};
	const langPopover = {
		close: textValues.nextLabel,
	};

	const handleDateChange = useCallback(
		(value: DateValue) => {
			setSelectedDate(value);
			datePopoverState.current?.close();
			onChange?.({
				date: value,
				timeOption: selectedTime,
			});
		},
		[selectedTime, onChange],
	);

	const handleTimeFieldClick = () => {
		if ('showPicker' in HTMLSelectElement.prototype && selectRef.current) {
			try {
				// programmatically trigger the select menu
				selectRef.current.showPicker();
			} catch {
				// browser doesn't support triggering menu
			}
		}
	};

	const calendarProps: AriaCalendarProps<DateValue> = {
		defaultValue: selectedDate,
		...calendarOptions,
	};

	return (
		<Box data-od-component="date-time-field" testId={testId}>
			{/* Date Field */}
			<PopoverTrigger
				content={
					<Box>
						<Calendar
							allowPastDate={allowPastDate}
							calendarOptions={calendarProps}
							lang={langCalendar}
							onChange={handleDateChange}
						/>
					</Box>
				}
				lang={langPopover}
				offset={1}
				onStateReady={(state) => {
					datePopoverState.current = state;
				}}
			>
				<button className={dateFieldStyle}>
					<label className={labelStyle} htmlFor={dateInputId}>
						{textValues.dateLabel}
					</label>
					<input
						type="text"
						id={dateInputId}
						name={`${name}-date`}
						value={
							selectedDate
								? displayFormattedDate(selectedDate, 'short')
								: textValues.select
						}
						className={dateInputStyle}
						tabIndex={-1}
						readOnly
					/>
				</button>
			</PopoverTrigger>

			{/* Time Field */}
			<label className={timeFieldStyle} onClick={handleTimeFieldClick}>
				<div className={labelStyle}>{textValues.timeLabel}</div>
				<Box
					as="select"
					name={`${name}-time`}
					className={[inputResetStyle, valueStyle]}
					value={selectedTime}
					onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
						const newTime = event.target.value;
						setSelectedTime(newTime);
						onChange?.({
							date: selectedDate ?? null,
							timeOption: newTime,
						});
					}}
					onClick={(event: React.MouseEvent) => {
						event.stopPropagation();
					}}
					ref={selectRef}
				>
					<option value="" disabled>
						Select
					</option>
					{timeOptions.map((option) => (
						<option key={option.name} value={option.name}>
							{option.label}
						</option>
					))}
				</Box>
			</label>
		</Box>
	);
};

DateTimeInput.displayName = 'DateTimeInput';
