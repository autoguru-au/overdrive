import {
	getLocalTimeZone,
	today,
	type DateValue,
} from '@internationalized/date';
import React, { useCallback, useId, useRef, useState } from 'react';
import { type AriaCalendarProps } from 'react-aria';

import type { TestIdProp } from '../../types';
import { Box } from '../Box';
import { Calendar } from '../Calendar';
import { type OptionItem } from '../OptionGrid/OptionGrid';
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
	nextLabel: 'Next month',
	prevLabel: 'Previous month',
	chooseDate: 'Select',
	chooseTime: 'Choose',
} as const;

type LangContent = keyof typeof defaultEnglish;

export type DateWithTimeOption = {
	date: DateValue;
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
	lang?: Partial<Record<LangContent, string>>;
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
	timeOptions,
	defaultDate,
	defaultTime,
	name = 'datetime-input',
	onChange,
	lang,
	testId,
}: DateTimeInputProps) => {
	const dateInputId = useId();
	const timeSelectId = useId();
	const [selectedDate, setSelectedDate] = useState<DateValue>(
		defaultDate ?? today(getLocalTimeZone()),
	);
	const [selectedTime, setSelectedTime] = useState<string>(defaultTime ?? '');

	const datePopoverState = useRef<{ close: () => void } | null>(null);
	const selectRef = useRef<HTMLSelectElement>(null);

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

	const formatDate = (date: DateValue) => {
		const month = String(date.month).padStart(2, '0');
		const day = String(date.day).padStart(2, '0');
		const year = String(date.year).slice(-2);
		return `${month}/${day}/${year}`;
	};

	const calendarProps: AriaCalendarProps<DateValue> = {
		defaultValue: selectedDate,
		...calendarOptions,
	};

	const calendarLang = lang
		? {
				nextLabel: lang.nextLabel,
				prevLabel: lang.prevLabel,
			}
		: undefined;

	return (
		<Box data-od-component="date-time-field" testId={testId}>
			{/* Date Field */}
			<PopoverTrigger
				content={
					<Box>
						<Calendar
							allowPastDate={allowPastDate}
							calendarOptions={calendarProps}
							lang={calendarLang}
							onChange={handleDateChange}
						/>
					</Box>
				}
				offset={1}
				onStateReady={(state) => {
					datePopoverState.current = state;
				}}
			>
				<button className={dateFieldStyle}>
					<label className={labelStyle} htmlFor={dateInputId}>
						{lang?.dateLabel ?? defaultEnglish.dateLabel}
					</label>
					<input
						type="text"
						id={dateInputId}
						name={`${name}-date`}
						value={formatDate(selectedDate) ?? 'Select'}
						className={dateInputStyle}
						tabIndex={-1}
						readOnly
					/>
				</button>
			</PopoverTrigger>

			{/* Time Field */}
			<label
				className={timeFieldStyle}
				htmlFor={timeSelectId}
				onClick={handleTimeFieldClick}
			>
				<div className={labelStyle}>
					{lang?.timeLabel ?? defaultEnglish.timeLabel}
				</div>
				<Box
					as="select"
					ref={selectRef}
					id={timeSelectId}
					name={`${name}-time`}
					className={[inputResetStyle, valueStyle]}
					value={selectedTime}
					onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
						const newTime = event.target.value;
						setSelectedTime(newTime);
						onChange?.({
							date: selectedDate,
							timeOption: newTime,
						});
					}}
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
