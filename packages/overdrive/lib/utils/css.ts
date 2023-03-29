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
