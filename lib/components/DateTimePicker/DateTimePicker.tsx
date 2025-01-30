import { GregorianCalendar } from '@internationalized/date';
import React from 'react';
import { useButton, useCalendar, useLocale } from 'react-aria';
import { useCalendarState } from 'react-stately';

import { OptionGrid } from '../OptionGrid/OptionGrid';

import { CalendarGrid } from './CalendarGrid';

// demo times
const times = [
	{
		label: 'Early morning',
		description: '6 to 8 AM',
		name: '6-8',
	},
	{
		label: 'Morning',
		description: '8 to 10 AM',
		name: '8-10',
	},
	{
		label: 'Mid-morning',
		description: '10 AM to 12 PM',
		name: '10-12',
	},
	{
		label: 'Early afteroon',
		description: '12 to 2 PM',
		name: '12-2',
	},
	{
		label: 'Day before',
		description: 'Afternoon of day prior to service',
		name: 'aft-before',
	},
];

function createCalendar(identifier) {
	if (identifier === 'gregory') {
		return new GregorianCalendar();
	}

	throw new Error(`Unsupported calendar ${identifier}`);
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

export const DateTimePicker = (props) => {
	// const [selectedDate, setSelectedDate] = useState(new Date('2025-01-30'));
	const { locale } = useLocale();
	const state = useCalendarState({
		...props,
		locale,
		createCalendar,
	});

	const { calendarProps, prevButtonProps, nextButtonProps, title } =
		useCalendar(props, state);

	// const calendar = createCalendar({
	// 	weekStartsOn: 'sunday',
	// });

	return (
		<div>
			<h2>Book an Appointment</h2>
			<div>
				<div {...calendarProps}>
					<h3>{title}</h3>
					<CalendarButton {...prevButtonProps}>Prev</CalendarButton>
					<CalendarButton {...nextButtonProps}>Next</CalendarButton>
				</div>
				<CalendarGrid state={state} firstDayOfWeek="mon" />
			</div>

			<div>
				{/* <h2>{selectedDate.toLocaleDateString()}</h2> */}
				<OptionGrid
					columns="2"
					label="Select a drop off time"
					items={times}
					indicator="none"
					selectionMode="single"
				/>
			</div>
		</div>
	);
};
