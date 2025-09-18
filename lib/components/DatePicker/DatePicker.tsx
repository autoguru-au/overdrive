import { CalendarIcon, IconType } from '@autoguru/icons';
import {
	getLocalTimeZone,
	parseDate,
	today,
	type DateValue,
} from '@internationalized/date';
import clsx from 'clsx';
import React, {
	type ChangeEvent,
	useCallback,
	useEffect,
	useMemo,
	useState,
	forwardRef,
} from 'react';
import type { AriaPopoverProps } from 'react-aria';

import { elementStyles } from '../../styles/elementStyles';
import { sprinkles } from '../../styles/sprinkles.css';
import type { TestIdProp } from '../../types';
import { Calendar, type CalendarProps } from '../Calendar';
import { Icon } from '../Icon/Icon';
import { PopoverTrigger } from '../Popover';
import { ProgressSpinner } from '../ProgressSpinner/ProgressSpinner';
import { Text, type TextProps } from '../Text/Text';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';

import * as styles from './DatePicker.css';

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

const formatDateToString = (date: DateValue | null): string => {
	if (!date) return '';
	return date.toString(); // ISO format: YYYY-MM-DD to match native input
};

const parseDateString = (dateString: string): DateValue | null => {
	try {
		return parseDate(dateString);
	} catch {
		return null;
	}
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
		const isControlled = value !== undefined;

		const [selectedDate, setSelectedDate] = useState<DateValue | null>(
			() => {
				const initialValue = isControlled ? value : defaultValue;
				return initialValue ? parseDateString(initialValue) : null;
			},
		);
		const [popoverState, setPopoverState] = useState<{
			close: () => void;
		} | null>(null);

		// Sync external value changes (only for controlled components)
		useEffect(() => {
			if (isControlled) {
				const parsedDate = value ? parseDateString(value) : null;
				setSelectedDate(parsedDate);
			}
		}, [value, isControlled]);

		const onChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
			const dateString = event.currentTarget.value;
			if (dateString) {
				const parsedDate = parseDateString(dateString);
				setSelectedDate(parsedDate);
			} else {
				setSelectedDate(null);
			}
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

		const handleCalendarChange = useCallback(
			(date: DateValue) => {
				setSelectedDate(date);
				if (typeof onChange === 'function') {
					onChange(formatDateToString(date));
				}
				// Close the popover after date selection
				if (popoverState) {
					popoverState.close();
				}
			},
			[onChange, popoverState],
		);

		const calendarProps: CalendarProps = useMemo(
			() => ({
				calendarOptions: {
					// For controlled components, use value. For uncontrolled, use defaultValue
					...(isControlled
						? {
								value:
									selectedDate || today(getLocalTimeZone()),
							}
						: {
								defaultValue:
									selectedDate || today(getLocalTimeZone()),
							}),
					...(min && { minValue: parseDateString(min) }),
					...(max && { maxValue: parseDateString(max) }),
				},
				...calendarOptions,
				onChange: handleCalendarChange,
			}),
			[
				selectedDate,
				calendarOptions,
				handleCalendarChange,
				isControlled,
				min,
				max,
			],
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
					value={formatDateToString(selectedDate)}
					type="hidden"
				/>
			</div>
		);
	},
);

DatePicker.displayName = 'DatePicker';
