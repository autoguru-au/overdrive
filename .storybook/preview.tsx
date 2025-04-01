import type { Preview } from '@storybook/react';

import '../lib/reset/globalFonts.css';
import '../lib/reset/globalReset.css';
import * as themes from '../lib/themes';

import { withOverdriveTheme } from './overdriveDecorator';

export const globalTypes = {
	theme: {
		name: 'theme',
		description: 'Global theme for components',
		defaultValue: themes.baseTheme.name,
		title: 'theme',
		toolbar: {
			icon: 'mirror',
			items: [
				{
					title: 'Base AutoGuru Theme',
					value: themes.baseTheme.name,
				},
				{
					title: 'Flat Red Theme',
					value: themes.flatRedTheme.name,
				},
				{
					title: 'Neutral Theme',
					value: themes.neutralTheme.name,
				},
			],
			showName: true,
			dynamicTitle: true,
		},
	},
	overrideColours: {
		name: 'overrides',
		description: 'Primary background colour override',
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
