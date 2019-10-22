const { dependencies, peerDependencies } = require('../package.json');
const nodeResolve = require('rollup-plugin-node-resolve');
const typescript = require('rollup-plugin-typescript2');
const postcss = require('rollup-plugin-postcss');
const prettier = require('rollup-plugin-prettier');
const { terser } = require('rollup-plugin-terser');
const { join } = require('path');

const externals = [
	...new Set([
		...Object.keys(dependencies || {}),
		...Object.keys(peerDependencies || {}),
	]),
];

function createRollupConfig({ entry: input, outputPath }) {
	return {
		input,

		external: externals,

		treeshake: {
			propertyReadSideEffects: true,
			pureExternalModules: true,
		},

		plugins: [
			nodeResolve({
				mainFields: ['module', 'browser', 'main'],
				preferBuiltins: true,
			}),

			typescript({
				clean: true,
			}),

			// Remove 'use strict' from individual source files.
			{
				transform(source) {
					return source.replace(/['"]use strict["']/g, '');
				},
			},

			postcss({
				extract: join(outputPath, 'overdrive.css'),
				inject: false,
				modules: {
					camelCase: true,
					generateScopedName: 'od-[hash:base64:7]',
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

			terser({
				parse: { ecma: 8 },
				mangle: false,
				module: true,
				ie8: false,
				safari10: false,
				toplevel: true,
				compress: {
					ecma: 5,
					warnings: false,
					comparisons: true,
					arguments: true,
					inline: 2,
					keep_fnames: true,
					keep_infinity: true,
					hoist_funs: true,
					toplevel: true,
					dead_code: true,
					passes: 5,
				},
				output: {
					ecma: 5,
					comments: true,
					ascii_only: true,
				},
			}),

			prettier({ parser: 'babel' }),
		],
	};
}

module.exports = createRollupConfig;
