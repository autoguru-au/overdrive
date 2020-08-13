module.exports = {
	stories: ['../packages/overdrive/lib/**/stories.tsx'],
	addons: [
		{
			name: '@storybook/addon-essentials',
			options: {
				controls: false,
				backgrounds: false,
			},
		},
		'@storybook/addon-knobs',
		'@storybook/addon-a11y',
	],
};
