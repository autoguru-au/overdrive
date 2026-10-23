/**
 * Chart maths for the Overdrive charts. Private: the package entry does not
 * export these functions, so they can change without a major release.
 */

/**
 * The multipliers that a tick step can use. `2.5` gives the $2.5K steps of the
 * design, where d3 and visx give $2K steps for the same data.
 */
const NICE_MULTIPLIERS = [1, 2, 2.5, 5, 10];

/** A full turn in radians. */
const FULL_TURN = 2 * Math.PI;

/** Tolerance below which an arc counts as a full turn. */
const FULL_TURN_TOLERANCE = 1e-9;

/** Significant digits that remove floating-point error but keep real data. */
const CLEAN_PRECISION = 12;

/** Decimal places for the coordinates in an SVG path. */
const PATH_DECIMALS = 4;

/**
 * Removes floating-point error from a computed value, so that a tick shows
 * `0.3` and not `0.30000000000000004`.
 */
export const clean = (value: number): number =>
	Number(value.toPrecision(CLEAN_PRECISION));

/** Adds the values. */
export const sum = (values: number[]): number =>
	values.reduce((total, value) => total + value, 0);

/**
 * Gives a value as a CSS percentage of a maximum, for example `'25%'`. Gives
 * `'0%'` when the maximum is 0 or less.
 */
export const toPercent = (value: number, max: number): string =>
	`${max > 0 ? clean((value / max) * 100) : 0}%`;

export interface NiceTicks {
	/** The top of the axis. It is the last tick and it is not less than the data maximum. */
	max: number;
	/** The tick values from 0 to `max`, in equal steps. */
	ticks: number[];
}

/**
 * Finds the ticks for a value axis that starts at 0. The step is 1, 2, 2.5, 5
 * or 10 multiplied by a power of 10, and there are approximately `intervals`
 * steps between 0 and the maximum.
 *
 * @example
 * niceTicks(7500, 3); // { max: 7500, ticks: [0, 2500, 5000, 7500] }
 * niceTicks(6220, 3); // { max: 7500, ticks: [0, 2500, 5000, 7500] }
 */
export const niceTicks = (maxValue: number, intervals: number): NiceTicks => {
	if (!Number.isFinite(maxValue) || maxValue <= 0) {
		return { max: 1, ticks: [0] };
	}

	const rough = maxValue / Math.max(1, Math.round(intervals));
	const magnitude = 10 ** Math.floor(Math.log10(rough));
	const multiplier =
		NICE_MULTIPLIERS.find(
			(candidate) => clean(candidate * magnitude) >= rough,
		) ?? 10;
	const step = clean(multiplier * magnitude);
	const count = Math.ceil(clean(maxValue / step));
	const ticks = Array.from({ length: count + 1 }, (_, index) =>
		clean(index * step),
	);

	return { max: ticks[count], ticks };
};

export interface Arc {
	/** Start angle in radians, clockwise from the 12 o'clock position. */
	startAngle: number;
	/** End angle in radians, clockwise from the 12 o'clock position. */
	endAngle: number;
}

/**
 * Divides a full turn between the values, in order and clockwise from the
 * 12 o'clock position. Values of 0 or less get an empty arc.
 */
export const pie = (values: number[]): Arc[] => {
	const positive = values.map((value) => Math.max(0, value));
	const total = sum(positive);
	let angle = 0;

	return positive.map((value) => {
		const startAngle = angle;
		angle += total > 0 ? (value / total) * FULL_TURN : 0;
		return { startAngle, endAngle: angle };
	});
};

const round = (value: number): number => Number(value.toFixed(PATH_DECIMALS));

const pointAt = (radius: number, angle: number): string =>
	`${round(radius * Math.sin(angle))},${round(-radius * Math.cos(angle))}`;

/**
 * Gives the SVG path of a ring segment around the origin. Use it with
 * `fill-rule="evenodd"`, because a full turn is two circles.
 */
export const arcPath = (
	{ startAngle, endAngle }: Arc,
	innerRadius: number,
	outerRadius: number,
): string => {
	const span = endAngle - startAngle;

	if (span <= 0) return '';

	if (span >= FULL_TURN - FULL_TURN_TOLERANCE) {
		// One SVG arc command cannot draw a full circle, so each edge is two half circles.
		const outer = `M0,${-outerRadius}A${outerRadius},${outerRadius} 0 1 1 0,${outerRadius}A${outerRadius},${outerRadius} 0 1 1 0,${-outerRadius}Z`;
		const inner = `M0,${-innerRadius}A${innerRadius},${innerRadius} 0 1 0 0,${innerRadius}A${innerRadius},${innerRadius} 0 1 0 0,${-innerRadius}Z`;
		return outer + inner;
	}

	const largeArc = span > Math.PI ? 1 : 0;

	return [
		`M${pointAt(outerRadius, startAngle)}`,
		`A${outerRadius},${outerRadius} 0 ${largeArc} 1 ${pointAt(outerRadius, endAngle)}`,
		`L${pointAt(innerRadius, endAngle)}`,
		`A${innerRadius},${innerRadius} 0 ${largeArc} 0 ${pointAt(innerRadius, startAngle)}`,
		'Z',
	].join('');
};
