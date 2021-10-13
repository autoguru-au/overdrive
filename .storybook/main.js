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
		'../packages/overdrive/lib/components/DateInput/stories.tsx',
		'../packages/overdrive/lib/components/Flyout/stories.tsx',
		'../packages/overdrive/lib/components/Heading/stories.tsx',
		'../packages/overdrive/lib/components/Modal/stories.tsx',
	],
	addons: [
		{
			name: '@storybook/addon-essentials',
			options: {
				controls: true,
				backgrounds: true,
				docs: false // TODO: Fix this back on,
			},
		},
		resolve('./.storybook/vanilla-extract'),
		'@storybook/addon-a11y',
	],
};

//https://github.com/storybookjs/storybook/blob/f9f3256a3c823cea2a882542575d71e085120b13/lib/components/src/controls/types.ts
