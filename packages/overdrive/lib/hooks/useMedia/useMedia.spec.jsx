import { renderHook } from '@testing-library/react-hooks';
import * as React from 'react';

import { OverdriveLegacyProvider } from '../../components/OverdriveLegacyProvider/OverdriveProvider';
import { baseTheme } from '../../themes';

import { useMedia } from './useMedia';

const render = (hook, tokens) =>
	renderHook(hook, {
		wrapper({ children }) {
			return (
				<OverdriveLegacyProvider
					theme={{
						runtimeTokens: {
							...baseTheme.runtimeTokens,
							...tokens,
						},
					}}>
					{children}
				</OverdriveLegacyProvider>
			);
		},
	});

const makeTokens = () => ({
	breakpoints: {
		mobile: '(min-width: 401px)',
		desktop: '(max-width: 400px)',
	},
});

const createMatchMedia = (includes) => {
	const addListener = jest.fn();
	const removeListener = jest.fn();

	const mock = jest.fn((query) => ({
		matches: Boolean(query.includes(includes)),
		addListener,
		removeListener,
	}));

	return { mock, removeListener, addListener };
};

describe('useMedia', () => {
	describe.skip('when isServer', () => {
		it('should match false on server when fallback is false', () => {
			const { result } = render(
				() => useMedia(['desktop'], false),
				makeTokens(),
			);

			expect(result.current).toEqual([false]);
		});

		it('should match true on server when fallback is true', () => {
			const { result } = render(
				() => useMedia(['desktop'], true),
				makeTokens(),
			);

			expect(result.current).toEqual([true]);
		});

		it('should use the fallback case when matchMedia would return true', () => {
			const { mock } = createMatchMedia('400');

			window.matchMedia = mock;

			const { result } = render(
				() => useMedia(['desktop'], false),
				makeTokens(),
			);

			expect(result.current).toEqual([false]);
		});
	});

	describe('when isBrowser', () => {
		it('should allow mocked #matchMedia', () => {
			const { mock } = createMatchMedia('400');

			window.matchMedia = mock;

			const { result } = render(
				() => useMedia(['desktop']),
				makeTokens(),
			);

			expect(result.current).toEqual([true]);
		});

		it('should allow more than media, but only match for those that are true', () => {
			const { mock } = createMatchMedia('400');

			window.matchMedia = mock;

			const { result } = render(
				() => useMedia(['desktop', 'mobile']),
				makeTokens(),
			);

			expect(result.current).toEqual([true, false]);
		});

		it('should cleanup', () => {
			const { mock, addListener, removeListener } = createMatchMedia(
				'399',
			);

			window.matchMedia = mock;

			const { unmount } = render(
				() => useMedia(['desktop', 'mobile']),
				makeTokens(),
			);

			expect(addListener).toHaveBeenCalledTimes(2);

			unmount();

			expect(removeListener).toHaveBeenCalledTimes(2);
		});
	});
});
