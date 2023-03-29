import { RefObject, useLayoutEffect, useState } from 'react';

import { useResponsiveValue, useTheme } from '../..';
import { themeContractVars } from '../../themes/theme.css';
import { Tokens } from '../../themes/tokens';
import { getThemeTokenValue } from '../../utils/css';

export interface UseWindowHeightFillProps {
	bottomGap?: keyof Tokens['space'];
	serverVhFallback?: number;
	includeMobile?: boolean;
	containerRef: RefObject<HTMLDivElement>;
}

export const useWindowHeightFill = ({
	bottomGap = 'none',
	includeMobile = false,
	serverVhFallback = 100,
	containerRef,
}: UseWindowHeightFillProps): string => {
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
			// @ts-ignore
			const availableHeight =
				window.innerHeight -
				containerRef.current.getBoundingClientRect().top;
			setContainerHeight(
				gap
					? `calc(${availableHeight}px - ${gap})`
					: `${availableHeight}px`,
			);
		};

		const resizeObserver = new ResizeObserver(resize);
		resizeObserver.observe(document.body);

		window.removeEventListener('resize', resize);
		window.addEventListener('resize', resize, { passive: true });

		resize();

		return () => {
			window.removeEventListener('resize', resize);
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
