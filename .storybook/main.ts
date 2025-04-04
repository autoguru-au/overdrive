import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: [
		'../lib/stories/*.@(mdx|jsx|tsx)',
		'../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)',
	],
	addons: [
		'@storybook/addon-onboarding',
		'@storybook/addon-essentials',
		'@storybook/addon-a11y',
		'@storybook/addon-interactions',
		'@storybook/addon-links',
		'@chromatic-com/storybook',
		'storybook-addon-tag-badges',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	typescript: {
		reactDocgen: 'react-docgen-typescript',
	},
};

export default config;
