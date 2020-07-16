module.exports = {
	addons: [
		'@storybook/addon-knobs/register',
		'@storybook/addon-actions/register',
		'@storybook/addon-a11y/register',
		'@storybook/addon-backgrounds/register',
		'@storybook/addon-viewport/register',
		'./.storybook/provider/register',
	],
};
