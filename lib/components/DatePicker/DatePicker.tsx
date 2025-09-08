import { CalendarIcon, IconType } from '@autoguru/icons';
import {
	getLocalTimeZone,
	parseDate,
	today,
	type DateValue,
} from '@internationalized/date';
import clsx from 'clsx';
import * as React from 'react';
import {
	ChangeEvent,
	ComponentProps,
	FunctionComponent,
	useState,
} from 'react';
import { useDateFormatter, type AriaCalendarProps } from 'react-aria';

import { useMedia } from '../../hooks/useMedia/useMedia';
import { elementStyles } from '../../styles/elementStyles';
import type { TestIdProp } from '../../types';
import { Calendar, type CalendarProps } from '../Calendar';
import { Icon } from '../Icon/Icon';
import { PopoverTrigger } from '../Popover';
import { ProgressSpinner } from '../ProgressSpinner/ProgressSpinner';
import { Text } from '../Text/Text';

import * as styles from './DatePicker.css';

type SizeScale = 'small' | 'medium' | 'large';

export interface DatePickerProps
	extends Partial<Pick<HTMLInputElement, 'min' | 'max' | 'value'>>,
		TestIdProp {
	size?: SizeScale;
	className?: string;
	disabled?: boolean;
	icon?: IconType;
	isLoading?: boolean;
	valueLabel?: string;
	/**
	 * Use native browser date picker instead of Calendar popover
	 */
	useNativePicker?: boolean;
	/**
	 * Calendar configuration options
	 */
	calendarOptions?: Exclude<AriaCalendarProps<DateValue>, 'onChange'>;
	/**
	 * Allow date in the past
	 */
	allowPastDate?: boolean;
	/**
	 * Language content override for calendar
	 */
	lang?: Partial<Record<'nextLabel' | 'prevLabel', string>>;

	onChange(date: string): void;
}

const textSizeMap: Record<SizeScale, ComponentProps<typeof Text>['size']> = {
	small: '2',
	medium: '3',
	large: '5',
};
const formatDateToString = (date: DateValue): string => {
	return date.toString(); // ISO format: YYYY-MM-DD
};

const parseDateString = (dateString: string): DateValue | null => {
	try {
		return parseDate(dateString);
	} catch {
		return null;
	}
};

export const DatePicker: FunctionComponent<DatePickerProps> = ({
	className = '',
	icon = CalendarIcon,
	size = 'medium',
	disabled = false,
	isLoading = false,
	valueLabel,
	useNativePicker = false,
	calendarOptions,
	allowPastDate = false,
	lang,
	onChange,
	testId,
	...inputProps
}) => {
	// Check if we're on a mobile device (below tablet breakpoint)
	const [isMobile] = useMedia(['mobile']);
	const [isTablet] = useMedia(['tablet']);

	// Use native picker on mobile or when explicitly requested
	const shouldUseNativePicker = useNativePicker || (isMobile && !isTablet);
	const [selectedDate, setSelectedDate] = useState<DateValue | null>(() => {
		if (inputProps.value) {
			return parseDateString(inputProps.value);
		}
		return null;
	});

	const formatter = useDateFormatter({ dateStyle: 'medium' });

	const onChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
		if (typeof onChange === 'function') {
			onChange(event.currentTarget.value);
		}
	};

	const onCalendarChange = (date: DateValue) => {
		setSelectedDate(date);
		if (typeof onChange === 'function') {
			onChange(formatDateToString(date));
		}
	};

	const displayValue = selectedDate
		? formatter.format(selectedDate.toDate(getLocalTimeZone()))
		: valueLabel;

	// Common container styles
	const containerClassName = elementStyles({
		position: 'relative',
		overflow: 'hidden',
		className: clsx(className, {
			[styles.disabled.default]: disabled,
			[styles.disabled.root]: disabled,
		}),
	});

	// Common contents JSX
	const contentsJSX = (
		<div
			className={clsx(styles.contents.default, {
				[styles.contents.withLabel]: Boolean(displayValue),
				[styles.disabled.default]: disabled && !shouldUseNativePicker,
			})}
		>
			{isLoading ? (
				<ProgressSpinner
					className={styles.spinner}
					size={
						size as ComponentProps<typeof ProgressSpinner>['size']
					}
				/>
			) : (
				<Icon icon={icon} size={size} />
			)}
			{displayValue && (
				<Text size={textSizeMap[size as string]}>{displayValue}</Text>
			)}
		</div>
	);

	// Use native picker if explicitly requested or on mobile breakpoints
	if (shouldUseNativePicker) {
		return (
			<div className={containerClassName}>
				<input
					className={elementStyles({
						position: 'absolute',
						height: 'full',
						width: 'full',
						className: clsx(
							{
								[styles.disabled.default]: disabled,
							},
							styles.input,
						),
					})}
					type="date"
					disabled={disabled}
					onChange={onChangeEvent}
					{...inputProps}
				/>
				{contentsJSX}
			</div>
		);
	}

	// Use Calendar popover
	const calendarProps: CalendarProps = {
		allowPastDate,
		calendar: {
			defaultValue: selectedDate || today(getLocalTimeZone()),
			...calendarOptions,
		},
		onChange: onCalendarChange,
		lang,
		testId: testId ? `${testId}-calendar` : undefined,
	};

	return (
		<PopoverTrigger
			placement="bottom"
			testId={testId}
			isDisabled={disabled}
		>
			<div className={containerClassName}>{contentsJSX}</div>
			<Calendar {...calendarProps} />
		</PopoverTrigger>
	);
};
