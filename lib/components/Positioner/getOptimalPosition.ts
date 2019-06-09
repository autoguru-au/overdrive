import { EAlignment } from './alignment';

export interface Dimensions {
	width: number;
	height: number;
}

export interface Position {
	top: number;
	left: number;
}

export interface Rect extends Dimensions, Position {
	right: number;
	bottom: number;
}

export interface AlignmentRect {
	alignment: EAlignment;
	rect: Rect;
}

const DEFAULT_OFFSET = 12;

/**
 * @description
 * The method that will give you the final position, (top, left) values in pixels of where the container needs to be
 *     placed, so that it.
 *     - A: Fit's in the viewport
 *     - B: Places itself at your proffered alignment, if not, it'll be flipped.
 */
export const getOptimalPosition = (
	preferredAlignment: EAlignment,
	triggerRect: Readonly<Rect>, // The rect of the trigger
	containerDimensions: Readonly<Dimensions>, // The width, height of the container
	triggerOffset: number = DEFAULT_OFFSET, // The pixels to leave around the trigger
	viewportOffset: number = DEFAULT_OFFSET, // The pixels to leave around the viewport
	viewportDimensions: Readonly<Dimensions> = getViewportDimensions(),
): AlignmentRect => {
	const { rect, alignment } = getFittedPosition(
		preferredAlignment,
		containerDimensions,
		triggerRect,
		triggerOffset,
		viewportOffset,
		viewportDimensions,
	);

	return {
		alignment,
		rect: handleOverflow(rect, viewportOffset, viewportDimensions),
	};
};

/**
 * @description
 * Given a computed rect, finally we need to handle the overflow viewport "locking" of this rect.
 */
const handleOverflow = (
	rect: Rect,
	viewportOffset: number,
	viewportDimensions: Readonly<Dimensions>,
): Rect => {
	// Push rect to the right if overflowing on the left side of the viewport.
	if (rect.left < viewportOffset) {
		rect.right += Math.ceil(Math.abs(rect.left - viewportOffset));
		rect.left = Math.ceil(viewportOffset);
	}

	// Push rect to the left if overflowing on the right side of the viewport.
	if (rect.right > viewportDimensions.width - viewportOffset) {
		const delta = Math.ceil(
			rect.right - (viewportDimensions.width - viewportOffset),
		);
		rect.left -= delta;
		rect.right -= delta;
	}

	// Push rect down if overflowing on the top side of the viewport.
	if (rect.top < viewportOffset) {
		rect.top += Math.ceil(Math.abs(rect.top - viewportOffset));
		rect.bottom = Math.ceil(viewportOffset);
	}

	// Push rect up if overflowing on the bottom side of the viewport.
	if (rect.bottom > viewportDimensions.height - viewportOffset) {
		const delta = Math.ceil(
			rect.bottom - (viewportDimensions.height - viewportOffset),
		);
		rect.top -= delta;
		rect.bottom -= delta;
	}

	return rect;
};

/**
 * @description
 * Give this method a preferred alignment - and we'll give you back an alignment and rect for where we think the best
 *     place to place it. By best we mean, if the consumer prefers it on the LEFT, but there is no more room left on
 *     the LEFT, we'll place it to right (we flip).
 *
 * The graph here illustrates the difference between horizontal and vertical, its more about on what axis we flip when
 *     there's no more room.
 *
 *  ---------------- TOP ------------------ <- Vertical
 *        +---------------------+
 *        |                     |
 *  LEFT  |       trigger       |  RIGHT -- <- Horizontal
 *        |                     |
 *        +---------------------+
 *  -------------- BOTTOM ----------------- <- Vertical
 */
const getFittedPosition = (
	preferredAlignment: EAlignment,
	containerDimensions: Readonly<Dimensions>,
	triggerRect: Readonly<Rect>,
	triggerOffset: number,
	viewportOffset: number,
	viewportDimensions: Readonly<Dimensions>,
): AlignmentRect =>
	(isAlignedHorizontal(preferredAlignment)
		? handleIsHorizontal
		: handleIsVertical)(
		preferredAlignment,
		viewportOffset,
		viewportDimensions,
		getRectForAlignmentFactory(
			triggerRect,
			triggerOffset,
			containerDimensions,
		),
	);

