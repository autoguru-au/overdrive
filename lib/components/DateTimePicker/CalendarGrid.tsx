import { getWeeksInMonth } from '@internationalized/date';
import React from 'react';
import {
	useCalendarCell,
	useCalendarGrid,
	useLocale,
	type AriaCalendarGridProps,
} from 'react-aria';
import type { CalendarState } from 'react-stately';

import { odStyle } from '../../styles/sprinkles.css';
import { dataAttrs } from '../../utils/dataAttrs';

import { styledCell } from './DateTimePicker.css';

const CalendarCell = ({ state, date }) => {
	const ref = React.useRef(null);
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
		<td {...cellProps} className={odStyle({ padding: '1' })}>
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

export const CalendarGrid = ({
	state,
	...props
}: AriaCalendarGridProps & { state: CalendarState }) => {
	const { locale } = useLocale();
	const { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);

	// Get the number of weeks in the month so we can render the proper number of rows.
	const weeksInMonth = getWeeksInMonth(
		state.visibleRange.start,
		locale,
		props.firstDayOfWeek,
	);

	return (
		<table
			{...gridProps}
			className={odStyle({ width: { mobile: '100%', tablet: 'auto' } })}
		>
			<thead {...headerProps}>
				<tr>
					{weekDays.map((day, index) => (
						<th
							key={index}
							className={odStyle({
								color: 'gray600',
							})}
						>
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
								.map((date, i) =>
									date ? (
										<CalendarCell
											key={i}
											state={state}
											date={date}
										/>
									) : (
										<td key={i} />
									),
								)}
						</tr>
					),
				)}
			</tbody>
		</table>
	);
};
