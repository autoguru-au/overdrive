import {
	getLocalTimeZone,
	parseDate,
	today,
	type DateValue,
} from '@internationalized/date';

/**
 * Checks if a given DateValue represents today's date
 * @param dateValue
 * @returns boolean
 */
export function isToday(date: DateValue | string | null | undefined) {
	if (!date) return false;
	if (typeof date === 'string') {
		try {
			date = parseDate(date);
		} catch {
			return false;
		}
	}
	return date.compare(today(getLocalTimeZone())) === 0;
}

/**
 * Safely parses a date string into a DateValue
 * @param dateString - ISO date string to parse
 * @returns DateValue or null if parsing fails
 */
export function safeParseDateString(dateString: string): DateValue | null {
	if (!dateString) return null;
	try {
		return parseDate(dateString);
	} catch {
		return null;
	}
}

/**
 * Formats a DateValue to its string representation
 * @param date - DateValue or null
 * @returns String representation of the date or empty string for null
 */
export function formatDateValue(date: DateValue | null): string {
	return date?.toString() ?? '';
}

/**
 * Formats a date value or ISO date string for display, with special handling for "today"
 *
 * @param date - DateValue, ISO date string, or null/undefined
 * @param format - Intl date formatting style (default: 'medium')
 * @param locales - Locales for formatting (default: 'en-AU')
 * @returns Formatted date string or empty string for null/undefined
 *
 * @example
 * ```ts
 * displayFormattedDate('2025-09-21') // (locale default) "21/09/2025"
 * displayFormattedDate('2025-09-21', 'short') // "21/9/25"
 * displayFormattedDate('2025-09-21', 'medium') // "Sep 21, 2025"
 * displayFormattedDate('2024-01-15', 'full') // "Monday, January 15, 2024"
 * ```
 */
export function displayFormattedDate(
	date: DateValue | string | null | undefined,
	format?: Intl.DateTimeFormatOptions['dateStyle'],
	locales: Intl.LocalesArgument = 'en-AU',
): string {
	if (!date) return '';

	let dateValue: DateValue;

	// Handle string input by parsing it
	if (typeof date === 'string') {
		try {
			dateValue = parseDate(date);
		} catch {
			return date; // Return original string if parsing fails
		}
	} else {
		dateValue = date;
	}

	const formatOptions: Intl.DateTimeFormatOptions = { dateStyle: format };
	const formatter = new Intl.DateTimeFormat(locales, formatOptions);
	return formatter.format(dateValue.toDate(getLocalTimeZone()));
}