const handleIsHorizontal = (
	preferredAlignment: EAlignment,
	viewportOffset: number,
	viewportDimensions: Readonly<Dimensions>,
	genRectFn: ReturnType<RectForAlignmentFactoryFn>,
): AlignmentRect => {
	const isFitsOnLeft = (rect: Rect): boolean => rect.left > viewportOffset;
	const isFitsOnRight = (rect: Rect): boolean =>
		rect.right < viewportDimensions.width - viewportOffset;

	const leftRect = genRectFn(EAlignment.LEFT);
	const rightRect = genRectFn(EAlignment.RIGHT);

	const fitsOnLeft = isFitsOnLeft(leftRect);
	const fitsOnRight = isFitsOnRight(rightRect);

	if (preferredAlignment === EAlignment.LEFT) {
		if (fitsOnLeft) {
			return {
				alignment: EAlignment.LEFT,
				rect: leftRect,
			};
		}

		if (fitsOnRight) {
			return {
				alignment: EAlignment.RIGHT,
				rect: rightRect,
			};
		}
	}

	if (preferredAlignment === EAlignment.RIGHT) {
		if (fitsOnRight) {
			return {
				alignment: EAlignment.RIGHT,
				rect: rightRect,
			};
		}

		if (fitsOnLeft) {
			return {
				alignment: EAlignment.LEFT,
				rect: leftRect,
			};
		}
	}

	const spaceRight = Math.abs(
		viewportDimensions.width - viewportOffset - rightRect.right,
	);
	const spaceLeft = Math.abs(leftRect.left - viewportOffset);

	if (spaceRight < spaceLeft) {
		return {
			alignment: EAlignment.RIGHT,
			rect: rightRect,
		};
	}

	return {
		alignment: EAlignment.LEFT,
		rect: leftRect,
	};
};

const handleIsVertical = (
	preferredAlignment: EAlignment,
	viewportOffset: number,
	viewportDimensions: Readonly<Dimensions>,
	genRectFn: ReturnType<RectForAlignmentFactoryFn>,
): AlignmentRect => {
	const isFitsOnTop = (rect: Rect): boolean => rect.top > viewportOffset;
	const isFitsOnBottom = (rect: Rect): boolean =>
		rect.bottom < viewportDimensions.height - viewportOffset;

	const isTop = isAlignedOnTop(preferredAlignment);

	const topRect = genRectFn(
		isTop ? preferredAlignment : flipHorizontal(preferredAlignment),
	);
	const bottomRect = genRectFn(
		isTop ? flipHorizontal(preferredAlignment) : preferredAlignment,
	);

	if (isTop) {
		if (isFitsOnTop(topRect)) {
			return {
				alignment: preferredAlignment,
				rect: topRect,
			};
		}

		if (isFitsOnBottom(bottomRect)) {
			return {
				alignment: flipHorizontal(preferredAlignment),
				rect: bottomRect,
			};
		}
	} else {
		if (isFitsOnBottom(bottomRect)) {
			return {
				alignment: preferredAlignment,
				rect: bottomRect,
			};
		}

		if (isFitsOnTop(topRect)) {
			return {
				alignment: flipHorizontal(preferredAlignment),
				rect: topRect,
			};
		}
	}

	const spaceBottom = Math.abs(
		viewportDimensions.height - viewportOffset - bottomRect.bottom,
	);
	const spaceTop = Math.abs(topRect.top - viewportOffset);

	return spaceBottom < spaceTop
		? {
				alignment: isTop
					? flipHorizontal(preferredAlignment)
					: preferredAlignment,
				rect: bottomRect,
		  }
		: {
				alignment: isTop
					? preferredAlignment
					: flipHorizontal(preferredAlignment),
				rect: topRect,
		  };
};

type RectForAlignmentFactoryFn = (
	triggerRect: Readonly<Rect>,
	triggerOffset: number,
	containerDimensions: Readonly<Dimensions>,
) => (alignment: EAlignment) => Rect;
const getRectForAlignmentFactory: RectForAlignmentFactoryFn = (
	triggerRect,
	triggerOffset,
	containerDimensions,
) => alignment =>
	getRectForAlignment(
		alignment,
		triggerRect,
		containerDimensions,
		triggerOffset,
	);

