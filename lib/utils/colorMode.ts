import type { ColorMode } from '../themes/types';

/**
 * Local storage key for persisting user's color mode preference
 */
const COLOR_MODE_STORAGE_KEY = 'od-color-mode';

/**
 * Data attribute name for applying color mode to DOM
 */
export const COLOR_MODE_ATTRIBUTE = 'data-od-color-mode' as const;

/**
 * Gets the user's system color scheme preference
 * @returns 'light' | 'dark' | null if not supported or no preference
 */
export const getSystemColorMode = (): ColorMode | null => {
	if (typeof window === 'undefined') return null;

	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	}
	if (window.matchMedia('(prefers-color-scheme: light)').matches) {
		return 'light';
	}

	return null;
};

/**
 * Gets the persisted color mode from localStorage
 * @returns 'light' | 'dark' | null if not set
 */
export const getStoredColorMode = (): ColorMode | null => {
	if (typeof window === 'undefined') return null;

	try {
		const stored = window.localStorage.getItem(COLOR_MODE_STORAGE_KEY);
		if (stored === 'light' || stored === 'dark') {
			return stored;
		}
	} catch (error) {
		// localStorage may not be available (private browsing, etc.)
		console.warn('Failed to read color mode from localStorage:', error);
	}

	return null;
};

/**
 * Stores the color mode preference in localStorage
 * @param mode - The color mode to store
 */
export const setStoredColorMode = (mode: ColorMode | null): void => {
	if (typeof window === 'undefined') return;

	try {
		if (mode === null) {
			window.localStorage.removeItem(COLOR_MODE_STORAGE_KEY);
		} else {
			window.localStorage.setItem(COLOR_MODE_STORAGE_KEY, mode);
		}
	} catch (error) {
		console.warn('Failed to write color mode to localStorage:', error);
	}
};

/**
 * Gets the effective color mode, considering both user preference and system setting
 * Priority: localStorage > system preference > 'light' (default)
 * @returns 'light' | 'dark'
 */
export const getEffectiveColorMode = (): ColorMode => {
	const stored = getStoredColorMode();
	if (stored) return stored;

	const system = getSystemColorMode();
	if (system) return system;

	return 'light';
};

/**
 * Applies the color mode to the document element
 * @param mode - The color mode to apply
 * @param element - The element to apply the mode to (defaults to document.documentElement)
 */
export const applyColorMode = (
	mode: ColorMode,
	element: HTMLElement = typeof document === 'undefined'
		? (null as unknown as HTMLElement)
		: document.documentElement,
): void => {
	if (!element) return;

	element.setAttribute(COLOR_MODE_ATTRIBUTE, mode);
};

/**
 * Removes the color mode attribute from the document element
 * @param element - The element to remove the mode from (defaults to document.documentElement)
 */
export const removeColorMode = (
	element: HTMLElement = typeof document === 'undefined'
		? (null as unknown as HTMLElement)
		: document.documentElement,
): void => {
	if (!element) return;

	element.removeAttribute(COLOR_MODE_ATTRIBUTE);
};

/**
 * Sets up a listener for system color scheme changes
 * @param callback - Function to call when system preference changes
 * @returns Cleanup function to remove the listener
 */
export const watchSystemColorMode = (
	callback: (mode: ColorMode) => void,
): (() => void) => {
	if (typeof window === 'undefined') return () => {};

	const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	const lightMediaQuery = window.matchMedia('(prefers-color-scheme: light)');

	const handleChange = () => {
		const mode = getSystemColorMode();
		if (mode) {
			callback(mode);
		}
	};

	// Modern browsers support addEventListener on MediaQueryList
	try {
		darkMediaQuery.addEventListener('change', handleChange);
		lightMediaQuery.addEventListener('change', handleChange);

		return () => {
			darkMediaQuery.removeEventListener('change', handleChange);
			lightMediaQuery.removeEventListener('change', handleChange);
		};
	} catch (error) {
		// Fallback for older browsers
		console.warn('MediaQueryList addEventListener not supported:', error);
		return () => {};
	}
};

/**
 * Initialize color mode on app startup
 * - Reads from localStorage or system preference
 * - Applies to document element
 * - Returns the applied mode
 */
export const initializeColorMode = (): ColorMode => {
	const mode = getEffectiveColorMode();
	applyColorMode(mode);
	return mode;
};
