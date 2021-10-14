const resolve = require('path').resolve;
module.exports = {
	core: {
		builder: 'webpack5',
	},
	features: {
		buildStoriesJson: true,
		//storyStoreV7: true,
	},
	// stories: ['../packages/overdrive/**/*.stories.*'],
	stories: [
		'../packages/overdrive/lib/components/Actions/stories.tsx',
		'../packages/overdrive/lib/components/BulletText/stories.tsx',
		'../packages/overdrive/lib/components/Flyout/stories.tsx',
		'../packages/overdrive/lib/components/Modal/stories.tsx',
		'../packages/overdrive/lib/components/Radio/stories.tsx',
		'../packages/overdrive/lib/components/CheckBox/stories.tsx',
		'../packages/overdrive/lib/components/DateInput/stories.tsx',
		'../packages/overdrive/lib/components/NumberInput/stories.tsx',
		'../packages/overdrive/lib/components/TextInput/stories.tsx',
		'../packages/overdrive/lib/components/TextAreaInput/stories.tsx',
		'../packages/overdrive/lib/components/SelectInput/stories.tsx',
		'../packages/overdrive/lib/components/Heading/stories.tsx',
		'../packages/overdrive/lib/components/Text/stories.tsx',
		'../packages/overdrive/lib/components/Pagination/stories.tsx',
		'../packages/overdrive/lib/components/Positioner/stories.tsx',
		'../packages/overdrive/lib/components/SimplePagination/stories.tsx',
		'../packages/overdrive/lib/components/Stack/stories.tsx',
		'../packages/overdrive/lib/components/StarRating/stories.tsx',
		'../packages/overdrive/lib/components/Stepper/stories.tsx',
		'../packages/overdrive/lib/components/Switch/stories.tsx',
	],
	addons: [
		/*{
			name: '@storybook/addon-docs',
			options: {
				configureJSX: false,
				babelOptions: {},
				sourceLoaderOptions: null,
				transcludeMarkdown: false,
			},
		},
		{
			name: '@storybook/addon-essentials',
			options: {
				docs: false, // TODO: Fix this back on,
				controls: true,
				backgrounds: true,
			},
		},*/
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		resolve('./.storybook/vanilla-extract'),
		'@storybook/addon-a11y',
	],
};

//https://github.com/storybookjs/storybook/blob/f9f3256a3c823cea2a882542575d71e085120b13/lib/components/src/controls/types.ts
