import { type DateValue } from '@internationalized/date';
import React, { useCallback, useId, useRef, useState } from 'react';
import { type AriaCalendarProps } from 'react-aria';

import type { TestIdProp } from '../../types';
import {
	displayFormattedDate,
	safeParseDateString,
} from '../../utils/dateFormat';
import { Box } from '../Box/Box';
import {
	Calendar,
	type CalendarProps,
	type CalendarTextContent,
} from '../Calendar/Calendar';
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

export interface DateTimeInputProps
	extends Partial<Pick<HTMLInputElement, 'min' | 'max'>>,
		TestIdProp {
	/**
	 * Calendar props passed through to the react-aria hook
	 * ([docs](https://react-spectrum.adobe.com/react-aria/useCalendar.html))
	 *
	 * *Defaults*
	 * - `defaultValue`: Today's date
	 * - `firstDayOfWeek`: Monday
	 *
	 * ```ts
	 * // Set minimum selectable date
	 * calendarOptions: {
	 *   minValue: today(getLocalTimeZone())
	 * }
	 *
	 * // Set maximum selectable date
	 * calendarOptions: {
	 *   maxValue: today(getLocalTimeZone()).add({ years: 1 })
	 * }
	 *
	 * // Disable specific dates
	 * calendarOptions: {
	 *   isDateUnavailable: (date) => date.compare(today(getLocalTimeZone())) < 0
	 * }
	 * ```
	 */
	calendarOptions?: CalendarProps['calendarOptions'];
	/**
	 * Available time options for selection
	 *
	 * ```ts
	 * timeOptions: [
	 *   { name: 'morning', label: '9:00 AM', value: '0900' },
	 *   { name: 'afternoon', label: '2:00 PM', value: '1400' },
	 *   { name: 'evening', label: '6:00 PM', value: '1800' }
	 * ]
	 * ```
	 */
	timeOptions: OptionItem[];
	/**
	 * Allow date in the past
	 */
	allowPastDate?: boolean;
	/**
	 * Minimum selectable date (ISO string format: YYYY-MM-DD)
	 *
	 * ```ts
	 * // Today as minimum
	 * min: today(getLocalTimeZone()).toString()
	 *
	 * // Specific date
	 * min: "2025-01-01"
	 *
	 * // One week from today
	 * min: today(getLocalTimeZone()).add({ days: 7 }).toString()
	 * ```
	 */
	min?: string;
	/**
	 * Maximum selectable date (ISO string format: YYYY-MM-DD)
	 *
	 * ```ts
	 * // End of current year
	 * max: "2025-12-31"
	 *
	 * // One year from today
	 * max: today(getLocalTimeZone()).add({ years: 1 }).toString()
	 *
	 * // Specific future date
	 * max: "2026-06-30"
	 * ```
	 */
	max?: string;
	/**
	 * Default selected date (uncontrolled)
	 *
	 * ```ts
	 * // Today's date
	 * defaultDate: today(getLocalTimeZone())
	 *
	 * // Specific date
	 * defaultDate: parseDate('2025-12-25')
	 *
	 * // Future date
	 * defaultDate: today(getLocalTimeZone()).add({ days: 7 })
	 * ```
	 */
	defaultDate?: DateValue;
	/**
	 * Default selected time option (uncontrolled, must match a value from timeOptions)
	 *
	 * ```ts
	 * // Matches timeOptions[0].value
	 * defaultTime: '09:00'
	 *
	 * // Or matches timeOptions[1].name
	 * defaultTime: 'afternoon'
	 * ```
	 */
	defaultTime?: string;
	/**
	 * Input name attribute for forms
	 */
	name?: string;
	/**
	 * Custom event handler when date and time are selected
	 *
	 * ```ts
	 * onChange: (value) => {
	 *   console.log('Selected date:', value.date?.toString());
	 *   console.log('Selected time:', value.timeOption);
	 *   // value = {
	 *   //   date: CalendarDate { calendar: ..., era: 'AD', year: 2025, month: 1, day: 15 },
	 *   //   timeOption: '14:00'
	 *   // }
	 * }
	 * ```
	 */
	onChange?: (value: DateWithTimeOption) => void;
	/**
	 * Text value overrides
	 *
	 * ```ts
	 * {
	 *   dateLabel?: string;
	 *   timeLabel?: string;
	 *   select?: string;
	 *   nextLabel?: string;
	 *   prevLabel?: string;
	 *   close?: string;
	 * }
	 * ```
	 */
	lang?: Partial<DateTimeInputTextContent>;
	/**
	 * Current selected date and time (controlled mode)
	 *
	 * ```ts
	 * const [value, setValue] = useState({
	 *   date: today(getLocalTimeZone()),
	 *   timeOption: 'morning'
	 * });
	 * ```
	 */
	value?: DateWithTimeOption;
}

