import { type DateValue } from '@internationalized/date';
import React, { forwardRef, useId, useRef } from 'react';
import { type AriaCalendarProps } from 'react-aria';

import type { TestIdProp } from '../../types';
import { dataAttrs } from '../../utils/dataAttrs';
import {
	displayFormattedDate,
	safeParseDateString,
} from '../../utils/dateFormat';
import { Box } from '../Box';
import {
	Calendar,
	type CalendarProps,
	type CalendarTextContent,
} from '../Calendar/Calendar';
import { LoadingBox } from '../LoadingBox/LoadingBox';
import type { PopoverTextContent } from '../Popover/Popover';
import { PopoverTrigger } from '../Popover/PopoverTrigger';

import { dateFieldStyle, inputStyle, labelVariants } from './DateTimeInput.css';
import type { CommonSelectorProps } from './types';

export type DateSelectorTextContent = Record<
	keyof typeof defaultEnglish,
	string
> &
	CalendarTextContent &
	PopoverTextContent;

export interface DateSelectorProps
	extends CommonSelectorProps<DateValue | null>,
		TestIdProp {
	/**
	 * Calendar props passed through to the react-aria hook
	 */
	calendarOptions?: CalendarProps['calendarOptions'];
	/**
	 * Allow date in the past
	 */
	allowPastDate?: boolean;
	/**
	 * Minimum selectable date (ISO YYYY-MM-DD)
	 */
	min?: string;
	/**
	 * Maximum selectable date (ISO YYYY-MM-DD)
	 */
	max?: string;
	/**
	 * Text values for localization
	 */
	lang?: Partial<DateSelectorTextContent>;
}

const defaultEnglish = {
	dateLabel: 'date',
	select: 'select',
} as const;

/**
 * DateSelector component for selecting a date with a Calendar popup.
 * Presently, this component is primarily used within the DateTimeInput.
 */
export const DateSelector = forwardRef<HTMLButtonElement, DateSelectorProps>(
	(
		{
			allowPastDate = false,
			calendarOptions,
			defaultValue,
			disabled = false,
			invalid = false,
			lang = {},
			loading = false,
			max,
			min,
			name,
			onChange,
			testId,
			value,
		},
		ref,
	) => {
		const dateInputId = useId();
		const isDisabled = disabled || loading;
		const datePopoverState = useRef<{ close: () => void } | null>(null);

		const textValues = { ...defaultEnglish, ...lang };

		const langCalendar = {
			nextLabel: textValues.nextLabel,
			prevLabel: textValues.prevLabel,
		};

		const langPopover = {
			close: textValues.close,
		};

		const handleDateChange = (dateValue: DateValue) => {
			datePopoverState.current?.close();
			onChange?.(dateValue);
		};

		const calendarProps: AriaCalendarProps<DateValue> = {
			defaultValue: value ?? defaultValue,
			minValue: min ? safeParseDateString(min) : undefined,
			maxValue: max ? safeParseDateString(max) : undefined,
			...calendarOptions,
		};

		return (
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
				isDisabled={isDisabled}
				testId={testId}
			>
				<button
					className={dateFieldStyle}
					{...dataAttrs({ invalid })}
					ref={ref}
				>
					<label
						className={labelVariants({
							disabled,
							invalid,
						})}
						htmlFor={dateInputId}
					>
						{textValues.dateLabel}
					</label>
					{loading ? (
						<LoadingBox height="6" />
					) : (
						<input
							type="text"
							id={dateInputId}
							name={name}
							value={
								value
									? displayFormattedDate(value)
									: textValues.select
							}
							className={inputStyle}
							disabled={isDisabled}
							tabIndex={-1}
							readOnly
						/>
					)}
				</button>
			</PopoverTrigger>
		);
	},
);

DateSelector.displayName = 'DateSelector';
