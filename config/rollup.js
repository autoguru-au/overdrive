const { dependencies, peerDependencies } = require('../package.json');
const nodeResolve = require('rollup-plugin-node-resolve');
const typescript = require('rollup-plugin-typescript2');
const postcss = require('rollup-plugin-postcss');

const externalPackages = [
	...Object.keys(dependencies || {}),
	...Object.keys(peerDependencies || {}),
];

function createRollupConfig({ entry: input }) {
	return {
		input,

		external: externalPackages,

		treeshake: {
			propertyReadSideEffects: false,
		},

		plugins: [
			nodeResolve({
				preferBuiltins: true,
				module: true,
				jsnext: true,
				main: true,
			}),

			postcss({
				extract: true,
				inject: false,
				modules: {
					camelCase: true,
					generateScopedName: '_[hash:base64:5]',
				},
			}),

			typescript(),
		],
	};
}

module.exports = createRollupConfig;
