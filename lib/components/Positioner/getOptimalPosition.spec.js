import { getOptimalPosition, makeRect } from './getOptimalPosition';
import { EAlignment } from './alignment';

const getTriggerRect = () =>
	makeRect(
		{
			width: 100,
			height: 50,
		},
		{
			left: 100,
			top: 100,
		},
	);

const viewport = overrides => ({ width: 1000, height: 1000, ...overrides });

describe('getOptimalPosition', () => {
	it('should not throw', () => {
		expect(() =>
			getOptimalPosition(EAlignment.BOTTOM_RIGHT, getTriggerRect(), {
				width: 100,
				height: 100,
			}),
		).not.toThrow();
	});

	it('should match snapshot for all alignments', () => {
		const alignments = Object.entries(EAlignment).map(([, alignment]) =>
			getOptimalPosition(
				alignment,
				getTriggerRect(),
				{
					width: 5,
					height: 5,
				},
				void 0,
				void 0,
				viewport(),
			),
		);

		expect(alignments).toMatchSnapshot();
	});

	it('should lock to the viewport when trigger is "off screen"', () => {
		const containerHeight = 100;

		const { alignment, rect } = getOptimalPosition(
			EAlignment.BOTTOM,
			makeRect({ width: 100, height: 50 }, { top: 1200, left: 100 }),
			{
				width: 50,
				height: containerHeight,
			},
			0,
			0,
			viewport({ height: 500 }),
		);

		expect(alignment).toEqual(EAlignment.TOP);
		expect(rect.bottom - rect.top).toEqual(100);
		expect(rect.top).toBeLessThan(500);
		expect(rect.top).toEqual(500 - containerHeight);
	});

	describe('when #getFittedPosition', () => {
		it('should have flipped to left, for a right', () => {
			const { alignment } = getOptimalPosition(
				EAlignment.RIGHT,
				getTriggerRect(),
				{
					width: 50,
					height: 100,
				},
				void 0,
				void 0,
				viewport({ width: 225 }),
			);

			expect(alignment).toEqual(EAlignment.LEFT);
		});

		it('should have flipped to right, for a left', () => {
			const { alignment } = getOptimalPosition(
				EAlignment.LEFT,
				makeRect(
					{
						width: 100,
						height: 50,
					},
					{
						top: 100,
						left: 50,
					},
				),
				{
					width: 100,
					height: 100,
				},
				void 0,
				void 0,
				viewport(),
			);

			expect(alignment).toEqual(EAlignment.RIGHT);
		});

		it('should have flipped to the bottom, for a top', () => {
			const { alignment } = getOptimalPosition(
				EAlignment.TOP,
				makeRect(
					{
						width: 100,
						height: 50,
					},
					{ top: 50, left: 100 },
				),
				{
					width: 100,
					height: 50,
				},
				void 0,
				void 0,
				viewport({ height: 175 }),
			);

			expect(alignment).toEqual(EAlignment.BOTTOM);
		});

		it('should be placed right when there is more room', () => {
			const { alignment } = getOptimalPosition(
				EAlignment.LEFT,
				makeRect(
					{
						width: 10,
						height: 50,
					},
					{ top: 50, left: 5 },
				),
				{
					width: 50,
					height: 50,
				},
				0,
				0,
				viewport({ width: 50 }),
			);

			expect(alignment).toEqual(EAlignment.RIGHT);
		});
	});

	describe('when #handleOverflow', () => {
		it('should shift to the right, when on the left and no room', () => {
			const { alignment, rect } = getOptimalPosition(
				EAlignment.RIGHT,
				makeRect(
					{
						width: 20,
						height: 50,
					},
					{ top: 50, left: 150 },
				),
				{
					width: 200,
					height: 50,
				},
				0,
				0,
				viewport({ width: 200 }),
			);

			expect(alignment).toEqual(EAlignment.LEFT);
			expect(rect.left).toEqual(0);
		});
	});
});
