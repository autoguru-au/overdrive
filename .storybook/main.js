/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
	// staticDirs: ['../public'],
	stories: [
		// '../lib/**/*.mdx',
		'../lib/**/stories.@(js|jsx|mjs|ts|tsx)',
	],
	addons: [
		'@chromatic-com/storybook',
		'@storybook/addon-onboarding',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-links',
		'@storybook/addon-a11y',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	typescript: {
		reactDocgen: 'react-docgen',
	},
};
export default config;
