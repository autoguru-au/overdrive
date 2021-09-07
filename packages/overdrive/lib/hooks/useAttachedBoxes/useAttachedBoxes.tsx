import * as React from 'react';
import { ComponentProps, FunctionComponent } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './useAttachedBoxes.treat';
import clsx from 'clsx';
import { Box } from '../../components';
import { ResponsiveProp } from '../../../dist/lib/utils';
import { useMedia } from '../useMedia';
import { getEarliestKnownToken, resolveResponsiveStyle } from '../../utils';

interface Props extends Omit<ComponentProps<typeof Box>, 'borderRadius'> {
	count: number;
	columnCount: ResponsiveProp<number>;
	gap?: ResponsiveProp<keyof typeof styleRefs.grid.gaps>;
}

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
	boxes: FunctionComponent[],
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
	const styles = useStyles(styleRefs);
	const decimals: number = (count / columnCount) % 1;
	let colStart: number;
	let extend: number;
	let isLastItem: boolean;
	const topRightIndex: number = Math.min(count - 1, columnCount - 1);
	const bottomLeftIndex: number = decimals
		? Math.floor(count / columnCount) * columnCount
		: count - columnCount;

	return [
		Array.from({ length: count }).map((_, index) => ({ children }) => {
			isLastItem = index === count - 1;

			if (isLastItem && decimals) {
				//is last item and is not a perfect division
				colStart = Math.round(decimals / (1 / columnCount));
				extend = Math.round((1 - decimals) / (1 / columnCount));
			}

			return (
				<Box
					backgroundColour={backgroundColour}
					className={clsx({
						[styles.grid.topLeft]: index === 0,
						[styles.grid.topRight]: index === topRightIndex,
						[styles.grid.bottomLeft]: index === bottomLeftIndex,
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
					paddingX="3"
					paddingY="5">
					{children}
				</Box>
			);
		}),
		clsx(
			styles.grid.default,
			resolveResponsiveStyle(gap, styles.grid.gaps),
		),
		{
			gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
		},
	];
};
