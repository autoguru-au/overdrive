import { clamp } from '@autoguru/utilities';

/** A zone as the consumer gives it: it ends at `end`, in the units of the value. */
export interface ZoneInput<Intent extends string> {
	intent: Intent;
	end: number;
}

/** A zone on the track. `start` and `size` are fractions of the track, from 0 to 1. */
export interface Segment<Intent extends string> {
	intent: Intent | 'neutral';
	start: number;
	size: number;
}

/** Tells if `min` and `max` give a range that the meter can draw. */
export const hasRange = (min: number, max: number) =>
	Number.isFinite(min) && Number.isFinite(max) && max > min;

/**
 * Gives the position of the value on the track, from 0 to 1. A value out of
 * the range goes to the nearer end. If the range is empty, the value goes to
 * the centre. If the value is not a number, the result is `null`.
 */
export const toRatio = (value: number, min: number, max: number) => {
	if (Number.isNaN(value)) return null;
	if (!hasRange(min, max)) return 0.5;
	return clamp((value - min) / (max - min), 0, 1);
};

/**
 * Gives the value for `aria-valuenow`. ARIA needs a value in the range, so a
 * value out of the range goes to the nearer end. An empty range (`min` equal
 * to `max`) is still a valid ARIA range. If the value is not a number or the
 * range is not valid, the result is `undefined`.
 */
export const toAriaValue = (value: number, min: number, max: number) => {
	const ariaRange =
		hasRange(min, max) || (Number.isFinite(min) && min === max);
	return ariaRange && !Number.isNaN(value)
		? clamp(value, min, max)
		: undefined;
};

/**
 * Gives the segments that fill the track from `min` to `max`. Each zone starts
 * where the previous zone ends. The function clips the zones to the range,
 * removes a zone that has no length, and fills the remaining part of the
 * track with a neutral segment.
 */
export const toSegments = <Intent extends string>(
	zones: ReadonlyArray<ZoneInput<Intent>>,
	min: number,
	max: number,
): Segment<Intent>[] => {
	if (!hasRange(min, max)) return [{ intent: 'neutral', start: 0, size: 1 }];

	const segments: Segment<Intent>[] = [];
	let start = 0;
	for (const zone of zones) {
		const end = clamp((zone.end - min) / (max - min), 0, 1);
		// The check is also false for an end that is not a number.
		if (end > start) {
			segments.push({ intent: zone.intent, start, size: end - start });
			start = end;
		}
	}
	if (start < 1) segments.push({ intent: 'neutral', start, size: 1 - start });
	return segments;
};
