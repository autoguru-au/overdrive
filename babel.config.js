module.exports = {
	presets: [
		[require.resolve('@autoguru/babel-preset/web'), { corejs: 3 }],
		require.resolve('@autoguru/babel-preset/react'),
	],
	plugins: [require.resolve('babel-plugin-treat')],
};
