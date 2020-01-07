import { renderHook } from '@testing-library/react-hooks';
import React from 'react';

import { OverdriveProvider } from '../components/OverdriveProvider';
import { useMedia } from './useMedia';

const render = (hook, theme, isServer) =>
	renderHook(hook, {
		wrapper({ children }) {
			return (
				<OverdriveProvider theme={theme} isServer={isServer}>
					{children}
				</OverdriveProvider>
			);
		},
	});

const makeTheme = () => ({
	breakpoints: {
		desktop: [0, 400],
		mobile: [401, null],
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
			makeTheme(),
			true,
		);

		expect(result.current).toEqual([false]);
	});

	it('should match true on server when true passed', () => {
		const { result } = render(
			() => useMedia(['desktop'], true),
			makeTheme(),
			true,
		);

		expect(result.current).toEqual([true]);
	});

	it('should allow mocked #matchMedia', () => {
		const { mock } = createMatchMedia('400');

		window.matchMedia = mock;

		const { result } = render(
			() => useMedia(['desktop']),
			makeTheme(),
			false,
		);

		expect(result.current).toEqual([true]);
	});

	it('should use the fallback case when matchMedia would return true', () => {
		const { mock } = createMatchMedia('400');

		window.matchMedia = mock;

		const { result } = render(
			() => useMedia(['desktop'], false),
			makeTheme(),
			true,
		);

		expect(result.current).toEqual([false]);
	});

	it('should allow more than media, but only match for those that are true', () => {
		const { mock } = createMatchMedia('400');

		window.matchMedia = mock;

		const { result } = render(
			() => useMedia(['desktop', 'mobile']),
			makeTheme(),
			false,
		);

		expect(result.current).toEqual([true, false]);
	});

	it('should cleanup', () => {
		const { mock, addListener, removeListener } = createMatchMedia('399');

		window.matchMedia = mock;

		const { unmount } = render(
			() => useMedia(['desktop', 'mobile']),
			makeTheme(),
			false,
		);

		expect(addListener).toHaveBeenCalledTimes(2);

		unmount();

		expect(removeListener).toHaveBeenCalledTimes(2);
	});
});
