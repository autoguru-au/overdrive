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
	calendar?: Exclude<AriaCalendarProps<DateValue>, 'onChange'>;
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
	 * Custom event handler when date and time are selected
	 */
	onChange?: (value: DateWithTimeOption) => void;
	/**
	 * Language content override
	 */
	lang?: Partial<Record<LangContent, string>>;
	/**
	 * Input attributes for the date input field
	 */
	inputProps?: Omit<
		React.InputHTMLAttributes<HTMLInputElement>,
		'type' | 'value' | 'onChange' | 'id'
	>;
}

/**
 * DateTimeField component for selecting a date and time in a compact field format.
 * The date selection opens a Calendar in a Popover, while time selection opens
 * an option grid for available time slots.
 */
export const DateTimeInput = ({
	allowPastDate = false,
	calendar,
	timeOptions,
	defaultDate,
	defaultTime,
	onChange,
	lang,
	inputProps,
	testId,
}: DateTimeInputProps) => {
	const dateInputId = useId();
	const timeInputId = useId();
	const [selectedDate, setSelectedDate] = useState<DateValue>(
		defaultDate ?? today(getLocalTimeZone()),
	);
	const [selectedTime, setSelectedTime] = useState<string>(defaultTime ?? '');

	const datePopoverState = useRef<{ close: () => void } | null>(null);

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

	const formatDate = (date: DateValue) => {
		// Format as MM/DD/YY to match the Figma design
		const month = String(date.month).padStart(2, '0');
		const day = String(date.day).padStart(2, '0');
		const year = String(date.year).slice(-2);
		return `${month}/${day}/${year}`;
	};

	const calendarProps: AriaCalendarProps<DateValue> = {
		defaultValue: selectedDate,
		...calendar,
	};

	// Create calendar lang props from our lang props
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
							calendar={calendarProps}
							lang={calendarLang}
							onChange={handleDateChange}
						/>
					</Box>
				}
				onStateReady={(state) => {
					datePopoverState.current = state;
				}}
				placement="bottom start"
				offset={8}
			>
				<button className={dateFieldStyle}>
					<div>
						<label className={labelStyle} htmlFor={dateInputId}>
							{lang?.dateLabel ?? defaultEnglish.dateLabel}
						</label>
						<input
							{...inputProps}
							type="text"
							id={dateInputId}
							value={formatDate(selectedDate) ?? 'Select'}
							className={dateInputStyle}
							readOnly
						/>
					</div>
				</button>
			</PopoverTrigger>

			{/* Time Field */}
			<div className={timeFieldStyle}>
				<label className={labelStyle} htmlFor={timeInputId}>
					{lang?.timeLabel ?? defaultEnglish.timeLabel}
				</label>
				<Box
					as="select"
					id={timeInputId}
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
			</div>
		</Box>
	);
};

DateTimeInput.displayName = 'DateTimeInput';
