import { isEqual } from 'es-toolkit';
import { useRef } from 'react';

/**
 * A custom hook that works like useMemo but uses deep comparison instead of reference equality.
 * This is particularily useful for components with many props that are not individually destructured
 */
export function useDeepCompareMemo<T>(
	factory: () => T,
	dependencies: React.DependencyList,
): T {
	// Store the current value
	const ref = useRef<T>(factory());
	// Store the previous dependencies
	const prevDeps = useRef<React.DependencyList>(dependencies);

	// Only update if deps have changed based on deep comparison
	if (!isEqual(prevDeps.current, dependencies)) {
		ref.current = factory();
		// Update the previous dependencies
		prevDeps.current = dependencies;
	}

	// Return the memoized value
	return ref.current;
}
