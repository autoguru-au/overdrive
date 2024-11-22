/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
	stories: [
		'../stories/**/*.mdx',
		'../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)',
	],
	addons: [
		'@storybook/addon-onboarding',
		'@storybook/addon-essentials',
		'@storybook/addon-a11y',
		'@storybook/addon-interactions',
		'@storybook/addon-links',
		'@chromatic-com/storybook',
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
