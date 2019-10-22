const { join, resolve, relative } = require('path');
const { green, red, dim, bgGreen } = require('kleur');
const mri = require('mri');
const { ensureDir } = require('fs-extra');
const rimraf = require('rimraf');
const { rollup, watch: rollupWatch } = require('rollup');
const copyfiles = require('copyfiles');
const createRollupConfig = require('../config/rollup');

const { watch: watchMode = false } = mri(process.argv, {
	boolean: ['watch'],
	alias: {
		w: 'watch',
	},
});

const root = join(__dirname, '..');

const distFolder = resolve(root, 'dist');
const entry = resolve(root, './lib/components/index.ts');

const defaultOutputConfig = {
	preferConst: true,
	dir: resolve(distFolder),
	name: 'overdrive',
	sourcemap: false,
	strict: true,
	freeze: !watchMode,
	compact: false,
	preserveModules: false,
};

const rollupConfig = createRollupConfig({
	entry,
	outputPath: distFolder,
});

async function preEverything() {
	rimraf.sync(distFolder);
	await ensureDir(distFolder);
}

async function buildBundle(bundle, config) {
	const output = await bundle.write(config);

	console.log(`${bgGreen(' BUILT ')} ${config.entryFileNames}`);

	return output;
}

async function build() {
	console.log(require('build-header')());

	await preEverything();

	console.log(dim(`⚙️  Bundling...`));
	const bundle = await rollup(rollupConfig);

	await Promise.all([
		buildBundle(bundle, {
			...defaultOutputConfig,
			entryFileNames: 'overdrive.cjs.js',
			esModule: false,
			format: 'cjs',
		}),
		buildBundle(bundle, {
			...defaultOutputConfig,
			entryFileNames: 'overdrive.esm.js',
			esModule: true,
			format: 'esm',
		}),
	]);

	await copy(['./lib/theme/**/*', distFolder], { up: 1 });
}

async function watch() {
	console.log(dim(`⚙️  Watching...`));

	await preEverything();

	rollupWatch({
		...rollupConfig,
		output: [
			{
				...defaultOutputConfig,
				entryFileNames: 'overdrive.esm.js',
				esModule: true,
				format: 'esm',
			},
		],
	}).on('event', event => {
		switch (event.code) {
			case 'BUNDLE_END':
				return console.log(
					`${dim(`✅ Changes ready!`)} ${green(
						`${Math.round(event.duration / 60)}ms`,
					)}`,
				);
			case 'ERROR':
			case 'FATAL':
				throw new Error(event);
			default:
			// ignore
		}
	});
}

if (watchMode) {
	watch().catch(error => console.error(error));
} else {
	build().catch(error => {
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
}

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
