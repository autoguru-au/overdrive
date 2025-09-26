import {
	RefObject,
	useLayoutEffect,
	useState,
	useRef,
	useCallback,
} from 'react';

export interface UseContainerWidthProps {
	containerRef: RefObject<HTMLElement>;
	/**
	 * Debounce delay in milliseconds to prevent excessive updates during resize
	 * @default 32 (roughly 30fps)
	 */
	debounceMs?: number;
}

/**
 * Hook to observe and return the width of a container element
 *
 * @param containerRef - Reference to the container element to measure
 * @param debounceMs - Debounce delay in milliseconds (default: 32ms for ~30fps)
 * @returns Current width of the container in pixels
 *
 * @example
 * ```tsx
 * const containerRef = useRef<HTMLDivElement>(null);
 * const width = useContainerWidth({ containerRef });
 *
 * // With custom debounce
 * const width = useContainerWidth({ containerRef, debounceMs: 100 });
 * ```
 */
export const useContainerWidth = ({
	containerRef,
	debounceMs = 32,
}: UseContainerWidthProps): number => {
	const [containerWidth, setContainerWidth] = useState<number>(0);
	const debounceRef = useRef<number>(debounceMs);

	const debouncedSetWidth = useCallback(
		(newWidth: number) => {
			if (debounceRef.current) {
				clearTimeout(debounceRef.current);
			}

			debounceRef.current = window.setTimeout(() => {
				setContainerWidth(newWidth);
			}, debounceMs);
		},
		[debounceMs],
	);

	useLayoutEffect(() => {
		if (!containerRef?.current) return;

		const resize = () => {
			if (containerRef.current) {
				const newWidth =
					containerRef.current.getBoundingClientRect().width;

				// For test environments or initial measurement, set immediately
				if (
					typeof ResizeObserver === 'undefined' ||
					containerWidth === 0
				) {
					setContainerWidth(newWidth);
				} else {
					debouncedSetWidth(newWidth);
				}
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

		// Initial measurement (immediate)
		resize();

		return () => {
			resizeObserver.disconnect();
			if (debounceRef.current) {
				clearTimeout(debounceRef.current);
			}
		};
	}, [containerRef, debouncedSetWidth, containerWidth]);

	return containerWidth;
};
