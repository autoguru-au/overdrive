import clsx from 'clsx';
import * as React from 'react';
import { ComponentProps, FunctionComponent } from 'react';

import { Box } from '../../components';
import {
	getEarliestKnownToken,
	resolveResponsiveStyle,
} from '../../utils/resolveResponsiveProps';
import { ResponsiveProp } from '../../utils/responsiveProps.css';
import { useMedia } from '../useMedia';

import * as styles from './useAttachedBoxes.css';

interface Props extends Pick<ComponentProps<typeof Box>, 'backgroundColour'> {
	count: number;
	columnCount: ResponsiveProp<number>;
	gap?: ResponsiveProp<keyof typeof styles.grid.gaps>;
}

type AttachedBoxProps = Omit<ComponentProps<typeof Box>, 'borderRadius'>;

function useResponsiveValue<T extends string | number>(
	responsiveValue: ResponsiveProp<T>,
): T {
	if (!Array.isArray(responsiveValue)) return responsiveValue;
	const activeBP: number = useMedia(
		['mobile', 'tablet', 'desktop', 'largeDesktop'],
		false,
	).reduce((activeBreakPoint, current, index) => {
		if (current) activeBreakPoint = index + 1;

		return activeBreakPoint;
	}, 1);
	return getEarliestKnownToken<T>(responsiveValue, activeBP);
}

type Returns = [
	boxes: FunctionComponent<AttachedBoxProps>[],
	wrapperCls: string,
	style: ComponentProps<typeof Box>['style'],
];
export const useAttachedBoxes = ({
	count,
	columnCount: incomingColumnCount,
	gap = '1',
	backgroundColour = 'gray900',
}: Props): Returns => {
	const columnCount: number = useResponsiveValue<number>(incomingColumnCount);
	const decimals: number = (count / columnCount) % 1;
	let colStart: number;
	let extend: number;
	let isLastItem: boolean;
	const topRightIndex: number = Math.min(count - 1, columnCount - 1);
	const bottomLeftIndex: number = decimals
		? Math.floor(count / columnCount) * columnCount
		: count - columnCount;

	return [
		Array.from({ length: count }).map(
			(_, index) =>
				({ children, className, ...rest }: AttachedBoxProps) => {
					isLastItem = index === count - 1;

					if (isLastItem && decimals) {
						//is last item and is not a perfect division
						colStart = Math.round(decimals / (1 / columnCount));
						extend = Math.round((1 - decimals) / (1 / columnCount));
					}

					return (
						<Box
							backgroundColour={backgroundColour}
							className={clsx(className, {
								[styles.grid.topLeft]: index === 0,
								[styles.grid.topRight]: index === topRightIndex,
								[styles.grid.bottomLeft]:
									index === bottomLeftIndex,
								[styles.grid.bottomRight]: isLastItem,
							})}
							style={
								isLastItem && decimals
									? {
											gridColumn: `${colStart}/${
												colStart + 1 + extend
											}`,
									  }
									: void 0
							}
							{...rest}
						>
							{children}
						</Box>
					);
				},
		),
		clsx(
			styles.grid.default,
			resolveResponsiveStyle(gap, styles.grid.gaps),
		),
		{
			gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
		},
	];
};

export default useAttachedBoxes;
