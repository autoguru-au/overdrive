import { type DateValue } from '@internationalized/date';
import React, { forwardRef } from 'react';
import { type AriaCalendarProps } from 'react-aria';

import type { TestIdProp } from '../../../types';
import { dataAttrs } from '../../../utils/dataAttrs';
import {
	displayFormattedDate,
	formatDateValue,
	safeParseDateString,
} from '../../../utils/dateFormat';
import {
	Calendar,
	type CalendarProps,
	type CalendarTextContent,
} from '../../Calendar/Calendar';
import { useCalendarPopover } from '../../DatePicker/hooks/useCalendarPopover';
import { LoadingBox } from '../../LoadingBox/LoadingBox';
import type { PopoverTextContent } from '../../Popover/Popover';
import { PopoverTrigger } from '../../Popover/PopoverTrigger';
import {
	dateFieldStyle,
	inputStyle,
	labelVariants,
} from '../DateTimeInput.css';
import type { CommonSelectorProps } from '../types';

export type DateFieldTextContent = Record<keyof typeof defaultEnglish, string> &
	CalendarTextContent &
	PopoverTextContent;

export interface DateFieldProps
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
	lang?: Partial<DateFieldTextContent>;
}

const defaultEnglish = {
	dateLabel: 'date',
	select: 'select',
} as const;

/**
 * DateField is a sub-component for selecting a date with a Calendar popup.
 * Presently, this component is primarily used within the DateTimeInput.
 */
export const DateField = forwardRef<HTMLInputElement, DateFieldProps>(
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
		const { selectedDate, handleCalendarChange, setPopoverState } =
			useCalendarPopover({
				value,
				defaultValue,
				onChange,
			});

		const isDisabled = disabled || loading;
		const textValues = { ...defaultEnglish, ...lang };

		const langTextCalendar = {
			nextLabel: textValues.nextLabel,
			prevLabel: textValues.prevLabel,
		};

		const langTextPopover = {
			close: textValues.close,
		};

		const calendarProps: AriaCalendarProps<DateValue> = {
			defaultValue: selectedDate,
			minValue: min ? safeParseDateString(min) : undefined,
			maxValue: max ? safeParseDateString(max) : undefined,
			...calendarOptions,
		};

		return (
			<div
				{...dataAttrs({
					'od-component': 'date-field',
					testId,
				})}
			>
				<PopoverTrigger
					content={
						<Calendar
							allowPastDate={allowPastDate}
							calendarOptions={calendarProps}
							lang={langTextCalendar}
							onChange={handleCalendarChange}
						/>
					}
					lang={langTextPopover}
					offset={1}
					onStateReady={setPopoverState}
					placement="bottom left"
					isDisabled={isDisabled}
				>
					<button
						className={dateFieldStyle}
						{...dataAttrs({
							disabled,
							loading,
							invalid,
						})}
					>
						<div className={labelVariants({ disabled, invalid })}>
							{textValues.dateLabel}
						</div>
						{loading ? (
							<LoadingBox height="6" />
						) : (
							<div
								className={inputStyle}
								{...dataAttrs({ disabled })}
							>
								{selectedDate
									? displayFormattedDate(selectedDate)
									: textValues.select}
							</div>
						)}
					</button>
				</PopoverTrigger>
				<input
					name={name}
					value={formatDateValue(selectedDate)}
					type="hidden"
					disabled={disabled}
					ref={ref}
				/>
			</div>
		);
	},
);

DateField.displayName = 'DateField';
