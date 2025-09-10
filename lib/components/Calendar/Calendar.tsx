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
	useLocale,
	type AriaCalendarProps,
	type DateValue,
} from 'react-aria';
import { useCalendarState } from 'react-stately';

import type { TestIdProp } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import { Icon } from '../Icon';

import { calendarStyle, titleStyle } from './Calendar.css';
import { CalendarButton } from './CalendarButton';
import { CalendarGrid } from './CalendarGrid';

const FIRST_DAY_OF_WEEK = 'mon';
const defaultEnglish = {
	nextLabel: 'Next month',
	prevLabel: 'Previous month',
} as const;

type LanguageEntries = Partial<Record<keyof typeof defaultEnglish, string>>;

export interface CalendarProps extends TestIdProp {
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
	 * Allow date in the past
	 */
	allowPastDate?: boolean;
	/**
	 * Custom event handler return value when a date is selected
	 */
	onChange?: (value: DateValue) => void;
	/**
	 * Language content override
	 */
	lang?: LanguageEntries;
}

function createCalendar(identifier: string) {
	if (identifier === 'gregory') {
		return new GregorianCalendar();
	}

	throw new Error(`Unsupported calendar configured ${identifier}`);
}

/**
 * Calendar component for selecting a date using react-aria. Supports full localization and accessibility.
 * Uses the Gregorian calendar system.
 *
 * This component implements the react-aria `useCalendar` hook and supports controlled state
 * ([docs](https://react-spectrum.adobe.com/react-aria/useCalendar.html))
 *
 * ## Features
 * - Full keyboard navigation and screen reader support
 * - Localization and internationalization
 * - Configurable date restrictions (past dates, specific dates, date ranges)
 * - Custom default values and date ranges
 * - Flexible styling and theming
 *
 * ## Date Restrictions
 * You can restrict date selection using the `calendar` prop with react-aria calendar properties:
 * - `minValue` / `maxValue`: Define selectable date range
 * - `isDateUnavailable`: Function to disable specific dates
 * - `allowPastDate` prop: Convenient way to allow/disallow past dates
 *
 * ## Examples
 * See the Calendar stories for comprehensive examples including:
 * - Disabled specific dates and weekends
 * - Disabled date ranges
 * - Custom validation rules
 * - Localization examples
 */
export const Calendar = ({
	allowPastDate = false,
	calendarOptions,
	lang,
	onChange,
	testId,
}: CalendarProps) => {
	const selectedDate = useRef<DateValue>(null);

	const calendarComponentProps: AriaCalendarProps<DateValue> = {
		defaultValue: today(getLocalTimeZone()),
		firstDayOfWeek: FIRST_DAY_OF_WEEK,
		minValue: allowPastDate ? undefined : today(getLocalTimeZone()),
		onChange: (value) => {
			selectedDate.current = value;
			onChange?.(value);
		},
		...calendarOptions,
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

	useEffect(() => {
		if (state.value) {
			selectedDate.current = state.value;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps -- run only once
	}, []);

	return (
		<div {...dataAttrs({ testid: testId })}>
			<div {...calendarProps} className={calendarStyle}>
				<CalendarButton
					{...prevButtonProps}
					aria-label={lang?.prevLabel ?? defaultEnglish.prevLabel}
				>
					<Icon icon={ChevronLeftIcon} size="medium" />
				</CalendarButton>
				<h4 className={titleStyle}>{calendarTitle}</h4>
				<CalendarButton
					{...nextButtonProps}
					aria-label={lang?.nextLabel ?? defaultEnglish.nextLabel}
				>
					<Icon icon={ChevronRightIcon} size="medium" />
				</CalendarButton>
			</div>
			<CalendarGrid
				state={state}
				firstDayOfWeek={calendarComponentProps.firstDayOfWeek}
			/>
		</div>
	);
};

Calendar.displayName = 'Calendar';
