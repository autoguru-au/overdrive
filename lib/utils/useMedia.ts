/* eslint-disable react-hooks/rules-of-hooks */

import { useCallback, useLayoutEffect, useMemo, useState } from 'react';

import { useOverdriveContext } from '../components/OverdriveProvider';
import { useTheme } from '../components/ThemeProvider';
import { Tokens } from '../themes/tokens';

export const useMedia = (
	queries: ReadonlyArray<keyof Tokens['breakpoints']>,
	fallbackCase = false,
): readonly boolean[] => {
	const theme = useTheme();
	const { isServer } = useOverdriveContext();

	if (isServer) return queries.map(() => fallbackCase);

	const getQueries = useCallback(
		() =>
			queries.map(media => {
				const [min, max] = theme.breakpoints[media];
				return makeQueryString(min, max);
			}),
		[theme],
	);
	const matchesInit = useMemo(
		() => getQueries().map(query => window.matchMedia(query).matches),
		[getQueries],
	);
	const [matches, setMatches] = useState<readonly boolean[]>(matchesInit);

	useLayoutEffect(() => {
		let isMounted = true;

		const matchers = getQueries().map(query => window.matchMedia(query));

		// Add listeners
		const handlers = matchers.map((matcher, idx) => {
			const handler = (e: MediaQueryListEvent) => {
				if (!isMounted) return;
				setMatches(prevState => {
					const newState = prevState.slice();
					newState[idx] = e.matches;
					return newState;
				});
			};

			matcher.addListener(handler);
			return () => matcher.removeListener(handler);
		});

		return () => {
			isMounted = false;
			handlers.forEach(item => item());
		};
	}, [...queries, theme]);

	return matches;
};

const makeQueryString = (min, max = null) => {
	const hasMax = max !== null;
	return `screen and (min-width: ${min}px${
		hasMax ? ` and max-width: ${max - 1}px` : ''
	})`;
};
