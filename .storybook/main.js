const resolve = require('path').resolve;
module.exports = {
	core: {
		builder: 'webpack5',
	},
	// stories: ['../packages/overdrive/lib/**/stories.@(tsx|mdx)'],
	stories: [
		'../packages/overdrive/lib/components/Text/stories.tsx',
		'../packages/overdrive/lib/components/Actions/stories.tsx',
		'../packages/overdrive/lib/components/BulletText/stories.tsx',
		'../packages/overdrive/lib/components/CheckBox/stories.tsx',
	],
	addons: [
		{
			name: '@storybook/addon-essentials',
			options: {
				controls: true,
				backgrounds: true,
				//docs: true,
				docs: false, // TODO: Fix this back
			},
		},
		resolve('./.storybook/vanilla-extract'),
		'@storybook/addon-a11y',
	],
};
