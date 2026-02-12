import { useCallback, useEffect, useState } from 'react';

import type { ColorMode } from '../../themes/types';
import {
	applyColorMode,
	getEffectiveColorMode,
	getStoredColorMode,
	getSystemColorMode,
	setStoredColorMode,
	watchSystemColorMode,
} from '../../utils/colorMode';

export interface UseColorModeReturn {
	/**
	 * The current active color mode
	 */
	colorMode: ColorMode;

	/**
	 * The user's explicitly set preference (null if following system)
	 */
	userPreference: ColorMode | null;

	/**
	 * The system's color scheme preference
	 */
	systemPreference: ColorMode | null;

	/**
	 * Whether the current mode is from system preference (not user override)
	 */
	isSystemMode: boolean;

	/**
	 * Set the color mode explicitly (overrides system preference)
	 */
	setColorMode: (mode: ColorMode) => void;

	/**
	 * Clear user preference and follow system mode
	 */
	resetToSystemMode: () => void;

	/**
	 * Toggle between light and dark mode
	 */
	toggleColorMode: () => void;
}

/**
 * Hook for managing color mode state and persistence
 *
 * Features:
 * - Tracks user preference in localStorage
 * - Detects system color scheme preference
 * - Applies color mode to document element
 * - Watches for system preference changes
 * - Provides toggle and reset utilities
 *
 * @example
 * ```tsx
 * function App() {
 *   const { colorMode, setColorMode, toggleColorMode, isSystemMode } = useColorMode();
 *
 *   return (
 *     <div>
 *       <p>Current mode: {colorMode}</p>
 *       <button onClick={toggleColorMode}>Toggle</button>
 *       <button onClick={() => setColorMode('dark')}>Dark</button>
 *       <button onClick={() => setColorMode('light')}>Light</button>
 *       {isSystemMode && <p>Following system preference</p>}
 *     </div>
 *   );
 * }
 * ```
 */
export const useColorMode = (): UseColorModeReturn => {
	const [colorMode, setColorModeState] = useState<ColorMode>(() =>
		getEffectiveColorMode(),
	);
	const [userPreference, setUserPreferenceState] = useState<ColorMode | null>(
		() => getStoredColorMode(),
	);
	const [systemPreference, setSystemPreference] = useState<ColorMode | null>(
		() => getSystemColorMode(),
	);

	// Watch for system preference changes
	useEffect(() => {
		const cleanup = watchSystemColorMode((newSystemMode) => {
			setSystemPreference(newSystemMode);

			// If user hasn't set a preference, update to follow system
			if (userPreference === null) {
				setColorModeState(newSystemMode);
				applyColorMode(newSystemMode);
			}
		});

		return cleanup;
	}, [userPreference]);

	// Apply color mode on mount and when it changes
	useEffect(() => {
		applyColorMode(colorMode);
	}, [colorMode]);

	const setColorMode = useCallback((mode: ColorMode) => {
		setStoredColorMode(mode);
		setUserPreferenceState(mode);
		setColorModeState(mode);
		applyColorMode(mode);
	}, []);

	const resetToSystemMode = useCallback(() => {
		setStoredColorMode(null);
		setUserPreferenceState(null);

		const systemMode = getSystemColorMode() || 'light';
		setColorModeState(systemMode);
		applyColorMode(systemMode);
	}, []);

	const toggleColorMode = useCallback(() => {
		const newMode = colorMode === 'light' ? 'dark' : 'light';
		setColorMode(newMode);
	}, [colorMode, setColorMode]);

	return {
		colorMode,
		userPreference,
		systemPreference,
		isSystemMode: userPreference === null,
		setColorMode,
		resetToSystemMode,
		toggleColorMode,
	};
};
