import { renderHook } from '@testing-library/react-hooks';
import React from 'react';

import { OverdriveProvider } from '../components/OverdriveProvider';
import { useMedia } from './useMedia';

const render = (hook, tokens, isServer) =>
	renderHook(hook, {
		wrapper({ children }) {
			return (
				<OverdriveProvider theme={{ tokens }} isServer={isServer}>
					{children}
				</OverdriveProvider>
			);
		},
	});

const makeTokens = () => ({
	breakpoints: {
		mobile: '(min-width: 401px)',
		desktop: '(max-width: 400px)',
	},
});

const createMatchMedia = includes => {
	const addListener = jest.fn();
	const removeListener = jest.fn();

	const mock = jest.fn(query => ({
		matches: Boolean(query.includes(includes)),
		addListener,
		removeListener,
	}));

	return { mock, removeListener, addListener };
};

describe('useMedia', () => {
	it('should match to false on a server when passed false', () => {
		const { result } = render(
			() => useMedia(['desktop'], false),
			makeTokens(),
			true,
		);

		expect(result.current).toEqual([false]);
	});

	it('should match true on server when true passed', () => {
		const { result } = render(
			() => useMedia(['desktop'], true),
			makeTokens(),
			true,
		);

		expect(result.current).toEqual([true]);
	});

	it('should allow mocked #matchMedia', () => {
		const { mock } = createMatchMedia('400');

		window.matchMedia = mock;

		const { result } = render(
			() => useMedia(['desktop']),
			makeTokens(),
			false,
		);

		expect(result.current).toEqual([true]);
	});

	it('should use the fallback case when matchMedia would return true', () => {
		const { mock } = createMatchMedia('400');

		window.matchMedia = mock;

		const { result } = render(
			() => useMedia(['desktop'], false),
			makeTokens(),
			true,
		);

		expect(result.current).toEqual([false]);
	});

	it('should allow more than media, but only match for those that are true', () => {
		const { mock } = createMatchMedia('400');

		window.matchMedia = mock;

		const { result } = render(
			() => useMedia(['desktop', 'mobile']),
			makeTokens(),
			false,
		);

		expect(result.current).toEqual([true, false]);
	});

	it('should cleanup', () => {
		const { mock, addListener, removeListener } = createMatchMedia('399');

		window.matchMedia = mock;

		const { unmount } = render(
			() => useMedia(['desktop', 'mobile']),
			makeTokens(),
			false,
		);

		expect(addListener).toHaveBeenCalledTimes(2);

		unmount();

		expect(removeListener).toHaveBeenCalledTimes(2);
	});
});
