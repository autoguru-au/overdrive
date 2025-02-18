import { addons } from '@storybook/manager-api';
import {
	defaultConfig,
	type TagBadgeParameters,
} from 'storybook-addon-tag-badges';
import autoGuruTheme from './ag-theme';

addons.setConfig({
	theme: autoGuruTheme,
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
