import { ChevronLeftIcon, ChevronRightIcon } from '@autoguru/icons';
import {
	getLocalTimeZone,
	// currently only supporting western-style Gregorian calendar
	GregorianCalendar,
	today,
} from '@internationalized/date';
import React, { useEffect, useRef } from 'react';
import {
	useCalendar,
	// useDateFormatter,
	useLocale,
	useId,
	type AriaCalendarProps,
	type DateValue,
} from 'react-aria';
import { useCalendarState, type Selection } from 'react-stately';

import { odStyle } from '../../styles/sprinkles.css';
import { Icon } from '../Icon';
import {
	OptionGrid,
	type OptionGridProps,
	type OptionItem,
} from '../OptionGrid/OptionGrid';

import { CalendarButton } from './CalendarButton';
import { CalendarGrid } from './CalendarGrid';

const defaultEnglish = {
	dateLabel: 'Date',
	timeLabel: 'Time',
	nextLabel: 'Next',
	prevLabel: 'Prev',
} as const;

type LangContent = keyof typeof defaultEnglish;
export type DateAndOption = {
	date: DateValue;
	timeOption: string;
};

export interface DateTimePickerProps<D extends DateValue> {
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

function createCalendar(identifier) {
	if (identifier === 'gregory') {
		return new GregorianCalendar();
	}

	throw new Error(`Unsupported calendar configured ${identifier}`);
}

// const dateTextPunctuationEN = (text: string) =>
// 	text
// 		.split(' ')
// 		.map((word, idx) => (idx === 0 ? `${word},` : word))
// 		.join(' ');

/**
 * DateTimePicker component for selecting a date and time. The primary use case is for selecting a date and time for
 * the vehicle to be left at the place of service, rather than the scheduling the time of the service itself.
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
}: DateTimePickerProps<D>) => {
	const selectedDate = useRef<DateValue>(null);
	const selectedTimeOption = useRef<string>(null);

	const handleChange = () => {
		if (selectedDate.current && selectedTimeOption.current?.length) {
			onChange?.({
				date: selectedDate.current,
				timeOption: selectedTimeOption.current,
			});
		}
	};
	const handleTimeChange = (keys: Selection) => {
		if (keys === 'all') return;
		// we expect only a single value for time picker
		const time = keys.values().next().value;
		selectedTimeOption.current = time;
		handleChange();
	};

	const calendarComponentProps: AriaCalendarProps<D> = {
		defaultValue: today(getLocalTimeZone()) as D,
		firstDayOfWeek: 'sun',
		minValue: allowPastDate ? undefined : today(getLocalTimeZone()),
		onChange: (value) => {
			selectedDate.current = value;
			handleChange();
		},
		...calendar,
	};
	const optionGridComponentProps: OptionGridProps<OptionItem> = {
		columns: '2',
		onSelectionChange: handleTimeChange,
		indicator: 'none',
		selectionMode: 'single',
		disallowEmptySelection: true,
		...timeOptions,
	};

	const { locale } = useLocale();
	const state = useCalendarState({
		...calendarComponentProps,
		locale,
		createCalendar,
	});

	const {
		calendarProps,
		prevButtonProps,
		nextButtonProps,
		title: calendarTitle,
	} = useCalendar(calendarComponentProps, state);
	const titleId = useId();

	useEffect(() => {
		if (state.value) {
			selectedDate.current = state.value;
		}
	}, []);

	// const formatter = useDateFormatter({ dateStyle: 'full' });
	// const dateText = state.value
	// 	? dateTextPunctuationEN(
	// 			formatter.format(state?.value?.toDate(getLocalTimeZone())),
	// 		)
	// 	: '';

	return (
		<div role="group" aria-labelledby={titleId}>
			{title && (
				<h2
					id={titleId}
					className={odStyle({ fontSize: '2xl', fontWeight: 'bold' })}
				>
					{title}
				</h2>
			)}
			<div
				className={odStyle({
					display: { tablet: 'flex' },
					gap: '7',
				})}
			>
				<div className={odStyle({ flexShrink: 0 })}>
					<h3
						className={odStyle({
							fontSize: 'xl',
							fontWeight: 'bold',
						})}
					>
						{lang?.dateLabel ?? defaultEnglish.dateLabel}
					</h3>
					<div
						{...calendarProps}
						className={odStyle({
							alignItems: 'center',
							display: 'flex',
							justifyContent: 'space-between',
							marginBottom: '2',
						})}
					>
						<CalendarButton
							{...prevButtonProps}
							aria-label={
								lang?.prevLabel ?? defaultEnglish.prevLabel
							}
						>
							<Icon icon={ChevronLeftIcon} size="medium" />
						</CalendarButton>
						<h4
							className={odStyle({
								fontWeight: 'bold',
								margin: 'none',
							})}
						>
							{calendarTitle}
						</h4>
						<CalendarButton
							{...nextButtonProps}
							aria-label={
								lang?.nextLabel ?? defaultEnglish.nextLabel
							}
						>
							<Icon icon={ChevronRightIcon} size="medium" />
						</CalendarButton>
					</div>
					<CalendarGrid
						state={state}
						firstDayOfWeek={calendarComponentProps.firstDayOfWeek}
					/>
					{/* {state.value && <h2>{dateText}</h2>} */}
				</div>

				<div className={odStyle({ flexGrow: 1 })}>
					<h3
						className={odStyle({
							fontSize: 'xl',
							fontWeight: 'bold',
						})}
					>
						{lang?.timeLabel ?? defaultEnglish.timeLabel}
					</h3>
					<OptionGrid {...optionGridComponentProps} />
				</div>
			</div>
		</div>
	);
};
