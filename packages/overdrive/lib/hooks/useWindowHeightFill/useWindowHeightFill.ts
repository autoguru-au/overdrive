import { RefObject, useLayoutEffect, useState } from 'react';

import { useResponsiveValue, useTheme } from '../..';
import { themeContractVars } from '../../themes/theme.css';
import { Tokens } from '../../themes/tokens';
import { getThemeTokenValue } from '../../utils/css';

export interface UseWindowHeightFillProps {
	bottomGap?: keyof Tokens['space'];
	serverVhFallback?: number;
	includeMobile?: boolean;
	observeDomChanges?: boolean;
	containerRef: RefObject<HTMLDivElement>;
	observedElementRef?: RefObject<HTMLDivElement>;
}

export const useWindowHeightFill = ({
	bottomGap = 'none',
	includeMobile = false,
	serverVhFallback = 100,
	containerRef,
	observedElementRef,
}: UseWindowHeightFillProps): string => {
	// Create an observer instance linked to the callback function
	const cappedHeight = useResponsiveValue([includeMobile, , true]);
	const { themeClass } = useTheme();
	const [containerHeight, setContainerHeight] = useState<string>(
		`${serverVhFallback}vh`,
	);

	useLayoutEffect(() => {
		if (!containerRef?.current || !window?.innerHeight || !document?.body)
			return void 0;

		const resize = () => {
			const gap =
				getThemeTokenValue(
					themeClass,
					themeContractVars.space[bottomGap],
				) || '0px';
			const availableHeight =
				window.innerHeight -
				// @ts-ignore
				containerRef.current.getBoundingClientRect().top;
			setContainerHeight(
				gap
					? `calc(${availableHeight}px - ${gap})`
					: `${availableHeight}px`,
			);
		};

		const mutationObserver = new MutationObserver(resize);
		mutationObserver.observe(observedElementRef?.current || document.body);

		const resizeObserver = new ResizeObserver(resize);
		resizeObserver.observe(observedElementRef?.current || document.body);

		window.removeEventListener('resize', resize);
		window.addEventListener('resize', resize, { passive: true });

		resize();

		return () => {
			window.removeEventListener('resize', resize);
			mutationObserver.disconnect();
			resizeObserver.disconnect();
		};
	}, [
		containerRef?.current,
		window?.innerHeight,
		document?.body,
		themeClass,
		bottomGap,
	]);

	return cappedHeight ? containerHeight : 'auto';
};

export default useWindowHeightFill;
