const { dependencies, peerDependencies } = require('../package.json');
const nodeResolve = require('rollup-plugin-node-resolve');
const typescript = require('rollup-plugin-typescript2');
const postcss = require('rollup-plugin-postcss');
const { join } = require('path');

const externalPackages = [
	...Object.keys(dependencies || {}),
	...Object.keys(peerDependencies || {}),
];

function createRollupConfig({ entry: input, outputPath }) {
	return {
		input,

		external: externalPackages,

		treeshake: {
			propertyReadSideEffects: false,
		},

		plugins: [
			nodeResolve({
				mainFields: ['module', 'jsnext', 'main'],
				preferBuiltins: true,
			}),

			postcss({
				extract: join(outputPath, 'overdrive.css'),
				inject: false,
				modules: {
					camelCase: true,
					generateScopedName: '_[hash:base64:5]',
				},
				plugins: [
					require('postcss-flexbugs-fixes'),
					require('postcss-preset-env')({
						autoprefixer: {
							flexbox: 'no-2009',
						},
						stage: 3,
					}),
					require('cssnano')({
						discardComments: {
							removeAll: true,
						},
					}),
				],
			}),

			typescript(),
		],
	};
}

module.exports = createRollupConfig;
