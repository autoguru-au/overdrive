import type { Preview } from '@storybook/react';

import '../lib/reset/globalFonts.css';
import '../lib/reset/globalReset.css';
import * as themes from '../lib/themes';

import { withOverdriveTheme } from './withThemeProvider';

export const globalTypes = {
	theme: {
		name: 'theme',
		description: 'Global theme for components',
		defaultValue: themes.baseTheme.name,
		title: 'theme',
		toolbar: {
			icon: 'mirror',
			// eslint-disable-next-line import/namespace
			items: Object.keys(themes).map((theme) => themes[theme].name),
			showName: true,
			dynamicTitle: true,
		},
	},
	themeColours: {
		name: 'Set dynamic colours',
		description: 'Global primary background colour',
		defaultValue: 'defaults',
		toolbar: {
			icon: 'paintbrush',
			items: ['defaults', 'bright', 'dark'],
			showName: true,
			dynamicTitle: true,
			control: 'color',
		},
	},
};

const preview: Preview = {
	decorators: [withOverdriveTheme],

	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		chromatic: {
			// Mobile and large table and up
			viewports: [320, 1024],
		},
		options: {
			storySort: {
				order: [
					'Overdrive',
					'Foundation',
					['Palette', 'Theme Colours', 'Borders', 'Space'],
					'Primatives',
					'Layout',
					'Forms & Input Fields',
					'Components',
					[
						'*',
						'Modal',
						'Modal: Minimal',
						'Modal: Standard with Title',
					],
				],
			},
		},
	},

	tags: ['autodocs'],
};

export default preview;
