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
 * Formats a date value or ISO date string for display, with special handling for "today"
 *
 * @param date - DateValue, ISO date string, or null/undefined
 * @param format - Intl date formatting style (default: 'medium')
 * @param locales - Locales for formatting (default: 'en-AU')
 * @returns Formatted date string or empty string for null/undefined
 *
 * @example
 * ```ts
 * displayFormattedDate('2025-05-01') // "May 01, 2025"
 * displayFormattedDate('2024-01-15', 'full') // "Monday, January 15, 2024"
 * displayFormattedDate('2025-09-21', 'short') // "21/9/25"
 * ```
 */
export function displayFormattedDate(
	date: DateValue | string | null | undefined,
	format: Intl.DateTimeFormatOptions['dateStyle'] = 'medium',
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

	// Format the date using Intl.DateTimeFormat
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle: format });
	return formatter.format(dateValue.toDate(getLocalTimeZone()));
}
