import { type DateValue } from '@internationalized/date';
import { clsx } from 'clsx';
import React, { forwardRef, useId, useRef, useState } from 'react';
import { type AriaCalendarProps } from 'react-aria';

import { elementReset } from '../../styles/elementReset.css';
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
import {
	PopoverTrigger,
	type OnStateReadyValue,
} from '../Popover/PopoverTrigger';

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
export const DateSelector = forwardRef<HTMLLabelElement, DateSelectorProps>(
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
		const datePopoverState = useRef<OnStateReadyValue | null>(null);
		const triggerRef = useRef<HTMLButtonElement>(null);
		const dateInputId = useId();

		const isControlled = value !== undefined;
		const currentValue = isControlled ? value : internalValue;
		const isDisabled = disabled || loading;
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

			// Update internal state if uncontrolled
			if (!isControlled) {
				setInternalValue(dateValue);
			}

			onChange?.(dateValue);
		};

		const calendarProps: AriaCalendarProps<DateValue> = {
			defaultValue: currentValue,
			minValue: min ? safeParseDateString(min) : undefined,
			maxValue: max ? safeParseDateString(max) : undefined,
			...calendarOptions,
		};

		return (
			<label
				className={dateFieldStyle}
				htmlFor={dateInputId}
				onClick={(e) => {
					if (!isDisabled && !datePopoverState.current?.isOpen) {
						e.preventDefault();
						triggerRef.current?.click();
					}
				}}
				tabIndex={0}
				{...dataAttrs({
					disabled,
					invalid,
					'od-component': 'date-select-input',
				})}
				ref={ref}
			>
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
					ref={triggerRef}
				>
					<button
						className={clsx(
							elementReset.button,
							labelVariants({
								invalid,
							}),
						)}
					>
						{textValues.dateLabel}
					</button>
				</PopoverTrigger>
				{loading ? (
					<LoadingBox height="6" />
				) : (
					<input
						type="text"
						id={dateInputId}
						name={name}
						value={
							currentValue
								? displayFormattedDate(currentValue)
								: textValues.select
						}
						className={inputStyle}
						disabled={isDisabled}
						tabIndex={-1}
						readOnly
					/>
				)}
			</label>
		);
	},
);

DateSelector.displayName = 'DateSelector';
