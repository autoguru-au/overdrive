const chalk = require('chalk');
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
	rimraf.sync(distFolder);
	await ensureDir(distFolder);

	console.log(chalk.dim(`🎯 Bundling...`));
	const bundle = await rollup(
		createRollupConfig({
			entry,
		})
	);

	let outputs;
	try {
		outputs = await Promise.all([
			bundle.write({
				format: 'cjs',
				sourcemap: true,
				file: resolve(distFolder, 'overdrive.cjs.js'),
			}),
			bundle.write({
				format: 'esm',
				sourcemap: true,
				file: resolve(distFolder, 'overdrive.esm.js'),
			}),
		]);
	} catch (e) {
		console.error(e);
		process.exit(1);
	}

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
					relative(root, resolve(distFolder, bundle.fileName))
				);
				logLabel('Externals:', bundle.imports.sort().join(', '));

				console.log('');
			});

		console.log(chalk.green(`✅ Success`));
	})
	.catch(err => {
		console.log('');
		console.error(err);
	});

function copy(paths, config) {
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
	console.log(`${chalk.underline.italic.dim(label)} ${value}`);
}
