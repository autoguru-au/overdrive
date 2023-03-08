import { useMemo } from 'react';

import { useMedia } from '../..';
import { isBrowser } from '../../utils';
import { getEarliestKnownToken } from '../../utils/resolveResponsiveProps';
import { ResponsiveProp } from '../../utils/responsiveProps.css';

export function useResponsiveValue<T extends string | number | boolean | {}>(
	responsiveValue: ResponsiveProp<T>,
	serverFallbackCase?: T,
): T | null {
	if (!isBrowser)
		// This is ok as it will only run on server
		return serverFallbackCase || null;
	if (!Array.isArray(responsiveValue)) return responsiveValue;
	const activeBP: number = useMedia([
		'mobile',
		'tablet',
		'desktop',
		'largeDesktop',
	]).reduce((activeBreakPoint, current, index) => {
		if (current) activeBreakPoint = index + 1;

		return activeBreakPoint;
	}, 1);
	return useMemo(
		() => getEarliestKnownToken<T>(responsiveValue, activeBP),
		[responsiveValue, activeBP],
	);
}

export default useResponsiveValue;
