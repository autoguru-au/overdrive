/* eslint-disable react-hooks/rules-of-hooks */

import { useCallback, useLayoutEffect, useMemo, useState } from 'react';

import { useRuntimeTokens } from '../..';
import { isBrowser } from '../../utils';
import { BreakPoints } from '../../themes/tokens';

export const useMedia = (
	queries: ReadonlyArray<keyof BreakPoints>,
	fallbackCase = false,
): readonly boolean[] => {
	const runtimeTokens = useRuntimeTokens();

	if (!isBrowser) return queries.map(() => fallbackCase);

	const getQueries = useCallback(
		() =>
			queries.map(
				(media) => `(min-width: ${runtimeTokens.breakpoints[media]}px)`,
			),
		[runtimeTokens],
	);

	const matchesInit = useMemo(
		() => getQueries().map((query) => window.matchMedia(query).matches),
		[getQueries],
	);

	const [matches, setMatches] = useState<readonly boolean[]>(matchesInit);

	useLayoutEffect(() => {
		let isMounted = true;

		const matchers = getQueries().map((query) => window.matchMedia(query));

		const removeHandlersFn = matchers.map((matcher, idx) => {
			const handler = (e: MediaQueryListEvent) => {
				if (!isMounted) return;
				setMatches((prevState) => {
					const newState = [...prevState];
					newState[idx] = e.matches;
					return newState;
				});
			};

			matcher.addListener(handler);
			return () => matcher.removeListener(handler);
		});

		return () => {
			isMounted = false;
			removeHandlersFn.forEach((item) => item());
		};
	}, [...queries, runtimeTokens]);

	return matches;
};
