const { green, red, dim } = require('kleur');
const { ensureDir } = require('fs-extra');
const { join, resolve, relative } = require('path');
const rimraf = require('rimraf');
const { rollup } = require('rollup');
const copyfiles = require('copyfiles');
const createRollupConfig = require('../config/rollup');

const root = join(__dirname, '..');

const distFolder = resolve(root, 'dist');
const entry = resolve(root, './lib/components/index.ts');

async function run() {
	console.log(require('build-header')());

	rimraf.sync(distFolder);
	await ensureDir(distFolder);

	console.log(dim(`⚙️  Bundling...`));
	const bundle = await rollup(
		createRollupConfig({
			entry,
			outputPath: distFolder,
		}),
	);

	const defaultOutputConfig = {
		preferConst: true,
		dir: resolve(distFolder),
		name: 'overdrive',
		sourcemap: true,
		strict: true,
		compact: false,
		preserveModules: false,
	};

	const outputs = await Promise.all([
		bundle.write({
			...defaultOutputConfig,
			entryFileNames: 'overdrive.cjs.js',
			esModule: false,
			format: 'cjs',
		}),
		bundle.write({
			...defaultOutputConfig,
			entryFileNames: 'overdrive.esm.js',
			esModule: true,
			format: 'esm',
		}),
	]);

	await copy(['./lib/theme/**/*', distFolder], { up: 1 });

	return outputs;
}

run()
	.then(bundles => {
		bundles
			.reduce((result, { output }) => [...result, ...output], [])
			.filter(bundle => bundle.isEntry)
			.forEach(bundle => {
				const entryPath = relative(root, bundle.facadeModuleId);

				console.log('');

				logLabel('Entry:', entryPath);
				logLabel(
					'Output:',
					relative(root, resolve(distFolder, bundle.fileName)),
				);
				logLabel('Externals:', bundle.imports.sort().join(', '));

				console.log('');
			});

		console.log(green(`✅ Success`));
	})
	.catch(error => {
		console.log('');
		console.log(`${red(error.message)}\n`);
		console.log(
			dim(
				`==> ${relative(root, error.loc.file)}:${error.loc.line}:${
					error.loc.column
				}`,
			),
		);
		console.log(error.frame);
		console.log('');
		console.log(dim(error.stack));
	});

async function copy(paths, config) {
	return new Promise((resolve, reject) => {
		copyfiles(paths, config, error => {
			if (error) {
				reject(error);
			} else {
				resolve();
			}
		});
	});
}

function logLabel(label, value) {
	console.log(`${dim(label)} ${value}`);
}
