import { getWeeksInMonth } from '@internationalized/date';
import React, { useRef } from 'react';
import {
	useCalendarCell,
	useCalendarGrid,
	useLocale,
	type AriaCalendarCellProps,
	type AriaCalendarGridProps,
} from 'react-aria';
import type { CalendarState } from 'react-stately';

import { dataAttrs } from '../../utils/dataAttrs';

import {
	calendarGridStyle,
	styledCell,
	tdStyle,
	thStyle,
} from './DateTimePicker.css';

interface CalendarCellProps extends AriaCalendarCellProps {
	state: CalendarState;
}

const CalendarCell = ({ state, date }: CalendarCellProps) => {
	const ref = useRef(null);
	const {
		cellProps,
		buttonProps,
		isSelected,
		isOutsideVisibleRange,
		isDisabled,
		isUnavailable,
		formattedDate,
	} = useCalendarCell({ date }, state, ref);

	return (
		<td {...cellProps} className={tdStyle}>
			<div
				{...buttonProps}
				ref={ref}
				hidden={isOutsideVisibleRange}
				className={styledCell()}
				{...dataAttrs({
					selected: isSelected,
					disabled: isDisabled,
					unvailable: isUnavailable,
				})}
			>
				{formattedDate}
			</div>
		</td>
	);
};

interface CalendarGridProps extends AriaCalendarGridProps {
	state: CalendarState;
}

export const CalendarGrid = ({ state, ...props }: CalendarGridProps) => {
	const { locale } = useLocale();
	const { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);
	const weeksInMonth = getWeeksInMonth(
		state.visibleRange.start,
		locale,
		props.firstDayOfWeek,
	);

	return (
		<table {...gridProps} className={calendarGridStyle}>
			<thead {...headerProps}>
				<tr>
					{weekDays.map((day) => (
						<th key={day} className={thStyle}>
							{day}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{[...Array.from({ length: weeksInMonth }).keys()].map(
					(weekIndex) => (
						<tr key={weekIndex}>
							{state
								.getDatesInWeek(weekIndex)
								.map((date, idx) =>
									date ? (
										<CalendarCell
											key={idx}
											state={state}
											date={date}
										/>
									) : (
										<td key={idx} />
									),
								)}
						</tr>
					),
				)}
			</tbody>
		</table>
	);
};
