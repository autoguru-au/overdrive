const resolve = require('path').resolve;
module.exports = {
	core: {
		builder: 'webpack5',
	},
	features: {
		buildStoriesJson: true,
	},
	stories: ['../packages/overdrive/lib/**/stories.*'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		resolve('./.storybook/vanilla-extract'),
		'@storybook/addon-a11y',
	],
};
