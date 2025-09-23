import { CalendarIcon, IconType } from '@autoguru/icons';
import { type DateValue } from '@internationalized/date';
import clsx from 'clsx';
import React, { type ChangeEvent, useMemo, forwardRef } from 'react';
import type { AriaPopoverProps } from 'react-aria';

import { elementStyles } from '../../styles/elementStyles';
import { sprinkles } from '../../styles/sprinkles.css';
import type { TestIdProp } from '../../types';
import { formatDateValue, safeParseDateString } from '../../utils/dateFormat';
import { Calendar, type CalendarProps } from '../Calendar';
import { Icon } from '../Icon/Icon';
import { PopoverTrigger } from '../Popover';
import { ProgressSpinner } from '../ProgressSpinner/ProgressSpinner';
import { Text, type TextProps } from '../Text/Text';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';

import * as styles from './DatePicker.css';
import { useCalendarPopover } from './hooks/useCalendarPopover';

type SizeScale = 'small' | 'medium' | 'large';

const defaultEnglish = {
	openCalendar: 'open calendar',
} as const;

type LanguageEntries = Partial<Record<keyof typeof defaultEnglish, string>>;

export interface DatePickerProps extends TestIdProp {
	/**
	 * Options to customise the calendar: `allowPastDate`, `lang`, etc.
	 */
	calendarOptions?: Omit<CalendarProps, 'onChange'>;
	className?: string;
	/**
	 * Default selected date as an ISO string YYYY-MM-DD (uncontrolled)
	 */
	defaultValue?: string;
	/**
	 * Whether the picker is disabled and non-interactive
	 */
	disabled?: boolean;
	/**
	 * Icon to render inside the picker (defaults to calendar icon)
	 */
	icon?: IconType;
	/**
	 * Form field id
	 */
	id?: string;
	/**
	 * Show a loading state spinner instead of the icon
	 */
	isLoading?: boolean;
	/**
	 * Maximum selectable date YYYY-MM-DD
	 */
	max?: string;
	/**
	 * Minimum selectable date YYYY-MM-DD
	 */
	min?: string;
	/**
	 * Input field name recommended for form usage
	 */
	name?: string;
	onChange(date: string): void;
	/**
	 * Calendar popover placement relative to the trigger ('bottom left', 'top', etc.)
	 */
	placement?: AriaPopoverProps['placement'];
	/**
	 * Visual size of the picker control (small, medium, large)
	 */
	size?: SizeScale;
	/**
	 * The selected date as an ISO string (YYYY-MM-DD). Use `undefined` for an empty value
	 * (controlled)
	 */
	value?: string;
	/**
	 * Fallback label to display when no date value is selected.
	 */
	valueLabel?: string;
	/**
	 * Use native browser date picker instead of Calendar popover
	 */
	useNativePicker?: boolean;
	/**
	 * Language content override for DatePicker
	 */
	lang?: LanguageEntries;
}

const textSizeMap: Record<SizeScale, TextProps['size']> = {
	small: '2',
	medium: '3',
	large: '5',
};

/**
 * The DatePicker has been updated to render the Calendar component with a Popover while
 * maintaining backwards compatability.
 *
 * ## Props
 * - Visual size controlled by `size` (small | medium | large)
 * - Icon can be customized via the `icon` prop
 *
 * ## Event handling
 * - `onChange` is always invoked with the raw ISO date string (or empty string when cleared)
 *
 * ## Compatibility mode
 * - Setting `useNativePicker={true}` preserves the original browser-specific experience.
 *
 * ## Internationalization
 * - Override text values via `lang={{ openCalendar: 'open calendar' }}`
 * - Calendar options including `lang` can be passed via `calendarOptions` prop
 * - Date formatting helper available in `...utils/dateFormat.ts` or use `@internationalized/date` utils
 * - Advanced i18n and localization handled by [React Aria I18Provider](https://react-spectrum.adobe.com/react-aria/I18nProvider.html)
 * - Read more about [International calendars](https://react-spectrum.adobe.com/react-aria/useDatePicker.html#international-calendars)
 *
 * @example
 * // Uncontrolled component with default value
 * <DatePicker
 *   name="eventDate"
 *   defaultValue="2025-03-15"
 *   onChange={(isoDate) => console.log('Selected date:', isoDate)}
 * />
 *
 * @example
 * // Controlled component
 * <DatePicker
 *   name="bookingDate"
 *   value={selectedDate}
 *   valueLabel="Select a date"
 *   onChange={(isoDate) => setSelectedDate(isoDate)}
 *   calendarOptions={{
 *     allowPastDate: false,
 *     weekdayFormat: 'short',
 *   }}
 * />
 *
 * @example
 * // Native date picker usage
 * <DatePicker
 *   name="startDate"
 *   useNativePicker
 *   defaultValue="2025-03-12"
 *   onChange={(isoDate) => console.log('Native picked date:', isoDate)}
 * />
 */
