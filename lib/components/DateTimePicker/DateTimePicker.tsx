import {
	getLocalTimeZone,
	// currently only supporting western-style Gregorian calendar
	GregorianCalendar,
	today,
} from '@internationalized/date';
import React from 'react';
import {
	useButton,
	useCalendar,
	useDateFormatter,
	useLocale,
	type AriaCalendarProps,
	type DateValue,
} from 'react-aria';
import { useCalendarState } from 'react-stately';

import { odStyle } from '../../styles/sprinkles.css';
import { OptionGrid, OptionItem } from '../OptionGrid/OptionGrid';

import { CalendarGrid } from './CalendarGrid';

const defaultEnglish = {
	dateLabel: 'Date',
	timeLabel: 'Time',
} as const;

type LangContent = keyof typeof defaultEnglish;

export interface DateTimePickerProps<D extends DateValue> {
	/**
	 * The items to select from for time options. Currently time options are not tied to the day selection.
	 */
	timeOptionItems: OptionItem[];
	/**
	 * Allow date in the past
	 */
	allowPastDate?: boolean;
	// firstDayOfWeek?: AriaCalendarProps<D>['firstDayOfWeek'];
	/**
	 * Calendar props passed through to the react-aria hook
	 * ([docs](https://react-spectrum.adobe.com/react-aria/useCalendar.html))
	 *
	 * *Defaults*
	 * - `defaultValue`: Today's date
	 * - `firstDayOfWeek`: Monday
	 */
	calendar?: AriaCalendarProps<D>;
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

function CalendarButton(props) {
	const ref = React.useRef(null);
	const { buttonProps } = useButton(props, ref);
	return (
		<button {...buttonProps} ref={ref}>
			{props.children}
		</button>
	);
}

const dateTextPunctuationEN = (text: string) =>
	text
		.split(' ')
		.map((word, idx) => (idx === 0 ? `${word},` : word))
		.join(' ');

/**
 * DateTimePicker component for selecting a date and time. The primary use case is for selecting a date and time for
 * the vehicle to be left at the place of service, rather than the scheduling the time of the service itself.
 *
 * It is recommended to use the the DateTimePicker uncontrolled.
 *
 * This component implements the react-aria `useCalendar` hook and supports controlled state as well
 * ([docs](https://react-spectrum.adobe.com/react-aria/useCalendar.html))
 */
export const DateTimePicker = <D extends DateValue>({
	allowPastDate = false,
	calendar,
	lang,
	timeOptionItems,
}: DateTimePickerProps<D>) => {
	const calendarComponentProps: AriaCalendarProps<D> = {
		defaultValue: today(getLocalTimeZone()) as D,
		firstDayOfWeek: 'sun',
		minValue: allowPastDate ? undefined : today(getLocalTimeZone()),
		...calendar,
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

	const formatter = useDateFormatter({ dateStyle: 'full' });
	const dateText = state.value
		? dateTextPunctuationEN(
				formatter.format(state?.value?.toDate(getLocalTimeZone())),
			)
		: '';

	return (
		<div>
			<div
				className={odStyle({
					display: 'flex',
					gap: '5',
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
						className={odStyle({ display: 'flex' })}
					>
						<CalendarButton {...prevButtonProps}>
							Prev
						</CalendarButton>
						<h3>{calendarTitle}</h3>
						<CalendarButton {...nextButtonProps}>
							Next
						</CalendarButton>
					</div>
					<CalendarGrid
						state={state}
						firstDayOfWeek={calendarComponentProps.firstDayOfWeek}
					/>
					{state.value && <h2>{dateText}</h2>}
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
					<OptionGrid
						columns="2"
						label="Select a drop off time"
						items={timeOptionItems}
						indicator="none"
						selectionMode="single"
					/>
				</div>
			</div>
		</div>
	);
};
