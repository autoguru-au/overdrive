import { RefObject, useLayoutEffect, useState } from 'react';

export interface UseContainerWidthProps {
	containerRef: RefObject<HTMLElement>;
}

/**
 * Hook to observe and return the width of a container element
 *
 * @param containerRef - Reference to the container element to measure
 * @returns Current width of the container in pixels
 *
 * @example
 * ```tsx
 * const containerRef = useRef<HTMLDivElement>(null);
 * const width = useContainerWidth({ containerRef });
 * ```
 */
export const useContainerWidth = ({
	containerRef,
}: UseContainerWidthProps): number => {
	const [containerWidth, setContainerWidth] = useState<number>(0);

	useLayoutEffect(() => {
		if (!containerRef?.current) return;

		const resize = () => {
			if (containerRef.current) {
				const newWidth =
					containerRef.current.getBoundingClientRect().width;
				setContainerWidth(newWidth);
			}
		};

		// Check if ResizeObserver is available (not available in some test environments)
		if (typeof ResizeObserver === 'undefined') {
			// Fallback for test environments - just measure once
			resize();
			return;
		}

		const resizeObserver = new ResizeObserver(resize);
		resizeObserver.observe(containerRef.current);

		// Initial measurement
		resize();

		return () => {
			resizeObserver.disconnect();
		};
	}, [containerRef]);

	return containerWidth;
};
