import { type DateValue } from '@internationalized/date';
import { useCallback, useState } from 'react';

import type { DateTimeInputProps } from './DateTimeInput';

/**
 * Custom hook for managing DateTimeInput state and handlers.
 * Both controlled and uncontrolled
 */
export const useDateTimeInput = ({
	value,
	defaultDate,
	defaultTime,
	onChange,
}: Pick<
	DateTimeInputProps,
	'value' | 'defaultDate' | 'defaultTime' | 'onChange'
>) => {
	const [internalDate, setInternalDate] = useState<DateValue | null>(
		defaultDate ?? null,
	);
	const [internalTime, setInternalTime] = useState<string>(defaultTime ?? '');

	const isControlled = value !== undefined;
	const currentDate = value?.date ?? internalDate;
	const currentTime = value?.timeOption ?? internalTime;

	const handleDateChange = useCallback(
		(date: DateValue) => {
			if (!isControlled) {
				setInternalDate(date);
			}

			onChange?.({
				date,
				timeOption: isControlled
					? (value?.timeOption ?? '')
					: internalTime,
			});
		},
		[isControlled, value?.timeOption, internalTime, onChange],
	);

	const handleTimeChange = useCallback(
		(timeOption: string) => {
			if (!isControlled) {
				setInternalTime(timeOption);
			}

			onChange?.({
				date: isControlled ? (value?.date ?? null) : internalDate,
				timeOption,
			});
		},
		[isControlled, value?.date, internalDate, onChange],
	);

	return {
		currentDate,
		currentTime,
		handleDateChange,
		handleTimeChange,
		isControlled,
	};
};
