import { RefObject, useLayoutEffect, useRef, useState } from 'react';

import { useTheme } from '../../components/OverdriveProvider';
import { themeContractVars } from '../../themes/theme.css';
import { Tokens } from '../../themes/tokens';
import { getThemeTokenValue } from '../../utils/css';
import { useResponsiveValue } from '../useResponsiveValue';

export interface UseWindowHeightFillProps {
	bottomGap?: keyof Tokens['space'];
	serverVhFallback?: number;
	includeMobile?: boolean;
	observeDomChanges?: boolean;
	maxHeight?: number;
	containerRef: RefObject<HTMLDivElement>;
	observedElementRef?: RefObject<HTMLDivElement>;
}

export const useWindowHeightFill = ({
	bottomGap = 'none',
	includeMobile = false,
	serverVhFallback = 100,
	containerRef,
	observedElementRef,
	maxHeight,
}: UseWindowHeightFillProps): string => {
	// Create an observer instance linked to the callback function
	const cappedHeight = useResponsiveValue([includeMobile, , true]);
	const { themeClass } = useTheme();
	const [containerHeight, setContainerHeight] = useState<string>(
		`${serverVhFallback}vh`,
	);
	const containerHeightRef = useRef(containerHeight);

	useLayoutEffect(() => {
		if (!containerRef?.current || !window?.innerHeight || !document?.body)
			return void 0;

		const resize = () => {
			const gap =
				getThemeTokenValue(
					themeClass,
					themeContractVars.space[bottomGap],
				) || '0px';
			const availableHeight = Math.min(
				maxHeight ?? Number.POSITIVE_INFINITY,
				window.innerHeight -
					containerRef.current.getBoundingClientRect().top,
			);
			const newHeight = gap
				? `calc(${availableHeight}px - ${gap})`
				: `${availableHeight}px`;
			if (containerHeightRef.current !== newHeight) {
				setContainerHeight(newHeight);
				containerHeightRef.current = newHeight;
			}
		};

		const mutationObserver = new MutationObserver(resize);
		mutationObserver.observe(observedElementRef?.current || document.body, {
			childList: true,
			subtree: true,
			attributes: false,
			characterData: false,
		});

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
	}, [themeClass, bottomGap, maxHeight, containerRef, observedElementRef]);

	return cappedHeight ? containerHeight : 'auto';
};

export default useWindowHeightFill;
