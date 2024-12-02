/* eslint-disable react-hooks/rules-of-hooks */

import { useCallback, useLayoutEffect, useMemo, useState } from 'react';

import { useRuntimeTokens } from '../../components/ThemeProvider';
import type { BreakPoints } from '../../themes/tokens';
import { isBrowser } from '../../utils';

export const useMedia = (
	queries: ReadonlyArray<keyof BreakPoints>,
	fallbackCase = false,
): readonly boolean[] => {
	const { breakpoints } = useRuntimeTokens();

	if (!isBrowser) return queries.map(() => fallbackCase);

	const getQueries = useCallback(
		() => queries.map((media) => `(min-width: ${breakpoints[media]})`),
		[breakpoints],
	);

	const matchesInit = useMemo(
		() => getQueries().map((query) => globalThis.matchMedia(query).matches),
		[getQueries],
	);

	const [matches, setMatches] = useState<readonly boolean[]>(matchesInit);

	if (isBrowser) {
		useLayoutEffect(() => {
			let isMounted = true;

			const matchers = getQueries().map((query) =>
				globalThis.matchMedia(query),
			);

			const removeHandlersFn = matchers.map((matcher, idx) => {
				const handler = (e: MediaQueryListEvent) => {
					if (!isMounted) return;
					setMatches((prevState) => {
						const newState = [...prevState];
						newState[idx] = e.matches;
						return newState;
					});
				};

				matcher.addEventListener('change', handler, { passive: true });
				return () => matcher.removeEventListener('change', handler);
			});

			return () => {
				isMounted = false;
				removeHandlersFn.forEach((item) => item());
			};
		}, [...queries, breakpoints]);
	}

	return matches;
};

export default useMedia;
