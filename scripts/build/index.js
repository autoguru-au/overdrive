const { join, resolve, parse } = require('path');
const { dim, bgGreen, bgYellow } = require('kleur');
const rimraf = require('rimraf');
const copyfiles = require('copyfiles');

const { transformStyles, optimizeCss } = require('./transformScss');
const { getTypeScriptEnvironment } = require('./typescriptEnvironment');

const acorn = require('acorn');
const write = require('write');
const { simple } = require('acorn-walk');
const MagicString = require('magic-string');
const resolveFile = require('enhanced-resolve');

const root = join(__dirname, '../../');

const distFolder = resolve(root, 'dist');
const entry = resolve(root, './lib/index.ts');
const tsConfig = resolve(root, './tsconfig.json');

const bundleName = 'overdrive';
const bundles = ['esm'];

(async function() {
	const [program, options] = await getTypeScriptEnvironment(
		entry,
		tsConfig,
		root,
	);

	rimraf.sync(distFolder);

	for (const bundleType of bundles) {
		// eslint-disable-next-line no-await-in-loop
		await build(bundleType, program, options);
	}

	await copy(['./lib/theme/**/*', distFolder], { up: 1 });
})().catch(error => {
	console.error(error);
	process.exit(1);
});

async function build(bundleType, program) {
	console.log(
		`${bgYellow(' BUILDING ')} ${bundleName} ${dim(`(${bundleType})`)}`,
	);

	const fileMap = new Map();
	const collectCss = new Map();

	for (const sourceFile of program.getSourceFiles()) {
		program.emit(
			sourceFile,
			(file, text) => {
				fileMap.set(file, {
					sourceFileName: sourceFile.fileName,
					code: text,
				});
			},
			undefined,
			false,
		);
	}

	for (const [outputName, { sourceFileName, code }] of fileMap) {
		if (code.includes('.scss')) {
			const ast = acorn.parse(code, {
				sourceType: 'module',
			});

			const s = new MagicString(code);

			const transformThese = new Map();

			simple(ast, {
				ImportDeclaration(node) {
					if (node.source.value.includes('.scss')) {
						const scssFile = resolveFile.sync(
							parse(sourceFileName).dir,
							node.source.value,
						);

						const importedAs = node.specifiers[0].local.name;

						transformThese.set(scssFile, {
							importedAs,
							node,
						});
					}
				},
			});

			for (const [id, { node, importedAs }] of transformThese) {
				// eslint-disable-next-line no-await-in-loop
				const [, css, tokens] = await transformStyles(id);

				collectCss.set(id, css);

				s.overwrite(
					node.start,
					node.end,
					`const ${importedAs} = ${JSON.stringify(tokens)};`,
				);
			}

			fileMap.set(outputName, {
				sourceFileName,
				code: require('../beautify').beautify(s.toString()),
			});
		}

		fileMap.set(join(distFolder, 'overdrive.css'), {
			sourceFileName: null,
			code: require('../beautify').beautify(
				// eslint-disable-next-line no-await-in-loop
				await optimizeCss([...collectCss.values()].join('\n')),
				'css',
			),
		});
	}

	await Promise.all(
		[...fileMap.entries()].map(([file, { code }]) => write(file, code)),
	);

	console.log(
		`${bgGreen(' BUILT ')} ${bundleName} ${dim(`(${bundleType})`)}`,
	);
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
