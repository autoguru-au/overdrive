import {
	arcPath,
	clean,
	niceTicks,
	pie,
	sum,
	toDrawable,
	toPercent,
} from './chartMath';

describe('niceTicks', () => {
	it('gives 0, 2.5K, 5K, 7.5K for a maximum of 7,500 and 3 intervals', () => {
		expect(niceTicks(7500, 3)).toEqual({
			max: 7500,
			ticks: [0, 2500, 5000, 7500],
		});
	});

	it('rounds the maximum up to the next nice step', () => {
		expect(niceTicks(6220, 3)).toEqual({
			max: 7500,
			ticks: [0, 2500, 5000, 7500],
		});
	});

	it.each([
		[10, 5, [0, 2, 4, 6, 8, 10]],
		[100, 4, [0, 25, 50, 75, 100]],
		[9, 3, [0, 5, 10]],
		[1, 1, [0, 1]],
	])(
		'uses steps of 1, 2, 2.5 and 5 (max %d, %d intervals)',
		(max, intervals, ticks) => {
			expect(niceTicks(max, intervals).ticks).toEqual(ticks);
		},
	);

	it.each([
		[0.6, 3],
		[0.9, 3],
		[0.3, 3],
		[0.07, 7],
		[1.1, 11],
	])(
		'has no floating-point artefacts (max %d, %d intervals)',
		(max, intervals) => {
			const { ticks, max: top } = niceTicks(max, intervals);
			for (const tick of [...ticks, top]) {
				expect(String(tick)).not.toMatch(/\d{6,}/);
			}
			expect(top).toBeGreaterThanOrEqual(max);
		},
	);

	it('does not add an extra step when the maximum is on a step', () => {
		expect(niceTicks(0.6, 3).ticks).toEqual([0, 0.2, 0.4, 0.6]);
	});

	it.each([0, -5, Number.NaN, Number.POSITIVE_INFINITY])(
		'gives one tick at 0 for a maximum of %d',
		(max) => {
			expect(niceTicks(max, 3)).toEqual({ max: 1, ticks: [0] });
		},
	);

	it('treats less than one interval as one interval', () => {
		expect(niceTicks(7500, 0).ticks).toEqual([0, 10_000]);
	});
});

describe('clean', () => {
	it('removes floating-point error', () => {
		expect(clean(0.1 + 0.2)).toBe(0.3);
	});
});

describe('toDrawable', () => {
	it('keeps a positive value and gives 0 for any other value', () => {
		expect(
			[12.5, 0, -3, Number.NaN, Infinity, -Infinity].map((value) =>
				toDrawable(value),
			),
		).toEqual([12.5, 0, 0, 0, 0, 0]);
	});
});

describe('sum', () => {
	it('adds the values', () => {
		expect(sum([1, 2, 3.5])).toBe(6.5);
		expect(sum([])).toBe(0);
	});
});

describe('toPercent', () => {
	it('gives a CSS percentage', () => {
		expect(toPercent(2500, 7500)).toBe('33.3333333333%');
		expect(toPercent(7500, 7500)).toBe('100%');
	});

	it('gives 0% for a maximum of 0', () => {
		expect(toPercent(5, 0)).toBe('0%');
	});
});

describe('pie', () => {
	it('divides a full turn in order, clockwise from 12 o’clock', () => {
		const [first, second] = pie([1, 3]);
		expect(first.startAngle).toBe(0);
		expect(first.endAngle).toBeCloseTo(Math.PI / 2);
		expect(second.startAngle).toBeCloseTo(Math.PI / 2);
		expect(second.endAngle).toBeCloseTo(2 * Math.PI);
	});

	it('gives empty arcs for values of 0 or less', () => {
		const arcs = pie([0, -2, 4]);
		expect(arcs[0].endAngle - arcs[0].startAngle).toBe(0);
		expect(arcs[1].endAngle - arcs[1].startAngle).toBe(0);
		expect(arcs[2].endAngle - arcs[2].startAngle).toBeCloseTo(2 * Math.PI);
	});

	it('gives empty arcs for NaN and infinite values', () => {
		const arcs = pie([Number.NaN, Infinity, 4]);
		expect(arcs[0].endAngle - arcs[0].startAngle).toBe(0);
		expect(arcs[1].endAngle - arcs[1].startAngle).toBe(0);
		expect(arcs[2].endAngle - arcs[2].startAngle).toBeCloseTo(2 * Math.PI);
	});

	it('gives empty arcs when all values are 0', () => {
		expect(pie([0, 0])).toEqual([
			{ startAngle: 0, endAngle: 0 },
			{ startAngle: 0, endAngle: 0 },
		]);
	});
});

describe('arcPath', () => {
	it('draws a quarter ring segment, with each edge in two arcs', () => {
		expect(arcPath({ startAngle: 0, endAngle: Math.PI / 2 }, 0.75, 1)).toBe(
			'M0,-1A1,1 0 0 1 0.7071,-0.7071A1,1 0 0 1 1,0' +
				'L0.75,0A0.75,0.75 0 0 0 0.5303,-0.5303A0.75,0.75 0 0 0 0,-0.75Z',
		);
	});

	it('draws a slice of almost a full turn', () => {
		// One arc would start and end on the same rounded point, and SVG
		// skips such an arc. The first half arc goes to the 6 o'clock point.
		const [, large] = pie([1, 200_000]);
		expect(arcPath(large, 0.75, 1)).toContain('A1,1 0 0 1 0,1A');
	});

	it('draws a full ring as two circles', () => {
		expect(arcPath({ startAngle: 0, endAngle: 2 * Math.PI }, 0.75, 1)).toBe(
			'M0,-1A1,1 0 1 1 0,1A1,1 0 1 1 0,-1Z' +
				'M0,-0.75A0.75,0.75 0 1 0 0,0.75A0.75,0.75 0 1 0 0,-0.75Z',
		);
	});

	it('draws nothing for an empty arc', () => {
		expect(arcPath({ startAngle: 1, endAngle: 1 }, 0.75, 1)).toBe('');
	});
});