export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
	(
		{
			calendarOptions,
			className,
			defaultValue,
			disabled = false,
			icon = CalendarIcon,
			isLoading = false,
			lang,
			max,
			min,
			onChange,
			placement = 'bottom left',
			size = 'medium',
			testId,
			useNativePicker = false,
			value,
			valueLabel,

			...inputProps
		},
		ref,
	) => {
		// Convert string props to DateValue for the hook
		const dateValue = value ? safeParseDateString(value) : undefined;
		const dateDefaultValue = defaultValue
			? safeParseDateString(defaultValue)
			: undefined;

		const { selectedDate, handleCalendarChange, setPopoverState } =
			useCalendarPopover({
				value: dateValue,
				defaultValue: dateDefaultValue,
				onChange: (dateVal: DateValue) => {
					if (typeof onChange === 'function') {
						onChange(formatDateValue(dateVal));
					}
				},
			});

		const onChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
			const dateString = event.currentTarget.value;
			if (typeof onChange === 'function') {
				onChange(dateString);
			}
		};

		const indicator = isLoading ? (
			<ProgressSpinner size={size} />
		) : (
			<Icon icon={icon} size={size} />
		);

		const label = valueLabel ? (
			<Text size={textSizeMap[size]}>{valueLabel}</Text>
		) : null;

		const calendarProps: CalendarProps = useMemo(
			() => ({
				calendarOptions: {
					...(min && { minValue: safeParseDateString(min) }),
					...(max && { maxValue: safeParseDateString(max) }),
					...calendarOptions?.calendarOptions,
				},
				...calendarOptions,
				onChange: handleCalendarChange,
			}),
			[calendarOptions, handleCalendarChange, min, max],
		);

		const contentCalendar = useMemo(
			() => <Calendar {...calendarProps} />,
			[calendarProps],
		);

		// Use native picker only if explicitly requested
		if (useNativePicker) {
			return (
				<div
					className={clsx(
						className,
						styles.inputContainer,
						disabled && styles.disabled.native,
					)}
				>
					<input
						{...inputProps}
						ref={ref}
						className={elementStyles({
							className: [
								styles.input,
								{
									[styles.disabled.cursor]: disabled,
								},
							],
						})}
						type="date"
						disabled={disabled}
						min={min}
						max={max}
						value={formatDateValue(selectedDate)}
						onChange={onChangeEvent}
					/>
					<div className={styles.inputOverlay}>
						<div
							className={clsx(styles.contents.default, {
								[styles.contents.withLabel]:
									Boolean(valueLabel),
							})}
						>
							{indicator}
							{label}
						</div>
					</div>
				</div>
			);
		}

		return (
			<div className={className}>
				<PopoverTrigger
					content={contentCalendar}
					placement={placement}
					testId={testId}
					isDisabled={disabled}
					onStateReady={setPopoverState}
				>
					<div
						className={sprinkles({
							display: 'flex',
							alignItems: 'center',
							gap: '1',
						})}
					>
						{indicator}
						{label}
					</div>
					<VisuallyHidden>
						{lang?.openCalendar ?? defaultEnglish.openCalendar}
					</VisuallyHidden>
				</PopoverTrigger>
				<input
					{...inputProps}
					ref={ref}
					value={formatDateValue(selectedDate)}
					type="hidden"
				/>
			</div>
		);
	},
);

DatePicker.displayName = 'DatePicker';