/**
 * DateTimeInput component for selecting a date and time in a compact field format.
 *
 * The date selection opens a Calendar in a Popover, while the time selector is a
 * standard select input. The component provides a form-friendly interface with
 * proper keyboard and accessbility support.
 *
 * For controlled usage, use the `value` prop which should match the structure
 * returned by `onChange` for seamless state management.
 *
 * The `onChange` callback receives a `DateWithTimeOption` value:
 * - `date`: DateValue | null
 * - `timeOption`: string [name of the selected option]
 *
 * ## Date Restrictions
 * - `min` / `max`: Define selectable date range using ISO YYYY-MM-DD
 * - `allowPastDate`: Convenient way to allow/disallow past dates
 *
 * You can also handle complex date restriction with a function:
 * - `calendarOptions`: pass through the react-aria calendar props
 *   - `isDateUnavailable`: Function to disable specific dates
 *
 * ## Internationalization
 * - Override text values with `lang` prop: `lang={{ dateLabel: 'DATE', timeLabel: 'TIME' }}`
 * - Date formatting helper available in `...utils/dateFormat.ts` or use `@internationalized/date` utils
 * - Advanced i18n and localization handled by [React Aria I18Provider](https://react-spectrum.adobe.com/react-aria/I18nProvider.html)
 * - Read more about [International calendars](https://react-spectrum.adobe.com/react-aria/useDatePicker.html#international-calendars)
 *
 * @example
 * const timeOptions = [
 *   { label: '9:00 AM', name: '0900' },
 *   { label: '10:00 AM', name: '1000' },
 * ];
 *
 * // Uncontrolled usage (recommended)
 * <DateTimeInput
 *   timeOptions={timeOptions}
 *   defaultDate={parseDate('2024-12-25')}
 *   defaultTime="1000"
 *   name="appointment1"
 *   onChange={ ({ date, timeOption }: DateWithTimeOption) => {} }
 * />
 *
 * // Controlled usage with value prop
 * const [value, setValue] = useState({ date: parseDate('2025-01-01'), timeOption: '0900' });
 * <DateTimeInput
 *   timeOptions={timeOptions}
 *   value={value}
 *   onChange={setValue}
 * />
 *
 * // With min/max restrictions
 * <DateTimeInput
 *   timeOptions={timeOptions}
 *   min="2025-01-01"
 *   max="2025-12-31"
 *   onChange={ ({ date, timeOption }: DateWithTimeOption) => {} }
 * />
 */
export const DateTimeInput = ({
	allowPastDate = false,
	calendarOptions,
	defaultDate,
	defaultTime,
	lang,
	max,
	min,
	name = 'datetime-input',
	onChange,
	timeOptions,
	testId,
	value,
}: DateTimeInputProps) => {
	const dateInputId = useId();

	const [internalDate, setInternalDate] = useState<DateValue | null>(
		defaultDate ?? null,
	);
	const [internalTime, setInternalTime] = useState<string>(defaultTime ?? '');

	const isControlled = value !== undefined;
	const currentDate = value?.date ?? internalDate;
	const currentTime = value?.timeOption ?? internalTime;

	const datePopoverState = useRef<{ close: () => void } | null>(null);
	const selectRef = useRef<HTMLSelectElement>(null);
	const textValues = { ...defaultEnglish, ...lang };

	const langCalendar = {
		nextLabel: textValues.nextLabel,
		prevLabel: textValues.prevLabel,
	};

	const langPopover = {
		close: textValues.close,
	};

	const handleDateChange = useCallback(
		(value: DateValue) => {
			if (!isControlled) {
				setInternalDate(value);
			}

			datePopoverState.current?.close();
			onChange?.({
				date: value,
				timeOption: currentTime,
			});
		},
		[currentTime, onChange, isControlled],
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
		defaultValue: currentDate,
		minValue: min ? safeParseDateString(min) : undefined,
		maxValue: max ? safeParseDateString(max) : undefined,
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
							currentDate
								? displayFormattedDate(
										currentDate,
										'short-padded',
									)
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
					value={currentTime}
					onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
						const newTime = event.target.value;

						if (!isControlled) {
							setInternalTime(newTime);
						}

						onChange?.({
							date: currentDate ?? null,
							timeOption: newTime,
						});
					}}
					onClick={(event: React.MouseEvent) => {
						event.stopPropagation();
					}}
					ref={selectRef}
				>
					<option value="" disabled>
						{textValues.select}
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
