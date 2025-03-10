import type { StyleRule } from '@vanilla-extract/css';

const cssVarRegExp = /var\(([^)]+)\)/;

export const cssVarUnwrap = (value: string) => {
	const matches = cssVarRegExp.exec(value);

	return matches ? matches[1] : value;
};

export const getThemeTokenValue = (
	themeClass?: string | null,
	token?: string | null,
): string => {
	if (!themeClass || !token) return '';
	const cssVar = cssVarUnwrap(token);
	const themedElement = document.querySelector(`.${themeClass}`);
	if (!themedElement || !cssVar) return '';
	return (
		getComputedStyle(themedElement).getPropertyValue(cssVar)?.trim() || ''
	);
};

export type SelectorStates =
	| 'base'
	| 'active'
	| 'checked'
	| 'selected'
	| 'disabled'
	| 'focus'
	| 'focusVisible'
	| 'hover';
export type InteractionStyleProps = Partial<Record<SelectorStates, StyleRule>>;
type SelectorStateKeys = Exclude<SelectorStates, 'base' | 'checked'>;

const notDisabled = ':not(:disabled,[data-disabled])';

/**
 * Creates style variants for different interaction states that can be spread
 * within vanilla-extract `style` object.
 *
 * @example
 * const buttonStyle = style({
 *   backgroundColor: tokens.colours.background.primary,
 *   color: tokens.colours.text.primary,
 *   ...interactionStyle({
 *     initial: { background: 'white', color: 'black' },
 *     hover: { background: 'lightgray' },
 *     disabled: { opacity: 0.5 }
 *   })
 * });
 */
export const interactionStyle = (
	selectors: InteractionStyleProps,
): StyleRule => {
	const { base = {}, ...interactionStyles } = selectors;

	const styles = { ...base, selectors: {} };
	const rules: Record<SelectorStateKeys, string> = {
		hover: `&:hover${notDisabled}, &[data-hover]${notDisabled}`,
		active: '&:active',
		selected: '&:checked, &[data-checked], &[data-selected]',
		focus: '&:focus, &[data-focus], &[data-focused]',
		focusVisible: '&:focus-visible, &[data-focus-visible]',
		disabled: '&:disabled, &[data-disabled]',
	};

	// Add selectors for each interaction state that has styles
	Object.entries(interactionStyles).forEach(([state, stateStyles]) => {
		if (state in rules && stateStyles) {
			if (state === 'checked') state = 'selected';
			styles.selectors[rules[state]] = stateStyles;
		}
	});

	return styles;
};
