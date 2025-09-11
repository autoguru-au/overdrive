import { CalendarIcon, IconType } from '@autoguru/icons';
import {
	getLocalTimeZone,
	parseDate,
	today,
	type DateValue,
	GregorianCalendar,
} from '@internationalized/date';
import clsx from 'clsx';
import React, { type ChangeEvent, useMemo, useRef, useState } from 'react';
import { useDateField, useDateSegment, useLocale } from 'react-aria';
import {
	useDateFieldState,
	type DateFieldState,
	type DateSegment,
} from 'react-stately';

import { elementStyles } from '../../styles/elementStyles';
import { sprinkles } from '../../styles/sprinkles.css';
import { Calendar, type CalendarProps } from '../Calendar';
import { Icon } from '../Icon/Icon';
import { PopoverTrigger } from '../Popover';
import { ProgressSpinner } from '../ProgressSpinner/ProgressSpinner';
import { Text, type TextProps } from '../Text/Text';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { withEnhancedInput } from '../private/InputBase';

type SizeScale = 'small' | 'medium' | 'large';

const defaultEnglish = {
	openCalendar: 'open calendar',
} as const;

type LanguageEntries = Partial<Record<keyof typeof defaultEnglish, string>>;

function createCalendar(identifier: string) {
	if (identifier === 'gregory') {
		return new GregorianCalendar();
	}
	throw new Error(`Unsupported calendar configured ${identifier}`);
}

interface DateInputInternalProps {
	/**
	 * Options to customise the calendar: `allowPastDate`, `lang`, etc.
	 */
	calendarOptions?: Omit<CalendarProps, 'onChange'>;
	/**
	 * Icon to render inside the picker (defaults to calendar icon)
	 */
	icon?: IconType;
	/**
	 * Show a loading state spinner instead of the icon
	 */
	isLoading?: boolean;
	/**
	 * Language content override for DateInput
	 */
	lang?: LanguageEntries;
	/**
	 * Use native browser date picker instead of Calendar popover
	 */
	useNativePicker?: boolean;
	/**
	 * Fallback label to display when no date value is selected
	 */
	valueLabel?: string;
	/**
	 * Whether the picker is disabled and non-interactive
	 */
	disabled?: boolean;
	onChange?: (date: string) => void;
	size?: SizeScale;
	testId?: string;
	name?: string;
	id?: string;
	className?: string;
	value?: string;
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

function DateSegment({
	segment,
	state,
}: {
	segment: DateSegment;
	state: DateFieldState;
}) {
	const ref = useRef(null);
	const { segmentProps } = useDateSegment(segment, state, ref);

	return (
		<span
			{...segmentProps}
			ref={ref}
			style={{
				outline: 'none',
				minWidth: segment.maxValue
					? String(segment.maxValue).length + 'ch'
					: undefined,
				textAlign: 'center' as const,
				padding: '2px 1px',
				borderRadius: '2px',
				backgroundColor: segment.isPlaceholder
					? 'transparent'
					: undefined,
				color: segment.isPlaceholder ? '#999' : undefined,
			}}
		>
			{segment.text}
		</span>
	);
}

const DateInputInternal = ({
	calendarOptions,
	className,
	disabled = false,
	icon = CalendarIcon,
	id,
	isLoading = false,
	lang,
	name,
	onChange,
	size = 'medium',
	testId,
	useNativePicker = false,
	value,
	valueLabel,
}: DateInputInternalProps) => {
	const { locale } = useLocale();
	const [selectedDate, setSelectedDate] = useState<DateValue | null>(
		value ? parseDateString(value) : null,
	);
	const [popoverState, setPopoverState] = useState<{
		close: () => void;
	} | null>(null);

	// Use useDateField for accessibility and keyboard navigation
	const dateFieldState = useDateFieldState({
		value: selectedDate,
		onChange: (date) => {
			setSelectedDate(date);
			if (typeof onChange === 'function') {
				onChange(formatDateToString(date));
			}
		},
		locale,
		createCalendar,
		isDisabled: disabled,
	});

	const fieldRef = useRef<HTMLDivElement>(null);
	const { fieldProps, inputProps } = useDateField(
		{
			'aria-label': valueLabel || 'Date',
			isDisabled: disabled,
		},
		dateFieldState,
		fieldRef,
	);

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

	const containerStyle = elementStyles({
		className: [className],
	});

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
				defaultValue: selectedDate || today(getLocalTimeZone()),
				...calendarOptions?.calendarOptions,
			},
			onChange: (date: DateValue) => {
				setSelectedDate(date);
				if (typeof onChange === 'function') {
					onChange(formatDateToString(date));
				}
				// Close the popover after date selection
				if (popoverState) {
					popoverState.close();
				}
			},
			...calendarOptions,
		}),
		[selectedDate, calendarOptions, onChange, popoverState],
	);

	const contentCalendar = useMemo(
		() => <Calendar {...calendarProps} />,
		[calendarProps],
	);

	// Use native picker only if explicitly requested
	if (useNativePicker) {
		return (
			<div className={clsx(containerStyle)}>
				<input
					id={id}
					name={name}
					type="date"
					disabled={disabled}
					value={formatDateToString(selectedDate)}
					onChange={onChangeEvent}
					data-testid={testId}
					style={{
						border: '1px solid #ccc',
						borderRadius: '4px',
						padding: '8px',
						fontSize: '14px',
						width: '100%',
					}}
				/>
			</div>
		);
	}

	return (
		<div
			className={clsx(
				containerStyle,
				sprinkles({ display: 'flex', alignItems: 'center', gap: '1' }),
			)}
			data-testid={testId}
		>
			<PopoverTrigger
				content={contentCalendar}
				placement="bottom left"
				isDisabled={disabled}
				onStateReady={setPopoverState}
			>
				{indicator}
				<VisuallyHidden>
					{lang?.openCalendar ?? defaultEnglish.openCalendar}
				</VisuallyHidden>
			</PopoverTrigger>
			<div {...fieldProps} ref={fieldRef}>
				{dateFieldState.segments.map((segment, i) => (
					<DateSegment
						key={`segment-${segment.type || 'unknown'}-${i}`}
						segment={segment}
						state={dateFieldState}
					/>
				))}
			</div>
			{label}
			<input
				{...inputProps}
				id={id}
				name={name}
				value={formatDateToString(selectedDate)}
				type="hidden"
			/>
		</div>
	);
};

export const DateInput = withEnhancedInput<
	DateInputInternalProps & Partial<Pick<HTMLInputElement, 'min' | 'max'>>
>(
	({ field, eventHandlers, isLoading, size, ...rest }) => {
		return (
			<DateInputInternal
				id={field.id}
				name={field.name}
				value={field.value}
				onChange={(date: string) => {
					if (eventHandlers.onChange) {
						// Create a synthetic event for compatibility with withEnhancedInput
						const event = {
							currentTarget: { value: date },
							target: { value: date },
						} as React.ChangeEvent<HTMLInputElement>;
						eventHandlers.onChange(event);
					}
				}}
				disabled={field.disabled}
				size={size}
				isLoading={isLoading}
				{...rest}
			/>
		);
	},
	{
		primitiveType: 'date',
	},
);

DateInput.displayName = 'DateInput';
