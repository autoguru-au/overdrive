const fs = require('fs');
const ts = require('typescript');

const files = new Map();

async function getTypeScriptEnvironment(entry, tsConfig, root) {
	const { config, error } = ts.readConfigFile(tsConfig, filename =>
		fs.readFileSync(filename, 'utf8'),
	);

	const { options, errors } = ts.parseJsonConfigFileContent(
		config,
		ts.sys,
		root,
		{},
		tsConfig,
	);

	const host = {
		getScriptFileNames: () => [entry],
		getCanonicalFileName: filename => filename,
		getSourceFile: (filename, version) => {
			if (fs.existsSync(filename)) {
				files.set(filename, {
					version: 0,
					text: fs.readFileSync(filename, 'utf8'),
				});

				return ts.createSourceFile(
					filename,
					files.get(filename).text,
					version,
				);
			}

			return undefined;
		},
		getScriptVersion: fileName =>
			files.has(fileName) && files.get(fileName).version.toString(),
		getScriptSnapshot: fileName => {
			if (!fs.existsSync(fileName)) {
				return undefined;
			}

			if (files.has(fileName)) {
				return ts.ScriptSnapshot.fromString(files.get(fileName).text);
			}

			const text = fs.readFileSync(fileName, 'utf8');

			files.set(fileName, { version: 0, text });

			return ts.ScriptSnapshot.fromString(text);
		},
		getCurrentDirectory: () => process.cwd(),
		getCompilationSettings: () => options,
		getDefaultLibFileName: options => ts.getDefaultLibFilePath(options),
		fileExists: ts.sys.fileExists,
		readFile: ts.sys.readFile,
		readDirectory: ts.sys.readDirectory,
		getNewLine: () => ts.sys.newLine,
		useCaseSensitiveFileNames: () => true,
	};

	return [ts.createProgram([entry], options, host), options];
}

module.exports = {
	getTypeScriptEnvironment,
};
