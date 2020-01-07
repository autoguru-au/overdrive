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
		() => queries.map(media => theme.breakpoints[media]),
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

		const removeHandlersFn = matchers.map((matcher, idx) => {
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
			removeHandlersFn.forEach(item => item());
		};
	}, [...queries, theme]);

	return matches;
};