/**
 * @description
 * Given an alignment, we'll return a "base" rect, for that alignment relative to the trigger's rect.
 */
const getRectForAlignment = (
	alignment: EAlignment,
	triggerRect: Readonly<Rect>,
	containerDimensions: Readonly<Dimensions>,
	triggerOffset: number,
): Rect => {
	const alignedTopY =
		triggerRect.top - containerDimensions.height - triggerOffset;
	const alignedBottomY = triggerRect.bottom + triggerOffset;
	const centerX =
		triggerRect.left +
		triggerRect.width / 2 -
		containerDimensions.width / 2;
	const centerY =
		triggerRect.top +
		triggerRect.height / 2 -
		containerDimensions.height / 2;

	switch (alignment) {
		case EAlignment.TOP_LEFT:
			return makeRect(containerDimensions, {
				top: alignedTopY,
				left: triggerRect.left,
			});
		case EAlignment.TOP:
			return makeRect(containerDimensions, {
				top: alignedTopY,
				left: centerX,
			});
		case EAlignment.TOP_RIGHT:
			return makeRect(containerDimensions, {
				top: alignedTopY,
				left: triggerRect.right - containerDimensions.width,
			});
		case EAlignment.RIGHT:
			return makeRect(containerDimensions, {
				top: centerY,
				left: triggerRect.right + triggerOffset,
			});
		case EAlignment.BOTTOM_RIGHT:
			return makeRect(containerDimensions, {
				top: alignedBottomY,
				left: triggerRect.right - containerDimensions.width,
			});
		case EAlignment.BOTTOM:
			return makeRect(containerDimensions, {
				top: alignedBottomY,
				left: centerX,
			});
		default:
		case EAlignment.BOTTOM_LEFT:
			return makeRect(containerDimensions, {
				top: alignedBottomY,
				left: triggerRect.left,
			});
		case EAlignment.LEFT:
			return makeRect(containerDimensions, {
				top: centerY,
				left:
					triggerRect.left -
					containerDimensions.width -
					triggerOffset,
			});
	}
};

/**
 * @description
 * A helper function, that will "create" a Rect compatible object we use to pass around.
 */
export const makeRect = (
	dimensions: Dimensions,
	position: Position,
): Readonly<Rect> => ({
	...dimensions,
	top: Math.ceil(position.top),
	left: Math.ceil(position.left),
	right: Math.ceil(position.left) + dimensions.width,
	bottom: Math.ceil(position.top) + dimensions.height,
});

const getViewportDimensions = (): Dimensions => ({
	height: document.documentElement.clientHeight,
	width: document.documentElement.clientWidth,
});

const flipHorizontal = (alignment: EAlignment): EAlignment => {
	switch (alignment) {
		case EAlignment.TOP_LEFT:
			return EAlignment.BOTTOM_LEFT;
		case EAlignment.TOP:
		default:
			return EAlignment.BOTTOM;
		case EAlignment.TOP_RIGHT:
			return EAlignment.BOTTOM_RIGHT;
		case EAlignment.BOTTOM_LEFT:
			return EAlignment.TOP_LEFT;
		case EAlignment.BOTTOM:
			return EAlignment.TOP;
		case EAlignment.BOTTOM_RIGHT:
			return EAlignment.TOP_RIGHT;
	}
};

const isAlignedOnTop = (alignment: EAlignment): boolean => {
	switch (alignment) {
		case EAlignment.TOP_LEFT:
		case EAlignment.TOP:
		case EAlignment.TOP_RIGHT:
			return true;
		default:
			return false;
	}
};

const isAlignedHorizontal = (alignment: EAlignment): boolean => {
	switch (alignment) {
		case EAlignment.LEFT:
		case EAlignment.RIGHT:
			return true;
		default:
			return false;
	}
};

// Thanks to the wonderful guys over at Segment, and Evergreen for the technical inspiration for this file. <3
