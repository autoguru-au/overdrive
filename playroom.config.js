const { TreatPlugin } = require('treat/webpack-plugin');
const { join } = require('path');

const ourCodeFiles = [
	join(__dirname, './packages/'),
	join(__dirname, './.playroom/'),
	/@autoguru\/.*/,
];

module.exports = {
	title: 'Overdrive',
	components: './.playroom/components.ts',
	outputPath: './.playroom/dist/',
	frameComponent: './.playroom/frame.tsx',
	themes: './packages/overdrive/lib/themes/index.ts',
	widths: [320, 768, 1024, 1500],
	paramType: 'search',
	baseUrl: '/playroom/',
	port: 6007,
	openBrowser: true,
	webpackConfig: () => ({
		module: {
			rules: [
				{
					test: /\.css$/,
					include: ourCodeFiles,
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
					include: ourCodeFiles,
					use: [
						{
							loader: require.resolve('ts-loader'),
							options: {
								configFile: require.resolve(
									'./packages/overdrive/tsconfig.json',
								),
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
