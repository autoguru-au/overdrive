const { dim, cyan, green } = require('kleur');
const glob = require('glob');
const path = require('path');
const { readFile, writeFile } = require('fs').promises;
const { format } = require('util');

const BANNER_TEMPLATE = `/**
 * -----------------------------------------------------------------------------
 * THIS FILE IS GENERATED - Please do not edit.
 * Run to re-generate:
 *     node scripts/buildIcons.js
 * -----------------------------------------------------------------------------
 */
 
 %s`;

// TODO Update icon component to accept className prop

const COMPONENT_TEMPLATE = `import React from 'react';

const Icon = (%content%);

export default function %name%Icon() { return Icon; };
`;

const root = path.join(__dirname, '../');
const iconsFolderPath = path.join(root, '/lib/icons/collection');
const outputFolderPath = path.join(root, '/lib/icons');

let svgs = glob.sync('*.svg', { cwd: iconsFolderPath }).map(async icon =>
	readFile(path.join(iconsFolderPath, icon)).then(content => ({
		name: (' ' + path.basename(icon, '.svg'))
			.toLowerCase()
			.replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase()),
		content,
	})),
);

// Generate a file per icons, that exports a React Function Component.
svgs = svgs.map(async item =>
	item.then(async icon => {
		const iconOutputPath = path.join(outputFolderPath, `${icon.name}.tsx`);
		const component = COMPONENT_TEMPLATE.replace(
			/%name%/g,
			icon.name,
		).replace('%content%', icon.content.toString('utf8'));
		const file = Buffer.from(prettier(format(BANNER_TEMPLATE, component)));

		console.log(
			`${dim('Icon:')} ${cyan(icon.name)} => ${path.relative(
				root,
				iconOutputPath,
			)}`,
		);

		return writeFile(iconOutputPath, file).then(() => ({
			...icon,
			file,
			iconOutputPath,
		}));
	}),
);

Promise.all(svgs)
	.then(async completed => {
		const exports = completed.map(icon =>
			format(
				`export {default as %sIcon} from './%s';`,
				icon.name,
				path.parse(path.relative(outputFolderPath, icon.iconOutputPath))
					.name,
			),
		);

		const reexport = prettier(format(BANNER_TEMPLATE, exports.join('\n')));

		return writeFile(
			path.join(outputFolderPath, 'index.ts'),
			reexport,
		).then(() => completed);
	})
	.then(completed => {
		const total = completed.length;

		console.log(`⚡️ Finsihed ${green(total)} icons!`);
	});

function prettier(content) {
	return require('prettier').format(content, {
		parser: 'typescript',
		...require('cosmiconfig')('prettier').searchSync(__dirname).config,
	});
}
