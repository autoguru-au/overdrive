/* eslint-disable react-hooks/rules-of-hooks */

import { useLayoutEffect, useState } from 'react';

import { useOverdriveContext } from '../components/OverdriveProvider';
import { useTheme } from '../components/ThemeProvider';

export const useMedia = (
	queries: ReadonlyArray<keyof Theme['breakpoints']>,
	fallbackCase = false,
): readonly boolean[] => {
	const theme = useTheme();
	const { isServer } = useOverdriveContext();

	if (isServer) return queries.map(() => fallbackCase);

	const [matches, setMatches] = useState([]);

	useLayoutEffect(() => {
		let isMounted = true;

		const matches = queries.map(media => {
			const thisBP = theme.breakpoints[media];

			const hasMax = thisBP[1] !== null;
			const query = `screen and (min-width: ${thisBP[0]}px${
				hasMax ? ` and max-width: ${thisBP[1] - 1}px` : ''
			})`;

			return window.matchMedia(query);
		});

		// Set all initial
		setMatches(matches.map(matcher => matcher.matches));

		// Add listeners
		const handlers = matches.map((matcher, idx) => {
			const handler = (e: MediaQueryListEvent) => {
				if (!isMounted) return;
				setMatches(prevState => {
					prevState[idx] = e.matches;
					return prevState;
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
