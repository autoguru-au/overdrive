const TreatPlugin = require('treat/webpack-plugin');

module.exports = {
	title: 'Overdrive',
	components: './lib/components/index.ts',
	outputPath: './.playroom/dist/',
	frameComponent: './.playroom/frame.tsx',
	themes: './lib/themes/index.ts',
	widths: [320, 768, 1024, 1500],
	port: 6007,
	exampleCode: `<Box boxShadow="3" padding={["3", "6"]}>
  <Stack spacing="6">
    <TextContainer heading={<Heading>Hi there 👋</Heading>}>
      <Text>Welcome to the AutoGuru design system - Overdrive!</Text>
    </TextContainer>

    <TextInput placeholder="How are you?" />
  </Stack>
</Box>`,
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
