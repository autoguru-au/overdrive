const TreatPlugin = require('treat/webpack-plugin');

module.exports = {
	title: 'Overdrive',
	components: './packages/overdrive/lib/components/index.ts',
	outputPath: './.playroom/dist/',
	frameComponent: './.playroom/frame.tsx',
	themes: './packages/overdrive/lib/themes/index.ts',
	widths: [320, 768, 1024, 1500],
	port: 6007,
	openBrowser: true,
	webpackConfig: () => ({
		module: {
			rules: [
				{
					test: /\.css$/,
					exclude: /node_modules/,
					use: [
						{
							loader: require.resolve('style-loader'),
						},
						{
							loader: require.resolve('css-loader'),
						},
					],
				},
				{
					test: /\.tsx?$/,
					exclude: /node_modules/,
					use: [
						{
							loader: require.resolve('ts-loader'),
							options: {
								configFile: require.resolve('./tsconfig.json'),
								transpileOnly: true,
							},
						},
					],
				},
			],
		},
		plugins: [
			new TreatPlugin({
				outputLoaders: [
					{
						loader: require.resolve('style-loader'),
						options: {
							attributes: {
								treat: true,
							},
						},
					},
				],
			}),
		],
		resolve: {
			extensions: ['.tsx', '.ts', '.js', '.mjs', '.json'],
		},
	}),
};
