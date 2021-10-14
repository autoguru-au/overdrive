const resolve = require('path').resolve;
module.exports = {
	core: {
		builder: 'webpack5',
	},
	features: {
		buildStoriesJson: true,
		//storyStoreV7: true,
	},
	stories: ['../packages/overdrive/lib/**/stories.*'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		resolve('./.storybook/vanilla-extract'),
		'@storybook/addon-a11y',
	],
};

//https://github.com/storybookjs/storybook/blob/f9f3256a3c823cea2a882542575d71e085120b13/lib/components/src/controls/types.ts
