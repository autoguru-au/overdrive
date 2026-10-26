import { toRatio, toSegments } from './rangeMeterMath';

describe('toRatio', () => {
	it('gives the position of the value in the range', () => {
		expect(toRatio(25, 0, 100)).toBe(0.25);
		expect(toRatio(171, 152.5, 362.5)).toBeCloseTo(0.0881);
	});

	it('moves a value out of the range to the nearer end', () => {
		expect(toRatio(-10, 0, 100)).toBe(0);
		expect(toRatio(500, 0, 100)).toBe(1);
		expect(toRatio(Number.POSITIVE_INFINITY, 0, 100)).toBe(1);
	});

	it('puts the value in the centre of an empty or a reversed range', () => {
		expect(toRatio(10, 50, 50)).toBe(0.5);
		expect(toRatio(10, 100, 0)).toBe(0.5);
		expect(toRatio(10, 0, Number.NaN)).toBe(0.5);
	});

	it('gives null for a value that is not a number', () => {
		expect(toRatio(Number.NaN, 0, 100)).toBeNull();
	});
});

describe('toSegments', () => {
	it('starts each zone where the previous zone ends', () => {
		expect(
			toSegments(
				[
					{ intent: 'danger', end: 25 },
					{ intent: 'success', end: 75 },
					{ intent: 'danger', end: 100 },
				],
				0,
				100,
			),
		).toEqual([
			{ intent: 'danger', start: 0, size: 0.25 },
			{ intent: 'success', start: 0.25, size: 0.5 },
			{ intent: 'danger', start: 0.75, size: 0.25 },
		]);
	});

	it('fills the track after the last zone with a neutral segment', () => {
		expect(toSegments([{ intent: 'success', end: 75 }], 0, 100)).toEqual([
			{ intent: 'success', start: 0, size: 0.75 },
			{ intent: 'neutral', start: 0.75, size: 0.25 },
		]);
	});

	it('clips the zones to the range', () => {
		expect(
			toSegments(
				[
					{ intent: 'danger', end: -50 },
					{ intent: 'warning', end: 50 },
					{ intent: 'success', end: 200 },
					{ intent: 'danger', end: 300 },
				],
				0,
				100,
			),
		).toEqual([
			{ intent: 'warning', start: 0, size: 0.5 },
			{ intent: 'success', start: 0.5, size: 0.5 },
		]);
	});

	it('removes a zone that ends before the previous zone or is not a number', () => {
		expect(
			toSegments(
				[
					{ intent: 'success', end: 50 },
					{ intent: 'warning', end: 40 },
					{ intent: 'warning', end: Number.NaN },
					{ intent: 'danger', end: 100 },
				],
				0,
				100,
			),
		).toEqual([
			{ intent: 'success', start: 0, size: 0.5 },
			{ intent: 'danger', start: 0.5, size: 0.5 },
		]);
	});

	it('gives one neutral segment for an empty range', () => {
		expect(toSegments([{ intent: 'success', end: 10 }], 5, 5)).toEqual([
			{ intent: 'neutral', start: 0, size: 1 },
		]);
	});
});
