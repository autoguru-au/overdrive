import { ChevronLeftIcon, ChevronRightIcon } from '@autoguru/icons';
import {
	getLocalTimeZone,
	// currently only supporting western-style Gregorian calendar
	GregorianCalendar,
	today,
} from '@internationalized/date';
import React from 'react';
import {
	useCalendar,
	// useDateFormatter,
	useLocale,
	useId,
	type AriaCalendarProps,
	type DateValue,
} from 'react-aria';
import { useCalendarState } from 'react-stately';

import { odStyle } from '../../styles/sprinkles.css';
import { Icon } from '../Icon';
import { OptionGrid, OptionItem } from '../OptionGrid/OptionGrid';

import { CalendarButton } from './CalendarButton';
import { CalendarGrid } from './CalendarGrid';

const defaultEnglish = {
	dateLabel: 'Date',
	timeLabel: 'Time',
	nextLabel: 'Next',
	prevLabel: 'Prev',
} as const;

type LangContent = keyof typeof defaultEnglish;

export interface DateTimePickerProps<D extends DateValue> {
	/**
	 * A title for the date/time selection
	 */
	title?: string;
	/**
	 * The items to select from for time options. Currently time options are not tied to the day selection.
	 */
	timeOptionItems: OptionItem[];
	/**
	 * A descriptive label for the time picker option grid (for assistive technology)
	 */
	timeOptionLabel: string;
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

// const dateTextPunctuationEN = (text: string) =>
// 	text
// 		.split(' ')
// 		.map((word, idx) => (idx === 0 ? `${word},` : word))
// 		.join(' ');

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
	timeOptionLabel,
	title,
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
	const titleId = useId();

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
					<OptionGrid
						columns="2"
						label={timeOptionLabel}
						items={timeOptionItems}
						indicator="none"
						selectionMode="single"
					/>
				</div>
			</div>
		</div>
	);
};
