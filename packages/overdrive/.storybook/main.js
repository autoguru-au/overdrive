/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
	staticDirs: ['../../../public'],
	stories: [
		// '../lib/**/*.mdx',
		'../lib/**/stories.@(js|jsx|mjs|ts|tsx)',
	],
	addons: [
		'@storybook/addon-onboarding',
		'@storybook/addon-essentials',
		// '@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'@storybook/addon-links',
		'@storybook/addon-a11y',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	docs: {
		autodocs: true,
	},
	typescript: {
		reactDocgen: 'react-docgen',
	},
};
export default config;
