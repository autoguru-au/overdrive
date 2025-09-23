import { type DateValue } from '@internationalized/date';
import React, { forwardRef, useCallback, useState } from 'react';
import { type AriaCalendarProps } from 'react-aria';

import type { TestIdProp } from '../../../types';
import { dataAttrs } from '../../../utils/dataAttrs';
import {
	displayFormattedDate,
	safeParseDateString,
} from '../../../utils/dateFormat';
import {
	Calendar,
	type CalendarProps,
	type CalendarTextContent,
} from '../../Calendar/Calendar';
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
		const [internalValue, setInternalValue] = useState<DateValue | null>(
			defaultValue ?? null,
		);
		const [popoverState, setPopoverState] = useState<{
			close: () => void;
		} | null>(null);

		const isControlled = value !== undefined;
		const currentValue = isControlled ? value : internalValue;
		const isDisabled = disabled || loading;
		const textValues = { ...defaultEnglish, ...lang };

		const langTextCalendar = {
			nextLabel: textValues.nextLabel,
			prevLabel: textValues.prevLabel,
		};

		const langTextPopover = {
			close: textValues.close,
		};

		const handleCalendarChange = useCallback(
			(dateValue: DateValue) => {
				if (!isControlled) setInternalValue(dateValue);
				onChange?.(dateValue);
				// Close the popover after date selection
				if (popoverState) popoverState.close();
			},
			[isControlled, onChange, popoverState, setInternalValue],
		);

		const calendarProps: AriaCalendarProps<DateValue> = {
			defaultValue: currentValue,
			minValue: min ? safeParseDateString(min) : undefined,
			maxValue: max ? safeParseDateString(max) : undefined,
			...calendarOptions,
		};

		return (
			<div
				{...dataAttrs({
					disabled,
					loading,
					invalid,
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
					<button className={dateFieldStyle}>
						<div className={labelVariants({ invalid })}>
							{textValues.dateLabel}
						</div>
						{loading ? (
							<LoadingBox height="6" />
						) : (
							<div className={inputStyle}>
								{currentValue
									? displayFormattedDate(currentValue)
									: textValues.select}
							</div>
						)}
					</button>
				</PopoverTrigger>
				<input
					name={name}
					value={
						currentValue ? displayFormattedDate(currentValue) : ''
					}
					type="hidden"
					ref={ref}
				/>
			</div>
		);
	},
);

DateField.displayName = 'DateField';
