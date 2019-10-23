const { join, resolve, parse } = require('path');
const { dim, bgGreen, bgYellow } = require('kleur');
const mri = require('mri');
const rimraf = require('rimraf');
const copyfiles = require('copyfiles');
const { minify } = require('terser');

const { transformStyles, optimizeCss } = require('./transformScss');
const { getTypeScriptEnvironment } = require('./typescriptEnvironment');

const acorn = require('acorn');
const write = require('write');
const { simple } = require('acorn-walk');
const MagicString = require('magic-string');
const resolveFile = require('enhanced-resolve');

const { watch: watchMode = false } = mri(process.argv, {
	boolean: ['watch'],
	alias: {
		w: 'watch',
	},
});

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
		await build(bundleType, program, options);
	}

	await copy(['./lib/theme/**/*', distFolder], { up: 1 });
})();

async function build(bundleType, program, options) {
	console.log(
		`${bgYellow(' BUILDING ')} ${bundleName} ${dim(`(${bundleType})`)}`,
	);

	const fileMap = new Map();
	const collectCss = [];

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
				const [, css, tokens] = await transformStyles(id);

				collectCss.push(css);

				s.overwrite(
					node.start,
					node.end,
					`const ${importedAs} = ${JSON.stringify(tokens)};`,
				);
			}

			const { code: optimizedCode } = minify(s.toString(), {
				parse: { ecma: 8 },
				mangle: false,
				module: true,
				ie8: false,
				safari10: true,
				toplevel: true,
				compress: {
					ecma: 5,
					warnings: false,
					comparisons: false,
					inline: 2,
					hoist_funs: true,
					toplevel: true,
					passes: 5,
				},
				output: {
					ecma: 5,
					comments: true,
					ascii_only: true,
				},
			});

			fileMap.set(outputName, { sourceFileName, code: optimizedCode });
		}

		fileMap.set(join(distFolder, 'overdrive.css'), {
			sourceFileName: null,
			code: await optimizeCss(collectCss.join('\n')),
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
