import { useMedia } from '../..';
import { getEarliestKnownToken, ResponsiveProp } from '../../utils/responsiveProps_legacy';

export function useResponsiveValue<T extends string | number | boolean>(
	responsiveValue: ResponsiveProp<T>,
	fallbackCase = false,
): T {
	if (!Array.isArray(responsiveValue)) return responsiveValue;
	if (fallbackCase) return responsiveValue[0];
	const activeBP: number = useMedia(
		['mobile', 'tablet', 'desktop', 'largeDesktop'],
		fallbackCase,
	).reduce((activeBreakPoint, current, index) => {
		if (current) activeBreakPoint = index + 1;

		return activeBreakPoint;
	}, 1);
	return getEarliestKnownToken<T>(responsiveValue, activeBP);
}
