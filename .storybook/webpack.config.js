const TreatPlugin = require('treat/webpack-plugin');

module.exports = ({ config: defaultConfig }) => {
	delete defaultConfig.resolve.alias['core-js'];

	// Adds typescript support
	defaultConfig.module.rules.push({
		test: /\.tsx?$/,
		use: [
			{
				loader: require.resolve('babel-loader'),
			},
			{
				loader: require.resolve('ts-loader'),
				options: {
					configFile: require.resolve(
						'../packages/overdrive/tsconfig.json',
					),
					transpileOnly: true,
				},
			},
		],
	});
	defaultConfig.resolve.extensions.push('.ts', '.tsx');

	defaultConfig.plugins.push(
		new TreatPlugin({
			localIdentName: '[name]-[local]_[hash:base64:5]',
			themeIdentName: '_[name]-[local]_[hash:base64:4]',
			outputLoaders: [
				{
					sideEffect: true,
					loader: require.resolve('style-loader'),
					options: {
						attributes: {
							treat: true,
						},
					},
				},
			],
		}),
	);

	return defaultConfig;
};
