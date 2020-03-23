import { select } from '@storybook/addon-knobs';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { default as Frame } from '../.playroom/frame';
import * as themeImports from '../lib/themes';

const themes = new Map<string, any>(Object.entries(themeImports));
const defaultTheme = 'baseTheme';

export default (storyFn) => {
	const [theme, setTheme] = useState(themes.get(defaultTheme));

	const selectedTheme = select('Theme', themes.keys(), defaultTheme);

	useEffect(() => {
		setTheme(themes.get(selectedTheme));
	}, [selectedTheme]);

	return <Frame theme={theme}>{storyFn()}</Frame>;
};
