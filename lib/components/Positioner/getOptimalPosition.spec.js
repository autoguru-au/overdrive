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
		}
	);

const getFittingViewport = () => ({
	width: 1000,
	height: 1000,
});

describe('getOptimalPosition', () => {
	it('should not throw', () => {
		expect(() =>
			getOptimalPosition(EAlignment.BOTTOM_RIGHT, getTriggerRect(), {
				width: 100,
				height: 100,
			})
		).not.toThrow();
	});

	it('should match snapshot for all alignments', () => {
		const alignments = Object.entries(EAlignment).map(([, alignment]) =>
			getOptimalPosition(
				alignment,
				getTriggerRect(),
				{
					width: 250,
					height: 100,
				},
				void 0,
				void 0,
				getFittingViewport()
			)
		);

		expect(alignments).toMatchSnapshot();
	});

	describe('when #getFittedPosition', () => {
		it('should have flipped to left, for a right', () => {
			const viewport = {
				width: 225, // trigger right + half of the container,
				height: 1000,
			};

			const { alignment } = getOptimalPosition(
				EAlignment.RIGHT,
				getTriggerRect(),
				{
					width: 50,
					height: 100,
				},
				void 0,
				void 0,
				viewport
			);

			expect(alignment).toEqual(EAlignment.LEFT);
		});

		it('should have flipped to the bottom, for a top', () => {
			const viewport = {
				width: 1000,
				height: 175, // trigger bottom + half of the container,
			};

			const { alignment } = getOptimalPosition(
				EAlignment.TOP,
				makeRect(
					{
						width: 100,
						height: 50,
					},
					{ top: 50, left: 100 }
				),
				{
					width: 100,
					height: 50,
				},
				void 0,
				void 0,
				viewport
			);

			expect(alignment).toEqual(EAlignment.BOTTOM);
		});
	});
});
