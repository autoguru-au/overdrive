import { getLocalTimeZone, today } from '@internationalized/date';
import React, { useRef } from 'react';
import { useId, type AriaCalendarProps, type DateValue } from 'react-aria';
import { type Selection } from 'react-stately';

import { sprinkles } from '../../styles/sprinkles.css';
import type { TestIdProp } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Calendar } from '../Calendar';
import { Heading } from '../Heading';
import {
	OptionGrid,
	type OptionGridProps,
	type OptionItem,
} from '../OptionGrid/OptionGrid';

import { layoutStyle, queryContainerStyle } from './DateTimePicker.css';

const defaultEnglish = {
	dateLabel: 'Date',
	timeLabel: 'Time',
	nextLabel: 'Next month',
	prevLabel: 'Previous month',
} as const;

type LangContent = keyof typeof defaultEnglish;
export type DateAndOption = {
	date: DateValue;
	timeOption: string;
};

export interface DateTimePickerProps<D extends DateValue> extends TestIdProp {
	/**
	 * A title for the date/time selection
	 */
	title?: string;
	/**
	 * Calendar props passed through to the react-aria hook
	 * ([docs](https://react-spectrum.adobe.com/react-aria/useCalendar.html))
	 *
	 * *Defaults*
	 * - `defaultValue`: Today's date
	 * - `firstDayOfWeek`: Monday
	 */
	calendar?: Exclude<AriaCalendarProps<D>, 'onChange'>;
	/**
	 * `OptionGrid` props used to generate the time picker items. Ensure to include a descriptive `label` value (for
	 * assistive technology). Currently time options are not tied to the day selection.
	 */
	timeOptions: OptionGridProps<OptionItem>;
	/**
	 * Allow date in the past
	 */
	allowPastDate?: boolean;
	/**
	 * Custom event handler return value when a date and time are both selected, return a value
	 * `{ date: DateValue, timeOption: string }` where `DateValue` comes from react-aria
	 *
	 * @returns `{ date: DateValue, timeOption: string }`
	 */
	onChange?: (value: DateAndOption) => void;
	/**
	 * Language content override
	 */
	lang?: Partial<Record<LangContent, string>>;
}

// const dateTextPunctuationEN = (text: string) =>
// 	text
// 		.split(' ')
// 		.map((word, idx) => (idx === 0 ? `${word},` : word))
// 		.join(' ');

/**
 * DateTimePicker component for selecting a date and time. The primary use case is for selecting a date and time for
 * the vehicle to be left at the place of service, not scheduling the time of the service itself. Some suppliers
 * may need the option to book a specficic time based on their availability which could require enahcement.
 *
 * For all date/time handling `@internationalized/date` is expected by react-aria. Presently only the Gregorian
 * calendar is imported for use in order to minimise bundle size. It is recommended to use the the DateTimePicker
 * uncontrolled.
 *
 * This component implements the react-aria `useCalendar` hook and supports controlled state as well
 * ([docs](https://react-spectrum.adobe.com/react-aria/useCalendar.html))
 */
export const DateTimePicker = <D extends DateValue>({
	allowPastDate = false,
	calendar,
	lang,
	onChange,
	timeOptions,
	title,
	testId,
}: DateTimePickerProps<D>) => {
	const selectedDate = useRef<DateValue>(today(getLocalTimeZone()));
	const selectedTimeOption = useRef<string>(null);

	const handleChange = () => {
		if (selectedDate.current && selectedTimeOption.current?.length) {
			onChange?.({
				date: selectedDate.current,
				timeOption: selectedTimeOption.current,
			});
		}
	};

	const handleDateChange = (value: DateValue) => {
		selectedDate.current = value;
		handleChange();
	};

	const handleTimeChange = (keys: Selection) => {
		if (keys === 'all') return;
		// we expect only a single value for time picker
		const time = keys.values().next().value as string;
		selectedTimeOption.current = time;
		handleChange();
	};

	const optionGridComponentProps: OptionGridProps<OptionItem> = {
		columns: '3',
		onSelectionChange: handleTimeChange,
		indicator: 'none',
		selectionMode: 'single',
		disallowEmptySelection: true,
		...timeOptions,
	};

	const titleId = useId();

	// Create calendar lang props from our lang props
	const calendarLang = lang
		? {
				nextLabel: lang.nextLabel,
				prevLabel: lang.prevLabel,
			}
		: undefined;

	return (
		<div
			role="group"
			aria-labelledby={titleId}
			className={queryContainerStyle}
			{...dataAttrs({ testid: testId })}
		>
			{title && (
				<Heading as="h2" id={titleId} mb="6" size="8">
					{title}
				</Heading>
			)}
			<div className={layoutStyle}>
				<div className={sprinkles({ flexShrink: '0' })}>
					<Heading as="h3" mb="4" size="6">
						{lang?.dateLabel ?? defaultEnglish.dateLabel}
					</Heading>
					<Calendar
						allowPastDate={allowPastDate}
						calendar={calendar}
						lang={calendarLang}
						onChange={handleDateChange}
					/>
				</div>

				<div className={sprinkles({ flexGrow: '1' })}>
					<Heading as="h3" mb="4" size="6">
						{lang?.timeLabel ?? defaultEnglish.timeLabel}
					</Heading>
					<OptionGrid {...optionGridComponentProps} />
				</div>
			</div>
		</div>
	);
};

DateTimePicker.displayName = 'DateTimePicker';
