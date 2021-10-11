const resolve = require('path').resolve;
module.exports = {
	core: {
		builder: 'webpack5',
	},
	//stories: ['../packages/overdrive/lib/**/stories.tsx'],
	stories: ['../packages/overdrive/lib/components/Text/stories.tsx'],
	addons: [
		{
			name: '@storybook/addon-essentials',
			options: {
				controls: false,
				backgrounds: false,
			},
		},
		'@storybook/addon-knobs',
		resolve('./.storybook/vanilla-extract'),
		'@storybook/addon-controls',
		'@storybook/addon-a11y',
	],
};
