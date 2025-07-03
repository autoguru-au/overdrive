import { addons } from 'storybook/manager-api';
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
				style: {
					backgroundColor: '#0d54e5',
					color: '#fff',
				},
				tooltip: 'This component has recently been modified',
			},
			display: {
				sidebar: [
					{
						type: 'component',
						skipInherited: true,
					},
				],
				toolbar: true,
			},
		},
		{
			tags: 'review',
			badge: {
				text: '🍂 Reviewing',
				style: {
					backgroundColor: '#e0d5cbff',
					color: '#000',
				},
				tooltip: 'This component is under review for retirement',
			},
			display: {
				sidebar: [
					{
						type: 'component',
						skipInherited: true,
					},
				],
				toolbar: true,
			},
		},
		...defaultConfig,
	] satisfies TagBadgeParameters,
});
