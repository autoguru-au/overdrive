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
				loader: require.resolve('awesome-typescript-loader'),
				options: {
					useCache: true,
					errorsAsWarnings: true,
				},
			},
		],
	});
	defaultConfig.resolve.extensions.push('.ts', '.tsx');

	// Adds the storysource things
	defaultConfig.module.rules.push({
		test: /\.tsx?$/,
		use: [
			{
				loader: require.resolve('@storybook/addon-storysource/loader'),
				options: { parser: 'typescript' },
			},
		],
		enforce: 'pre',
	});

	// Adds scss support
	defaultConfig.module.rules.push({
		test: /\.scss$/,
		sideEffects: true,
		use: [
			{
				loader: require.resolve('style-loader'),
				options: {
					sourceMap: true,
				},
			},
			{
				loader: require.resolve('css-loader'),
				options: {
					importLoaders: 2,
					modules: true,
					camelCase: true,
					sourceMap: true,
					localIdentName: '_[local]-[hash:hex:7]',
				},
			},
			{
				loader: require.resolve('postcss-loader'),
				options: {
					sourceMap: true,
					plugins: [
						require('postcss-flexbugs-fixes'),
						require('postcss-preset-env')({
							autoprefixer: {
								flexbox: 'no-2009',
							},
							stage: 3,
						}),
						require('cssnano')(),
					],
				},
			},
			{ loader: require.resolve('resolve-url-loader') },
			{
				loader: require.resolve('sass-loader'),
				options: { sourceMap: true },
			},
		],
	});
	defaultConfig.resolve.extensions.push('.scss');

	return defaultConfig;
};
