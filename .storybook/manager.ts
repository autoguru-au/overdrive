import { addons } from '@storybook/manager-api';
import {
	defaultConfig,
	type TagBadgeParameters,
} from 'storybook-addon-tag-badges';

import agTheme from './ag-theme';

const getPreferredColorScheme = () => {
	if (!globalThis || !globalThis.matchMedia) return 'light';

	const isDarkThemePreferred = globalThis.matchMedia(
		'(prefers-color-scheme: dark)',
	).matches;
	if (isDarkThemePreferred) return 'dark';

	return 'light';
};

addons.setConfig({
	theme: agTheme[getPreferredColorScheme()],
	tagBadges: [
		{
			tags: 'updated',
			badge: {
				text: '💫 Updated',
				bgColor: '#0d54e5',
				fgColor: '#fff',
				tooltip: 'This component has recently been modified',
			},
			display: {
				sidebar: ['component'],
				toolbar: true,
			},
		},
		...defaultConfig,
	] satisfies TagBadgeParameters,
});
